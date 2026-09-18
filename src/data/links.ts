import type { Service } from './services';
// A service whose slug equals its hub is represented by the hub page itself
export const serviceUrl = (s: Service) => (s.slug === s.hub ? `/services/${s.hub}/` : `/services/${s.hub}/${s.slug}/`);
// Absolute URL for schema/OG, respecting the deploy base path (root-relative links are rewritten post-build)
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const abs = (path: string, site?: URL) => new URL(BASE + path, site).toString();
