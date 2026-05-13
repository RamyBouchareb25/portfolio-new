"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderOpen,
  FileText,
  Award,
  User,
  Cpu,
  Upload,
  // Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: User, label: "About Me", href: "/admin/about" },
  { icon: FolderOpen, label: "Projects", href: "/admin/projects" },
  { icon: Cpu, label: "Skills", href: "/admin/skills" },
  { icon: Award, label: "Certifications", href: "/admin/certifications" },
  { icon: FileText, label: "Blog (Payload CMS)", href: "/admin/blog" },
  { icon: Upload, label: "CV / Resume", href: "/admin/cv" },
];

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex" style={{ background: "#0a0a0a" }}>
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } shrink-0 flex flex-col border-r border-[rgba(0,242,255,0.1)] transition-all duration-300`}
        style={{ background: "#0e0e0e" }}
      >
        {/* Sidebar header */}
        <div className="h-16 flex items-center justify-between px-4 border-b border-[rgba(0,242,255,0.1)]">
          {sidebarOpen && (
            <span
              className="text-[#e1fdff] text-[14px] tracking-[0.5px] truncate"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
              }}
            >
              ADMIN_PANEL
            </span>
          )}
          <button
            onClick={() => setSidebarOpen((s) => !s)}
            className="text-[#849495] hover:text-[#e1fdff] transition-colors ml-auto"
          >
            {sidebarOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4">
          {NAV_ITEMS.map(({ icon: Icon, label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 px-4 py-3 transition-colors group ${
                  isActive
                    ? "bg-[rgba(0,242,255,0.08)] text-[#00F2FF] border-r-2 border-[#00F2FF]"
                    : "text-[#849495] hover:bg-[rgba(225,253,255,0.04)] hover:text-[#b9cacb]"
                }`}
              >
                <Icon size={16} className="shrink-0" />
                {sidebarOpen && (
                  <span
                    className="text-[13px] tracking-[0.5px] truncate"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontWeight: 500,
                    }}
                  >
                    {label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="py-4 border-t border-[rgba(0,242,255,0.1)]">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 text-[#849495] hover:text-[#b9cacb] transition-colors"
          >
            <LogOut size={16} />
            {sidebarOpen && (
              <span
                className="text-[13px] tracking-[0.5px]"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 500,
                }}
              >
                Back to Site
              </span>
            )}
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header
          className="h-16 flex items-center justify-between px-6 border-b border-[rgba(0,242,255,0.1)]"
          style={{ background: "#0e0e0e" }}
        >
          <div
            className="flex items-center gap-2 text-[#849495] text-[12px] tracking-[0.28px]"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
            }}
          >
            {pathname
              .split("/")
              .filter(Boolean)
              .map((seg, i, arr) => (
                <span key={i} className="flex items-center gap-2">
                  {i > 0 && <ChevronRight size={12} />}
                  <span
                    className={i === arr.length - 1 ? "text-[#e1fdff]" : ""}
                  >
                    {seg.toUpperCase()}
                  </span>
                </span>
              ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00F2FF] animate-pulse" />
            <span
              className="text-[#849495] text-[12px] tracking-[0.28px]"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 500,
              }}
            >
              LIVE
            </span>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">{children}</main>
      </div>
    </div>
  );
}
