import { getCollection } from 'astro:content';

export async function GET(context) {
  const now = Date.now();
  const posts = (await getCollection('blog', ({ data }) => !data.draft))
    .filter((p) => now - p.data.pubDate.valueOf() < 48 * 3600 * 1000)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  const esc = (s) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const items = posts
    .map(
      (p) => `  <url>
    <loc>${new URL(`/blog/${p.id}/`, context.site)}</loc>
    <news:news>
      <news:publication>
        <news:name>Talha M Blog</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${p.data.pubDate.toISOString()}</news:publication_date>
      <news:title>${esc(p.data.title)}</news:title>
    </news:news>
  </url>`
    )
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">\n${items}\n</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
