# AutoLoop

Marketing site for AutoLoop, the fully automated software lifecycle.

Tickets go in. A durable orchestrator grounds them against the code and the runtime, a cloud agent implements the packet, and the change lands only when the quality workflow is green. Development deploys from trunk. Production is a separate truth: deploy workflows green, and for mobile, both stores released.

## Stack

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4, Motion, tsParticles, Lucide.

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
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run check:copy` | Fails if product-specific internal names appear in `src`, `public`, or this README |

## Content

Brand strings live in [`src/lib/site.ts`](src/lib/site.ts). Section copy lives in [`src/content/`](src/content/). The flowchart nodes are [`src/content/flowchart.ts`](src/content/flowchart.ts).

## Deploy

Any Node host that can run `next build` and `next start` (Node 20.9+). On Vercel, set the two environment variables above and deploy the repository root. `next.config.ts` sends security headers, including a production content security policy that allows the browser to post the consultation form to `https://api.web3forms.com`.

The form is client-side. There is no application server beyond Next.js.

## Consultation form

The "Request a consultation" buttons anchor to `#consultation`. The form posts JSON to Web3Forms with a honeypot field. Required fields are name, work email, company, team size, and the request. If the access key is missing, the form shows a configuration notice instead of failing silently.
