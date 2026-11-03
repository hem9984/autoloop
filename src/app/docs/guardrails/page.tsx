import type { Metadata } from "next";
import { Ban } from "lucide-react";
import { DocsArticle } from "@/components/docs/DocsArticle";
import { guardrails } from "@/content/guardrails";

export const metadata: Metadata = {
  title: "Guardrails",
  description: "What AutoLoop refuses to do, on every run.",
};

export default function DocsGuardrailsPage() {
  return (
    <DocsArticle
      eyebrow="Guardrails"
      title="What it will not do."
      lede="These are hard refusals. The loop stops rather than guess, race a status write, or call something production that is not."
    >
      <ul className="divide-y divide-line overflow-hidden rounded-2xl border border-line">
        {guardrails.map((item) => (
          <li
            key={item}
            className="flex gap-3 bg-panel/40 px-5 py-4 text-sm leading-relaxed text-mist sm:px-6"
          >
            <Ban className="mt-0.5 size-4 shrink-0 text-rose" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </DocsArticle>
  );
}
