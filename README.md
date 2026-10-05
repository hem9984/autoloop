# AutoLoop

Marketing site for AutoLoop, the fully automated software lifecycle.

Tickets go in. A durable orchestrator grounds them against the code and the runtime, a cloud agent implements the packet, and the change lands only when the quality workflow is green. Development deploys from trunk. Production is a separate truth: deploy workflows green, and for mobile, both stores released.

## Stack

Next.js 16 (App Router, static export), React 19, TypeScript, Tailwind CSS 4, Motion, OGL, Lucide.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` | Access key from [Web3Forms](https://web3forms.com). Public by design. The consultation form refuses to submit until this is set. |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for metadata, Open Graph, sitemap, and robots. No trailing slash. |

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Static export into `out/` |
| `npx serve out` | Preview the static export |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run check:copy` | Fails if product-specific internal names appear in `src`, `public`, or this README |

## Content

Brand strings live in [`src/lib/site.ts`](src/lib/site.ts). Section copy lives in [`src/content/`](src/content/). The flowchart nodes are [`src/content/flowchart.ts`](src/content/flowchart.ts).

## Deploy

GitHub Pages serves the static export. Pushes to `main` run [`.github/workflows/pages.yml`](.github/workflows/pages.yml), which builds with `BASE_PATH` set to the repository name and publishes to `https://<user>.github.io/<repo>/`.

Set `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` as a repository Actions secret if the consultation form should submit on the hosted site. The form is client-side and posts to `https://api.web3forms.com`.

For a custom domain or a `username.github.io` repository, leave `BASE_PATH` empty so the site is served from `/`. GitHub Pages does not apply custom response headers.

## Consultation form

The "Request a consultation" buttons anchor to `#consultation`. The form posts JSON to Web3Forms with a honeypot field. Required fields are name, work email, company, team size, and the request. If the access key is missing, the form shows a configuration notice instead of failing silently.
