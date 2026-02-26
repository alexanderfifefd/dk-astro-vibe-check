# Deployment

## Current Setup

The site builds to static HTML. No hosting platform is configured yet.

```bash
npm run build  # Output: dist/
```

The `dist/` folder can be deployed to any static hosting provider (Vercel, Netlify, Cloudflare Pages, etc.).

## Quick Deploy Options

### Vercel
Connect the GitHub repo — Vercel auto-detects Astro and configures the build.

### Netlify
Same as Vercel — connect repo, auto-detected.

### Manual / CDN
Upload the `dist/` folder to any CDN or static file server.
