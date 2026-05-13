"use client";
import { useState } from "react";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { TerminalBadge } from "../shared/TerminalBadge";
import { SectionHeader } from "../shared/SectionHeader";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import imgArchitecture from "@/app/imports/ProjectsInfraLogs/a233f853c9ab7822d6a88b66f93a25c675b77d8d.png";

const ALL_TAGS = [
  "All",
  "Kubernetes",
  "AWS",
  "Terraform",
  "CI/CD",
  "Observability",
  "Security",
  "Networking",
];

const PROJECTS = [
  {
    id: 1,
    title: "Multi-Region Kubernetes Cluster",
    slug: "multi-region-k8s",
    description:
      "Highly available Kubernetes infrastructure spanning 3 AWS regions with automatic failover, global load balancing, and zero-downtime deployments using canary releases.",
    longDescription:
      "This project implements a production-grade multi-region Kubernetes setup with cross-cluster service mesh, automated failover, and GitOps-driven deployments.",
    tags: ["Kubernetes", "AWS", "Terraform"],
    status: "PRODUCTION",
    metrics: { uptime: "99.99%", latency: "<50ms", nodes: "180+" },
    image: null,
    github: "https://github.com",
    demo: null,
  },
  {
    id: 2,
    title: "GitOps Pipeline Framework",
    slug: "gitops-pipeline",
    description:
      "Complete GitOps workflow with ArgoCD, automated testing gates, progressive delivery using Flagger, and automated rollback on SLO violations.",
    tags: ["CI/CD", "Kubernetes", "Terraform"],
    status: "ACTIVE",
    metrics: { deployments: "500+", rollbacks: "0", coverage: "95%" },
    image: null,
    github: "https://github.com",
    demo: null,
  },
  {
    id: 3,
    title: "Full Observability Stack",
    slug: "observability-stack",
    description:
      "Enterprise observability platform with Prometheus, Grafana, Loki for log aggregation, Tempo for distributed tracing, and custom dashboards.",
    tags: ["Observability", "Kubernetes", "AWS"],
    status: "PRODUCTION",
    metrics: { metrics: "2M+/min", retention: "90 days", alerts: "200+" },
    image: imgArchitecture,
    github: "https://github.com",
    demo: "https://grafana.example.com",
  },
  {
    id: 4,
    title: "Zero-Trust Network Policy",
    slug: "zero-trust-network",
    description:
      "Implemented eBPF-based network policies with Cilium, mTLS enforcement via Istio service mesh, and comprehensive network flow logging.",
    tags: ["Security", "Networking", "Kubernetes"],
    status: "PRODUCTION",
    metrics: { policies: "500+", coverage: "100%", incidents: "0" },
    image: null,
    github: "https://github.com",
    demo: null,
  },
  {
    id: 5,
    title: "Disaster Recovery Automation",
    slug: "dr-automation",
    description:
      "Automated DR testing framework with Velero backups, cross-region replication, chaos engineering with LitmusChaos, and RTO <15min.",
    tags: ["AWS", "Kubernetes", "Terraform"],
    status: "ACTIVE",
    metrics: { rto: "<15min", rpo: "<1min", tests: "Weekly" },
    image: null,
    github: "https://github.com",
    demo: null,
  },
  {
    id: 6,
    title: "Cost Optimization Platform",
    slug: "cost-optimization",
    description:
      "Reduced AWS costs by 65% through spot instance automation, right-sizing recommendations, and Karpenter for intelligent node provisioning.",
    tags: ["AWS", "Kubernetes", "Observability"],
    status: "PRODUCTION",
    metrics: { savings: "65%", monthly: "$45K+", nodes: "Dynamic" },
    image: null,
    github: "https://github.com",
    demo: null,
  },
];

export function ProjectsPage() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered =
    activeTag === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(activeTag));

  return (
    <div
      className="min-h-screen pt-24"
      style={{
        background: "#131313",
        backgroundImage:
          "linear-gradient(90deg, rgba(0,242,255,0.03) 3.125%, rgba(0,242,255,0) 3.125%), linear-gradient(rgba(0,242,255,0.03) 3.125%, rgba(0,242,255,0) 3.125%), linear-gradient(90deg, rgb(19,19,19) 0%, rgb(19,19,19) 100%)",
      }}
    >
      {/* Page Header */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-16 py-16 border-b border-[rgba(225,253,255,0.1)]">
        <div className="flex flex-col gap-6">
          <SectionHeader
            label="/VAR/PROJECTS"
            title="Infrastructure Projects"
          />
          <p
            className="text-[#b9cacb] text-[16px] leading-[26px] max-w-[600px]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            A catalog of production systems I've architected and deployed — each
            battle-tested under real traffic and real failure conditions.
          </p>

          {/* Filter tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {ALL_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1.5 rounded-[2px] text-[12px] tracking-[1.2px] uppercase border transition-colors ${
                  activeTag === tag
                    ? "bg-[rgba(0,242,255,0.15)] border-[rgba(0,242,255,0.5)] text-[#00F2FF]"
                    : "bg-transparent border-[rgba(225,253,255,0.15)] text-[#849495] hover:border-[rgba(225,253,255,0.3)] hover:text-[#b9cacb]"
                }`}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                }}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="group backdrop-blur-[6px] rounded-[4px] border border-[rgba(0,242,255,0.15)] hover:border-[rgba(0,242,255,0.4)] transition-all overflow-hidden flex flex-col"
              style={{ background: "rgba(10,10,10,0.6)" }}
            >
              {/* Project image */}
              {project.image && (
                <div className="h-48 overflow-hidden border-b border-[rgba(0,242,255,0.15)]">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity"
                  />
                </div>
              )}

              <div className="flex flex-col flex-1 p-6 gap-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <span
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
                  </span>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#849495] hover:text-[#e1fdff] transition-colors"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#849495] hover:text-[#00F2FF] transition-colors"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="text-[#e1fdff] text-[20px] tracking-[-0.4px]"
                  style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
                >
                  {project.title}
                </h3>

                {/* Description */}
                <p
                  className="text-[#b9cacb] text-[14px] leading-[22px] flex-1"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  {project.description}
                </p>

                {/* Metrics */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-3 pt-2 border-t border-[rgba(225,253,255,0.08)]">
                    {Object.entries(project.metrics).map(([key, val]) => (
                      <div key={key} className="text-center">
                        <div
                          className="text-[#e1fdff] text-[14px] tracking-[-0.3px]"
                          style={{
                            fontFamily: "'Geist', sans-serif",
                            fontWeight: 700,
                          }}
                        >
                          {val}
                        </div>
                        <div
                          className="text-[#849495] text-[10px] tracking-[0.8px] uppercase"
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontWeight: 500,
                          }}
                        >
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <TerminalBadge key={tag}>{tag}</TerminalBadge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <p
              className="text-[#849495] text-[14px] tracking-[0.28px]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
              }}
            >
              NO_PROJECTS_FOUND // Filter: {activeTag}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
