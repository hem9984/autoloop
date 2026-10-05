import GradientText from "@/components/bits/GradientText";
import StarBorder from "@/components/bits/StarBorder";
import { Cosmos } from "@/components/Cosmos";
import { Cta } from "@/components/Cta";
import { LoopExplorer } from "@/components/LoopExplorer";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-16 pt-14 sm:px-8 sm:pt-20 lg:pb-24">
      <Cosmos />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(4,6,10,0.35)_0%,rgba(4,6,10,0.1)_45%,rgba(4,6,10,0.6)_100%)]"
      />
      <div aria-hidden className="instrument-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent"
      />

      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="font-display text-[2.6rem] leading-[1.04] tracking-tight text-paper sm:text-6xl lg:text-7xl">
          Ticket in.{" "}
          <GradientText
            colors={["#d9ffe8", "#3ddc84", "#86efac", "#22c55e"]}
            animationSpeed={10}
            className="font-display text-[1em] italic"
          >
            Production out.
          </GradientText>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
          Every ticket is grounded against your code, built by a cloud agent,
          merged on green CI, and closed only when customers have the change.
        </p>
        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <StarBorder
            as="a"
            href={site.cta.href}
            color="#f4fff8"
            speed="7s"
            thickness={1}
            backgroundColor="#3ddc84"
            textColor="#04120a"
            borderColor="#8ef0b2"
            className="w-full no-underline sm:w-auto"
          >
            {site.cta.label}
          </StarBorder>
          <Cta href="#phases" variant="secondary" className="w-full sm:w-auto">
            Read the phases
          </Cta>
        </div>
      </div>

      <div className="relative mx-auto mt-12 max-w-[90rem] lg:mt-16">
        <LoopExplorer />
      </div>
    </section>
  );
}
