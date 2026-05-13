export function DevOpsLogo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none">
      <path
        d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z"
        stroke="#00F2FF"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M50 25 L75 37.5 L75 62.5 L50 75 L25 62.5 L25 37.5 Z"
        stroke="#00F2FF"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M50 40 L60 45 L60 55 L50 60 L40 55 L40 45 Z"
        stroke="#00F2FF"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
}
