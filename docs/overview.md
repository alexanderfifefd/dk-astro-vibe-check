# Datakollektivet — Project Overview

## About

This is the website for **Datakollektivet** (The Data Collective), a Norwegian non-profit organization working for open data, digital literacy, and community-owned data infrastructure.

The site is intentionally in a **wireframe / skeleton state** — functional and clean, but with placeholder styling meant to be refined by a designer. Dark mode with neutral colors and system fonts.

## Technology Stack

- **Framework:** [Astro](https://astro.build/) v5 — Static site generation
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4 (CSS-first config)
- **Interactivity:** [React](https://react.dev/) via Astro Islands (only for JoinForm)
- **Content:** Astro Content Collections for service pages (Markdown)

## Site Structure

1. **Homepage** (`/`) — Hero, feature cards, chronicle timeline, CTA
2. **About** (`/om`) — About the organization, values, contact
3. **Services** (`/tjenester`) — Listing of services (from Markdown content collection)
4. **Services Detail** (`/tjenester/[slug]`) — Individual service pages
5. **Join** (`/bli-med`) — Info + React form for expressing interest

## Core Architecture

- **Astro First:** Use `.astro` components for all static content, layouts, and pages.
- **React for Interactivity:** Only use React (`.tsx`) for components requiring client-side state (e.g., `JoinForm.tsx`).
- **Static by Default:** The site is fully static. No SSR, no server adapter.
- **Content Collections:** Service pages live in `src/content/tjenester/` as Markdown files.

### Styling

- **Tailwind CSS v4** with CSS-first configuration in `src/styles/global.css`.
- **Theme colors:** `base`, `surface`, `surface-raised`, `border`, `border-strong`, `text`, `text-muted`, `accent`, `accent-hover`.
- **Fonts:** System font stack. No custom fonts.
- **Design state:** Wireframe / placeholder. Intentionally minimal for designer handoff.

### Key Components

- **`Header.astro`** — Sticky nav with mobile menu toggle
- **`Footer.astro`** — Simple footer with org name and contact
- **`Hero.astro`** — Primary hero for the landing page
- **`HeroSecondary.astro`** — Compact hero for inner pages
- **`Button.astro`** — Simple button/link with primary/secondary variants
- **`Container.astro`** — Max-width content wrapper
- **`Chronicle.astro`** — Timeline component reading from `src/data/chronicle.json`
- **`JoinForm.tsx`** — React form (client:load) — prototype, no backend yet

### Content

- **Services:** `src/content/tjenester/*.md` — Markdown with frontmatter (`title`, `description`, `order`)
- **Chronicle data:** `src/data/chronicle.json` — Array of `{ date, title, description }`

## Key Files

- **Global Styles:** `src/styles/global.css`
- **Main Layout:** `src/layouts/Layout.astro`
- **Header:** `src/components/Header.astro`
- **Content Config:** `src/content/config.ts`

## Language

Norwegian (Bokmål) is the primary content language. Code uses English naming conventions.
