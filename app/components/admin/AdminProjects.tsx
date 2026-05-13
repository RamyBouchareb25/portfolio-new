import { useState } from "react";
import { Plus, Edit2, Trash2, X, Save, ExternalLink } from "lucide-react";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  status: "PRODUCTION" | "ACTIVE" | "ARCHIVED";
  github: string;
  demo: string;
};

const INITIAL_PROJECTS: Project[] = [
  { id: 1, title: "Multi-Region Kubernetes Cluster", description: "Highly available K8s across 3 AWS regions.", tags: ["Kubernetes", "AWS", "Terraform"], status: "PRODUCTION", github: "https://github.com", demo: "" },
  { id: 2, title: "GitOps Pipeline Framework", description: "ArgoCD-driven delivery with progressive rollouts.", tags: ["CI/CD", "ArgoCD"], status: "ACTIVE", github: "https://github.com", demo: "" },
  { id: 3, title: "Full Observability Stack", description: "Prometheus + Grafana + Loki + Tempo.", tags: ["Observability"], status: "PRODUCTION", github: "https://github.com", demo: "https://grafana.example.com" },
];

const BLANK: Omit<Project, "id"> = {
  title: "", description: "", tags: [], status: "ACTIVE", github: "", demo: ""
};

function Modal({
  project,
  onSave,
  onClose,
}: {
  project: Omit<Project, "id"> & { id?: number };
  onSave: (p: any) => void;
  onClose: () => void;
}) {
  const [form, setForm] = useState({ ...project });
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

  const inputClass = "w-full bg-[rgba(10,10,10,0.8)] border border-[rgba(225,253,255,0.15)] rounded-[2px] px-3 py-2 text-[#e1fdff] text-[13px] placeholder-[#849495] focus:outline-none focus:border-[rgba(0,242,255,0.4)] transition-colors";
  const labelClass = "text-[#b3c5ff] text-[11px] tracking-[1.2px] uppercase mb-1.5 block";
  const labelStyle = { fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.7)" }}>
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
          <button onClick={onClose} className="text-[#849495] hover:text-[#e1fdff] transition-colors">
            <X size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className={labelClass} style={labelStyle}>Title</label>
            <input className={inputClass} style={{ fontFamily: "'JetBrains Mono', monospace" }} value={form.title} onChange={(e) => set("title", e.target.value)} placeholder="Project name" />
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>Description</label>
            <textarea className={inputClass + " resize-none"} rows={3} style={{ fontFamily: "'JetBrains Mono', monospace" }} value={form.description} onChange={(e) => set("description", e.target.value)} placeholder="Short description" />
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>Status</label>
            <select className={inputClass + " cursor-pointer"} style={{ fontFamily: "'JetBrains Mono', monospace", background: "rgba(10,10,10,0.8)" }} value={form.status} onChange={(e) => set("status", e.target.value)}>
              <option value="PRODUCTION">PRODUCTION</option>
              <option value="ACTIVE">ACTIVE</option>
              <option value="ARCHIVED">ARCHIVED</option>
            </select>
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>GitHub URL</label>
            <input className={inputClass} style={{ fontFamily: "'JetBrains Mono', monospace" }} value={form.github} onChange={(e) => set("github", e.target.value)} placeholder="https://github.com/..." />
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>Demo URL (optional)</label>
            <input className={inputClass} style={{ fontFamily: "'JetBrains Mono', monospace" }} value={form.demo} onChange={(e) => set("demo", e.target.value)} placeholder="https://..." />
          </div>
          <div>
            <label className={labelClass} style={labelStyle}>Tags</label>
            <div className="flex gap-2 mb-2 flex-wrap">
              {form.tags.map((tag) => (
                <span key={tag} className="flex items-center gap-1.5 bg-[rgba(0,242,255,0.08)] border border-[rgba(0,242,255,0.2)] text-[#00F2FF] text-[11px] px-2 py-1 rounded-[2px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>
                  {tag}
                  <button onClick={() => set("tags", form.tags.filter((t) => t !== tag))}><X size={10} /></button>
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              <input className={inputClass} style={{ fontFamily: "'JetBrains Mono', monospace" }} value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addTag())} placeholder="Add tag..." />
              <button onClick={addTag} className="px-3 py-2 bg-[rgba(0,242,255,0.1)] border border-[rgba(0,242,255,0.3)] text-[#00F2FF] rounded-[2px] text-[12px] hover:bg-[rgba(0,242,255,0.15)] transition-colors" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>ADD</button>
            </div>
          </div>
        </div>

        <div className="flex gap-3 justify-end pt-2">
          <button onClick={onClose} className="px-5 py-2 border border-[rgba(225,253,255,0.15)] text-[#849495] rounded-[2px] text-[12px] hover:border-[rgba(225,253,255,0.3)] hover:text-[#b9cacb] transition-colors" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>CANCEL</button>
          <button onClick={() => onSave(form)} className="flex items-center gap-2 px-5 py-2 bg-[#e1fdff] text-[#00363a] rounded-[2px] text-[12px] hover:opacity-90 transition-opacity" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
            <Save size={12} /> SAVE
          </button>
        </div>
      </div>
    </div>
  );
}

export function AdminProjects() {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [editing, setEditing] = useState<(Omit<Project, "id"> & { id?: number }) | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  function handleSave(data: any) {
    if (data.id) {
      setProjects((ps) => ps.map((p) => (p.id === data.id ? data : p)));
    } else {
      setProjects((ps) => [...ps, { ...data, id: Date.now() }]);
    }
    setEditing(null);
  }

  function handleDelete(id: number) {
    setProjects((ps) => ps.filter((p) => p.id !== id));
    setDeleteId(null);
  }

  const statusColor: Record<string, string> = {
    PRODUCTION: "text-[#00F2FF] border-[rgba(0,242,255,0.3)] bg-[rgba(0,242,255,0.08)]",
    ACTIVE: "text-[#b3c5ff] border-[rgba(179,197,255,0.2)] bg-[rgba(179,197,255,0.05)]",
    ARCHIVED: "text-[#849495] border-[rgba(132,148,149,0.2)] bg-[rgba(132,148,149,0.05)]",
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#e1fdff] text-[24px] tracking-[-0.5px]" style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}>Projects</h1>
          <p className="text-[#849495] text-[12px] tracking-[0.28px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>{projects.length} entries // PostgreSQL via Prisma</p>
        </div>
        <button
          onClick={() => setEditing(BLANK)}
          className="flex items-center gap-2 bg-[#e1fdff] text-[#00363a] px-4 py-2.5 rounded-[2px] text-[12px] tracking-[1.2px] uppercase hover:opacity-90 transition-opacity shadow-[0_0_7.5px_rgba(0,242,255,0.3)]"
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
                <th key={h} className="text-left px-4 py-3 text-[#849495] text-[11px] tracking-[1.2px] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id} className="border-b border-[rgba(225,253,255,0.04)] hover:bg-[rgba(225,253,255,0.02)] transition-colors">
                <td className="px-4 py-3">
                  <div className="text-[#e1fdff] text-[14px]" style={{ fontFamily: "'Geist', sans-serif", fontWeight: 600 }}>{p.title}</div>
                  <div className="text-[#849495] text-[12px] mt-0.5 line-clamp-1" style={{ fontFamily: "'Inter', sans-serif" }}>{p.description}</div>
                </td>
                <td className="px-4 py-3">
                  <span className={`text-[10px] px-2 py-1 rounded-[2px] border tracking-[1px] uppercase ${statusColor[p.status]}`} style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>{p.status}</span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-1 flex-wrap">
                    {p.tags.slice(0, 2).map((t) => (
                      <span key={t} className="text-[10px] px-1.5 py-0.5 rounded-[2px] bg-[rgba(225,253,255,0.06)] text-[#b9cacb] border border-[rgba(225,253,255,0.1)]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>{t}</span>
                    ))}
                    {p.tags.length > 2 && <span className="text-[#849495] text-[11px]">+{p.tags.length - 2}</span>}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-3">
                    {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-[#849495] hover:text-[#e1fdff] transition-colors" title="GitHub"><ExternalLink size={13} /></a>}
                    {p.demo && <a href={p.demo} target="_blank" rel="noopener noreferrer" className="text-[#849495] hover:text-[#00F2FF] transition-colors" title="Demo"><ExternalLink size={13} /></a>}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button onClick={() => setEditing(p)} className="text-[#849495] hover:text-[#b3c5ff] transition-colors"><Edit2 size={14} /></button>
                    <button onClick={() => setDeleteId(p.id)} className="text-[#849495] hover:text-red-400 transition-colors"><Trash2 size={14} /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit/Create modal */}
      {editing !== null && (
        <Modal project={editing} onSave={handleSave} onClose={() => setEditing(null)} />
      )}

      {/* Delete confirm */}
      {deleteId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.7)" }}>
          <div className="w-full max-w-[400px] rounded-[4px] border border-[rgba(255,80,80,0.3)] p-6" style={{ background: "#0e0e0e" }}>
            <h3 className="text-[#e1fdff] text-[18px] mb-3" style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}>Confirm Delete</h3>
            <p className="text-[#b9cacb] text-[14px] mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>This will permanently remove the project from the database.</p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setDeleteId(null)} className="px-5 py-2 border border-[rgba(225,253,255,0.15)] text-[#849495] rounded-[2px] text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>CANCEL</button>
              <button onClick={() => handleDelete(deleteId)} className="px-5 py-2 bg-red-500 text-white rounded-[2px] text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>DELETE</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
