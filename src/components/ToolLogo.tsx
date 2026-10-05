import { Activity } from "lucide-react";
import {
  siAppstore,
  siCursor,
  siGithub,
  siGithubactions,
  siGoogleplay,
  siLinear,
  siOpenapiinitiative,
  siPosthog,
  siSentry,
  type SimpleIcon,
} from "simple-icons";
import type { ToolId } from "@/content/flowchart";

const icons: Record<Exclude<ToolId, "cloudwatch">, SimpleIcon> = {
  sentry: siSentry,
  posthog: siPosthog,
  linear: siLinear,
  cursor: siCursor,
  github: siGithub,
  actions: siGithubactions,
  openapi: siOpenapiinitiative,
  appstore: siAppstore,
  googleplay: siGoogleplay,
};

export const toolNames: Record<ToolId, string> = {
  sentry: "Sentry",
  posthog: "PostHog",
  cloudwatch: "CloudWatch",
  linear: "Linear",
  cursor: "Cursor cloud agents",
  github: "GitHub",
  actions: "GitHub Actions",
  openapi: "OpenAPI",
  appstore: "App Store Connect",
  googleplay: "Google Play",
};

export function ToolLogo({ tool, className = "size-4" }: { tool: ToolId; className?: string }) {
  if (tool === "cloudwatch") {
    return <Activity className={className} aria-hidden />;
  }
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d={icons[tool].path} />
    </svg>
  );
}
