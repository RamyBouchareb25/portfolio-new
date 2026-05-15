"use client";
import { useState } from "react";
import {
  ExternalLink,
  Github,
  FolderKanban,
  //  ArrowRight
} from "lucide-react";
import { TerminalBadge } from "../shared/TerminalBadge";
import { SectionHeader } from "../shared/SectionHeader";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface ProjectsPageProps {
  projects?: any[];
  availableTags?: string[];
}

export function ProjectsPage({
  projects = [],
  availableTags = [],
}: ProjectsPageProps) {
  const [activeTag, setActiveTag] = useState("All");

  const projectList = projects && projects.length > 0 ? projects : [];
  const filterTags = ["All", ...availableTags];

  const filtered =
    activeTag === "All"
      ? projectList
      : projectList.filter((p) => (p.tags || []).includes(activeTag));

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
      <section className="max-w-360 mx-auto px-8 lg:px-16 py-16 border-b border-[rgba(225,253,255,0.1)]">
        <div className="flex flex-col gap-6">
          <SectionHeader
            label="/VAR/PROJECTS"
            title="Infrastructure Projects"
          />
          <p
            className="text-[#b9cacb] text-[16px] leading-6.5 max-w-150"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            A catalog of production systems I&apos;ve architected and deployed —
            each battle-tested under real traffic and real failure conditions.
          </p>

          {/* Filter tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {filterTags.map((tag) => (
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
      <section className="max-w-360 mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="group backdrop-blur-[6px] rounded-lg border border-[rgba(0,242,255,0.15)] hover:border-[rgba(0,242,255,0.4)] transition-all overflow-hidden flex flex-col"
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
                  className="text-[#b9cacb] text-[14px] leading-5.5 flex-1"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  {project.description}
                </p>

                {/* Metrics */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-3 pt-2 border-t border-[rgba(225,253,255,0.08)]">
                    {Object.entries(
                      project.metrics as Record<string, string>,
                    ).map(([key, val]) => (
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
                  {project.tags.map((tag: string) => (
                    <TerminalBadge key={tag}>{tag}</TerminalBadge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <div className="inline-flex items-center gap-2 rounded-[2px] border border-[rgba(225,253,255,0.12)] bg-[rgba(10,10,10,0.55)] px-4 py-2">
              <FolderKanban size={14} className="text-[#00F2FF]" />
              <p
                className="text-[#849495] text-[14px] tracking-[0.28px]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 500,
                }}
              >
                NO_PROJECTS_YET
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
