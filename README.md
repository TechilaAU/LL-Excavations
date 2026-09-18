# L&L Excavations — website

Astro static site for L&L Excavations (Airlie Beach): earthworks, retaining walls and concreting.
Built from the project brief: brand Concept A, mobile-first, SEO-structured service and location pages.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/ (62 pages)
```

## Push to GitHub

```bash
git remote add origin git@github.com:TechilaAU/llexcavations.git
git push -u origin main
```

## Deploy (Cloudflare Pages)

- Build command: `npm run build` · Output: `dist` · Node 20+
- `functions/api/quote.js` deploys automatically as the quote endpoint
- Env vars: `MONDAY_API_TOKEN`, `MONDAY_BOARD_ID`, optional `TURNSTILE_SECRET`, `NOTIFY_WEBHOOK`
- GitHub Pages works for the static site, but the quote form then needs an external form endpoint

## Where things live

| Path | What |
| --- | --- |
| `src/data/site.ts` | Business details (phone, QBCC, hours) — all TODOs |
| `src/data/services.ts` | 3 hubs + service catalogue; `draft: true` hides unconfirmed services |
| `src/data/locations.ts` | Service-area towns, tiers, local conditions; `localServiceSlugs` drives service×town pages |
| `src/styles/global.css` | Brand tokens (Basalt, Machine Amber, Whitsunday Clay, Concrete, Slab, Chalk) |
| `src/layouts/Base.astro` | SEO head, LocalBusiness schema, header/footer/mobile bar |
| `src/pages/services/[hub]/…` | Hub and service templates |
| `src/pages/service-areas/[town]/…` | Location and service×location templates |
| `src/pages/get-a-quote.astro` | 4-step quote funnel with ?service= / ?town= prefill |
| `public/brand/` | Logo SVGs, icon, contour texture |

## Before launch (search the code for `TODO`)

- [ ] Real phone, email, QBCC, insurance, hours, ABN in `site.ts`
- [ ] Confirm service list, finishes and towns (flip `draft` flags)
- [ ] Rewrite service×location copy so every town page is genuinely local
- [ ] Replace every `.placeholder-photo` with real job and drone photos (WebP/AVIF)
- [ ] Projects content collection + case-study pages
- [ ] monday.com column mapping and file upload in `functions/api/quote.js`
- [ ] Turnstile, GTM/GA4, call tracking, Search Console
- [ ] Set the live domain in `astro.config.mjs` and `public/robots.txt`
