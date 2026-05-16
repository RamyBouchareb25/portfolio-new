import Link from "next/link";
import { Home, Monitor } from "lucide-react";
import React from "react";

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col bg-background text-on-background relative"
      style={{ background: "#131313" }}
    >
      {/* background grid pattern (fixed, pointer-events-none) */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          backgroundImage:
            "linear-gradient(to right, rgba(0, 242, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 242, 255, 0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <main className="flex-grow flex items-center justify-center relative z-10 px-5 md:px-16 py-20">
        <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-6 flex flex-col items-start space-y-6">
            <h1 className="text-headline-xl-mobile md:text-headline-xl tracking-tighter font-extrabold text-[#e1fdff]">
              404
            </h1>

            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffdad6]/20 border border-[#ffb4ab]/30 rounded">
              <svg
                className="w-4 h-4 text-error"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden
              >
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 6a1.25 1.25 0 110 2.5A1.25 1.25 0 0112 8zm1 8h-2v-6h2v6z" />
              </svg>
              <span className="text-[12px] font-medium text-[#ffb4ab]">
                ERROR: NODE_NOT_FOUND
              </span>
            </div>

            <p className="max-w-md text-[#b9cacb]">
              The requested infrastructure path does not exist or has been
              decommissioned. Please verify your routing coordinates or return
              to a stable node.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[#00f2ff] text-[#131313] px-6 py-3 rounded font-semibold shadow-md"
              >
                <Home size={16} /> Return to Base
              </Link>

              <Link
                href="/"
                className="inline-flex items-center gap-2 border border-[#00f2ff] text-[#00f2ff] px-6 py-3 rounded"
              >
                <Monitor size={16} /> System Status
              </Link>
            </div>
          </div>

          <div className="md:col-span-6 mt-10 md:mt-0">
            <div className="bg-[#0A0A0A] border border-outline-variant/30 rounded shadow-lg backdrop-blur-md relative overflow-hidden flex flex-col h-80 w-full">
              <div className="absolute -left-12 top-1/2 hidden md:block w-12 h-px bg-gradient-to-r from-transparent to-primary-container/50" />
              <div className="absolute -left-12 top-1/2 hidden md:block w-1 h-1 bg-primary-container rounded-full" />

              <div className="h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-30" />
              <div
                className="px-4 py-3 flex items-center justify-between text-sm text-[#b9cacb] border-b"
                style={{ borderColor: "rgba(58,73,75,0.2)" }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs text-[#00f2ff]">
                    SYS_HEALTH: CRITICAL
                  </span>
                  <span className="text-xs text-[#b9cacb]">
                    UPTIME: --:--:--
                  </span>
                </div>
                <span className="text-xs text-[#b9cacb]">
                  REGION: EU-WEST-1
                </span>
              </div>

              <div className="p-4 font-mono text-sm flex flex-col gap-2 flex-grow overflow-hidden">
                <div className="text-[#849495]">
                  root@devops:~# traceroute destination_node
                </div>
                <div className="text-[#b9cacb]">
                  Tracing route to destination_node...
                </div>
                <div className="text-[#b9cacb]">1 192.168.1.1 0.123 ms</div>
                <div className="text-[#b9cacb]">2 10.0.0.1 1.456 ms</div>
                <div className="text-[#ffb4ab]">3 * * * Request timed out.</div>
                <div className="text-[#ffb4ab]">4 * * * Request timed out.</div>
                <div className="text-[#849495] pt-2">
                  root@devops:~# scan -target local_network
                </div>
                <div className="text-[#b9cacb]">
                  Initiating deep system scan...
                </div>
                <div className="text-[#00f2ff] mt-auto">
                  &gt; Search complete: 0 results found.
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full bg-surface-container-lowest border-t border-outline-variant/20">
        <div className="max-w-container-max mx-auto px-6 py-12 flex justify-between text-sm text-primary-fixed-dim">
          <div>© 2024 DEVOPS_ARCHITECT // SYSTEM_READY</div>
          <div className="flex gap-4">
            <a href="#" className="text-outline hover:text-primary-fixed">
              GitHub
            </a>
            <a href="#" className="text-outline hover:text-primary-fixed">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
