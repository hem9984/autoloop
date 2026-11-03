import type { Metadata } from "next";
import { DocsArticle } from "@/components/docs/DocsArticle";
import { faq } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Common questions about how AutoLoop runs and what people still do.",
};

export default function DocsFaqPage() {
  return (
    <DocsArticle
      eyebrow="FAQ"
      title="Common questions."
      lede="Short answers about people, CI, leases, write boundaries, and how a rollout starts."
    >
      <dl className="divide-y divide-line overflow-hidden rounded-2xl border border-line">
        {faq.map((item) => (
          <div key={item.question} className="bg-panel/40 px-5 py-5 sm:px-6">
            <dt className="font-semibold text-paper">{item.question}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-mist">{item.answer}</dd>
          </div>
        ))}
      </dl>
    </DocsArticle>
  );
}
