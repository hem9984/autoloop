import type { NextConfig } from "next";

/**
 * Project Pages are served from /<repo>. Leave BASE_PATH unset for a root
 * host (a custom domain, or a username.github.io repository).
 * Response headers are not available on a static export.
 */
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  reactStrictMode: true,
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
