"use client";

import { useState } from "react";
import {
  Plus,
  Edit2,
  Trash2,
  X,
  Save,
  ExternalLink,
  Loader2,
} from "lucide-react";
import type { Project } from "@prisma/client";
import {
  createProjectAction,
  updateProjectAction,
  deleteProjectAction,
} from "@/lib/admin-actions";
import { useTransition } from "react";

const BLANK: Omit<Project, "id" | "createdAt" | "updatedAt"> = {
  title: "",
  description: "",
  tags: [],
  status: "ACTIVE",
  github: null,
  demo: null,
};

function Modal({
  project,
  onSave,
  onClose,
  isSaving,
}: {
  project: Partial<Project> & { tags: string[] };
  onSave: (p: any) => void;
  onClose: () => void;
  isSaving: boolean;
}) {
  const [form, setForm] = useState({ ...project, tags: project.tags || [] });
  const [tagInput, setTagInput] = useState("");

  function set(key: string, val: any) {
    setForm((f) => ({ ...f, [key]: val }));
  }

  function addTag() {
    const t = tagInput.trim();
    if (t && !form.tags.includes(t)) {
      set("tags", [...form.tags, t]);
    }
    setTagInput("");
  }

  const inputClass =
    "w-full bg-[rgba(10,10,10,0.8)] border border-[rgba(225,253,255,0.15)] rounded-[2px] px-3 py-2 text-[#e1fdff] text-[13px] placeholder-[#849495] focus:outline-none focus:border-[rgba(0,242,255,0.4)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  const labelClass =
    "text-[#b3c5ff] text-[11px] tracking-[1.2px] uppercase mb-1.5 block";
  const labelStyle = {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 500,
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.7)" }}
    >
      <div
        className="w-full max-w-[600px] max-h-[90vh] overflow-y-auto rounded-[4px] border border-[rgba(0,242,255,0.25)] p-6 flex flex-col gap-5"
        style={{ background: "#0e0e0e" }}
      >
        <div className="flex items-center justify-between">
          <h2
            className="text-[#e1fdff] text-[18px] tracking-[-0.3px]"
            style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
          >
            {project.id ? "Edit Project" : "New Project"}
          </h2>
          <button
            onClick={onClose}
            disabled={isSaving}
            className="text-[#849495] hover:text-[#e1fdff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <X size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className={labelClass} style={labelStyle}>
              Title
            </label>
            <input
              disabled={isSaving}
              className={inputClass}
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
              value={form.title}
              onChange={(e) => set("title", e.target.value)}
              placeholder="Project name"
            />
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>
              Description
            </label>
            <textarea
              disabled={isSaving}
              className={inputClass + " resize-none"}
              rows={3}
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              placeholder="Short description"
            />
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>
              Status
            </label>
            <select
              disabled={isSaving}
              className={inputClass + " cursor-pointer"}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                background: "rgba(10,10,10,0.8)",
              }}
              value={form.status}
              onChange={(e) => set("status", e.target.value)}
            >
              <option value="PRODUCTION">PRODUCTION</option>
              <option value="ACTIVE">ACTIVE</option>
              <option value="ARCHIVED">ARCHIVED</option>
            </select>
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>
              GitHub URL
            </label>
            <input
              disabled={isSaving}
              className={inputClass}
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
              value={form.github || ""}
              onChange={(e) => set("github", e.target.value || null)}
              placeholder="https://github.com/..."
            />
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>
              Demo URL (optional)
            </label>
            <input
              disabled={isSaving}
              className={inputClass}
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
              value={form.demo || ""}
              onChange={(e) => set("demo", e.target.value || null)}
              placeholder="https://..."
            />
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>
              Tags
            </label>
            <div className="flex gap-2 mb-2 flex-wrap">
              {form.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1.5 bg-[rgba(0,242,255,0.08)] border border-[rgba(0,242,255,0.2)] text-[#00F2FF] text-[11px] px-2 py-1 rounded-[2px]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 500,
                  }}
                >
                  {tag}
                  <button
                    disabled={isSaving}
                    onClick={() =>
                      set(
                        "tags",
                        form.tags.filter((t) => t !== tag),
                      )
                    }
                  >
                    <X size={10} />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input
                disabled={isSaving}
                className={inputClass}
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && (e.preventDefault(), addTag())
                }
                placeholder="Add tag..."
              />
              <button
                disabled={isSaving}
                onClick={addTag}
                className="px-3 py-2 bg-[rgba(0,242,255,0.1)] border border-[rgba(0,242,255,0.3)] text-[#00F2FF] rounded-[2px] text-[12px] hover:bg-[rgba(0,242,255,0.15)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 500,
                }}
              >
                ADD
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-3 justify-end pt-2">
          <button
            disabled={isSaving}
            onClick={onClose}
            className="px-5 py-2 border border-[rgba(225,253,255,0.15)] text-[#849495] rounded-[2px] text-[12px] hover:border-[rgba(225,253,255,0.3)] hover:text-[#b9cacb] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
            }}
          >
            CANCEL
          </button>
          <button
            disabled={isSaving}
            onClick={() => onSave(form)}
            className="flex items-center gap-2 px-5 py-2 bg-[#e1fdff] text-[#00363a] rounded-[2px] text-[12px] hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
            }}
          >
            {isSaving ? (
              <Loader2 size={12} className="animate-spin" />
            ) : (
              <Save size={12} />
            )}
            {isSaving ? "SAVING..." : "SAVE"}
          </button>
        </div>
      </div>
    </div>
  );
}

interface AdminProjectsProps {
  initialProjects: Project[];
}

export function AdminProjects({ initialProjects }: AdminProjectsProps) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [editing, setEditing] = useState<
    (Partial<Project> & { tags: string[] }) | null
  >(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [isPending, startTransition] = useTransition();

  function handleSave(data: any) {
    startTransition(async () => {
      try {
        if (data.id) {
          const result = await updateProjectAction(data.id, {
            title: data.title,
            description: data.description,
            tags: data.tags,
            status: data.status,
            github: data.github,
            demo: data.demo,
          });
          if (!result.success || !result.data) {
            throw new Error(result.error ?? "Failed to update project");
          }
          const updatedProject = result.data;
          setProjects((ps) =>
            ps.map((p) => (p.id === data.id ? updatedProject : p)),
          );
        } else {
          const result = await createProjectAction({
            title: data.title,
            description: data.description,
            tags: data.tags,
            status: data.status,
            github: data.github,
            demo: data.demo,
          });
          if (!result.success || !result.data) {
            throw new Error(result.error ?? "Failed to create project");
          }
          const createdProject = result.data;
          setProjects((ps) => [...ps, createdProject]);
        }
        setEditing(null);
      } catch (error) {
        console.error("Failed to save project:", error);
        alert(
          `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
        );
      }
    });
  }

  function handleDelete(id: number) {
    startTransition(async () => {
      try {
        await deleteProjectAction(id);
        setProjects((ps) => ps.filter((p) => p.id !== id));
        setDeleteId(null);
      } catch (error) {
        console.error("Failed to delete project:", error);
        alert(
          `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
        );
      }
    });
  }

  const statusColor: Record<string, string> = {
    PRODUCTION:
      "text-[#00F2FF] border-[rgba(0,242,255,0.3)] bg-[rgba(0,242,255,0.08)]",
    ACTIVE:
      "text-[#b3c5ff] border-[rgba(179,197,255,0.2)] bg-[rgba(179,197,255,0.05)]",
    ARCHIVED:
      "text-[#849495] border-[rgba(132,148,149,0.2)] bg-[rgba(132,148,149,0.05)]",
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="text-[#e1fdff] text-[24px] tracking-[-0.5px]"
            style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
          >
            Projects
          </h1>
          <p
            className="text-[#849495] text-[12px] tracking-[0.28px]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
            }}
          >
            {projects.length} entries // PostgreSQL via Prisma
          </p>
        </div>
        <button
          disabled={isPending}
          onClick={() => setEditing({ ...BLANK, tags: [] })}
          className="flex items-center gap-2 bg-[#e1fdff] text-[#00363a] px-4 py-2.5 rounded-[2px] text-[12px] tracking-[1.2px] uppercase hover:opacity-90 transition-opacity shadow-[0_0_7.5px_rgba(0,242,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
        >
          <Plus size={14} /> NEW PROJECT
        </button>
      </div>

      <div
        className="rounded-[4px] border border-[rgba(0,242,255,0.12)] overflow-hidden"
        style={{ background: "rgba(10,10,10,0.6)" }}
      >
        <table className="w-full">
          <thead>
            <tr className="border-b border-[rgba(225,253,255,0.08)]">
              {["Title", "Status", "Tags", "Links", "Actions"].map((h) => (
                <th
                  key={h}
                  className="text-left px-4 py-3 text-[#849495] text-[11px] tracking-[1.2px] uppercase"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 500,
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr
                key={p.id}
                className="border-b border-[rgba(225,253,255,0.04)] hover:bg-[rgba(225,253,255,0.02)] transition-colors"
              >
                <td className="px-4 py-3">
                  <div
                    className="text-[#e1fdff] text-[14px]"
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontWeight: 600,
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    className="text-[#849495] text-[12px] mt-0.5 line-clamp-1"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {p.description}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`text-[10px] px-2 py-1 rounded-[2px] border tracking-[1px] uppercase ${statusColor[p.status]}`}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 700,
                    }}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1 flex-wrap">
                    {p.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="text-[10px] px-1.5 py-0.5 rounded-[2px] bg-[rgba(225,253,255,0.06)] text-[#b9cacb] border border-[rgba(225,253,255,0.1)]"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontWeight: 500,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                    {p.tags.length > 2 && (
                      <span className="text-[#849495] text-[11px]">
                        +{p.tags.length - 2}
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-3">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#849495] hover:text-[#e1fdff] transition-colors"
                        title="GitHub"
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#849495] hover:text-[#00F2FF] transition-colors"
                        title="Demo"
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button
                      disabled={isPending}
                      onClick={() => setEditing({ ...p, tags: p.tags })}
                      className="text-[#849495] hover:text-[#b3c5ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Edit2 size={14} />
                    </button>
                    <button
                      disabled={isPending}
                      onClick={() => setDeleteId(p.id)}
                      className="text-[#849495] hover:text-red-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editing && (
        <Modal
          project={editing}
          onSave={handleSave}
          onClose={() => setEditing(null)}
          isSaving={isPending}
        />
      )}

      {deleteId !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.7)" }}
        >
          <div
            className="w-full max-w-[400px] rounded-[4px] border border-[rgba(255,80,80,0.3)] p-6"
            style={{ background: "#0e0e0e" }}
          >
            <h3
              className="text-[#e1fdff] text-[18px] mb-3"
              style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
            >
              Confirm Delete
            </h3>
            <p
              className="text-[#b9cacb] text-[14px] mb-6"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              This will permanently remove the project from the database.
            </p>
            <div className="flex gap-3 justify-end">
              <button
                disabled={isPending}
                onClick={() => setDeleteId(null)}
                className="px-5 py-2 border border-[rgba(225,253,255,0.15)] text-[#849495] rounded-[2px] text-[12px] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 500,
                }}
              >
                CANCEL
              </button>
              <button
                disabled={isPending}
                onClick={() => handleDelete(deleteId)}
                className="px-5 py-2 bg-red-500 text-white rounded-[2px] text-[12px] hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                }}
              >
                DELETE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
