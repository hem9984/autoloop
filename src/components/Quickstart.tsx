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
      lede={quickstart.lede}
    >
      <Reveal>
        <CopyCommand command={quickstart.command} />
      </Reveal>

      <div className="mt-12">
        <h3 className="font-display text-3xl text-paper">What happens</h3>
        <p className="mt-3 max-w-2xl text-mist">
          After the install, init stands up the pack. Connectors and update are
          optional next steps before you run.
        </p>
        <Reveal>
          <ol className="mt-6 space-y-0 divide-y divide-line overflow-hidden rounded-2xl border border-line">
            {quickstart.steps.map((step, index) => (
              <li
                key={step.name}
                className="flex gap-4 bg-panel/40 px-5 py-5 sm:gap-6 sm:px-6"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-paper">{step.name}</p>
                  {"command" in step && step.command ? (
                    <code className="mt-1 block font-mono text-sm text-signal">
                      {step.command}
                    </code>
                  ) : null}
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
