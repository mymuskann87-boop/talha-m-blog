# Talha M Blog

Simple-English news blog built with Astro 5. Live at https://talha-m-blog.tmblog.workers.dev/

## Run locally

```
npm install
npm run dev
```

## Build

```
npm run build
```

The finished site is created in `dist/`. Deploy that `dist/` folder to Cloudflare
(the same way the current workers.dev site was deployed). Do not upload
`node_modules/`, `dist/` or `.astro/` into source ZIPs or Git — they are rebuilt
automatically and are listed in `.gitignore`.

## Add a new post

1. Create a `.md` file in `src/content/blog/`, for example `my-new-post.md`.
2. Start it with:

```
---
title: "My new post title"
description: "One or two lines that summarize the post."
pubDate: 2026-10-11T10:00:00+05:00
category: "AI"
---
```

3. Write the article below in simple English.

## Add a photo to a post (optional)

1. Put the image file in `public/images/`, for example `public/images/my-photo.jpg`.
2. Add two lines to the post's frontmatter:

```
image: "/images/my-photo.jpg"
imageAlt: "Short description of the photo"
```

The photo will then appear on the home page, on the article page, and as the
sharing image (Open Graph) when the link is shared on WhatsApp/Facebook.
Posts without an image use the default sharing image `public/og-default.png`.

## Pages

Home (with categories + pagination, 10 posts per page), article pages, category
pages, About, Contact, Search (`/search/`, data from `/search-index.json`),
Privacy Policy, Terms of Use, Disclaimer, RSS feed (`/rss.xml`) and sitemap.
