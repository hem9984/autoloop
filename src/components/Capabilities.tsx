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
import { capabilities, type CapabilityIcon } from "@/content/capabilities";
import SpotlightCard from "@/components/bits/SpotlightCard";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

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

export function Capabilities() {
  return (
    <Section
      id="capabilities"
      eyebrow="Capabilities"
      title="The machinery, not a slogan."
      lede="Each piece is a real gate in the loop: what starts work, what is allowed to merge, and what is allowed to be called production."
    >
      <ul className="grid gap-4 md:grid-cols-2">
        {capabilities.map((item, index) => {
          const Icon = icons[item.icon];
          return (
            <li key={item.title}>
              <Reveal delay={index * 0.04} className="h-full">
                <SpotlightCard
                  className="flex h-full gap-4 rounded-2xl border border-line bg-panel/80 p-5"
                  spotlightColor="rgba(61, 220, 132, 0.22)"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-signal/30 bg-signal/10 text-signal">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-paper">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{item.body}</p>
                  </div>
                </SpotlightCard>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
