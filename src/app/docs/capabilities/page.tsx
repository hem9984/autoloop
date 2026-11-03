import type { Metadata } from "next";
import {
  Bot,
  FileJson,
  GitBranch,
  Radar,
  RefreshCw,
  ScanSearch,
  Server,
  ShieldCheck,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { DocsArticle } from "@/components/docs/DocsArticle";
import { capabilities, type CapabilityIcon } from "@/content/capabilities";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "The machinery behind AutoLoop: what starts work, what may merge, and what counts as production.",
};

const icons: Record<CapabilityIcon, LucideIcon> = {
  radar: Radar,
  scan: ScanSearch,
  bot: Bot,
  refresh: RefreshCw,
  contract: FileJson,
  branch: GitBranch,
  phone: Smartphone,
  server: Server,
  workflow: Workflow,
  shield: ShieldCheck,
};

export default function DocsCapabilitiesPage() {
  return (
    <DocsArticle
      eyebrow="Capabilities"
      title="The machinery, not a slogan."
      lede="Each piece is a real gate in the loop: what starts work, what is allowed to merge, and what is allowed to be called production."
    >
      <ul className="space-y-4">
        {capabilities.map((item) => {
          const Icon = icons[item.icon];
          return (
            <li
              key={item.title}
              className="rounded-2xl border border-line bg-panel/40 p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-signal/30 bg-signal/10 text-signal">
                  <Icon className="size-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <h2 className="font-semibold text-paper">{item.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {item.body}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </DocsArticle>
  );
}
