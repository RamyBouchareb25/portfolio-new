interface TerminalBadgeProps {
  children: React.ReactNode;
  variant?: "active" | "default";
  className?: string;
}

export function TerminalBadge({ children, variant = "default", className = "" }: TerminalBadgeProps) {
  if (variant === "active") {
    return (
      <span
        className={`inline-flex items-center gap-2 bg-[rgba(225,253,255,0.1)] border border-[rgba(225,253,255,0.3)] px-3 py-1 rounded-[2px] text-[#e1fdff] text-[14px] tracking-[0.28px] ${className}`}
        style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
      >
        <span className="w-2 h-2 rounded-full bg-[#e1fdff]" />
        {children}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center bg-[rgba(225,253,255,0.1)] border border-[rgba(225,253,255,0.2)] px-2.25 py-1.25 rounded-[2px] text-[#e1fdff] text-[14px] tracking-[0.28px] ${className}`}
      style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
    >
      {children}
    </span>
  );
}
