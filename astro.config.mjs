import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cedric-leonard.de',
  integrations: [sitemap()],
});
