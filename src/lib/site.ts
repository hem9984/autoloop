export const site = {
  name: "AutoLoop",
  tagline: "The fully automated software lifecycle.",
  description:
    "AutoLoop runs the software lifecycle end to end. Telemetry becomes tickets, cloud agents implement them, and code reaches production only when CI and release gates agree.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://autoloop.dev").replace(
    /\/$/,
    "",
  ),
  cta: {
    href: "#consultation",
    label: "Request a consultation",
  },
  nav: [
    { href: "#how-it-works", label: "How it works" },
    { href: "#phases", label: "Phases" },
    { href: "#capabilities", label: "Capabilities" },
    { href: "#guardrails", label: "Guardrails" },
    { href: "#faq", label: "FAQ" },
  ],
} as const;
