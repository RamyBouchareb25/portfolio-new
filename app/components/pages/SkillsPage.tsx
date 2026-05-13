import { SectionHeader } from "../shared/SectionHeader";
import { TerminalBadge } from "../shared/TerminalBadge";

const SKILL_CATEGORIES = [
  {
    category: "Container Orchestration",
    label: "ORCHESTRATION",
    skills: [
      { name: "Kubernetes", level: 95, detail: "CKA/CKAD certified, 5yr prod" },
      { name: "Helm", level: 90, detail: "Chart authoring & management" },
      { name: "Kustomize", level: 85, detail: "Environment overlays" },
      { name: "ArgoCD", level: 88, detail: "GitOps delivery" },
      { name: "FluxCD", level: 80, detail: "Pull-based GitOps" },
    ],
  },
  {
    category: "Cloud Infrastructure",
    label: "CLOUD",
    skills: [
      { name: "AWS", level: 92, detail: "Solutions Architect certified" },
      { name: "Terraform", level: 90, detail: "IaC, modules, workspaces" },
      { name: "Pulumi", level: 75, detail: "TypeScript/Python IaC" },
      { name: "Azure", level: 70, detail: "AKS, Azure DevOps" },
      { name: "GCP", level: 68, detail: "GKE, Cloud Run" },
    ],
  },
  {
    category: "CI/CD & Automation",
    label: "AUTOMATION",
    skills: [
      { name: "GitHub Actions", level: 92, detail: "Reusable workflows" },
      { name: "Jenkins", level: 85, detail: "Pipeline as Code" },
      { name: "GitLab CI", level: 82, detail: "Auto DevOps" },
      { name: "Tekton", level: 75, detail: "Cloud-native pipelines" },
      { name: "Ansible", level: 80, detail: "Config management" },
    ],
  },
  {
    category: "Observability",
    label: "OBSERVABILITY",
    skills: [
      { name: "Prometheus", level: 92, detail: "Custom exporters, PromQL" },
      { name: "Grafana", level: 90, detail: "Dashboard design, alerts" },
      { name: "Loki", level: 85, detail: "Log aggregation" },
      { name: "OpenTelemetry", level: 80, detail: "Distributed tracing" },
      { name: "Datadog", level: 78, detail: "APM, synthetics" },
    ],
  },
  {
    category: "Networking & Security",
    label: "SECURITY",
    skills: [
      { name: "Istio", level: 85, detail: "Service mesh, mTLS" },
      { name: "Cilium", level: 80, detail: "eBPF networking" },
      { name: "Vault", level: 82, detail: "Secrets management" },
      { name: "OPA/Gatekeeper", level: 78, detail: "Policy enforcement" },
      { name: "Falco", level: 72, detail: "Runtime security" },
    ],
  },
  {
    category: "Languages & Scripting",
    label: "CODE",
    skills: [
      { name: "Bash/Shell", level: 90, detail: "Automation scripts" },
      { name: "Python", level: 82, detail: "Tooling & automation" },
      { name: "Go", level: 70, detail: "Operators, CLIs" },
      { name: "YAML/JSON", level: 95, detail: "K8s manifests, configs" },
      { name: "TypeScript", level: 65, detail: "IaC with Pulumi" },
    ],
  },
];

const CERTIFICATIONS = [
  {
    name: "Certified Kubernetes Administrator (CKA)",
    issuer: "CNCF",
    year: "2023",
    badge: "CKA",
  },
  {
    name: "Certified Kubernetes App Developer (CKAD)",
    issuer: "CNCF",
    year: "2023",
    badge: "CKAD",
  },
  {
    name: "AWS Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    year: "2022",
    badge: "AWS-SAP",
  },
  {
    name: "Certified Kubernetes Security Specialist (CKS)",
    issuer: "CNCF",
    year: "2024",
    badge: "CKS",
  },
  {
    name: "HashiCorp Terraform Associate",
    issuer: "HashiCorp",
    year: "2022",
    badge: "TF-A",
  },
];

function SkillBar({ name, level, detail }: { name: string; level: number; detail: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="text-[#e1fdff] text-[14px]"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
          >
            {name}
          </span>
          <span
            className="text-[#849495] text-[12px] tracking-[0.28px]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            {detail}
          </span>
        </div>
        <span
          className="text-[#b3c5ff] text-[12px] tracking-[0.5px]"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
        >
          {level}%
        </span>
      </div>
      <div className="h-[2px] bg-[rgba(225,253,255,0.08)] rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all"
          style={{
            width: `${level}%`,
            background: level >= 90
              ? "linear-gradient(90deg, #00F2FF, rgba(0,242,255,0.6))"
              : level >= 80
              ? "linear-gradient(90deg, #b3c5ff, rgba(179,197,255,0.6))"
              : "linear-gradient(90deg, rgba(225,253,255,0.5), rgba(225,253,255,0.2))",
          }}
        />
      </div>
    </div>
  );
}

export function SkillsPage() {
  return (
    <div
      className="min-h-screen pt-24"
      style={{
        background: "#131313",
        backgroundImage:
          "linear-gradient(90deg, rgba(0,242,255,0.03) 3.125%, rgba(0,242,255,0) 3.125%), linear-gradient(rgba(0,242,255,0.03) 3.125%, rgba(0,242,255,0) 3.125%), linear-gradient(90deg, rgb(19,19,19) 0%, rgb(19,19,19) 100%)",
      }}
    >
      <section className="max-w-[1440px] mx-auto px-8 lg:px-16 py-16 border-b border-[rgba(225,253,255,0.1)]">
        <div className="flex flex-col gap-4">
          <SectionHeader label="/ETC/SKILLS" title="Tech Stack & Core Systems" />
          <p
            className="text-[#b9cacb] text-[16px] leading-[26px] max-w-[600px]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            Five years of production Kubernetes, cloud infrastructure, and platform engineering — with receipts.
          </p>
        </div>
      </section>

      {/* Skills grid */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="backdrop-blur-[6px] rounded-[4px] border border-[rgba(0,242,255,0.15)] p-6"
              style={{ background: "rgba(10,10,10,0.6)" }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3
                  className="text-[#e1fdff] text-[18px] tracking-[-0.3px]"
                  style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
                >
                  {cat.category}
                </h3>
                <span
                  className="text-[#b3c5ff] text-[12px] tracking-[1.2px]"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
                >
                  [{cat.label}]
                </span>
              </div>
              <div className="flex flex-col gap-4">
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} {...skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section
        className="border-t border-[rgba(225,253,255,0.1)] py-16"
        style={{ background: "rgba(10,10,10,0.3)" }}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="mb-12">
            <SectionHeader label="/ETC/CERTS" title="Certifications" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.name}
                className="backdrop-blur-[6px] rounded-[4px] border border-[rgba(0,242,255,0.15)] p-5 flex flex-col gap-3 hover:border-[rgba(0,242,255,0.35)] transition-colors"
                style={{ background: "rgba(10,10,10,0.6)" }}
              >
                <div
                  className="w-12 h-12 rounded-[4px] flex items-center justify-center text-[10px] tracking-[0.5px] text-[#00F2FF] border border-[rgba(0,242,255,0.3)] bg-[rgba(0,242,255,0.08)]"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
                >
                  {cert.badge}
                </div>
                <div>
                  <p
                    className="text-[#e1fdff] text-[13px] leading-[20px] mb-1"
                    style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                  >
                    {cert.name}
                  </p>
                  <p
                    className="text-[#849495] text-[12px] tracking-[0.28px]"
                    style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
                  >
                    {cert.issuer} · {cert.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
