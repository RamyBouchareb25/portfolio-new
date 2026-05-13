interface SectionHeaderProps {
  label: string;
  title: string;
}

export function SectionHeader({ label, title }: SectionHeaderProps) {
  return (
    <div className="relative pl-5 border-l-2 border-[#e1fdff]">
      <p
        className="text-[#b3c5ff] text-[14px] tracking-[1.4px] uppercase mb-2"
        style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
      >
        {label}
      </p>
      <h2
        className="text-[#e1fdff] text-[40px] tracking-[-0.8px]"
        style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
      >
        {title}
      </h2>
    </div>
  );
}
