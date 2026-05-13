"use client";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";
import { TerminalBadge } from "../shared/TerminalBadge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import imgServerArch from "@/app/imports/BlogSystemLogs/a61b601d091610422e356262f0bf9f00dd21364c.png";
import imgCodeScreen from "@/app/imports/BlogSystemLogs/f741fcf7e3113d923bbf0921cc0f4ec5fbc1e0c2.png";
import imgDataViz from "@/app/imports/BlogSystemLogs/503c2fa24f0c4652e8b82202e5bf211b61164067.png";
import imgNetworkGrid from "@/app/imports/BlogSystemLogs/7cddd82495a5f7ff2f2064b59e90c26b88a02b50.png";
import imgSecurity from "@/app/imports/BlogSystemLogs/2cb1bf1791528c05874fec20b867ff9757f55389.png";

const POSTS = [
  {
    id: 1,
    slug: "kubernetes-spot-instances-deep-dive",
    title:
      "Deep Dive: Running Kubernetes on Spot Instances Without Losing Your Mind",
    excerpt:
      "Spot instances can cut your Kubernetes compute costs by 80%, but require careful architecture. Here's exactly how to do it safely in production.",
    tags: ["Kubernetes", "AWS", "Cost"],
    readTime: "12 min",
    date: "2024-01-15",
    featured: true,
    image: imgServerArch,
  },
  {
    id: 2,
    slug: "gitops-argocd-production",
    title: "GitOps at Scale: ArgoCD Patterns for Large Organizations",
    excerpt:
      "Lessons from managing 200+ ArgoCD applications across multiple clusters. App-of-Apps, ApplicationSets, and multi-tenancy patterns that actually work.",
    tags: ["GitOps", "ArgoCD", "CI/CD"],
    readTime: "8 min",
    date: "2024-02-03",
    featured: true,
    image: imgCodeScreen,
  },
  {
    id: 3,
    slug: "prometheus-cardinality-hell",
    title: "Escaping Prometheus Cardinality Hell",
    excerpt:
      "How we reduced Prometheus memory usage by 70% by taming high-cardinality metrics, implementing recording rules, and restructuring our label strategy.",
    tags: ["Prometheus", "Observability"],
    readTime: "10 min",
    date: "2024-02-28",
    featured: false,
    image: imgDataViz,
  },
  {
    id: 4,
    slug: "cilium-ebpf-networking",
    title: "Replacing kube-proxy with Cilium eBPF: A Production Migration",
    excerpt:
      "Step-by-step guide to migrating from kube-proxy to Cilium eBPF for a 40% latency improvement and enhanced network visibility.",
    tags: ["Cilium", "eBPF", "Networking"],
    readTime: "15 min",
    date: "2024-03-12",
    featured: false,
    image: imgNetworkGrid,
  },
  {
    id: 5,
    slug: "vault-kubernetes-secrets",
    title: "Zero Hardcoded Secrets: HashiCorp Vault + Kubernetes",
    excerpt:
      "Complete guide to dynamic secret injection, sidecar vs CSI driver, and building a secrets management culture that scales.",
    tags: ["Vault", "Security", "Kubernetes"],
    readTime: "9 min",
    date: "2024-03-28",
    featured: false,
    image: imgSecurity,
  },
];

// const ALL_TAGS = [
//   "All",
//   "Kubernetes",
//   "AWS",
//   "GitOps",
//   "Observability",
//   "Security",
//   "CI/CD",
// ];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function BlogPage() {
  const featured = POSTS.filter((p) => p.featured);
  const rest = POSTS.filter((p) => !p.featured);

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
      <section className="max-w-360 mx-auto px-8 lg:px-16 py-16 border-b border-[rgba(225,253,255,0.1)]">
        <div className="flex flex-col gap-4">
          <SectionHeader label="/VAR/LOG/BLOG" title="System Logs // Blog" />
          <p
            className="text-[#b9cacb] text-[16px] leading-6.5 max-w-150"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            Technical deep dives, production war stories, and engineering
            insights from the trenches of cloud-native infrastructure.
          </p>
        </div>
      </section>

      {/* Featured posts */}
      <section className="max-w-360 mx-auto px-8 lg:px-16 py-12">
        <p
          className="text-[#b3c5ff] text-[12px] tracking-[1.4px] uppercase mb-6"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
        >
          [FEATURED_ENTRIES]
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {featured.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group backdrop-blur-[6px] rounded-lg border border-[rgba(0,242,255,0.15)] hover:border-[rgba(0,242,255,0.4)] transition-all overflow-hidden flex flex-col"
              style={{ background: "rgba(10,10,10,0.6)" }}
            >
              <div className="h-52 overflow-hidden border-b border-[rgba(0,242,255,0.15)]">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  {post.tags.map((tag) => (
                    <TerminalBadge key={tag}>{tag}</TerminalBadge>
                  ))}
                </div>
                <h2
                  className="text-[#e1fdff] text-[22px] leading-7.5 tracking-[-0.4px] group-hover:text-[#00F2FF] transition-colors"
                  style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
                >
                  {post.title}
                </h2>
                <p
                  className="text-[#b9cacb] text-[14px] leading-5.5 flex-1"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-[rgba(225,253,255,0.08)]">
                  <div className="flex items-center gap-4">
                    <span
                      className="flex items-center gap-1.5 text-[#849495] text-[12px] tracking-[0.28px]"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 500,
                      }}
                    >
                      <Calendar size={11} /> {formatDate(post.date)}
                    </span>
                    <span
                      className="flex items-center gap-1.5 text-[#849495] text-[12px] tracking-[0.28px]"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 500,
                      }}
                    >
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>
                  <ArrowRight
                    size={16}
                    className="text-[#849495] group-hover:text-[#00F2FF] transition-colors"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Recent posts */}
        <p
          className="text-[#b3c5ff] text-[12px] tracking-[1.4px] uppercase mb-6"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
        >
          [RECENT_ENTRIES]
        </p>

        <div className="flex flex-col gap-4">
          {rest.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group backdrop-blur-[6px] rounded-lg border border-[rgba(0,242,255,0.15)] hover:border-[rgba(0,242,255,0.4)] transition-all overflow-hidden flex flex-col md:flex-row"
              style={{ background: "rgba(10,10,10,0.6)" }}
            >
              <div className="w-full md:w-48 h-36 md:h-auto overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-[rgba(0,242,255,0.15)]">
                <ImageWithFallback
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                />
              </div>
              <div className="p-5 flex flex-col gap-2 flex-1 justify-center">
                <div className="flex items-center gap-3 flex-wrap">
                  {post.tags.map((tag) => (
                    <TerminalBadge key={tag}>{tag}</TerminalBadge>
                  ))}
                </div>
                <h3
                  className="text-[#e1fdff] text-[18px] leading-6.5 tracking-[-0.3px] group-hover:text-[#00F2FF] transition-colors"
                  style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
                >
                  {post.title}
                </h3>
                <p
                  className="text-[#849495] text-[14px] leading-5.5 line-clamp-2"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4">
                  <span
                    className="flex items-center gap-1.5 text-[#849495] text-[12px] tracking-[0.28px]"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 500,
                    }}
                  >
                    <Calendar size={11} /> {formatDate(post.date)}
                  </span>
                  <span
                    className="flex items-center gap-1.5 text-[#849495] text-[12px] tracking-[0.28px]"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 500,
                    }}
                  >
                    <Clock size={11} /> {post.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
