import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://talha-m-blog.tmblog.workers.dev',
  integrations: [sitemap()],
});
