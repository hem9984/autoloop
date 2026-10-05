type CtaProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  /** Hide below the md breakpoint. Avoids pairing `hidden` with a base `inline-flex`. */
  hideBelowMd?: boolean;
};

const base =
  "min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition-colors";

export function Cta({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  hideBelowMd = false,
}: CtaProps) {
  const styles =
    variant === "primary"
      ? "bg-cyan text-ink hover:bg-paper"
      : "border border-line bg-ink/60 text-paper hover:border-cyan/70";
  const display = hideBelowMd ? "hidden md:inline-flex" : "inline-flex";

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${display} ${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}
