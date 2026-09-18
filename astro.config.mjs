import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Defaults = live domain at the root. GitHub Pages build sets SITE_URL + BASE_PATH (see .github/workflows/deploy.yml).
// TODO: set the real domain before launch.
const SITE = process.env.SITE_URL || 'https://www.llexcavations.com.au';
const BASE = process.env.BASE_PATH || '/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (p) => !p.includes('/thank-you/') })],
});
