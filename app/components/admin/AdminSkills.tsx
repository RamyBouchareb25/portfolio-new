import { useState } from "react";
import { Plus, Edit2, Trash2, X, Save } from "lucide-react";

type Skill = {
  id: number;
  name: string;
  category: string;
  level: number;
  detail: string;
};

const INITIAL: Skill[] = [
  { id: 1, name: "Kubernetes", category: "Container Orchestration", level: 95, detail: "CKA/CKAD certified, 5yr prod" },
  { id: 2, name: "Helm", category: "Container Orchestration", level: 90, detail: "Chart authoring & management" },
  { id: 3, name: "AWS", category: "Cloud Infrastructure", level: 92, detail: "Solutions Architect certified" },
  { id: 4, name: "Terraform", category: "Cloud Infrastructure", level: 90, detail: "IaC, modules, workspaces" },
  { id: 5, name: "GitHub Actions", category: "CI/CD & Automation", level: 92, detail: "Reusable workflows" },
  { id: 6, name: "Prometheus", category: "Observability", level: 92, detail: "Custom exporters, PromQL" },
];

const CATEGORIES = ["Container Orchestration", "Cloud Infrastructure", "CI/CD & Automation", "Observability", "Networking & Security", "Languages & Scripting"];
const BLANK: Omit<Skill, "id"> = { name: "", category: CATEGORIES[0], level: 80, detail: "" };

function Modal({ skill, onSave, onClose }: { skill: Omit<Skill, "id"> & { id?: number }; onSave: (s: any) => void; onClose: () => void }) {
  const [form, setForm] = useState({ ...skill });
  const set = (k: string, v: any) => setForm((f) => ({ ...f, [k]: v }));
  const ic = "w-full bg-[rgba(10,10,10,0.8)] border border-[rgba(225,253,255,0.15)] rounded-[2px] px-3 py-2 text-[#e1fdff] text-[13px] placeholder-[#849495] focus:outline-none focus:border-[rgba(0,242,255,0.4)] transition-colors";
  const lc = "text-[#b3c5ff] text-[11px] tracking-[1.2px] uppercase mb-1.5 block";
  const ls = { fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 };
  const fi = { fontFamily: "'JetBrains Mono', monospace" };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.75)" }}>
      <div className="w-full max-w-[450px] rounded-[4px] border border-[rgba(0,242,255,0.25)] p-6 flex flex-col gap-4" style={{ background: "#0e0e0e" }}>
        <div className="flex items-center justify-between">
          <h2 className="text-[#e1fdff] text-[18px]" style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}>{skill.id ? "Edit Skill" : "New Skill"}</h2>
          <button onClick={onClose} className="text-[#849495] hover:text-[#e1fdff]"><X size={18} /></button>
        </div>
        <div>
          <label className={lc} style={ls}>Skill Name</label>
          <input className={ic} style={fi} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="e.g. Kubernetes" />
        </div>
        <div>
          <label className={lc} style={ls}>Category</label>
          <select className={ic + " cursor-pointer"} style={{ ...fi, background: "rgba(10,10,10,0.8)" }} value={form.category} onChange={(e) => set("category", e.target.value)}>
            {CATEGORIES.map((c) => <option key={c} value={c} style={{ background: "#0a0a0a" }}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className={lc} style={ls}>Proficiency Level: {form.level}%</label>
          <input type="range" min={0} max={100} value={form.level} onChange={(e) => set("level", parseInt(e.target.value))} className="w-full accent-[#00F2FF]" />
          <div className="flex justify-between text-[#849495] text-[11px] mt-1" style={ls}><span>0%</span><span>50%</span><span>100%</span></div>
        </div>
        <div>
          <label className={lc} style={ls}>Detail / Context</label>
          <input className={ic} style={fi} value={form.detail} onChange={(e) => set("detail", e.target.value)} placeholder="e.g. CKA certified, 5yr production" />
        </div>
        <div className="flex gap-3 justify-end pt-1">
          <button onClick={onClose} className="px-5 py-2 border border-[rgba(225,253,255,0.15)] text-[#849495] rounded-[2px] text-[12px]" style={ls}>CANCEL</button>
          <button onClick={() => onSave(form)} className="flex items-center gap-2 px-5 py-2 bg-[#e1fdff] text-[#00363a] rounded-[2px] text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
            <Save size={12} /> SAVE
          </button>
        </div>
      </div>
    </div>
  );
}

export function AdminSkills() {
  const [skills, setSkills] = useState<Skill[]>(INITIAL);
  const [editing, setEditing] = useState<(Omit<Skill, "id"> & { id?: number }) | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [filterCat, setFilterCat] = useState("All");

  const categories = ["All", ...Array.from(new Set(skills.map((s) => s.category)))];
  const filtered = filterCat === "All" ? skills : skills.filter((s) => s.category === filterCat);

  function handleSave(data: any) {
    if (data.id) setSkills((ss) => ss.map((s) => (s.id === data.id ? data : s)));
    else setSkills((ss) => [...ss, { ...data, id: Date.now() }]);
    setEditing(null);
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#e1fdff] text-[24px] tracking-[-0.5px]" style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}>Skills</h1>
          <p className="text-[#849495] text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>{skills.length} entries // PostgreSQL via Prisma</p>
        </div>
        <button onClick={() => setEditing(BLANK)} className="flex items-center gap-2 bg-[#e1fdff] text-[#00363a] px-4 py-2.5 rounded-[2px] text-[12px] tracking-[1.2px] uppercase hover:opacity-90 shadow-[0_0_7.5px_rgba(0,242,255,0.3)]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
          <Plus size={14} /> ADD SKILL
        </button>
      </div>

      <div className="flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setFilterCat(cat)} className={`px-3 py-1.5 rounded-[2px] text-[11px] tracking-[1px] uppercase border transition-colors ${filterCat === cat ? "bg-[rgba(0,242,255,0.1)] border-[rgba(0,242,255,0.4)] text-[#00F2FF]" : "border-[rgba(225,253,255,0.12)] text-[#849495] hover:text-[#b9cacb]"}`} style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>
            {cat}
          </button>
        ))}
      </div>

      <div className="rounded-[4px] border border-[rgba(0,242,255,0.12)] overflow-hidden" style={{ background: "rgba(10,10,10,0.6)" }}>
        <table className="w-full">
          <thead>
            <tr className="border-b border-[rgba(225,253,255,0.08)]">
              {["Skill", "Category", "Level", "Detail", "Actions"].map((h) => (
                <th key={h} className="text-left px-4 py-3 text-[#849495] text-[11px] tracking-[1.2px] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((skill) => (
              <tr key={skill.id} className="border-b border-[rgba(225,253,255,0.04)] hover:bg-[rgba(225,253,255,0.02)] transition-colors">
                <td className="px-4 py-3 text-[#e1fdff] text-[14px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>{skill.name}</td>
                <td className="px-4 py-3 text-[#b3c5ff] text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>{skill.category}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="w-20 h-1.5 bg-[rgba(225,253,255,0.08)] rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${skill.level}%`, background: skill.level >= 90 ? "#00F2FF" : skill.level >= 80 ? "#b3c5ff" : "rgba(225,253,255,0.4)" }} />
                    </div>
                    <span className="text-[#b9cacb] text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>{skill.level}%</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-[#849495] text-[13px]" style={{ fontFamily: "'Inter', sans-serif" }}>{skill.detail}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button onClick={() => setEditing(skill)} className="text-[#849495] hover:text-[#b3c5ff]"><Edit2 size={14} /></button>
                    <button onClick={() => setDeleteId(skill.id)} className="text-[#849495] hover:text-red-400"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editing !== null && <Modal skill={editing} onSave={handleSave} onClose={() => setEditing(null)} />}
      {deleteId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.75)" }}>
          <div className="w-full max-w-[380px] rounded-[4px] border border-red-500/30 p-6" style={{ background: "#0e0e0e" }}>
            <h3 className="text-[#e1fdff] text-[18px] mb-3" style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}>Delete Skill?</h3>
            <p className="text-[#b9cacb] text-[14px] mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>This will remove the skill from the database.</p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setDeleteId(null)} className="px-5 py-2 border border-[rgba(225,253,255,0.15)] text-[#849495] rounded-[2px] text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>CANCEL</button>
              <button onClick={() => { setSkills((ss) => ss.filter((s) => s.id !== deleteId)); setDeleteId(null); }} className="px-5 py-2 bg-red-500 text-white rounded-[2px] text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>DELETE</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
