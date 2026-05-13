"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download } from "lucide-react";
import { DevOpsLogo } from "../shared/DevOpsLogo";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-[rgba(225,253,255,0.2)] shadow-[0_0_15px_rgba(0,242,255,0.1)]"
      style={{ background: "rgba(19,19,19,0.85)" }}
    >
      <div className="max-w-360 mx-auto px-8 lg:px-16 h-16 flex items-center justify-between gap-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <DevOpsLogo className="w-8 h-8" />
          <span
            className="text-[#e1fdff] tracking-[-2px] whitespace-nowrap"
            style={{
              fontFamily: "'Geist', sans-serif",
              fontWeight: 800,
              fontSize: 24,
            }}
          >
            K8S_EXPERT_v1.0
          </span>
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[12px] tracking-[1.2px] uppercase pb-1 transition-colors ${
                  isActive
                    ? "text-[#e1fdff] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#e1fdff] after:shadow-[0_0_8px_rgba(0,242,255,0.8)]"
                    : "text-[#b9cacb] hover:text-[#e1fdff]"
                }`}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CV button */}
        <a
          href="/cv"
          className="hidden md:flex items-center gap-2 bg-[#e1fdff] text-[#00363a] px-4 py-2 rounded-[2px] text-[12px] tracking-[1.2px] uppercase hover:opacity-90 transition-opacity shrink-0"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
          download
        >
          <Download size={12} />
          DEPLOY CV
        </a>
      </div>
    </header>
  );
}
