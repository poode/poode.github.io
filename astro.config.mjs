// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://poode.github.io',
  // User site (poode.github.io) is served at the domain root, so no `base`.
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar'],
    routing: {
      // EN at "/", AR at "/ar/"
      prefixDefaultLocale: false,
    },
  },
  // Reachable from inside the Docker dev container.
  server: {
    host: true,
    port: 4321,
  },
});
