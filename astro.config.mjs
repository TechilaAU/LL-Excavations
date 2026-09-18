import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: set to the live domain before launch
export default defineConfig({
  site: 'https://www.llexcavations.com.au',
  trailingSlash: 'always',
  integrations: [sitemap({ filter: (p) => !p.includes('/thank-you/') })],
});
