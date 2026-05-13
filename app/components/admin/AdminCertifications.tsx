import { useState } from "react";
import { Plus, Edit2, Trash2, X, Save, Award } from "lucide-react";

type Cert = {
  id: number;
  name: string;
  issuer: string;
  year: string;
  badge: string;
  credentialId: string;
  url: string;
};

const INITIAL: Cert[] = [
  { id: 1, name: "Certified Kubernetes Administrator (CKA)", issuer: "CNCF", year: "2023", badge: "CKA", credentialId: "CKA-2023-1234", url: "https://www.cncf.io/certification/cka/" },
  { id: 2, name: "Certified Kubernetes App Developer (CKAD)", issuer: "CNCF", year: "2023", badge: "CKAD", credentialId: "CKAD-2023-5678", url: "" },
  { id: 3, name: "AWS Solutions Architect – Professional", issuer: "Amazon Web Services", year: "2022", badge: "AWS-SAP", credentialId: "AWS-SAP-2022-9012", url: "" },
  { id: 4, name: "CKS — Kubernetes Security", issuer: "CNCF", year: "2024", badge: "CKS", credentialId: "CKS-2024-3456", url: "" },
  { id: 5, name: "HashiCorp Terraform Associate", issuer: "HashiCorp", year: "2022", badge: "TF-A", credentialId: "TF-2022-7890", url: "" },
];

const BLANK: Omit<Cert, "id"> = { name: "", issuer: "", year: new Date().getFullYear().toString(), badge: "", credentialId: "", url: "" };

function Modal({ cert, onSave, onClose }: { cert: Omit<Cert, "id"> & { id?: number }; onSave: (c: any) => void; onClose: () => void }) {
  const [form, setForm] = useState({ ...cert });
  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));
  const ic = "w-full bg-[rgba(10,10,10,0.8)] border border-[rgba(225,253,255,0.15)] rounded-[2px] px-3 py-2 text-[#e1fdff] text-[13px] placeholder-[#849495] focus:outline-none focus:border-[rgba(0,242,255,0.4)] transition-colors";
  const lc = "text-[#b3c5ff] text-[11px] tracking-[1.2px] uppercase mb-1.5 block";
  const ls = { fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 };
  const fi = { fontFamily: "'JetBrains Mono', monospace" };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.75)" }}>
      <div className="w-full max-w-[500px] rounded-[4px] border border-[rgba(0,242,255,0.25)] p-6 flex flex-col gap-4" style={{ background: "#0e0e0e" }}>
        <div className="flex items-center justify-between">
          <h2 className="text-[#e1fdff] text-[18px]" style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}>{cert.id ? "Edit Certification" : "New Certification"}</h2>
          <button onClick={onClose} className="text-[#849495] hover:text-[#e1fdff]"><X size={18} /></button>
        </div>
        {[
          { k: "name", label: "Name", ph: "e.g. Certified Kubernetes Administrator" },
          { k: "issuer", label: "Issuer", ph: "e.g. CNCF" },
          { k: "year", label: "Year", ph: "2024" },
          { k: "badge", label: "Badge Code", ph: "e.g. CKA" },
          { k: "credentialId", label: "Credential ID", ph: "e.g. CKA-2024-XXXX" },
          { k: "url", label: "Verification URL (optional)", ph: "https://..." },
        ].map(({ k, label, ph }) => (
          <div key={k}>
            <label className={lc} style={ls}>{label}</label>
            <input className={ic} style={fi} value={(form as any)[k]} onChange={(e) => set(k, e.target.value)} placeholder={ph} />
          </div>
        ))}
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

export function AdminCertifications() {
  const [certs, setCerts] = useState<Cert[]>(INITIAL);
  const [editing, setEditing] = useState<(Omit<Cert, "id"> & { id?: number }) | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  function handleSave(data: any) {
    if (data.id) setCerts((cs) => cs.map((c) => (c.id === data.id ? data : c)));
    else setCerts((cs) => [...cs, { ...data, id: Date.now() }]);
    setEditing(null);
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#e1fdff] text-[24px] tracking-[-0.5px]" style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}>Certifications</h1>
          <p className="text-[#849495] text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>{certs.length} entries // PostgreSQL via Prisma</p>
        </div>
        <button onClick={() => setEditing(BLANK)} className="flex items-center gap-2 bg-[#e1fdff] text-[#00363a] px-4 py-2.5 rounded-[2px] text-[12px] tracking-[1.2px] uppercase hover:opacity-90 shadow-[0_0_7.5px_rgba(0,242,255,0.3)]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
          <Plus size={14} /> ADD CERT
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {certs.map((cert) => (
          <div key={cert.id} className="backdrop-blur-[6px] rounded-[4px] border border-[rgba(0,242,255,0.15)] p-5 flex flex-col gap-3 hover:border-[rgba(0,242,255,0.3)] transition-colors" style={{ background: "rgba(10,10,10,0.6)" }}>
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-[4px] flex items-center justify-center text-[10px] text-[#00F2FF] border border-[rgba(0,242,255,0.3)] bg-[rgba(0,242,255,0.08)]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
                {cert.badge || <Award size={20} />}
              </div>
              <div className="flex gap-2">
                <button onClick={() => setEditing(cert)} className="text-[#849495] hover:text-[#b3c5ff]"><Edit2 size={13} /></button>
                <button onClick={() => setDeleteId(cert.id)} className="text-[#849495] hover:text-red-400"><Trash2 size={13} /></button>
              </div>
            </div>
            <div>
              <p className="text-[#e1fdff] text-[14px] leading-[20px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{cert.name}</p>
              <p className="text-[#849495] text-[12px] mt-1" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>{cert.issuer} · {cert.year}</p>
            </div>
            {cert.credentialId && (
              <p className="text-[#b3c5ff] text-[11px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>ID: {cert.credentialId}</p>
            )}
          </div>
        ))}
      </div>

      {editing !== null && <Modal cert={editing} onSave={handleSave} onClose={() => setEditing(null)} />}
      {deleteId !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: "rgba(0,0,0,0.75)" }}>
          <div className="w-full max-w-[380px] rounded-[4px] border border-red-500/30 p-6" style={{ background: "#0e0e0e" }}>
            <h3 className="text-[#e1fdff] text-[18px] mb-3" style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}>Delete Certification?</h3>
            <p className="text-[#b9cacb] text-[14px] mb-5" style={{ fontFamily: "'Inter', sans-serif" }}>This action cannot be undone.</p>
            <div className="flex gap-3 justify-end">
              <button onClick={() => setDeleteId(null)} className="px-5 py-2 border border-[rgba(225,253,255,0.15)] text-[#849495] rounded-[2px] text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>CANCEL</button>
              <button onClick={() => { setCerts((cs) => cs.filter((c) => c.id !== deleteId)); setDeleteId(null); }} className="px-5 py-2 bg-red-500 text-white rounded-[2px] text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>DELETE</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
