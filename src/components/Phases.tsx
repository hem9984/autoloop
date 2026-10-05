import { phases, verdicts } from "@/content/phases";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function Phases() {
  return (
    <Section
      id="phases"
      eyebrow="Phases"
      title="Five phases. Each one knows what it may write."
      lede="Ground decides if the work is real. Build implements the packet. Land merges only on green CI. Development deploys. Ship tells the truth about production."
    >
      <div className="grid gap-4 lg:grid-cols-2">
        {phases.map((phase, index) => (
          <Reveal key={phase.id} delay={index * 0.05}>
            <article className="h-full rounded-2xl border border-line bg-panel/80 p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">
                0{index + 1}
              </p>
              <h3 className="mt-2 font-display text-3xl text-paper">{phase.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{phase.summary}</p>
              <dl className="mt-5 space-y-3 text-sm">
                <div>
                  <dt className="font-semibold text-paper">Reads</dt>
                  <dd className="mt-1 text-mist">{phase.reads}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-paper">Writes</dt>
                  <dd className="mt-1 text-mist">{phase.writes}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-paper">Refuses</dt>
                  <dd className="mt-1 text-mist">{phase.refuses}</dd>
                </div>
              </dl>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="font-display text-3xl text-paper">Grounding verdicts</h3>
        <p className="mt-3 max-w-2xl text-mist">
          Only one verdict starts work. The other four stop the line or close
          the ticket.
        </p>
        <div className="mt-6 hidden overflow-hidden rounded-2xl border border-line md:block">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">Grounding verdicts and what they do</caption>
            <thead className="bg-panel text-mist">
              <tr>
                <th scope="col" className="px-4 py-3 font-medium">
                  Verdict
                </th>
                <th scope="col" className="px-4 py-3 font-medium">
                  Result
                </th>
                <th scope="col" className="px-4 py-3 font-medium">
                  Meaning
                </th>
              </tr>
            </thead>
            <tbody>
              {verdicts.map((verdict) => (
                <tr key={verdict.name} className="border-t border-line">
                  <th scope="row" className="px-4 py-4 font-semibold text-paper">
                    {verdict.name}
                  </th>
                  <td className="px-4 py-4 text-cyan">{verdict.result}</td>
                  <td className="px-4 py-4 text-mist">{verdict.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="mt-6 space-y-3 md:hidden">
          {verdicts.map((verdict) => (
            <li key={verdict.name} className="rounded-2xl border border-line p-4">
              <p className="font-semibold text-paper">{verdict.name}</p>
              <p className="mt-1 text-sm text-cyan">{verdict.result}</p>
              <p className="mt-2 text-sm leading-relaxed text-mist">
                {verdict.meaning}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
