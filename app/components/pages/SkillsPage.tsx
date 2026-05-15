import { SectionHeader } from "../shared/SectionHeader";
import { TerminalBadge } from "../shared/TerminalBadge";
import { Award, Cpu } from "lucide-react";

function SkillBar({
  name,
  level,
  detail,
}: {
  name: string;
  level: number;
  detail: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="text-[#e1fdff] text-[14px]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
            }}
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
            background:
              level >= 90
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

interface SkillsPageProps {
  skills?: any[];
  certifications?: any[];
}

const CATEGORY_LABELS: { [key: string]: string } = {
  "Container Orchestration": "ORCHESTRATION",
  "Cloud Infrastructure": "CLOUD",
  "CI/CD & Automation": "AUTOMATION",
  Observability: "OBSERVABILITY",
  "Networking & Security": "SECURITY",
  "Languages & Scripting": "CODE",
};

export function SkillsPage({
  skills = [],
  certifications = [],
}: SkillsPageProps) {
  // Transform flat skills array into categorized structure
  const transformSkills = (flatSkills: any[]) => {
    if (!flatSkills || flatSkills.length === 0) return [];

    // Check if skills are already in the categorized format
    if (flatSkills[0]?.skills) return flatSkills;

    // Group flat skills by category
    const grouped = flatSkills.reduce((acc: any, skill: any) => {
      const existing = acc.find((cat: any) => cat.category === skill.category);
      if (existing) {
        existing.skills.push({
          name: skill.name,
          level: skill.level,
          detail: skill.detail || "",
        });
      } else {
        acc.push({
          category: skill.category,
          label:
            CATEGORY_LABELS[skill.category] || skill.category.toUpperCase(),
          skills: [
            {
              name: skill.name,
              level: skill.level,
              detail: skill.detail || "",
            },
          ],
        });
      }
      return acc;
    }, []);

    return grouped;
  };

  const skillsData = transformSkills(skills);
  const certsData =
    certifications && certifications.length > 0 ? certifications : [];
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
          <SectionHeader
            label="/ETC/SKILLS"
            title="Tech Stack & Core Systems"
          />
          <p
            className="text-[#b9cacb] text-[16px] leading-[26px] max-w-[600px]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            Five years of production Kubernetes, cloud infrastructure, and
            platform engineering — with receipts.
          </p>
        </div>
      </section>

      {/* Skills grid */}
      <section className="max-w-[1440px] mx-auto px-8 lg:px-16 py-16">
        {skillsData.length === 0 ? (
          <div className="text-center py-20">
            <div className="inline-flex items-center gap-2 rounded-[2px] border border-[rgba(225,253,255,0.12)] bg-[rgba(10,10,10,0.55)] px-4 py-2">
              <Cpu size={14} className="text-[#00F2FF]" />
              <p
                className="text-[#849495] text-[14px] tracking-[0.28px]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 500,
                }}
              >
                NO_SKILLS_YET
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {skillsData.map((cat: any) => (
              <div
                key={cat.category}
                className="backdrop-blur-[6px] rounded-[4px] border border-[rgba(0,242,255,0.15)] p-6"
                style={{ background: "rgba(10,10,10,0.6)" }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3
                    className="text-[#e1fdff] text-[18px] tracking-[-0.3px]"
                    style={{
                      fontFamily: "'Geist', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {cat.category}
                  </h3>
                  <span
                    className="text-[#b3c5ff] text-[12px] tracking-[1.2px]"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 500,
                    }}
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
        )}
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

          {certsData.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center gap-2 rounded-[2px] border border-[rgba(225,253,255,0.12)] bg-[rgba(10,10,10,0.55)] px-4 py-2">
                <Award size={14} className="text-[#00F2FF]" />
                <p
                  className="text-[#849495] text-[14px] tracking-[0.28px]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 500,
                  }}
                >
                  NO_CERTIFICATIONS_YET
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {certsData.map((cert: any) => (
                <div
                  key={cert.name}
                  className="backdrop-blur-[6px] rounded-[4px] border border-[rgba(0,242,255,0.15)] p-5 flex flex-col gap-3 hover:border-[rgba(0,242,255,0.35)] transition-colors"
                  style={{ background: "rgba(10,10,10,0.6)" }}
                >
                  <div
                    className="w-12 h-12 rounded-[4px] flex items-center justify-center text-[10px] tracking-[0.5px] text-[#00F2FF] border border-[rgba(0,242,255,0.3)] bg-[rgba(0,242,255,0.08)]"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 700,
                    }}
                  >
                    {cert.badge}
                  </div>
                  <div>
                    <p
                      className="text-[#e1fdff] text-[13px] leading-[20px] mb-1"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {cert.name}
                    </p>
                    <p
                      className="text-[#849495] text-[12px] tracking-[0.28px]"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 500,
                      }}
                    >
                      {cert.issuer} · {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
