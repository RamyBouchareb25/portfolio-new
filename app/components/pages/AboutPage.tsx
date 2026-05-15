import { Download } from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";
import { TerminalBadge } from "../shared/TerminalBadge";
import type { About, Experience } from "@prisma/client";
import type { CvFile } from "@/lib/types";

interface AboutPageProps {
  aboutData?: About | null;
  experiences?: Experience[];
  cv?: CvFile | null;
}

export function AboutPage({ aboutData, experiences = [], cv }: AboutPageProps) {
  // Use provided experiences or empty array
  const experienceList = experiences.length > 0 ? experiences : [];
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-2 flex flex-col gap-5">
            <SectionHeader label="/ETC/PROFILE" title="About Me" />
            <p
              className="text-[#b9cacb] text-[16px] leading-6.5"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              {aboutData?.bio ||
                `I architect, deploy, and maintain highly available infrastructure
              for mission-critical applications. My approach focuses on
              infrastructure as code, zero-downtime deployments, and robust
              observability to ensure systems run flawlessly under pressure.`}
            </p>
            <p
              className="text-[#b9cacb] text-[16px] leading-6.5"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              With {aboutData?.yearsExp || "10+"} years in the trenches of
              cloud-native infrastructure, I&apos;ve led migrations from bare
              metal to multi-cloud Kubernetes, built platform teams from
              scratch, and helped companies scale from startup to enterprise
              without losing reliability.
            </p>
            <a
              href={
                cv?.url
                  ? `/api/cv/download?url=${encodeURIComponent(cv.url)}&filename=${encodeURIComponent(cv.filename ?? "resume.pdf")}`
                  : "#"
              }
              download
              className={`inline-flex items-center gap-2 border border-[rgba(225,253,255,0.4)] text-[#e1fdff] px-6 py-3 rounded-[2px] text-[12px] tracking-[1.2px] uppercase hover:border-[rgba(225,253,255,0.7)] transition-colors w-fit mt-2 ${
                cv ? "" : "opacity-50"
              }`}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
              }}
            >
              <Download size={12} /> DOWNLOAD_RESUME.PDF
            </a>
          </div>

          {/* Profile card */}
          <div
            className="backdrop-blur-[6px] rounded-lg border border-[rgba(0,242,255,0.15)] p-6"
            style={{ background: "rgba(10,10,10,0.6)" }}
          >
            <div className="w-20 h-20 rounded-full bg-linear-to-br from-[rgba(0,242,255,0.2)] to-[rgba(179,197,255,0.1)] border border-[rgba(0,242,255,0.3)] flex items-center justify-center mb-5">
              <span
                className="text-[#00F2FF] text-[24px]"
                style={{ fontFamily: "'Geist', sans-serif", fontWeight: 800 }}
              >
                {(aboutData?.name || "K8")
                  .split(" ")
                  .map((word: string) => word[0])
                  .join("")
                  .toUpperCase()
                  .slice(0, 2) || "K8"}
              </span>
            </div>
            <h3
              className="text-[#e1fdff] text-[20px] tracking-[-0.4px] mb-1"
              style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
            >
              {aboutData?.name || "DevOps Engineer"}
            </h3>
            <p
              className="text-[#b3c5ff] text-[13px] tracking-[0.28px] mb-5"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
              }}
            >
              {aboutData?.title ||
                "Platform Engineer · K8s Expert · Cloud Architect"}
            </p>
            <div className="flex flex-col gap-3">
              {[
                {
                  label: "Location",
                  value: aboutData?.location || "Remote (US-East timezone)",
                },
                {
                  label: "Languages",
                  value: "English (C1), French (C2), Arabic (Native)",
                },
                {
                  label: "Education",
                  value: "Software Engineering Masters at USTHB, Algiers",
                },
                { label: "Open To", value: "Remote, Contract, Full-time" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-0.5">
                  <span
                    className="text-[#849495] text-[11px] tracking-[1.2px] uppercase"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 500,
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    className="text-[#b9cacb] text-[13px]"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 400,
                    }}
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
      <section className="max-w-360 mx-auto px-8 lg:px-16 py-16">
        <div className="mb-12">
          <SectionHeader label="/VAR/LOG/CAREER" title="Work Experience" />
        </div>

        <div className="flex flex-col gap-1">
          {experienceList.map((exp, i) => (
            <div key={i} className="relative pl-8 pb-12">
              {/* Timeline line */}
              {i < experienceList.length - 1 && (
                <div className="absolute left-2.75 top-6 bottom-0 w-px bg-linear-to-b from-[rgba(0,242,255,0.4)] to-[rgba(0,242,255,0.05)]" />
              )}
              {/* Dot */}
              <div className="absolute left-0 top-1.5 w-5.5 h-5.5 rounded-full border-2 border-[rgba(0,242,255,0.5)] bg-[#131313] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#00F2FF]" />
              </div>

              <div
                className="backdrop-blur-[6px] rounded-lg border border-[rgba(0,242,255,0.12)] p-6 hover:border-[rgba(0,242,255,0.25)] transition-colors"
                style={{ background: "rgba(10,10,10,0.5)" }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <h3
                      className="text-[#e1fdff] text-[20px] tracking-[-0.4px]"
                      style={{
                        fontFamily: "'Geist', sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className="text-[#b3c5ff] text-[14px] tracking-[0.28px]"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 500,
                      }}
                    >
                      {exp.company} · {exp.location}
                    </p>
                  </div>
                  <TerminalBadge>{exp.period}</TerminalBadge>
                </div>
                <ul className="flex flex-col gap-2">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-[#00F2FF] mt-1 shrink-0 text-[12px]">
                        ›
                      </span>
                      <span
                        className="text-[#b9cacb] text-[14px] leading-5.5"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 400,
                        }}
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
