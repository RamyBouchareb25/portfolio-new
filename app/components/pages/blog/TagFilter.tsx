"use client";

type TagOption = {
  id: string;
  name: string;
};

export function TagFilter({
  tags,
  value,
  onChange,
}: {
  tags: TagOption[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        onClick={() => onChange("")}
        className={`rounded-[4px] border px-3 py-2 text-[12px] tracking-[1.2px] uppercase transition-colors ${
          value === ""
            ? "border-[rgba(0,242,255,0.55)] bg-[rgba(0,242,255,0.08)] text-[#e1fdff]"
            : "border-[rgba(0,242,255,0.15)] bg-[rgba(10,10,10,0.6)] text-[#849495] hover:border-[rgba(0,242,255,0.4)] hover:text-[#e1fdff]"
        }`}
        style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}
      >
        All
      </button>

      {tags.map((tag) => {
        const active = value === tag.id;
        return (
          <button
            key={tag.id}
            type="button"
            onClick={() => onChange(active ? "" : tag.id)}
            className={`rounded-[4px] border px-3 py-2 text-[12px] tracking-[1.2px] uppercase transition-colors ${
              active
                ? "border-[rgba(0,242,255,0.55)] bg-[rgba(0,242,255,0.08)] text-[#e1fdff]"
                : "border-[rgba(0,242,255,0.15)] bg-[rgba(10,10,10,0.6)] text-[#849495] hover:border-[rgba(0,242,255,0.4)] hover:text-[#e1fdff]"
            }`}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 500,
            }}
          >
            {tag.name}
          </button>
        );
      })}
    </div>
  );
}
