import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: apni asli site URL yahan likhein (deploy ke baad)
export default defineConfig({
  site: 'https://example.netlify.app',
  integrations: [sitemap()],
});
