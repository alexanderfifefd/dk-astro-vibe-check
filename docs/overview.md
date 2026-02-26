# Datakollektivet — Project Overview

## About

This is the website for **Datakollektivet** (The Data Collective), a Norwegian non-profit organization that provides community-owned digital infrastructure and services to its members, with a focus on privacy, democratic governance, security and decentralization.

For full organizational context — purpose, values, governance, strategic direction, and board composition — see **[Om Datakollektivet](./om-datakollektivet.md)**.

The site is intentionally in a **wireframe / skeleton state** — functional and clean, but with placeholder styling meant to be refined by a designer. Dark mode with neutral colors and system fonts.

## Technology Stack

- **Framework:** [Astro](https://astro.build/) v5 — Static site generation
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4 (CSS-first config)
- **Interactivity:** [React](https://react.dev/) via Astro Islands (JoinPage)
- **Content:** Astro Content Collections for services and events (Markdown)

## Site Structure

1. **Homepage** (`/`) — Hero, value proposition cards, CTA
2. **Services** (`/tjenester`) — Active services (Loomio, Forgejo, Matrix) with logos + upcoming services voted on by members
3. **Service Detail** (`/tjenester/[slug]`) — Individual service pages from Markdown, two-column layout with drift metadata sidebar
4. **Events** (`/arrangementer`) — List view of events, past events faded via client-side JS
5. **Event Detail** (`/arrangementer/[slug]`) — Individual event pages from Markdown
6. **About** (`/om`) — About the organization, board listing, chronicle timeline, contact
7. **Vedtekter** (`/vedtekter`) — Full bylaws of the organization
8. **Join** (`/bli-med`) — Three-track tabbed page: "Bli medlem", "Bygg med oss" (volunteer with contribution area selection), "Følg oss" (newsletter). React island for interactivity.

## Core Architecture

- **Astro First:** Use `.astro` components for all static content, layouts, and pages.
- **React for Interactivity:** Only use React (`.tsx`) for components requiring client-side state (e.g., `JoinPage.tsx`).
- **Static by Default:** The site is fully static. No SSR, no server adapter.
- **Content Collections:** Services and events live in `src/content/` as Markdown files.
- **Client-side date logic:** Since the site is statically built, any "is this in the past?" logic must run in browser `<script>` tags, not in Astro frontmatter.

### Styling

- **Tailwind CSS v4** with CSS-first configuration in `src/styles/global.css`.
- **Theme colors:** `base`, `surface`, `surface-raised`, `border`, `border-strong`, `text`, `text-muted`, `accent`, `accent-hover`.
- **Fonts:** System font stack. No custom fonts.
- **Design state:** Wireframe / placeholder. Intentionally minimal for designer handoff.

### Key Components

- **`Header.astro`** — Sticky nav with mobile menu toggle. "Bli med" link styled as CTA button.
- **`Footer.astro`** — Simple footer with org name, contact, and org number
- **`Hero.astro`** — Primary hero for the landing page
- **`HeroSecondary.astro`** — Compact hero for inner pages, supports optional `cta` slot
- **`Button.astro`** — Simple button/link with primary/secondary variants
- **`Container.astro`** — Max-width content wrapper
- **`Chronicle.astro`** — Timeline component reading from `src/data/chronicle.json`, sorted newest-first at render time
- **`JoinPage.tsx`** — React island (client:load) for `/bli-med`. Three-tab layout: "Bli medlem", "Bygg med oss" (volunteer with contribution area selection), "Følg oss" (newsletter). Prototype, no backend yet.

### Content

- **Services:** `src/content/tjenester/*.md` — Frontmatter: `title`, `description`, `order`, `url` (optional), `logo` (optional), `invertLogo` (optional), `driftsmodell` (enum: foreningsdriftet/medlemsinitiativ/samarbeid), `driftsdetaljer` (optional), `systemansvarlig` (optional), `administratorer` (optional string array)
- **Events:** `src/content/arrangementer/*.md` — Frontmatter: `title`, `description`, `date`, `location` (optional)
- **Chronicle data:** `src/data/chronicle.json` — Array of `{ date, items[] }` where items are HTML strings (supports links). JSON is stored chronologically, component sorts newest-first.
- **Upcoming services:** Hardcoded in `src/pages/tjenester/index.astro` (not in content collection) since these are proposals, not real services yet.

## Key Files

- **Global Styles:** `src/styles/global.css`
- **Main Layout:** `src/layouts/Layout.astro`
- **Header:** `src/components/Header.astro`
- **Content Config:** `src/content/config.ts`
- **Org Context:** `docs/om-datakollektivet.md`

## Language

Norwegian (Bokmål) is the primary content language. Code uses English naming conventions.
