import { Download } from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";
import { TerminalBadge } from "../shared/TerminalBadge";

const EXPERIENCE = [
  {
    role: "Senior Platform Engineer",
    company: "CloudCorp Inc.",
    period: "2022 – Present",
    location: "Remote",
    bullets: [
      "Architected multi-region Kubernetes infrastructure serving 50M+ daily requests with 99.99% uptime",
      "Reduced cloud spend by $550K annually through spot instance automation and right-sizing",
      "Led migration of 300+ microservices from VMs to Kubernetes with zero downtime",
      "Built internal developer platform reducing deployment times from 45 minutes to under 3 minutes",
    ],
  },
  {
    role: "DevOps Engineer",
    company: "FinTech Startup",
    period: "2020 – 2022",
    location: "New York, NY",
    bullets: [
      "Designed and implemented CI/CD pipelines processing 500+ deployments per day",
      "Implemented GitOps with ArgoCD across 12 Kubernetes clusters",
      "Built observability stack with Prometheus, Grafana, and distributed tracing",
      "Achieved SOC2 Type II compliance by implementing security controls and audit logging",
    ],
  },
  {
    role: "Infrastructure Engineer",
    company: "Media Company",
    period: "2018 – 2020",
    location: "Los Angeles, CA",
    bullets: [
      "Migrated on-premise infrastructure to AWS, achieving 40% cost reduction",
      "Containerized legacy monolith applications using Docker and Kubernetes",
      "Implemented HashiCorp Vault for secrets management across 200+ services",
      "Built infrastructure monitoring with 200+ custom Prometheus alerting rules",
    ],
  },
];

const PERSONAL = [
  { label: "Location", value: "Remote (US-East timezone)" },
  { label: "Languages", value: "English (Native), Spanish (Conversational)" },
  { label: "Education", value: "B.S. Computer Science, State University" },
  { label: "Open To", value: "Remote, Contract, Full-time" },
];

export function AboutPage() {
  return (
    <div
      className="min-h-screen pt-24"
      style={{
        background: "#131313",
        backgroundImage:
          "linear-gradient(90deg, rgba(0,242,255,0.03) 3.125%, rgba(0,242,255,0) 3.125%), linear-gradient(rgba(0,242,255,0.03) 3.125%, rgba(0,242,255,0) 3.125%), linear-gradient(90deg, rgb(19,19,19) 0%, rgb(19,19,19) 100%)",
      }}
    >
      {/* Header */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-16 py-16 border-b border-[rgba(225,253,255,0.1)]">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 flex flex-col gap-5">
            <SectionHeader label="/ETC/PROFILE" title="About Me" />
            <p
              className="text-[#b9cacb] text-[16px] leading-[26px]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              I architect, deploy, and maintain highly available infrastructure for mission-critical applications.
              My approach focuses on infrastructure as code, zero-downtime deployments, and robust observability to
              ensure systems run flawlessly under pressure.
            </p>
            <p
              className="text-[#b9cacb] text-[16px] leading-[26px]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              With 10+ years in the trenches of cloud-native infrastructure, I've led migrations from bare metal to
              multi-cloud Kubernetes, built platform teams from scratch, and helped companies scale from startup to
              enterprise without losing reliability.
            </p>
            <a
              href="#"
              download
              className="inline-flex items-center gap-2 border border-[rgba(225,253,255,0.4)] text-[#e1fdff] px-6 py-3 rounded-[2px] text-[12px] tracking-[1.2px] uppercase hover:border-[rgba(225,253,255,0.7)] transition-colors w-fit mt-2"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
            >
              <Download size={12} /> DOWNLOAD_RESUME.PDF
            </a>
          </div>

          {/* Profile card */}
          <div
            className="backdrop-blur-[6px] rounded-[4px] border border-[rgba(0,242,255,0.15)] p-6"
            style={{ background: "rgba(10,10,10,0.6)" }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[rgba(0,242,255,0.2)] to-[rgba(179,197,255,0.1)] border border-[rgba(0,242,255,0.3)] flex items-center justify-center mb-5">
              <span
                className="text-[#00F2FF] text-[24px]"
                style={{ fontFamily: "'Geist', sans-serif", fontWeight: 800 }}
              >
                K8
              </span>
            </div>
            <h3
              className="text-[#e1fdff] text-[20px] tracking-[-0.4px] mb-1"
              style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
            >
              DevOps Engineer
            </h3>
            <p
              className="text-[#b3c5ff] text-[13px] tracking-[0.28px] mb-5"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
            >
              Platform Engineer · K8s Expert · Cloud Architect
            </p>
            <div className="flex flex-col gap-3">
              {PERSONAL.map((item) => (
                <div key={item.label} className="flex flex-col gap-0.5">
                  <span
                    className="text-[#849495] text-[11px] tracking-[1.2px] uppercase"
                    style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-[#b9cacb] text-[13px]"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                  >
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-16 py-16">
        <div className="mb-12">
          <SectionHeader label="/VAR/LOG/CAREER" title="Work Experience" />
        </div>

        <div className="flex flex-col gap-1">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="relative pl-8 pb-12">
              {/* Timeline line */}
              {i < EXPERIENCE.length - 1 && (
                <div className="absolute left-[11px] top-6 bottom-0 w-px bg-gradient-to-b from-[rgba(0,242,255,0.4)] to-[rgba(0,242,255,0.05)]" />
              )}
              {/* Dot */}
              <div className="absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border-2 border-[rgba(0,242,255,0.5)] bg-[#131313] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#00F2FF]" />
              </div>

              <div
                className="backdrop-blur-[6px] rounded-[4px] border border-[rgba(0,242,255,0.12)] p-6 hover:border-[rgba(0,242,255,0.25)] transition-colors"
                style={{ background: "rgba(10,10,10,0.5)" }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3
                      className="text-[#e1fdff] text-[20px] tracking-[-0.4px]"
                      style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className="text-[#b3c5ff] text-[14px] tracking-[0.28px]"
                      style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
                    >
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <TerminalBadge>{exp.period}</TerminalBadge>
                </div>
                <ul className="flex flex-col gap-2">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-[#00F2FF] mt-1 shrink-0 text-[12px]">›</span>
                      <span
                        className="text-[#b9cacb] text-[14px] leading-[22px]"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                      >
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
