import Link from "next/link";
import {
  Download,
  ArrowRight,
  Server,
  GitBranch,
  Shield,
  Zap,
} from "lucide-react";
import { TerminalBadge } from "../shared/TerminalBadge";
import { SectionHeader } from "../shared/SectionHeader";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const STATS = [
  { value: "10+", label: "YEARS EXP" },
  { value: "500+", label: "DEPLOYMENTS" },
  { value: "99.9%", label: "UPTIME SLA" },
  { value: "50+", label: "CLUSTERS" },
];

const SKILL_TAGS = [
  "Kubernetes",
  "Terraform",
  "AWS",
  "CI/CD",
  "Prometheus",
  "Helm",
  "ArgoCD",
  "Istio",
];

const FEATURED_PROJECTS = [
  {
    id: 1,
    title: "Multi-Region K8s Cluster",
    description:
      "Highly available Kubernetes infrastructure spanning 3 AWS regions with automatic failover and zero-downtime deployments.",
    tags: ["Kubernetes", "AWS", "Terraform"],
    status: "PRODUCTION",
  },
  {
    id: 2,
    title: "GitOps Pipeline Framework",
    description:
      "Complete GitOps workflow with ArgoCD, automated testing gates, and progressive delivery using Flagger.",
    tags: ["ArgoCD", "FluxCD", "GitHub Actions"],
    status: "ACTIVE",
  },
  {
    id: 3,
    title: "Observability Stack",
    description:
      "Full observability platform with Prometheus, Grafana, Loki and OpenTelemetry for distributed tracing.",
    tags: ["Prometheus", "Grafana", "Loki"],
    status: "PRODUCTION",
  },
];

export function HomePage() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: "#131313",
        backgroundImage:
          "linear-gradient(90deg, rgba(0,242,255,0.03) 3.125%, rgba(0,242,255,0) 3.125%), linear-gradient(rgba(0,242,255,0.03) 3.125%, rgba(0,242,255,0) 3.125%), linear-gradient(90deg, rgb(19,19,19) 0%, rgb(19,19,19) 100%)",
      }}
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden border-b border-[rgba(225,253,255,0.2)]">
        {/* Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,242,255,0.15) 0%, transparent 70%)",
            }}
          />
        </div>

        {/* Grid lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,242,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,242,255,1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-8 px-8 text-center max-w-[1024px] mx-auto pt-32 pb-24">
          <TerminalBadge variant="active">SYSTEMS_ONLINE</TerminalBadge>

          <h1
            className="text-[#e1fdff] text-5xl lg:text-[80px] leading-[1.1] tracking-[-3.2px] drop-shadow-[0_0_12.5px_rgba(0,242,255,0.3)]"
            style={{ fontFamily: "'Geist', sans-serif", fontWeight: 800 }}
          >
            Orchestrating Resilient
            <br />
            Systems at Scale
          </h1>

          <p
            className="text-[#b9cacb] text-xl max-w-[600px]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            DevOps, Kubernetes, &amp; Cloud Architecture Expert
          </p>

          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link
              href="/projects"
              className="flex items-center justify-center bg-[#e1fdff] text-[#00363a] px-8 py-5 rounded-[2px] text-[12px] tracking-[1.2px] uppercase shadow-[0_0_7.5px_rgba(0,242,255,0.4)] hover:opacity-90 transition-opacity"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
              }}
            >
              VIEW PROJECTS
            </Link>
            <a
              href="#"
              download
              className="flex items-center gap-2 border border-[rgba(225,253,255,0.5)] text-[#e1fdff] px-8 py-4 rounded-[2px] text-[12px] tracking-[1.2px] uppercase hover:border-[rgba(225,253,255,0.8)] transition-colors"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
              }}
            >
              <Download size={12} />
              DOWNLOAD CV
            </a>
          </div>
        </div>

        {/* Terminal status bar */}
        <div className="absolute bottom-0 left-0 right-0 backdrop-blur-[6px] bg-[rgba(10,10,10,0.6)] border-t border-[rgba(0,242,255,0.15)] px-8 lg:px-16 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6 flex-wrap">
            {[
              { key: "[SYS_HEALTH]", val: "100% OK" },
              { key: "[REGION]", val: "US-EAST-1" },
              { key: "[LOG]", val: "CLUSTER_READY" },
              { key: "[LOG]", val: "PODS_SCALING..." },
            ].map((item, i) => (
              <span
                key={i}
                className="flex items-center gap-2 text-[14px] tracking-[0.28px]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 500,
                }}
              >
                <span className="text-[#b3c5ff]">{item.key}</span>
                <span className="text-[rgba(225,253,255,0.7)]">{item.val}</span>
              </span>
            ))}
          </div>
          <span
            className="text-[#849495] text-[14px] tracking-[0.28px]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
            }}
          >
            UPTIME: 99.999%
          </span>
        </div>
      </section>

      {/* About Teaser - Bento Grid */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-16 py-24">
        <div className="flex flex-col gap-12">
          <SectionHeader label="/ETC/PROFILE" title="Executive Summary" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main about card */}
            <div
              className="lg:col-span-2 backdrop-blur-[6px] rounded-[4px] border border-[rgba(0,242,255,0.15)] p-8 relative overflow-hidden"
              style={{ background: "rgba(10,10,10,0.6)" }}
            >
              <p
                className="text-[#849495] text-[14px] tracking-[0.28px] mb-4"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 500,
                }}
              >
                README.md
              </p>
              <p
                className="text-[#b9cacb] text-[16px] leading-[26px] mb-6"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
              >
                I architect, deploy, and maintain highly available
                infrastructure for mission-critical applications. My approach
                focuses on infrastructure as code, zero-downtime deployments,
                and robust observability to ensure systems run flawlessly under
                pressure.
              </p>
              <div className="flex flex-wrap gap-2">
                {SKILL_TAGS.map((tag) => (
                  <TerminalBadge key={tag}>{tag}</TerminalBadge>
                ))}
              </div>
              <div className="absolute bottom-[20%] left-[1px] right-[1px] h-px opacity-50 bg-gradient-to-r from-transparent via-[rgba(0,242,255,0.8)] to-transparent" />
            </div>

            {/* Stats */}
            <div className="flex flex-col gap-6">
              {STATS.slice(0, 2).map((stat) => (
                <div
                  key={stat.label}
                  className="flex-1 backdrop-blur-[6px] rounded-[4px] border border-[rgba(0,242,255,0.15)] p-6 flex flex-col items-center justify-center relative overflow-hidden"
                  style={{ background: "rgba(10,10,10,0.6)" }}
                >
                  <span
                    className="text-[#e1fdff] text-[40px] tracking-[-0.8px] mb-1"
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-[#b3c5ff] text-[12px] tracking-[1.2px] uppercase"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 700,
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Extra stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.slice(2).map((stat) => (
              <div
                key={stat.label}
                className="backdrop-blur-[6px] rounded-[4px] border border-[rgba(0,242,255,0.15)] p-6 flex flex-col items-center justify-center"
                style={{ background: "rgba(10,10,10,0.6)" }}
              >
                <span
                  className="text-[#e1fdff] text-[32px] tracking-[-0.8px] mb-1"
                  style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[#b3c5ff] text-[12px] tracking-[1.2px] uppercase"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 700,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        className="border-t border-[rgba(225,253,255,0.1)] py-24"
        style={{ background: "rgba(10,10,10,0.4)" }}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader label="/VAR/PROJECTS" title="Featured Work" />
            <Link
              href="/projects"
              className="flex items-center gap-2 text-[#00F2FF] text-[12px] tracking-[1.2px] uppercase hover:opacity-80 transition-opacity"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
              }}
            >
              VIEW ALL <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_PROJECTS.map((project) => (
              <div
                key={project.id}
                className="group backdrop-blur-[6px] rounded-[4px] border border-[rgba(0,242,255,0.15)] p-6 hover:border-[rgba(0,242,255,0.4)] transition-colors cursor-pointer"
                style={{ background: "rgba(10,10,10,0.6)" }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`text-[10px] tracking-[1.4px] uppercase px-2 py-1 rounded-[2px] ${
                      project.status === "PRODUCTION"
                        ? "bg-[rgba(0,242,255,0.1)] text-[#00F2FF] border border-[rgba(0,242,255,0.3)]"
                        : "bg-[rgba(225,253,255,0.05)] text-[#b3c5ff] border border-[rgba(225,253,255,0.15)]"
                    }`}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 700,
                    }}
                  >
                    {project.status}
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-[#849495] group-hover:text-[#00F2FF] transition-colors"
                  />
                </div>
                <h3
                  className="text-[#e1fdff] text-[20px] tracking-[-0.4px] mb-3"
                  style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-[#b9cacb] text-[14px] leading-[22px] mb-4"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <TerminalBadge key={tag}>{tag}</TerminalBadge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 lg:px-16 text-center">
        <div className="max-w-[600px] mx-auto">
          <p
            className="text-[#b3c5ff] text-[14px] tracking-[1.4px] uppercase mb-4"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
            }}
          >
            /CONNECT
          </p>
          <h2
            className="text-[#e1fdff] text-[40px] tracking-[-0.8px] mb-6"
            style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
          >
            Ready to Deploy?
          </h2>
          <p
            className="text-[#b9cacb] text-[16px] leading-[26px] mb-8"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            Let's build something resilient together. I'm available for
            consulting, full-time opportunities, and infrastructure audits.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#e1fdff] text-[#00363a] px-8 py-4 rounded-[2px] text-[12px] tracking-[1.2px] uppercase shadow-[0_0_7.5px_rgba(0,242,255,0.4)] hover:opacity-90 transition-opacity"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
            }}
          >
            INITIALIZE_CONTACT
          </Link>
        </div>
      </section>
    </div>
  );
}
