"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="rounded-lg border border-[rgba(255,90,90,0.16)] bg-[rgba(255,90,90,0.06)] p-6">
      <p
        className="text-[12px] uppercase tracking-[1.2px] text-[#ff8b8b]"
        style={{ fontFamily: "'JetBrains Mono', monospace", fontWeight: 700 }}
      >
        Analytics load failed
      </p>
      <h2
        className="mt-3 text-[20px] text-[#e1fdff]"
        style={{ fontFamily: "'Geist', sans-serif", fontWeight: 700 }}
      >
        Something prevented the dashboard from loading.
      </h2>
      <p className="mt-2 text-[13px] leading-6 text-[#b9cacb]">
        {error.message}
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="mt-5 rounded-md border border-[rgba(225,253,255,0.12)] px-4 py-2 text-[13px] text-[#e1fdff] transition-colors hover:border-[rgba(0,242,255,0.3)]"
      >
        Retry
      </button>
    </div>
  );
}
