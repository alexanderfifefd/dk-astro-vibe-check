# Rendering Strategy

## Static Pre-rendering (SSG)

This site uses **static site generation**. All pages are pre-rendered to HTML at build time.

```bash
npm run build    # Outputs to dist/
npm run preview  # Preview the built site locally
```

No server adapter is configured — the output is plain static HTML/CSS/JS ready for any hosting provider.

## Adding SSR Later

If server-side rendering is needed (e.g., for form handling APIs), add an adapter:

```bash
npm install @astrojs/node  # or @astrojs/vercel, @astrojs/netlify
```

Then configure it in `astro.config.mjs` and opt specific routes into SSR:

```typescript
export const prerender = false;
```
