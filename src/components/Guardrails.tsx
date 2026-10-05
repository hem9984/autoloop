import { Ban } from "lucide-react";
import { guardrails } from "@/content/guardrails";
import { Section } from "@/components/Section";

export function Guardrails() {
  return (
    <Section
      id="guardrails"
      eyebrow="Guardrails"
      title="What it will never do."
      lede="Automation is only powerful if the refusals are mechanical. These are hard stops, not guidelines in a prompt."
    >
      <ul className="grid gap-3 sm:grid-cols-2">
        {guardrails.map((item) => (
          <li
            key={item}
            className="flex gap-3 rounded-2xl border border-line bg-panel/60 p-4"
          >
            <Ban className="mt-0.5 size-5 shrink-0 text-rose" aria-hidden />
            <p className="text-sm leading-relaxed text-paper">
              <span className="text-mist">Refuses to </span>
              {item.charAt(0).toLowerCase() + item.slice(1)}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
