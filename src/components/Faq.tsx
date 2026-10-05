import { ChevronDown } from "lucide-react";
import { faq } from "@/content/faq";
import { Section } from "@/components/Section";

export function Faq() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="The questions worth asking first."
    >
      <div className="divide-y divide-line rounded-2xl border border-line px-5">
        {faq.map((item) => (
          <details key={item.question} className="group">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold text-paper sm:text-lg">
              {item.question}
              <ChevronDown
                className="size-5 shrink-0 text-signal transition-transform group-open:rotate-180"
                aria-hidden
              />
            </summary>
            <p className="max-w-3xl pb-5 text-sm leading-relaxed text-mist sm:text-base">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </Section>
  );
}
