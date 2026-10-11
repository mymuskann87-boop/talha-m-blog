import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: apni asli site URL yahan likhein (deploy ke baad)
export default defineConfig({
  site: 'https://talha-m-blog.tmblog.workers.dev',
  integrations: [sitemap()],
});
