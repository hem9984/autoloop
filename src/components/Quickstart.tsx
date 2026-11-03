import { CopyCommand } from "@/components/CopyCommand";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";
import { quickstart } from "@/content/quickstart";

export function Quickstart() {
  return (
    <Section
      id="quickstart"
      eyebrow={quickstart.eyebrow}
      title={quickstart.title}
    >
      <Reveal>
        <CopyCommand command={quickstart.command} />
      </Reveal>

      <Reveal>
        <ol className="mt-8 space-y-0 divide-y divide-line overflow-hidden rounded-2xl border border-line">
          {quickstart.steps.map((step, index) => (
            <li
              key={step.name}
              className="flex gap-4 bg-panel/40 px-5 py-4 sm:gap-6 sm:px-6"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-paper">{step.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-mist">
                  {step.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
