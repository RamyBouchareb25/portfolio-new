"use client";

import { useState } from "react";
import { Plus, Edit2, Trash2, X, Save, Loader2 } from "lucide-react";
import type { Skill } from "@prisma/client";
import {
  createSkillAction,
  updateSkillAction,
  deleteSkillAction,
} from "@/lib/admin-actions";
import { useTransition } from "react";

const CATEGORIES = [
  "Container Orchestration",
  "Cloud Infrastructure",
  "CI/CD & Automation",
  "Observability",
  "Networking & Security",
  "Languages & Scripting",
];
const BLANK: Omit<Skill, "id" | "createdAt" | "updatedAt"> = {
  name: "",
  category: CATEGORIES[0],
  level: 80,
  detail: null,
};

function Modal({
  skill,
  onSave,
  onClose,
  isSaving,
}: {
  skill: Partial<Skill>;
  onSave: (s: any) => void;
  onClose: () => void;
  isSaving: boolean;
}) {
  const [form, setForm] = useState({ ...skill });
  const set = (k: string, v: any) => setForm((f) => ({ ...f, [k]: v }));
  const ic =
    "w-full bg-[rgba(10,10,10,0.8)] border border-[rgba(225,253,255,0.15)] rounded-[2px] px-3 py-2 text-[#e1fdff] text-[13px] placeholder-[#849495] focus:outline-none focus:border-[rgba(0,242,255,0.4)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed";
  const lc =
    "text-[#b3c5ff] text-[11px] tracking-[1.2px] uppercase mb-1.5 block";
  const ls = { fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 };
  const fi = { fontFamily: "'JetBrains Mono', monospace" };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)" }}
    >
      <div
        className="w-full max-w-[450px] rounded-[4px] border border-[rgba(0,242,255,0.25)] p-6 flex flex-col gap-4"
        style={{ background: "#0e0e0e" }}
      >
        <div className="flex items-center justify-between">
          <h2
            className="text-[#e1fdff] text-[18px]"
            style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
          >
            {skill.id ? "Edit Skill" : "New Skill"}
          </h2>
          <button
            disabled={isSaving}
            onClick={onClose}
            className="text-[#849495] hover:text-[#e1fdff] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <X size={18} />
          </button>
        </div>
        <div>
          <label className={lc} style={ls}>
            Skill Name
          </label>
          <input
            disabled={isSaving}
            className={ic}
            style={fi}
            value={form.name}
            onChange={(e) => set("name", e.target.value)}
            placeholder="e.g. Kubernetes"
          />
        </div>
        <div>
          <label className={lc} style={ls}>
            Category
          </label>
          <select
            disabled={isSaving}
            className={ic + " cursor-pointer"}
            style={{ ...fi, background: "rgba(10,10,10,0.8)" }}
            value={form.category}
            onChange={(e) => set("category", e.target.value)}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c} style={{ background: "#0a0a0a" }}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={lc} style={ls}>
            Proficiency Level: {form.level}%
          </label>
          <input
            disabled={isSaving}
            type="range"
            min={0}
            max={100}
            value={form.level}
            onChange={(e) => set("level", parseInt(e.target.value))}
            className="w-full accent-[#00F2FF] disabled:opacity-50 disabled:cursor-not-allowed"
          />
          <div
            className="flex justify-between text-[#849495] text-[11px] mt-1"
            style={ls}
          >
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>
        <div>
          <label className={lc} style={ls}>
            Detail / Context
          </label>
          <input
            disabled={isSaving}
            className={ic}
            style={fi}
            value={form.detail || ""}
            onChange={(e) => set("detail", e.target.value || null)}
            placeholder="e.g. CKA certified, 5yr production"
          />
        </div>
        <div className="flex gap-3 justify-end pt-1">
          <button
            disabled={isSaving}
            onClick={onClose}
            className="px-5 py-2 border border-[rgba(225,253,255,0.15)] text-[#849495] rounded-[2px] text-[12px] disabled:opacity-50 disabled:cursor-not-allowed"
            style={ls}
          >
            CANCEL
          </button>
          <button
            disabled={isSaving}
            onClick={() => onSave(form)}
            className="flex items-center gap-2 px-5 py-2 bg-[#e1fdff] text-[#00363a] rounded-[2px] text-[12px] disabled:opacity-50 disabled:cursor-not-allowed"
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

interface AdminSkillsProps {
  initialSkills: Skill[];
}

export function AdminSkills({ initialSkills }: AdminSkillsProps) {
  const [skills, setSkills] = useState<Skill[]>(initialSkills);
  const [editing, setEditing] = useState<Partial<Skill> | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [filterCat, setFilterCat] = useState("All");
  const [isPending, startTransition] = useTransition();

  const categories = [
    "All",
    ...Array.from(new Set(skills.map((s) => s.category))),
  ];
  const filtered =
    filterCat === "All"
      ? skills
      : skills.filter((s) => s.category === filterCat);

  function handleSave(data: any) {
    startTransition(async () => {
      try {
        if (data.id) {
          const result = await updateSkillAction(data.id, {
            name: data.name,
            category: data.category,
            level: data.level,
            detail: data.detail,
          });
          if (!result.success || !result.data) {
            throw new Error(result.error ?? "Failed to update skill");
          }
          const updatedSkill = result.data;
          setSkills((ss) =>
            ss.map((s) => (s.id === data.id ? updatedSkill : s)),
          );
        } else {
          const result = await createSkillAction({
            name: data.name,
            category: data.category,
            level: data.level,
            detail: data.detail,
          });
          if (!result.success || !result.data) {
            throw new Error(result.error ?? "Failed to create skill");
          }
          const createdSkill = result.data;
          setSkills((ss) => [...ss, createdSkill]);
        }
        setEditing(null);
      } catch (error) {
        alert(
          `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
        );
      }
    });
  }

  function handleDelete(id: number) {
    startTransition(async () => {
      try {
        await deleteSkillAction(id);
        setSkills((ss) => ss.filter((s) => s.id !== id));
        setDeleteId(null);
      } catch (error) {
        alert(
          `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
        );
      }
    });
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h1
            className="text-[#e1fdff] text-[24px] tracking-[-0.5px]"
            style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
          >
            Skills
          </h1>
          <p
            className="text-[#849495] text-[12px]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
            }}
          >
            {skills.length} entries // PostgreSQL via Prisma
          </p>
        </div>
        <button
          disabled={isPending}
          onClick={() => setEditing(BLANK)}
          className="flex items-center gap-2 bg-[#e1fdff] text-[#00363a] px-4 py-2.5 rounded-[2px] text-[12px] tracking-[1.2px] uppercase hover:opacity-90 shadow-[0_0_7.5px_rgba(0,242,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
        >
          <Plus size={14} /> ADD SKILL
        </button>
      </div>

      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCat(cat)}
            className={`px-3 py-1.5 rounded-[2px] text-[11px] tracking-[1px] uppercase border transition-colors ${
              filterCat === cat
                ? "bg-[rgba(0,242,255,0.1)] border-[rgba(0,242,255,0.4)] text-[#00F2FF]"
                : "border-[rgba(225,253,255,0.12)] text-[#849495] hover:text-[#b9cacb]"
            }`}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filtered.map((s) => (
          <div
            key={s.id}
            className="rounded-[4px] border border-[rgba(0,242,255,0.12)] p-4 flex flex-col gap-3"
            style={{ background: "rgba(10,10,10,0.6)" }}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3
                  className="text-[#e1fdff] text-[16px]"
                  style={{ fontFamily: "'Geist', sans-serif", fontWeight: 600 }}
                >
                  {s.name}
                </h3>
                <p
                  className="text-[#b3c5ff] text-[11px] tracking-[1px] uppercase"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 500,
                  }}
                >
                  {s.category}
                </p>
              </div>
              <span
                className="text-[#00F2FF] text-[18px]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                }}
              >
                {s.level}%
              </span>
            </div>
            {s.detail && (
              <p
                className="text-[#849495] text-[12px]"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {s.detail}
              </p>
            )}
            <div className="w-full bg-[rgba(225,253,255,0.08)] rounded-[2px] h-1.5 overflow-hidden">
              <div
                className="h-full bg-[#00F2FF]"
                style={{ width: `${s.level}%` }}
              />
            </div>
            <div className="flex gap-2 justify-end">
              <button
                disabled={isPending}
                onClick={() => setEditing(s)}
                className="text-[#849495] hover:text-[#b3c5ff] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Edit2 size={14} />
              </button>
              <button
                disabled={isPending}
                onClick={() => setDeleteId(s.id)}
                className="text-[#849495] hover:text-red-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {editing && (
        <Modal
          skill={editing}
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
              This will permanently remove the skill from the database.
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
