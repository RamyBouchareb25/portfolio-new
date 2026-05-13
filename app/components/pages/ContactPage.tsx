"use client";
import { useState } from "react";
import { Github, Linkedin, Twitter, Mail, Send, CheckCircle } from "lucide-react";
import { SectionHeader } from "../shared/SectionHeader";

const SOCIAL_LINKS = [
  { icon: Github, label: "GitHub", handle: "@devops-engineer", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", handle: "/in/devops-engineer", href: "https://linkedin.com" },
  { icon: Twitter, label: "X / Twitter", handle: "@k8s_expert", href: "https://x.com" },
  { icon: Mail, label: "Email", handle: "hello@k8sexpert.dev", href: "mailto:hello@k8sexpert.dev" },
];

const FAQ = [
  {
    q: "Are you available for consulting?",
    a: "Yes — available for infrastructure audits, K8s migrations, and team upskilling. Project-based and retainer arrangements.",
  },
  {
    q: "What's your availability for full-time roles?",
    a: "Actively exploring senior/staff-level DevOps and Platform Engineering positions. Remote-first with occasional travel.",
  },
  {
    q: "Do you speak at conferences or write for publications?",
    a: "Yes to both. I've spoken at KubeCon and local cloud meetups. Always happy to contribute articles to technical publications.",
  },
];

export function ContactPage() {
  const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormState((s) => ({ ...s, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  const inputStyle = {
    background: "rgba(10,10,10,0.6)",
    fontFamily: "'JetBrains Mono', monospace",
  };

  const labelClass = "text-[#b3c5ff] text-[12px] tracking-[1.2px] uppercase mb-2 block";
  const labelStyle = { fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 };
  const inputClass =
    "w-full bg-[rgba(10,10,10,0.6)] border border-[rgba(225,253,255,0.15)] rounded-[2px] px-4 py-3 text-[#e1fdff] text-[14px] tracking-[0.28px] placeholder-[#849495] focus:outline-none focus:border-[rgba(0,242,255,0.4)] transition-colors";

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
            Whether it&apos;s a new project, consulting opportunity, or just a technical discussion —
            I&apos;m always open to connecting with fellow engineers and teams building resilient systems.
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
                  Transmission received. I&apos;ll respond within 24-48 hours. Check your inbox.
                </p>
                <p
                  className="text-[#849495] text-[12px] tracking-[1.2px]"
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass} style={labelStyle}>NAME</label>
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
                    <label className={labelClass} style={labelStyle}>EMAIL</label>
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
                  <label className={labelClass} style={labelStyle}>SUBJECT</label>
                  <select
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className={inputClass + " cursor-pointer"}
                    style={inputStyle}
                  >
                    <option value="" style={{ background: "#0a0a0a" }}>Select a topic</option>
                    <option value="consulting" style={{ background: "#0a0a0a" }}>Infrastructure Consulting</option>
                    <option value="job" style={{ background: "#0a0a0a" }}>Job Opportunity</option>
                    <option value="collaboration" style={{ background: "#0a0a0a" }}>Collaboration / OSS</option>
                    <option value="speaking" style={{ background: "#0a0a0a" }}>Speaking Invitation</option>
                    <option value="other" style={{ background: "#0a0a0a" }}>Other</option>
                  </select>
                </div>

                <div>
                  <label className={labelClass} style={labelStyle}>MESSAGE</label>
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
                  style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
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
                style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
              >
                [CHANNELS]
              </p>
              <div className="flex flex-col gap-4">
                {SOCIAL_LINKS.map(({ icon: Icon, label, handle, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-9 h-9 rounded-[2px] border border-[rgba(225,253,255,0.15)] flex items-center justify-center text-[#849495] group-hover:text-[#00F2FF] group-hover:border-[rgba(0,242,255,0.4)] transition-colors bg-[rgba(225,253,255,0.03)]">
                      <Icon size={16} />
                    </div>
                    <div>
                      <div
                        className="text-[#e1fdff] text-[13px]"
                        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                      >
                        {label}
                      </div>
                      <div
                        className="text-[#849495] text-[12px] tracking-[0.28px]"
                        style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
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
                style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
              >
                [FAQ]
              </p>
              <div className="flex flex-col gap-5">
                {FAQ.map((item, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <p
                      className="text-[#e1fdff] text-[13px] leading-5"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600 }}
                    >
                      {item.q}
                    </p>
                    <p
                      className="text-[#b9cacb] text-[13px] leading-5"
                      style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
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
