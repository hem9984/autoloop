import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const basePath = process.env.BASE_PATH ?? "";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: site.description,
    start_url: `${basePath}/`,
    display: "standalone",
    background_color: "#04060a",
    theme_color: "#04060a",
    icons: [{ src: `${basePath}/icon.svg`, sizes: "any", type: "image/svg+xml" }],
  };
}
