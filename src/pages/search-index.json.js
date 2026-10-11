import { getCollection } from 'astro:content';
import { fmtDate, slugify } from '../utils';

export async function GET() {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );
  const data = posts.map((p) => ({
    slug: p.id,
    title: p.data.title,
    description: p.data.description,
    category: p.data.category,
    catSlug: slugify(p.data.category),
    date: fmtDate(p.data.pubDate),
  }));
  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' },
  });
}
