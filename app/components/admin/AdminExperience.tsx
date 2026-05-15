"use client";

import { useState, useTransition } from "react";
import { Trash2, Plus, CheckCircle, Edit } from "lucide-react";
import type { Experience } from "@prisma/client";
import {
  createExperienceAction,
  updateExperienceAction,
  deleteExperienceAction,
} from "@/lib/admin-actions";

interface AdminExperienceProps {
  initialExperiences: Experience[];
}

const EMPTY_FORM = {
  role: "",
  company: "",
  period: "",
  location: "",
  bullets: [] as string[],
};

export function AdminExperience({
  initialExperiences = [],
}: AdminExperienceProps) {
  const [experiences, setExperiences] = useState(initialExperiences);
  const [form, setForm] = useState<
    Partial<Experience> & { bullets: string[]; bulletInput?: string }
  >(EMPTY_FORM);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [saved, setSaved] = useState(false);
  const [isPending, startTransition] = useTransition();

  function set(k: string, v: string | string[]) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  function addBullet() {
    const input = (form as any).bulletInput?.trim();
    if (input) {
      set("bullets", [...(form.bullets || []), input]);
      set("bulletInput", "");
    }
  }

  function removeBullet(index: number) {
    const newBullets = form.bullets?.filter((_, i) => i !== index) || [];
    set("bullets", newBullets);
  }

  function handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (
      !form.role ||
      !form.company ||
      !form.period ||
      !form.location ||
      !form.bullets?.length
    ) {
      alert("Please fill in all fields");
      return;
    }

    startTransition(async () => {
      try {
        if (editingId) {
          const result = await updateExperienceAction(editingId, {
            role: form.role || "",
            company: form.company || "",
            period: form.period || "",
            location: form.location || "",
            bullets: form.bullets || [],
          });
          if (!result.success) {
            throw new Error(result.error);
          }
          setExperiences(
            experiences.map((exp) =>
              exp.id === editingId ? (result.data as Experience) : exp,
            ),
          );
          setEditingId(null);
        } else {
          const result = await createExperienceAction({
            role: form.role || "",
            company: form.company || "",
            period: form.period || "",
            location: form.location || "",
            bullets: form.bullets || [],
          });
          if (!result.success) {
            throw new Error(result.error);
          }
          setExperiences([result.data as Experience, ...experiences]);
        }

        setForm(EMPTY_FORM);
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      } catch (error) {
        console.error("Failed to save experience:", error);
        alert(
          `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
        );
      }
    });
  }

  async function handleDelete(id: number) {
    if (!confirm("Delete this experience?")) return;

    startTransition(async () => {
      try {
        const result = await deleteExperienceAction(id);
        if (!result.success) {
          throw new Error(result.error);
        }
        setExperiences(experiences.filter((exp) => exp.id !== id));
      } catch (error) {
        console.error("Failed to delete experience:", error);
        alert(
          `Error: ${error instanceof Error ? error.message : "Unknown error"}`,
        );
      }
    });
  }

  function handleEdit(exp: Experience) {
    setForm({
      role: exp.role,
      company: exp.company,
      period: exp.period,
      location: exp.location,
      bullets: exp.bullets,
      bulletInput: "",
    });
    setEditingId(exp.id);
  }

  const ic =
    "w-full bg-[rgba(10,10,10,0.8)] border border-[rgba(225,253,255,0.15)] rounded-[2px] px-3 py-2.5 text-[#e1fdff] text-[14px] placeholder-[#849495] focus:outline-none focus:border-[rgba(0,242,255,0.4)] transition-colors";
  const lc =
    "text-[#b3c5ff] text-[11px] tracking-[1.2px] uppercase mb-1.5 block";
  const ls = { fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 };
  const fi = { fontFamily: "'Inter', sans-serif" };

  return (
    <div className="flex flex-col gap-6">
      {/* Form */}
      <form onSubmit={handleSave} className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1
              className="text-[#e1fdff] text-[24px] tracking-[-0.5px]"
              style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
            >
              Work Experience
            </h1>
            <p
              className="text-[#849495] text-[12px]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
              }}
            >
              {editingId ? "Editing experience" : "Add new experience"}
            </p>
          </div>
          <div className="flex items-center gap-3">
            {saved && (
              <span
                className="flex items-center gap-2 text-[#00F2FF] text-[12px]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 500,
                }}
              >
                <CheckCircle size={14} /> SAVED
              </span>
            )}
            <button
              type="submit"
              disabled={isPending}
              className="flex items-center gap-2 bg-[#e1fdff] text-[#00363a] px-5 py-2.5 rounded-[2px] text-[12px] tracking-[1.2px] uppercase hover:opacity-90 shadow-[0_0_7.5px_rgba(0,242,255,0.3)]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
              }}
            >
              <Plus size={12} /> {isPending ? "SAVING..." : "SAVE EXPERIENCE"}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            className="backdrop-blur-[6px] rounded-lg border border-[rgba(0,242,255,0.12)] p-6 flex flex-col gap-4"
            style={{ background: "rgba(10,10,10,0.6)" }}
          >
            <p
              className="text-[#b3c5ff] text-[12px] tracking-[1.4px] uppercase"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
              }}
            >
              [POSITION_INFO]
            </p>
            {[
              { k: "role", label: "Job Title" },
              { k: "company", label: "Company" },
              { k: "period", label: "Period" },
              { k: "location", label: "Location" },
            ].map(({ k, label }) => (
              <div key={k}>
                <label className={lc} style={ls}>
                  {label}
                </label>
                <input
                  className={ic}
                  style={fi}
                  value={(form as any)[k] || ""}
                  onChange={(e) => set(k, e.target.value)}
                />
              </div>
            ))}
          </div>

          <div
            className="backdrop-blur-[6px] rounded-lg border border-[rgba(0,242,255,0.12)] p-6 flex flex-col gap-4"
            style={{ background: "rgba(10,10,10,0.6)" }}
          >
            <p
              className="text-[#b3c5ff] text-[12px] tracking-[1.4px] uppercase"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
              }}
            >
              [ACHIEVEMENTS]
            </p>
            <div>
              <label className={lc} style={ls}>
                Add Achievement
              </label>
              <div className="flex gap-2 mb-3">
                <input
                  className={ic}
                  style={fi}
                  placeholder="Type achievement..."
                  value={(form as any).bulletInput || ""}
                  onChange={(e) => set("bulletInput", e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addBullet();
                    }
                  }}
                />
                <button
                  type="button"
                  onClick={addBullet}
                  className="bg-[rgba(0,242,255,0.1)] text-[#00F2FF] px-3 py-2.5 rounded-[2px] text-[12px] tracking-[1.2px] uppercase hover:bg-[rgba(0,242,255,0.2)] transition-colors"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 700,
                  }}
                >
                  ADD
                </button>
              </div>
            </div>

            {form.bullets && form.bullets.length > 0 && (
              <div className="flex flex-col gap-2">
                <label className={lc} style={ls}>
                  Added Bullets
                </label>
                <div className="flex flex-col gap-2">
                  {form.bullets.map((bullet, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between gap-2 bg-[rgba(0,242,255,0.05)] border border-[rgba(0,242,255,0.15)] rounded px-3 py-2"
                    >
                      <span
                        className="text-[#b9cacb] text-[13px]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {bullet}
                      </span>
                      <button
                        type="button"
                        onClick={() => removeBullet(i)}
                        className="text-[#849495] hover:text-[#ff6b6b] transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </form>

      {/* List */}
      <div className="flex flex-col gap-4">
        <div>
          <h2
            className="text-[#e1fdff] text-[20px] tracking-[-0.4px] mb-1"
            style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
          >
            Experiences ({experiences.length})
          </h2>
        </div>

        {experiences.length === 0 ? (
          <p
            className="text-[#849495] text-[14px]"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            No experiences added yet. Create one to get started!
          </p>
        ) : (
          <div className="flex flex-col gap-3">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="backdrop-blur-[6px] rounded-lg border border-[rgba(0,242,255,0.12)] p-4 hover:border-[rgba(0,242,255,0.25)] transition-colors"
                style={{ background: "rgba(10,10,10,0.5)" }}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3
                      className="text-[#e1fdff] text-[16px] tracking-[-0.3px]"
                      style={{
                        fontFamily: "'Geist', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className="text-[#b3c5ff] text-[12px]"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 500,
                      }}
                    >
                      {exp.company} · {exp.location} · {exp.period}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(exp)}
                      className="text-[#00F2FF] hover:text-[#e1fdff] transition-colors"
                    >
                      <Edit size={14} />
                    </button>
                    <button
                      onClick={() => handleDelete(exp.id)}
                      disabled={isPending}
                      className="text-[#849495] hover:text-[#ff6b6b] transition-colors"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>

                <ul className="flex flex-col gap-1">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-[#00F2FF] text-[11px]">›</span>
                      <span
                        className="text-[#b9cacb] text-[12px]"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
