import { site } from "@/lib/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-hidden>
      <svg
        viewBox="0 0 32 32"
        aria-hidden
        className="size-8 shrink-0"
      >
        <rect width="32" height="32" rx="8" fill="#10151f" />
        <path
          d="M16 7.5c-4.7 0-8.5 3.4-8.5 7.6S11.3 22.7 16 22.7s8.5-3.4 8.5-7.6"
          fill="none"
          stroke="#3ee0ff"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M22.8 11.6 25.2 7.6 20.8 8.7"
          fill="none"
          stroke="#3ee0ff"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-display text-xl tracking-tight text-paper">
        {site.name}
      </span>
    </span>
  );
}
