import type { Metadata } from "next";
import Link from "next/link";
import { DocsArticle } from "@/components/docs/DocsArticle";
import { proof } from "@/content/proof";
import { docsNav } from "@/lib/docs";

export const metadata: Metadata = {
  title: "Docs",
  description:
    "How AutoLoop moves a ticket from intake to development and production without a human at the merge button.",
};

export default function DocsOverviewPage() {
  return (
    <DocsArticle
      eyebrow="Overview"
      title="What the loop guarantees."
      lede="AutoLoop is the durable parent between your tracker, your CI, and your deploys. These are the promises that stay true on every sweep."
    >
      <ol className="divide-y divide-line overflow-hidden rounded-2xl border border-line">
        {proof.map((item) => (
          <li key={item.kicker} className="bg-panel/40 px-5 py-5 sm:px-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-signal">
              {item.kicker}
            </p>
            <h2 className="mt-2 font-display text-2xl text-paper">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-mist">{item.body}</p>
          </li>
        ))}
      </ol>

      <section>
        <h2 className="font-display text-3xl text-paper">Read next</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {docsNav
            .filter((item) => item.href !== "/docs/")
            .map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block rounded-2xl border border-line bg-panel/40 px-4 py-4 transition-colors hover:border-signal/50"
                >
                  <span className="font-semibold text-paper">{item.label}</span>
                  <span className="mt-1 block text-sm text-mist">
                    {item.description}
                  </span>
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </DocsArticle>
  );
}
