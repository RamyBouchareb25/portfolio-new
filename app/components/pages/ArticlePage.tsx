import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Share2 } from "lucide-react";
import { TerminalBadge } from "../shared/TerminalBadge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import imgArticleHero from "@/app/imports/ArticleNodeDeepDive/effe18e504183e602c5a355d8b6355f855f109c0.png";

const ARTICLE_CONTENT = [
  {
    type: "paragraph",
    text: "Deploying Kubernetes in production is often synonymous with high infrastructure costs. While managed services like EKS, GKE, or AKS simplify operations, the compute costs can scale linearly. Leveraging AWS Spot Instances (or equivalent preemptible VMs) offers massive savings, but requires architectural resilience to handle sudden node termination.",
  },
  {
    type: "heading2",
    text: "1. The Architecture of Ephemeral Compute",
  },
  {
    type: "paragraph",
    text: "The core challenge is that a spot instance can be reclaimed with only a 2-minute warning. Our architecture must be designed assuming failure is not just possible, but imminent and frequent.",
  },
  {
    type: "blockquote",
    text: '"In a cloud-native world, infrastructure is ephemeral. Treat your servers like cattle, not pets. With spot instances, your cattle are on a very strict, unpredictable timer."',
  },
  {
    type: "heading3",
    text: "Node Groups Strategy",
  },
  {
    type: "list",
    items: [
      {
        title: "On-Demand Node Group:",
        text: "Minimum 3 nodes spread across AZs for critical control plane components and stateful workloads.",
      },
      {
        title: "Spot Node Group:",
        text: "Autoscaling group for stateless microservices, workers, and batch jobs. Use multiple instance types.",
      },
      {
        title: "Karpenter Integration:",
        text: "Use Karpenter for intelligent, bin-packing node provisioning that automatically selects the cheapest available spot capacity.",
      },
    ],
  },
  {
    type: "heading2",
    text: "2. Making Workloads Spot-Tolerant",
  },
  {
    type: "paragraph",
    text: "For a workload to safely run on spot instances, it must handle interruption gracefully. This means proper PodDisruptionBudgets, multiple replicas, and graceful shutdown logic.",
  },
  {
    type: "code",
    language: "yaml",
    text: `apiVersion: apps/v1
kind: Deployment
metadata:
  name: api-server
spec:
  replicas: 3
  template:
    spec:
      affinity:
        podAntiAffinity:
          requiredDuringSchedulingIgnoredDuringExecution:
          - topologyKey: topology.kubernetes.io/zone
      tolerations:
      - key: "spot"
        operator: "Exists"
        effect: "NoSchedule"
      terminationGracePeriodSeconds: 60`,
  },
  {
    type: "heading2",
    text: "3. Cost Analysis & Results",
  },
  {
    type: "paragraph",
    text: "After migrating 80% of our workloads to spot instances with this architecture, we achieved a 72% reduction in compute costs. Over 18 months, we observed zero spot-related incidents that caused user-facing downtime, with an average of 2-3 spot interruptions per week that were handled transparently.",
  },
];

export function ArticlePage() {
  const { slug } = useParams();

  const postMeta = {
    title:
      "Deep Dive: Running Kubernetes on Spot Instances Without Losing Your Mind",
    date: "2024-01-15",
    readTime: "12 min",
    tags: ["Kubernetes", "AWS", "Cost Optimization"],
    author: "DevOps Engineer",
  };

  return (
    <div
      className="min-h-screen pt-24"
      style={{
        background: "#131313",
        backgroundImage:
          "linear-gradient(90deg, rgba(0,242,255,0.03) 3.125%, rgba(0,242,255,0) 3.125%), linear-gradient(rgba(0,242,255,0.03) 3.125%, rgba(0,242,255,0) 3.125%), linear-gradient(90deg, rgb(19,19,19) 0%, rgb(19,19,19) 100%)",
      }}
    >
      {/* Article Header */}
      <article className="max-w-[800px] mx-auto px-8 py-12">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[#849495] hover:text-[#e1fdff] text-[12px] tracking-[1.2px] uppercase transition-colors mb-8"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
        >
          <ArrowLeft size={12} /> BACK_TO_LOGS
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {postMeta.tags.map((tag) => (
            <TerminalBadge key={tag}>{tag}</TerminalBadge>
          ))}
        </div>

        {/* Title */}
        <h1
          className="text-[#e1fdff] text-[36px] md:text-[48px] leading-[1.15] tracking-[-1.5px] mb-6"
          style={{ fontFamily: "'Geist', sans-serif", fontWeight: 800 }}
        >
          {postMeta.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-6 pb-8 border-b border-[rgba(225,253,255,0.1)]">
          <span
            className="flex items-center gap-1.5 text-[#849495] text-[12px] tracking-[0.28px]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
            }}
          >
            <Calendar size={11} />
            {new Date(postMeta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </span>
          <span
            className="flex items-center gap-1.5 text-[#849495] text-[12px] tracking-[0.28px]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
            }}
          >
            <Clock size={11} /> {postMeta.readTime} read
          </span>
          <button className="flex items-center gap-1.5 text-[#849495] hover:text-[#e1fdff] text-[12px] tracking-[0.28px] transition-colors ml-auto">
            <Share2 size={11} /> Share
          </button>
        </div>

        {/* Hero image */}
        <div className="h-64 md:h-80 rounded-[4px] overflow-hidden border border-[rgba(0,242,255,0.15)] my-8">
          <ImageWithFallback
            src={imgArticleHero}
            alt={postMeta.title}
            className="w-full h-full object-cover opacity-70"
          />
        </div>

        {/* Article content */}
        <div className="flex flex-col gap-6">
          {ARTICLE_CONTENT.map((block, i) => {
            if (block.type === "paragraph") {
              return (
                <p
                  key={i}
                  className="text-[#e5e2e1] text-[16px] leading-[25.6px]"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  {block.text}
                </p>
              );
            }
            if (block.type === "heading2") {
              return (
                <div key={i} className="relative pt-4">
                  <div className="absolute bottom-0 left-0 right-0 h-px opacity-20 bg-[rgba(225,253,255,0.2)]" />
                  <h2
                    className="text-[#e1fdff] text-[24px] pb-4 border-b border-[rgba(225,253,255,0.2)]"
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {block.text}
                  </h2>
                </div>
              );
            }
            if (block.type === "heading3") {
              return (
                <h3
                  key={i}
                  className="text-[#b3c5ff] text-[20px]"
                  style={{ fontFamily: "'Geist', sans-serif", fontWeight: 400 }}
                >
                  {block.text}
                </h3>
              );
            }
            if (block.type === "blockquote") {
              return (
                <blockquote
                  key={i}
                  className="backdrop-blur-[6px] rounded-[2px] border border-[rgba(225,253,255,0.2)] border-l-4 border-l-[rgba(225,253,255,0.5)] px-5 py-4"
                  style={{ background: "rgba(10,10,10,0.8)" }}
                >
                  <p
                    className="text-[#b9cacb] text-[16px] leading-[25.6px] italic"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {block.text}
                  </p>
                </blockquote>
              );
            }
            if (block.type === "code") {
              return (
                <div
                  key={i}
                  className="rounded-[4px] border border-[rgba(0,242,255,0.2)] overflow-hidden"
                >
                  <div
                    className="px-4 py-2 border-b border-[rgba(0,242,255,0.15)] flex items-center justify-between"
                    style={{ background: "rgba(0,10,10,0.8)" }}
                  >
                    <span
                      className="text-[#b3c5ff] text-[12px] tracking-[1.2px]"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 500,
                      }}
                    >
                      {block.language?.toUpperCase()}
                    </span>
                  </div>
                  <pre
                    className="p-5 overflow-x-auto text-[#e1fdff] text-[13px] leading-[21px]"
                    style={{
                      background: "rgba(0,5,5,0.9)",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 400,
                    }}
                  >
                    <code>{block.text}</code>
                  </pre>
                </div>
              );
            }
            if (block.type === "list" && block.items) {
              return (
                <ul key={i} className="flex flex-col gap-4">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="text-[#00F2FF] mt-1 shrink-0">›</span>
                      <span
                        className="text-[#e5e2e1] text-[16px] leading-[25.6px]"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 400,
                        }}
                      >
                        <strong className="text-[#e1fdff]">{item.title}</strong>{" "}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>

        {/* Bottom navigation */}
        <div className="mt-16 pt-8 border-t border-[rgba(225,253,255,0.1)] flex items-center justify-between">
          <Link
            href="/blog"
            className="flex items-center gap-2 text-[#849495] hover:text-[#e1fdff] text-[12px] tracking-[1.2px] uppercase transition-colors"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
            }}
          >
            <ArrowLeft size={12} /> ALL_POSTS
          </Link>
        </div>
      </article>
    </div>
  );
}
