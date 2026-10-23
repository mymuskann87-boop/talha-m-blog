# Talha M Blog

**Simple-English news and knowledge blog — written so a child and an adult can both enjoy it.**

🌐 Live at **[talhablog.com](https://talhablog.com)**

More than 200 original posts: world news, business, technology, health, space,
nature, sports, famous life stories, online safety — and full guides on
personal finance. Every post is checked against real sources, and every post
ends with its sources so readers can verify the facts themselves.

---

## What is on the site

- **Home page** — latest posts with category chips and pagination (10 posts per page)
- **Article pages** — clean reading view with a hero image, comments and related reading
- **Category pages** — one page per category, created automatically
- **Comments** — readers can discuss every post (powered by Waline)
- **Newsletter** — email subscription on article pages (powered by Kit)
- **Search** — full-site search at `/search/` (data from `/search-index.json`)
- **Author page** — about the person behind the blog
- **Trust pages** — About, Contact, Privacy Policy, Terms of Use, Disclaimer
- **RSS feed** at `/rss.xml` and an automatic **sitemap**
- **PWA** — the blog can be installed like an app

## Tech

- [Astro 5](https://astro.build) with Markdown content
- Hosted on **Cloudflare** (custom domain `talhablog.com`)
- Post images are **WebP** (`.webp`) for fast loading
- Pushing to GitHub triggers an automatic Cloudflare build and deploy —
  never upload `node_modules/`, `dist/` or `.astro/`; they are rebuilt
  automatically and listed in `.gitignore`

## Run locally

```
npm install
npm run dev
```

## Build

```
npm run build
```

The finished site is created in `dist/`.

## Add a new post

1. Create a `.md` file in `src/content/blog/`, for example `my-new-post.md`.
2. Start it with frontmatter in this exact format:

```
---
title: "My New Post Title"
description: "One plain sentence that summarises the post."
pubDate: 2026-10-23T10:00:00+05:00
image: "/images/my-new-post.webp"
imageAlt: "Short description of the image"
category: "Technology"
tags: ["tag one", "tag two", "tag three"]
---
```

3. Write the article below in simple English.

## Add the photo

1. Put the image in `public/images/` — the file name must match the post
   slug, for example `public/images/my-new-post.webp` (2048 × 1152, WebP).
2. The `image:` and `imageAlt:` lines in the frontmatter (above) make it
   appear on the home page, on the article page, and as the sharing image
   (Open Graph) on WhatsApp/Facebook.
3. Posts without an image use the default sharing image `public/og-default.png`.

> ⚠️ The frontmatter field is `image:` — not `heroImage:`. Only `image:`
> is read by the site template.

## Writing rules of this blog

- Titles are **exactly 5 words** — attractive, but literally true
- Simple, natural English; never boringly simple
- Every fact comes from a real, named source — nothing is invented
- No copied sentences; every post is written in its own style
- Every post ends with a **Sources** section
