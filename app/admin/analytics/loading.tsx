export default function Loading() {
  return (
    <div className="flex flex-col gap-6 animate-pulse">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-3">
          <div className="h-8 w-44 rounded bg-[rgba(225,253,255,0.08)]" />
          <div className="h-4 w-56 rounded bg-[rgba(225,253,255,0.06)]" />
        </div>
        <div className="h-16 w-48 rounded-lg border border-[rgba(225,253,255,0.08)] bg-[rgba(225,253,255,0.04)]" />
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="h-28 rounded-lg border border-[rgba(225,253,255,0.08)] bg-[rgba(10,10,10,0.6)]" />
        <div className="h-28 rounded-lg border border-[rgba(225,253,255,0.08)] bg-[rgba(10,10,10,0.6)]" />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="h-28 rounded-lg border border-[rgba(225,253,255,0.08)] bg-[rgba(10,10,10,0.6)]"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="h-[340px] rounded-lg border border-[rgba(225,253,255,0.08)] bg-[rgba(10,10,10,0.6)]" />
        <div className="h-[340px] rounded-lg border border-[rgba(225,253,255,0.08)] bg-[rgba(10,10,10,0.6)]" />
      </div>

      <div className="h-32 rounded-lg border border-[rgba(179,197,255,0.16)] bg-[rgba(179,197,255,0.05)]" />
    </div>
  );
}
