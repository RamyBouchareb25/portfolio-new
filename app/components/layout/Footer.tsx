import { Github, Linkedin, Twitter } from "lucide-react";

const SOCIAL_LINKS = [
  { label: "GITHUB", href: "https://github.com" },
  { label: "LINKEDIN", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
  { label: "STATUS", href: "#" },
  { label: "UPTIME", href: "#" },
];

export function Footer() {
  return (
    <footer
      className="relative border-t border-[rgba(225,253,255,0.1)] py-6"
      style={{ background: "#0e0e0e" }}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div
          className="flex items-center gap-2 text-[#b9cacb] text-[12px] tracking-[1.2px]"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
        >
          <Github size={14} />
          <span>© 2024 DEVOPS_ENGINEER // K8S_MASTER</span>
        </div>

        <nav className="flex items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#b9cacb] hover:text-[#e1fdff] text-[14px] tracking-[0.28px] uppercase transition-colors"
              style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
