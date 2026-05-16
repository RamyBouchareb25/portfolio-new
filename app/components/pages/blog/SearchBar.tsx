"use client";

import { Search } from "lucide-react";

export function SearchBar({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="flex items-center gap-3 w-full max-w-[420px] rounded-[4px] border border-[rgba(0,242,255,0.15)] bg-[rgba(10,10,10,0.6)] px-4 py-3 text-[#b9cacb] focus-within:border-[rgba(0,242,255,0.4)] transition-colors">
      <Search size={16} className="shrink-0 text-[#849495]" />
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search posts"
        className="w-full bg-transparent outline-none placeholder:text-[#60757c] text-[#e1fdff] text-[14px]"
        style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
      />
    </label>
  );
}
