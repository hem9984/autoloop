import { ArrowDown } from "lucide-react";
import { Cta } from "@/components/Cta";
import { HeroParticles } from "@/components/HeroParticles";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pb-28 lg:pt-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(62,224,255,0.18),transparent_58%)]"
      />
      <HeroParticles />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-cyan">
          {site.name}
        </p>
        <h1 className="mt-5 font-display text-5xl leading-[1.02] tracking-tight text-paper sm:text-6xl lg:text-7xl">
          The software lifecycle,{" "}
          <span className="italic text-cyan">fully automated.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-mist sm:text-xl">
          Tickets go in. A durable orchestrator grounds them against your code
          and your runtime, sends a cloud agent to implement the whole change,
          and lands it only when continuous integration is green. Development
          deploys itself. Production ships when customers can actually use it.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Cta href={site.cta.href} className="w-full sm:w-auto">
            {site.cta.label}
          </Cta>
          <Cta href="#how-it-works" variant="secondary" className="w-full sm:w-auto">
            See how it works
            <ArrowDown className="size-4" aria-hidden />
          </Cta>
        </div>
        <p className="mt-8 text-sm text-mist">
          Built for multi-repository products — API, web, and mobile — that are
          finished being the merge button.
        </p>
      </div>
    </section>
  );
}
