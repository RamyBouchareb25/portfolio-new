import { useState } from "react";
import { Save, CheckCircle } from "lucide-react";

const INITIAL = {
  name: "DevOps Engineer",
  title: "Platform Engineer · K8s Expert · Cloud Architect",
  summary: "I architect, deploy, and maintain highly available infrastructure for mission-critical applications. My approach focuses on infrastructure as code, zero-downtime deployments, and robust observability to ensure systems run flawlessly under pressure.",
  bio: "With 10+ years in the trenches of cloud-native infrastructure, I've led migrations from bare metal to multi-cloud Kubernetes, built platform teams from scratch, and helped companies scale from startup to enterprise without losing reliability.",
  location: "Remote (US-East timezone)",
  email: "hello@k8sexpert.dev",
  github: "https://github.com/devops-engineer",
  linkedin: "https://linkedin.com/in/devops-engineer",
  twitter: "@k8s_expert",
  yearsExp: "10+",
  deploymentsCount: "500+",
  uptimeSla: "99.9%",
  clustersManaged: "50+",
};

export function AdminAbout() {
  const [form, setForm] = useState(INITIAL);
  const [saved, setSaved] = useState(false);

  function set(k: string, v: string) {
    setForm((f) => ({ ...f, [k]: v }));
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 800));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  const ic = "w-full bg-[rgba(10,10,10,0.8)] border border-[rgba(225,253,255,0.15)] rounded-[2px] px-3 py-2.5 text-[#e1fdff] text-[14px] placeholder-[#849495] focus:outline-none focus:border-[rgba(0,242,255,0.4)] transition-colors";
  const lc = "text-[#b3c5ff] text-[11px] tracking-[1.2px] uppercase mb-1.5 block";
  const ls = { fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 };
  const fi = { fontFamily: "'Inter', sans-serif" };

  return (
    <form onSubmit={handleSave} className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[#e1fdff] text-[24px] tracking-[-0.5px]" style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}>About Me</h1>
          <p className="text-[#849495] text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>Profile data // PostgreSQL via Prisma</p>
        </div>
        <div className="flex items-center gap-3">
          {saved && (
            <span className="flex items-center gap-2 text-[#00F2FF] text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>
              <CheckCircle size={14} /> SAVED
            </span>
          )}
          <button type="submit" className="flex items-center gap-2 bg-[#e1fdff] text-[#00363a] px-5 py-2.5 rounded-[2px] text-[12px] tracking-[1.2px] uppercase hover:opacity-90 shadow-[0_0_7.5px_rgba(0,242,255,0.3)]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
            <Save size={12} /> SAVE CHANGES
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic info */}
        <div className="backdrop-blur-[6px] rounded-lg border border-[rgba(0,242,255,0.12)] p-6 flex flex-col gap-4" style={{ background: "rgba(10,10,10,0.6)" }}>
          <p className="text-[#b3c5ff] text-[12px] tracking-[1.4px] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>[BASIC_INFO]</p>
          {[
            { k: "name", label: "Display Name" },
            { k: "title", label: "Title / Subtitle" },
            { k: "location", label: "Location" },
            { k: "email", label: "Email" },
          ].map(({ k, label }) => (
            <div key={k}>
              <label className={lc} style={ls}>{label}</label>
              <input className={ic} style={fi} value={(form as any)[k]} onChange={(e) => set(k, e.target.value)} />
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="backdrop-blur-[6px] rounded-lg border border-[rgba(0,242,255,0.12)] p-6 flex flex-col gap-4" style={{ background: "rgba(10,10,10,0.6)" }}>
          <p className="text-[#b3c5ff] text-[12px] tracking-[1.4px] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>[SOCIAL_LINKS]</p>
          {[
            { k: "github", label: "GitHub URL" },
            { k: "linkedin", label: "LinkedIn URL" },
            { k: "twitter", label: "Twitter / X Handle" },
          ].map(({ k, label }) => (
            <div key={k}>
              <label className={lc} style={ls}>{label}</label>
              <input className={ic} style={fi} value={(form as any)[k]} onChange={(e) => set(k, e.target.value)} />
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="backdrop-blur-[6px] rounded-lg border border-[rgba(0,242,255,0.12)] p-6 flex flex-col gap-4 lg:col-span-2" style={{ background: "rgba(10,10,10,0.6)" }}>
          <p className="text-[#b3c5ff] text-[12px] tracking-[1.4px] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>[BIO_TEXT]</p>
          <div>
            <label className={lc} style={ls}>Executive Summary (hero section)</label>
            <textarea className={ic + " resize-none"} style={fi} rows={3} value={form.summary} onChange={(e) => set("summary", e.target.value)} />
          </div>
          <div>
            <label className={lc} style={ls}>Full Bio (about page)</label>
            <textarea className={ic + " resize-none"} style={fi} rows={4} value={form.bio} onChange={(e) => set("bio", e.target.value)} />
          </div>
        </div>

        {/* Stats */}
        <div className="backdrop-blur-[6px] rounded-lg border border-[rgba(0,242,255,0.12)] p-6 flex flex-col gap-4 lg:col-span-2" style={{ background: "rgba(10,10,10,0.6)" }}>
          <p className="text-[#b3c5ff] text-[12px] tracking-[1.4px] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>[STATS_COUNTERS]</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { k: "yearsExp", label: "Years Experience" },
              { k: "deploymentsCount", label: "Deployments" },
              { k: "uptimeSla", label: "Uptime SLA" },
              { k: "clustersManaged", label: "Clusters Managed" },
            ].map(({ k, label }) => (
              <div key={k}>
                <label className={lc} style={ls}>{label}</label>
                <input className={ic} style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700, fontSize: 20 }} value={(form as any)[k]} onChange={(e) => set(k, e.target.value)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}
