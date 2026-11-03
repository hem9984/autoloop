import type { Metadata } from "next";
import { DocsArticle } from "@/components/docs/DocsArticle";
import { phases, verdicts } from "@/content/phases";

export const metadata: Metadata = {
  title: "Phases",
  description:
    "Ground, build, land, development, and ship — what each phase may read, write, and refuse.",
};

export default function DocsPhasesPage() {
  return (
    <DocsArticle
      eyebrow="Phases"
      title="Five phases. Each one knows what it may write."
      lede="Ground decides if the work is real. Build implements the packet. Land merges only on green CI. Development deploys. Ship tells the truth about production."
    >
      <ol className="space-y-8">
        {phases.map((phase, index) => (
          <li
            key={phase.id}
            className="rounded-2xl border border-line bg-panel/40 p-5 sm:p-6"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h2 className="mt-2 font-display text-3xl text-paper">{phase.name}</h2>
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
          </li>
        ))}
      </ol>

      <section>
        <h2 className="font-display text-3xl text-paper">Grounding verdicts</h2>
        <p className="mt-3 text-mist">
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
                  <td className="px-4 py-4 text-signal">{verdict.result}</td>
                  <td className="px-4 py-4 text-mist">{verdict.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ul className="mt-6 space-y-3 md:hidden">
          {verdicts.map((verdict) => (
            <li
              key={verdict.name}
              className="rounded-2xl border border-line bg-panel/40 p-4"
            >
              <p className="font-semibold text-paper">{verdict.name}</p>
              <p className="mt-1 text-sm text-signal">{verdict.result}</p>
              <p className="mt-2 text-sm text-mist">{verdict.meaning}</p>
            </li>
          ))}
        </ul>
      </section>
    </DocsArticle>
  );
}
