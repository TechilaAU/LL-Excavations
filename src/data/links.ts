import type { Service } from './services';
// A service whose slug equals its hub is represented by the hub page itself
export const serviceUrl = (s: Service) => (s.slug === s.hub ? `/services/${s.hub}/` : `/services/${s.hub}/${s.slug}/`);
