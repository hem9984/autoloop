import { integrations } from "@/content/integrations";
import { Section } from "@/components/Section";

export function Integrations() {
  return (
    <Section
      id="integrations"
      eyebrow="Integrations"
      title="It orchestrates the tools you already run."
      lede="AutoLoop keeps your issue tracker, your CI, and your stores. It is the loop that makes them move as one system."
    >
      <ul className="flex flex-wrap gap-2.5">
        {integrations.map((name) => (
          <li
            key={name}
            className="rounded-full border border-line bg-panel px-4 py-2 font-mono text-sm text-paper"
          >
            {name}
          </li>
        ))}
      </ul>
    </Section>
  );
}
