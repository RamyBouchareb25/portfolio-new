"use client";
import { useState } from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Send,
  CheckCircle,
} from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";
import type { About } from "@prisma/client";

const FAQ = [
  {
    q: "Are you available for freelance or consulting work?",
    a: "Yes — available for freelance DevOps and cloud engineering projects, especially around Kubernetes deployments, CI/CD pipelines, Dockerization, GitOps, and infrastructure automation. Open to both short-term projects and ongoing collaborations.",
  },
  {
    q: "What kind of full-time roles are you looking for?",
    a: "Currently exploring DevOps, Platform Engineering, and Cloud Infrastructure roles where I can work on scalable systems, Kubernetes platforms, observability, and automation. Open to remote and hybrid opportunities.",
  },
  {
    q: "Do you contribute to the tech community?",
    a: "Yes — I actively participate in the local tech community through hackathons, developer groups, and student organizations including GDG Algiers and the Micro Club at USTHB. I also enjoy sharing knowledge and building open-source and personal infrastructure projects.",
  },
  // {
  //   q: "What technologies do you work with most?",
  //   a: "I mainly work with Kubernetes, Docker, GitHub Actions, ArgoCD, ELK Stack, Linux, Next.js, and Node.js. I enjoy building reliable cloud-native platforms with a strong focus on automation and observability.",
  // },
  // {
  //   q: "Are you open to international opportunities?",
  //   a: "Yes — open to remote international collaborations and engineering opportunities, especially in cloud infrastructure, DevOps, and platform engineering.",
  // },
  // {
  //   q: "Do you run your own infrastructure?",
  //   a: "Yes — I regularly build and experiment with self-hosted infrastructure, Kubernetes clusters, GitOps workflows, monitoring stacks, VPNs, and cloud-like environments as part of both learning and personal projects.",
  // },
];

interface ContactPageProps {
  aboutData?: About | null;
}

function formatSocialHandle(label: string, value?: string | null) {
  if (!value) return "Not configured";

  if (label === "Email") return value;

  try {
    const url = new URL(value);
    const parts = url.pathname.split("/").filter(Boolean);
    const lastPart = parts[parts.length - 1] || "";

    if (label === "LinkedIn") return lastPart ? `/in/${lastPart}` : value;
    if (label === "GitHub" || label === "X / Twitter") {
      return lastPart ? `@${lastPart}` : value;
    }

    return value;
  } catch {
    return value;
  }
}

export function ContactPage({ aboutData }: ContactPageProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setFormState((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to send message");
      }

      setSubmitted(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to send message",
      );
    } finally {
      setLoading(false);
    }
  }

  const inputStyle = {
    background: "rgba(10,10,10,0.6)",
    fontFamily: "'JetBrains Mono', monospace",
  };

  const labelClass =
    "text-[#b3c5ff] text-[12px] tracking-[1.2px] uppercase mb-2 block";
  const labelStyle = {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 500,
  };
  const inputClass =
    "w-full bg-[rgba(10,10,10,0.6)] border border-[rgba(225,253,255,0.15)] rounded-[2px] px-4 py-3 text-[#e1fdff] text-[14px] tracking-[0.28px] placeholder-[#849495] focus:outline-none focus:border-[rgba(0,242,255,0.4)] transition-colors";

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      handle: formatSocialHandle("GitHub", aboutData?.github),
      href: aboutData?.github || "#",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      handle: formatSocialHandle("LinkedIn", aboutData?.linkedin),
      href: aboutData?.linkedin || "#",
    },
    {
      icon: Twitter,
      label: "X / Twitter",
      handle: formatSocialHandle("X / Twitter", aboutData?.twitter),
      href: aboutData?.twitter || "#",
    },
    {
      icon: Mail,
      label: "Email",
      handle: formatSocialHandle("Email", aboutData?.email),
      href: aboutData?.email ? `mailto:${aboutData.email}` : "#",
    },
  ];

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
          <SectionHeader label="/CONNECT/NODE" title="Initialize Contact" />
          <p
            className="text-[#b9cacb] text-[16px] leading-6.5 max-w-150"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            Whether it&apos;s a new project, consulting opportunity, or just a
            technical discussion — I&apos;m always open to connecting with
            fellow engineers and teams building resilient systems.
          </p>
        </div>
      </section>

      <section className="max-w-360 mx-auto px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                className="backdrop-blur-[6px] rounded-lg border border-[rgba(0,242,255,0.3)] p-10 flex flex-col items-center justify-center gap-4 text-center min-h-100"
                style={{ background: "rgba(10,10,10,0.6)" }}
              >
                <CheckCircle size={48} className="text-[#00F2FF]" />
                <h3
                  className="text-[#e1fdff] text-[24px] tracking-[-0.5px]"
                  style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
                >
                  Message Sent
                </h3>
                <p
                  className="text-[#b9cacb] text-[15px] leading-6 max-w-100"
                  style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                >
                  Transmission received. I&apos;ll respond within 24-48 hours.
                  Check your inbox.
                </p>
                <p
                  className="text-[#849495] text-[12px] tracking-[1.2px]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 500,
                  }}
                >
                  [STATUS: ACK // QUEUE: 1]
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="backdrop-blur-[6px] rounded-lg border border-[rgba(0,242,255,0.15)] p-8 flex flex-col gap-6"
                style={{ background: "rgba(10,10,10,0.6)" }}
              >
                <input
                  type="text"
                  name="website"
                  value={formState.website}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} style={labelStyle}>
                      NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelClass} style={labelStyle}>
                      EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                      className={inputClass}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass} style={labelStyle}>
                    SUBJECT
                  </label>
                  <select
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className={inputClass + " cursor-pointer"}
                    style={inputStyle}
                  >
                    <option value="" style={{ background: "#0a0a0a" }}>
                      Select a topic
                    </option>
                    <option
                      value="consulting"
                      style={{ background: "#0a0a0a" }}
                    >
                      Infrastructure Consulting
                    </option>
                    <option value="job" style={{ background: "#0a0a0a" }}>
                      Job Opportunity
                    </option>
                    <option
                      value="collaboration"
                      style={{ background: "#0a0a0a" }}
                    >
                      Collaboration / OSS
                    </option>
                    <option value="speaking" style={{ background: "#0a0a0a" }}>
                      Speaking Invitation
                    </option>
                    <option value="other" style={{ background: "#0a0a0a" }}>
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label className={labelClass} style={labelStyle}>
                    MESSAGE
                  </label>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Describe your project, challenge, or question..."
                    required
                    rows={6}
                    className={inputClass + " resize-none"}
                    style={inputStyle}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-2 bg-[#e1fdff] text-[#00363a] px-8 py-4 rounded-[2px] text-[12px] tracking-[1.2px] uppercase hover:opacity-90 transition-opacity disabled:opacity-60 shadow-[0_0_7.5px_rgba(0,242,255,0.4)]"
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 700,
                  }}
                >
                  {loading ? (
                    <>
                      <span className="animate-pulse">TRANSMITTING...</span>
                    </>
                  ) : (
                    <>
                      <Send size={12} />
                      TRANSMIT_MESSAGE
                    </>
                  )}
                </button>

                {errorMessage && (
                  <p
                    className="text-red-400 text-[13px] leading-5"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {errorMessage}
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Social links */}
            <div
              className="backdrop-blur-[6px] rounded-lg border border-[rgba(0,242,255,0.15)] p-6"
              style={{ background: "rgba(10,10,10,0.6)" }}
            >
              <p
                className="text-[#b3c5ff] text-[12px] tracking-[1.4px] uppercase mb-5"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                }}
              >
                [CHANNELS]
              </p>
              <div className="flex flex-col gap-4">
                {socialLinks.map(({ icon: Icon, label, handle, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href === "#" ? undefined : "_blank"}
                    rel={href === "#" ? undefined : "noopener noreferrer"}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-[2px] border border-[rgba(225,253,255,0.15)] flex items-center justify-center text-[#849495] group-hover:text-[#00F2FF] group-hover:border-[rgba(0,242,255,0.4)] transition-colors bg-[rgba(225,253,255,0.03)]">
                      <Icon size={16} />
                    </div>
                    <div>
                      <div
                        className="text-[#e1fdff] text-[13px]"
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontWeight: 600,
                        }}
                      >
                        {label}
                      </div>
                      <div
                        className="text-[#849495] text-[12px] tracking-[0.28px]"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          fontWeight: 500,
                        }}
                      >
                        {handle}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div
              className="backdrop-blur-[6px] rounded-lg border border-[rgba(0,242,255,0.15)] p-6"
              style={{ background: "rgba(10,10,10,0.6)" }}
            >
              <p
                className="text-[#b3c5ff] text-[12px] tracking-[1.4px] uppercase mb-5"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                }}
              >
                [FAQ]
              </p>
              <div className="flex flex-col gap-5">
                {FAQ.map((item, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <p
                      className="text-[#e1fdff] text-[13px] leading-5"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 600,
                      }}
                    >
                      {item.q}
                    </p>
                    <p
                      className="text-[#b9cacb] text-[13px] leading-5"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                      }}
                    >
                      {item.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
