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
                <article className="flex h-full gap-4 rounded-2xl border border-line bg-panel/70 p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-cyan/30 bg-cyan/10 text-cyan">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-paper">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{item.body}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
