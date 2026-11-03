export const docsNav = [
  {
    href: "/docs/",
    label: "Overview",
    description: "What the loop guarantees.",
  },
  {
    href: "/docs/phases/",
    label: "Phases",
    description: "What each stage may read and write.",
  },
  {
    href: "/docs/capabilities/",
    label: "Capabilities",
    description: "The machinery behind the loop.",
  },
  {
    href: "/docs/guardrails/",
    label: "Guardrails",
    description: "What the system refuses to do.",
  },
  {
    href: "/docs/integrations/",
    label: "Integrations",
    description: "Tools it orchestrates.",
  },
  {
    href: "/docs/faq/",
    label: "FAQ",
    description: "Common questions.",
  },
] as const;

export function docsPathname(pathname: string): string {
  if (pathname.length > 1 && !pathname.endsWith("/")) {
    return `${pathname}/`;
  }
  return pathname;
}
