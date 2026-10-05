import { Reveal } from "@/components/Reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  lede?: string;
  children: React.ReactNode;
  wide?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  lede,
  children,
  wide = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-line/70 px-5 py-20 sm:px-8 lg:py-28"
    >
      <div className={`mx-auto ${wide ? "max-w-[90rem]" : "max-w-6xl"}`}>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-signal">
            {eyebrow}
          </p>
          <h2 className="mt-3 max-w-3xl font-display text-4xl leading-[1.1] text-paper sm:text-5xl">
            {title}
          </h2>
          {lede ? (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-mist">
              {lede}
            </p>
          ) : null}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}
