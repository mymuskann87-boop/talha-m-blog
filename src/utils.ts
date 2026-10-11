export const SITE_NAME = 'Talha M Blog';

export const slugify = (s: string) =>
  s.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

export const readingTime = (body: string | undefined = '') =>
  Math.max(1, Math.round(body.trim().split(/\s+/).length / 200));

export const fmtDate = (d: Date) =>
  d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'Asia/Karachi' });
