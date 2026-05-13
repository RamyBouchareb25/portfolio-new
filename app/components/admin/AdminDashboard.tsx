import {
  FolderOpen,
  FileText,
  Award,
  Cpu,
  Upload,
  Activity,
} from "lucide-react";
import Link from "next/link";

const STATS = [
  {
    icon: FolderOpen,
    label: "Projects",
    value: "6",
    href: "/admin/projects",
    color: "#00F2FF",
  },
  {
    icon: Cpu,
    label: "Skills",
    value: "30+",
    href: "/admin/skills",
    color: "#b3c5ff",
  },
  {
    icon: Award,
    label: "Certifications",
    value: "5",
    href: "/admin/certifications",
    color: "#e1fdff",
  },
  {
    icon: FileText,
    label: "Blog Posts",
    value: "5",
    href: "/admin/blog",
    color: "#00F2FF",
  },
];

const RECENT_ACTIVITY = [
  {
    action: "Updated",
    entity: "Project: Multi-Region K8s Cluster",
    time: "2h ago",
  },
  { action: "Published", entity: "Post: GitOps at Scale", time: "1d ago" },
  { action: "Uploaded", entity: "Resume_2024.pdf", time: "3d ago" },
  { action: "Added", entity: "Certification: CKS", time: "1w ago" },
  { action: "Updated", entity: "About Me — Executive Summary", time: "2w ago" },
];

export function AdminDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1
          className="text-[#e1fdff] text-[28px] tracking-[-0.5px] mb-1"
          style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
        >
          Dashboard
        </h1>
        <p
          className="text-[#849495] text-[13px] tracking-[0.28px]"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
        >
          [SYSTEM: OPERATIONAL // ALL_SERVICES_RUNNING]
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map(({ icon: Icon, label, value, href, color }) => (
          <Link
            key={label}
            href={href}
            className="backdrop-blur-[6px] rounded-[4px] border border-[rgba(0,242,255,0.12)] p-5 hover:border-[rgba(0,242,255,0.3)] transition-colors flex flex-col gap-3"
            style={{ background: "rgba(10,10,10,0.6)" }}
          >
            <div className="flex items-center justify-between">
              <Icon size={18} style={{ color }} />
              <span
                className="text-[32px] tracking-[-1px]"
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 700,
                  color,
                }}
              >
                {value}
              </span>
            </div>
            <span
              className="text-[#849495] text-[12px] tracking-[1.2px] uppercase"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
              }}
            >
              {label}
            </span>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent activity */}
        <div
          className="backdrop-blur-[6px] rounded-[4px] border border-[rgba(0,242,255,0.12)] p-6"
          style={{ background: "rgba(10,10,10,0.6)" }}
        >
          <div className="flex items-center gap-2 mb-5">
            <Activity size={14} className="text-[#00F2FF]" />
            <span
              className="text-[#b3c5ff] text-[12px] tracking-[1.4px] uppercase"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
              }}
            >
              RECENT_ACTIVITY
            </span>
          </div>
          <div className="flex flex-col gap-3">
            {RECENT_ACTIVITY.map((item, i) => (
              <div
                key={i}
                className="flex items-start justify-between gap-4 py-2 border-b border-[rgba(225,253,255,0.05)] last:border-0"
              >
                <div className="flex items-start gap-3">
                  <span className="text-[#00F2FF] text-[12px] mt-0.5 shrink-0">
                    ›
                  </span>
                  <div>
                    <span
                      className="text-[#b3c5ff] text-[12px] tracking-[0.5px]"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 500,
                      }}
                    >
                      {item.action}
                    </span>{" "}
                    <span
                      className="text-[#b9cacb] text-[13px]"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      {item.entity}
                    </span>
                  </div>
                </div>
                <span
                  className="text-[#849495] text-[11px] tracking-[0.28px] shrink-0"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 500,
                  }}
                >
                  {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div
          className="backdrop-blur-[6px] rounded-[4px] border border-[rgba(0,242,255,0.12)] p-6"
          style={{ background: "rgba(10,10,10,0.6)" }}
        >
          <span
            className="text-[#b3c5ff] text-[12px] tracking-[1.4px] uppercase mb-5 block"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
            }}
          >
            QUICK_ACTIONS
          </span>
          <div className="grid grid-cols-1 gap-3">
            {[
              {
                label: "Add New Project",
                href: "/admin/projects?action=new",
                icon: FolderOpen,
              },
              { label: "Upload New CV", href: "/admin/cv", icon: Upload },
              {
                label: "Add Certification",
                href: "/admin/certifications?action=new",
                icon: Award,
              },
              { label: "Edit About Me", href: "/admin/about", icon: Cpu },
            ].map(({ label, href, icon: Icon }) => (
              <Link
                key={label}
                href={href}
                className="flex items-center gap-3 px-4 py-3 rounded-[2px] border border-[rgba(225,253,255,0.08)] text-[#b9cacb] hover:border-[rgba(0,242,255,0.3)] hover:text-[#e1fdff] transition-colors"
              >
                <Icon size={14} className="text-[#849495]" />
                <span
                  className="text-[13px]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 500,
                  }}
                >
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Next.js + Payload CMS info banner */}
      <div
        className="rounded-[4px] border border-[rgba(179,197,255,0.2)] p-5"
        style={{ background: "rgba(179,197,255,0.05)" }}
      >
        <p
          className="text-[#b3c5ff] text-[12px] tracking-[1.2px] uppercase mb-2"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
        >
          [INTEGRATION_STATUS]
        </p>
        <p
          className="text-[#b9cacb] text-[13px] leading-[20px]"
          style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
        >
          Blog posts are managed via{" "}
          <strong className="text-[#e1fdff]">Payload CMS</strong> at{" "}
          <code
            className="text-[#00F2FF] text-[12px]"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            /api/payload
          </code>
          . CV/Resume uploads go to an{" "}
          <strong className="text-[#e1fdff]">S3-compatible bucket</strong>. All
          other data persists to{" "}
          <strong className="text-[#e1fdff]">PostgreSQL (Neon)</strong> via
          Prisma ORM.
        </p>
      </div>
    </div>
  );
}
