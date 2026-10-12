import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://talhablog.com',
  integrations: [sitemap()],
});
