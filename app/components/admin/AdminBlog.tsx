import { ExternalLink, FileText, Settings } from "lucide-react";

const POSTS = [
  { id: 1, title: "Deep Dive: Running Kubernetes on Spot Instances", status: "published", date: "2024-01-15", views: 3420 },
  { id: 2, title: "GitOps at Scale: ArgoCD Patterns", status: "published", date: "2024-02-03", views: 2180 },
  { id: 3, title: "Escaping Prometheus Cardinality Hell", status: "published", date: "2024-02-28", views: 1890 },
  { id: 4, title: "Replacing kube-proxy with Cilium eBPF", status: "draft", date: "2024-03-12", views: 0 },
  { id: 5, title: "Zero Hardcoded Secrets: Vault + K8s", status: "published", date: "2024-03-28", views: 1340 },
];

export function AdminBlog() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-[#e1fdff] text-[24px] tracking-[-0.5px]" style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}>Blog Posts</h1>
        <p className="text-[#849495] text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>Managed via Payload CMS API // /api/payload</p>
      </div>

      {/* Payload CMS Integration Banner */}
      <div className="rounded-[4px] border border-[rgba(0,242,255,0.25)] p-6 flex flex-col gap-4" style={{ background: "rgba(0,242,255,0.04)" }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-[4px] bg-[rgba(0,242,255,0.15)] border border-[rgba(0,242,255,0.3)] flex items-center justify-center">
            <FileText size={18} className="text-[#00F2FF]" />
          </div>
          <div>
            <h2 className="text-[#e1fdff] text-[16px]" style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}>Payload CMS Integration</h2>
            <p className="text-[#849495] text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>Blog content is fully managed through Payload CMS</p>
          </div>
        </div>
        <p className="text-[#b9cacb] text-[14px] leading-[22px]" style={{ fontFamily: "'Inter', sans-serif" }}>
          Your blog posts are created, edited, and published through the Payload CMS admin interface.
          The Next.js frontend fetches content via the Payload REST API at{" "}
          <code className="text-[#00F2FF] bg-[rgba(0,242,255,0.08)] px-1 rounded text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            /api/payload/posts
          </code>
          . Payload handles rich text (Slate editor), media uploads, and draft/publish workflows.
        </p>
        <div className="flex gap-3 flex-wrap">
          <a
            href="http://localhost:3001/admin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#e1fdff] text-[#00363a] px-5 py-2.5 rounded-[2px] text-[12px] tracking-[1.2px] uppercase hover:opacity-90 shadow-[0_0_7.5px_rgba(0,242,255,0.3)]"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
          >
            <ExternalLink size={12} /> OPEN PAYLOAD ADMIN
          </a>
          <a
            href="http://localhost:3001/api/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-[rgba(0,242,255,0.4)] text-[#00F2FF] px-5 py-2.5 rounded-[2px] text-[12px] tracking-[1.2px] uppercase hover:bg-[rgba(0,242,255,0.06)] transition-colors"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
          >
            VIEW_API
          </a>
        </div>
      </div>

      {/* Posts preview */}
      <div className="rounded-[4px] border border-[rgba(0,242,255,0.12)] overflow-hidden" style={{ background: "rgba(10,10,10,0.6)" }}>
        <div className="px-4 py-3 border-b border-[rgba(225,253,255,0.08)] flex items-center gap-2">
          <span className="text-[#b3c5ff] text-[11px] tracking-[1.4px] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>
            POSTS SYNCED FROM PAYLOAD CMS
          </span>
          <span className="text-[#849495] text-[11px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>
            // read-only preview
          </span>
        </div>
        <table className="w-full">
          <thead>
            <tr className="border-b border-[rgba(225,253,255,0.08)]">
              {["Title", "Status", "Date", "Views", ""].map((h) => (
                <th key={h} className="text-left px-4 py-3 text-[#849495] text-[11px] tracking-[1.2px] uppercase" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {POSTS.map((p) => (
              <tr key={p.id} className="border-b border-[rgba(225,253,255,0.04)] hover:bg-[rgba(225,253,255,0.02)]">
                <td className="px-4 py-3 text-[#e1fdff] text-[14px]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{p.title}</td>
                <td className="px-4 py-3">
                  <span className={`text-[10px] px-2 py-1 rounded-[2px] border tracking-[1px] uppercase ${p.status === "published" ? "text-[#00F2FF] border-[rgba(0,242,255,0.3)] bg-[rgba(0,242,255,0.08)]" : "text-[#849495] border-[rgba(132,148,149,0.2)] bg-[rgba(132,148,149,0.05)]"}`} style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>{p.status}</span>
                </td>
                <td className="px-4 py-3 text-[#849495] text-[12px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>{p.date}</td>
                <td className="px-4 py-3 text-[#b9cacb] text-[13px]" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>{p.views > 0 ? p.views.toLocaleString() : "—"}</td>
                <td className="px-4 py-3">
                  <a href="http://localhost:3001/admin" target="_blank" rel="noopener noreferrer" className="text-[#849495] hover:text-[#00F2FF] transition-colors">
                    <ExternalLink size={13} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Architecture note */}
      <div className="rounded-[4px] border border-[rgba(225,253,255,0.08)] p-5" style={{ background: "rgba(10,10,10,0.4)" }}>
        <p className="text-[#b3c5ff] text-[11px] tracking-[1.2px] uppercase mb-3" style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}>PAYLOAD CMS SETUP</p>
        <div className="flex flex-col gap-2">
          {[
            "Next.js fetches posts from Payload REST API: GET /api/posts",
            "Payload runs on port 3001 (separate server from Next.js)",
            "Payload uses the same PostgreSQL (Neon) database via its own connection",
            "Images/media stored in same S3 bucket as CV assets",
            "Draft posts are not exposed to the public frontend",
          ].map((item, i) => (
            <div key={i} className="flex gap-2">
              <span className="text-[#00F2FF] text-[12px] shrink-0">›</span>
              <span className="text-[#b9cacb] text-[13px]" style={{ fontFamily: "'Inter', sans-serif" }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
