import type { MetadataRoute } from "next";
import { docsNav } from "@/lib/docs";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: site.url,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...docsNav.map((item) => ({
      url: `${site.url}${item.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: item.href === "/docs/" ? 0.9 : 0.7,
    })),
  ];
}
