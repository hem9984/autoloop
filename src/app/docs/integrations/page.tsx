import type { Metadata } from "next";
import { DocsArticle } from "@/components/docs/DocsArticle";
import { integrations } from "@/content/integrations";

export const metadata: Metadata = {
  title: "Integrations",
  description:
    "AutoLoop keeps your issue tracker, CI, and stores — and makes them move as one system.",
};

export default function DocsIntegrationsPage() {
  return (
    <DocsArticle
      eyebrow="Integrations"
      title="It orchestrates the tools you already run."
      lede="AutoLoop keeps your issue tracker, your CI, and your stores. It is the loop that makes them move as one system."
    >
      <ul className="grid gap-3 sm:grid-cols-2">
        {integrations.map((name) => (
          <li
            key={name}
            className="rounded-2xl border border-line bg-panel/40 px-4 py-4 text-sm font-semibold text-paper"
          >
            {name}
          </li>
        ))}
      </ul>
    </DocsArticle>
  );
}
