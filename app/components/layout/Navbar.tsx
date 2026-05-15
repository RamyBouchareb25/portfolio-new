"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";
import { DevOpsLogo } from "../shared/DevOpsLogo";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Navbar({ username = "Ramy Bouchareb" }) {
  const pathname = usePathname();
  const [cvUrl, setCvUrl] = useState<string | null>(null);
  const [cvFilename, setCvFilename] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function fetchActiveCV() {
      try {
        const res = await fetch("/api/cv/active");
        if (!res.ok) return;
        const data = await res.json();
        const { url, filename } = data ?? {};
        if (mounted && url) {
          setCvUrl(url);
          setCvFilename(filename ?? null);
        }
      } catch (e) {
        console.error("Error fetching active CV:", e);
      }
    }
    fetchActiveCV();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-[rgba(225,253,255,0.2)] shadow-[0_0_15px_rgba(0,242,255,0.1)]"
      style={{ background: "rgba(19,19,19,0.85)" }}
    >
      <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-16 min-h-16 flex items-center justify-between gap-4 sm:gap-8">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <DevOpsLogo className="w-8 h-8" />
          <span
            className="text-[#e1fdff] tracking-[-1px] sm:tracking-[-2px] whitespace-nowrap text-[18px] sm:text-[24px]"
            style={{
              fontFamily: "'Geist', sans-serif",
              fontWeight: 800,
            }}
          >
            {username}
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
          href={
            cvUrl
              ? `/api/cv/download?url=${encodeURIComponent(cvUrl)}&filename=${encodeURIComponent(cvFilename ?? "resume.pdf")}`
              : "#"
          }
          download
          className={`hidden md:flex items-center gap-2 bg-[#e1fdff] text-[#00363a] px-4 py-2 rounded-[2px] text-[12px] tracking-[1.2px] uppercase hover:opacity-90 transition-opacity shrink-0 ${
            cvUrl ? "" : "opacity-60"
          }`}
          style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
        >
          <Download size={12} />
          DEPLOY CV
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-[2px] border border-[rgba(225,253,255,0.2)] text-[#e1fdff]"
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden border-t border-[rgba(225,253,255,0.15)] px-4 sm:px-6 py-4"
          style={{ background: "rgba(19,19,19,0.96)" }}
        >
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-[12px] tracking-[1.2px] uppercase py-2 border-b border-[rgba(225,253,255,0.08)] ${
                    isActive ? "text-[#e1fdff]" : "text-[#b9cacb]"
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

          <a
            href={
              cvUrl
                ? `/api/cv/download?url=${encodeURIComponent(cvUrl)}&filename=${encodeURIComponent(cvFilename ?? "resume.pdf")}`
                : "#"
            }
            download
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mt-4 inline-flex items-center gap-2 bg-[#e1fdff] text-[#00363a] px-4 py-2 rounded-[2px] text-[12px] tracking-[1.2px] uppercase ${
              cvUrl ? "" : "opacity-60"
            }`}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
            }}
          >
            <Download size={12} />
            DEPLOY CV
          </a>
        </div>
      )}
    </header>
  );
}
