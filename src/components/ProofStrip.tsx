import SpotlightCard from "@/components/bits/SpotlightCard";
import { proof } from "@/content/proof";

export function ProofStrip() {
  return (
    <section aria-labelledby="proof-heading" className="px-5 pb-6 sm:px-8">
      <h2 id="proof-heading" className="sr-only">
        What the loop guarantees
      </h2>
      <ul className="mx-auto grid max-w-[90rem] gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {proof.map((item) => (
          <li key={item.kicker}>
            <SpotlightCard
              className="h-full rounded-2xl border border-line bg-panel/80 p-4"
              spotlightColor="rgba(61, 220, 132, 0.18)"
            >
            <p className="font-mono text-[11px] text-signal">{item.kicker}</p>
            <h3 className="mt-2 text-sm font-semibold leading-snug text-paper">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-mist">{item.body}</p>
            </SpotlightCard>
          </li>
        ))}
      </ul>
    </section>
  );
}
