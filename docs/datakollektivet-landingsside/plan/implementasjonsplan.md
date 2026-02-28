# Implementasjonsplan

> Fra kladd til kode. Denne planen beskriver hvordan vi tar innholdet i `kladd/`-filene og komponentplanen i `ui-komponenter.md` og gjør dem om til en fungerende nettside — steg for steg, med tydelige avhengigheter.

---

## Nåsituasjon

### Hva som finnes

| Element | Status |
|---------|--------|
| Astro 5, Tailwind v4, React | ✓ Satt opp |
| `Layout.astro`, `Header.astro`, `Footer.astro` | ✓ Fungerer |
| `Hero.astro`, `HeroSecondary.astro` | ✓ Brukes i dag |
| `Button.astro`, `Container.astro` | ✓ Generelle |
| `Chronicle.astro` + `chronicle.json` | ✓ Tidslinje, sortert nyest-først |
| `JoinPage.tsx` | ✓ Tre-fane React island (bli medlem / bygg / følg) |
| Content collection: `tjenester` | ✓ 3 tjenester (Loomio, Matrix, Forgejo) |
| Content collection: `arrangementer` | ✓ 4 arrangementer |
| Sider: `/`, `/tjenester`, `/om`, `/bli-med`, `/vedtekter`, `/arrangementer` | ✓ Alle har grunnleggende innhold |

### Hva som endres

| Endring | Beskrivelse |
|---------|-------------|
| **Forside** | Fra 4 seksjoner til 7. Nytt innhold og nye komponenter i hele flyten. |
| **`/bli-med` → `/bli-medlem` + `/bygg-med-oss`** | Tre-fane-siden splittes i to dedikerte sider. "Følg oss" blir en embedded komponent. |
| **Navigasjon** | Ny toppmeny: Tjenester · Om oss · Bygg med oss · **Bli medlem** |
| **Tjenester** | Utvidet schema, card-basert indeks med status/kategori, ønskeliste, collapsible seksjoner |
| **Om oss** | Mye rikere side: ToC, organisasjon, prosessflyt, driftsmodeller, vedtekter-nøkkelpunkter |
| **Arrangementer** | Fjernes fra navigasjon (finnes fortsatt, men er ikke del av denne redesignen) |

---

## Overordnet strategi

### Rekkefølge

Implementasjonen følger en **komponent-først, side-etterpå**-strategi:

1. **Grunnmur** — Oppdater datamodeller, content collections og navigasjon
2. **Gjenbrukbare komponenter** — Bygg komponentbiblioteket, sorter etter gjenbruk
3. **Sider** — Sett sammen sidene med komponenter og innhold
4. **Polering** — Konsistenssjekk, responsivt, tilgjengelighet

### Prinsipp: utvid, ikke bryt

Vi beholder eksisterende komponenter som fungerer (`Container`, `Button`, `Hero`, `HeroSecondary`) og utvider dem der det trengs. Nye komponenter bygges som `.astro`-filer med mindre de krever klient-side interaktivitet (skjemaer).

---

## Fase 1 — Grunnmur

> Datamodeller, content collections, navigasjon. Må gjøres før alt annet.

### 1.1 Utvide tjenester-schema

Nåværende `tjenester`-schema mangler flere felter som kladdene krever.

**Nye felter:**

| Felt | Type | Beskrivelse |
|------|------|-------------|
| `kategori` | `'tjeneste' \| 'infrastruktur'` | Skiller sluttbrukertjenester fra infrastruktur |
| `status` | `'i-drift' \| 'forslag' \| 'ønskeliste' \| 'påkrevd'` | Erstatter implisitt status |
| `erstatter` | `string[]` (valgfri) | Kommersielle tjenester dette erstatter |
| `alternativer` | `string[]` (valgfri) | FOSS-alternativer som vurderes |
| `lanseringsdato` | `date` (valgfri) | Når tjenesten ble lansert |

Eksisterende felter (`title`, `description`, `order`, `url`, `logo`, `invertLogo`, `driftsmodell`, `driftsdetaljer`, `systemansvarlig`, `administratorer`) beholdes.

**Nye innholdsfiler:** Alle tjenester fra kladden (Zulip, fillagring, fotolagring, dokumentbehandling, sosiale medier, arrangementer, e-post, videomøter, SSO, medlemsstyring, distribuert storage) legges inn som markdown-filer med riktig frontmatter. De eksisterende tre tjenestene oppdateres med de nye feltene.

### 1.2 Nye datafiler

Noen dataelementer bør være strukturerte data-filer i `src/data/`, ikke hardkodet i sider:

| Fil | Innhold |
|-----|---------|
| `roadmap.json` | Tidslinjesteg for forsiden (tittel, beskrivelse, status: ferdig/pågår/kommende) |
| `board.json` | Styremedlemmer og varamedlemmer (navn, rolle) |

`chronicle.json` beholdes og oppdateres med eventuell ny info fra kladden.

**Merk:** Bidragsområder (bygg med oss) kan også bli en datafil, men er enkle nok til å hardkode i første omgang.

### 1.3 Oppdatere navigasjon

`Header.astro` oppdateres til:

```
Logo · Tjenester · Om oss · Bygg med oss · [Bli medlem] (primærknapp)
```

"Arrangementer" fjernes fra toppmenyen. `/bli-med`-lenken erstattes med `/bli-medlem`.

---

## Fase 2 — Komponenter

> Bygges i rekkefølge etter gjenbruk (høyest først).

### 2.1 SectionBlock

**Prioritet:** Høyest — brukes på alle sider.

Gjenbrukbar wrapper for seksjoner. Erstatter den løse `<section>` + `<Container>` + heading-strukturen som gjentas overalt.

**Props:**
- `title` — seksjonstittel
- `ingress` — valgfri ingress under tittelen
- `id` — anchor-lenke
- `variant` — `'default' | 'surface' | 'accent'` (bakgrunn)
- `slot` — innhold

### 2.2 PathCard

**Prioritet:** Høy — brukes på 3 sider (forside, bli-medlem, bygg-med-oss).

Tre varianter med samme grunnkomponent:

| Variant | Bruk |
|---------|------|
| Tre-kolonne | Forsiden — "Tre veier inn" |
| To-kolonne | Bunnen av bli-medlem og bygg-med-oss — "Andre veier inn" |
| Med embedded newsletter | "Følg oss"-kortet |

**Props:**
- `title`, `tagline`, `items[]` (bullet points), `href`, `ctaLabel`
- `highlighted` — visuell vekt (for "Bygg med oss" på forsiden)
- `slot` — for embedded innhold (newsletter i "Følg oss"-kortet)

### 2.3 ServiceCard

**Prioritet:** Høy — data-drevet, brukes på tjenestesiden og forsiden.

Varianter:

| Variant | Kontekst |
|---------|----------|
| Full | Tjenestesiden — alle facets synlige |
| Compact | Forsiden — logo + navn + én setning |
| Wishlist | Ønskeliste — dempet, viser "erstatter" og alternativer |
| Infra | Infrastruktur — annen visuell behandling |

Merk: Varianten kan utledes fra dataen (`status` + `kategori`), eller settes eksplisitt.

### 2.4 NewsletterEmbed

**Prioritet:** Høy — brukes på 3+ sider og footer.

E-postfelt + knapp + Matrix-lenke. Enkel, gjenbrukbar. Prototype uten backend i første omgang — som nåværende JoinPage.

### 2.5 ContentCard

**Prioritet:** Medium — brukes på forsiden ("Vi tror", "Hvordan") og om oss ("Roller").

Generisk kort-komponent: bold overskrift + tekst. Kan ha venstre border-accent. Ren `.astro`-komponent.

**Props:**
- `title`, `description`
- `accent` — valgfri farget venstrekant

### 2.6 Timeline

**Prioritet:** Medium — brukes på forsiden (roadmap) og om oss (krønike).

Erstatter den hardkodede tidslinjen på forsiden OG `Chronicle.astro`. Samme grunnkomponent med to varianter:

| Variant | Props |
|---------|-------|
| Roadmap | `status: 'ferdig' \| 'pågår' \| 'kommende'` per steg |
| Krønike | `date` per steg, kronologisk |

**Strategi:** Bygg ny `Timeline.astro` som en generalisering av begge. `Chronicle.astro` erstattes, men chronicle.json-dataformatet beholdes.

### 2.7 FormBlock

**Prioritet:** Medium — brukes på bli-medlem og bygg-med-oss.

Skjemakomponent med konfigurbare felt. React-komponent (trenger klientside-state for validering og flervalg).

**Felt-typer:**
- Tekst (navn, e-post)
- Textarea (melding)
- Flervalg / checkboxes (bidragsområder — kun bygg-med-oss)

Erstatter det skjema-relevante i `JoinPage.tsx`. Enklere, to separate brukssteder i stedet for tabber.

### 2.8 ProcessFlow

**Prioritet:** Lav — kun om oss-siden.

Visuell stegflyt: **Forslag → Diskusjon → Votering → Teknisk vurdering → Godkjenning → Utvikling → Lansering**

Horisontalt på desktop, vertikalt på mobil. Relativt enkel `.astro`-komponent.

### 2.9 CollapsibleSection

**Prioritet:** Lav — kun tjenestesiden.

`<details>` / `<summary>` med styling. Ren HTML/CSS, ingen JS nødvendig.

### Inlines (ikke egne komponenter)

Følgende er enkle nok til å bygges direkte på sidene de brukes:

- **PersonList** — Styreliste på om oss. Leser fra `board.json`. Enkel tabell/liste.
- **ContactBlock** — E-post, Matrix, Forgejo. Inline på om oss og i footer.
- **TableOfContents** — Inline-liste / sticky sidebar på om oss.
- **StatBlock** — Medlemstall + org.nr under om oss-hero. Inline.

---

## Fase 3 — Sider

> Sidene implementeres med komponenter og innhold fra kladdene. Rekkefølge basert på viktighet og avhengigheter.

### 3.1 Forside (`/`)

**Avhenger av:** SectionBlock, ContentCard, Timeline (roadmap), PathCard, ServiceCard (compact), NewsletterEmbed

**Seksjoner (jf. kladd/forside.md):**

| # | Seksjon | Komponent(er) |
|---|---------|---------------|
| 1 | Hero | Hero (eksisterende, oppdatert tekst) |
| 2 | Vi tror | SectionBlock + ContentCard × 5 |
| 3 | Hvordan | SectionBlock + ContentCard × 3 |
| 4 | Hvor vi er nå | SectionBlock + Timeline (roadmap) |
| 5 | Tre veier inn | SectionBlock + PathCard × 3 (inkl. NewsletterEmbed) |
| 6 | Hva vi bygger | SectionBlock + ServiceCard (compact) × 3 + teaser |
| 7 | Siste CTA | Enkel seksjon med tekst + to knapper |

**Endringer fra nåværende:**
- "Hvorfor"-seksjonen erstattes av "Vi tror" (ny tone og innhold)
- "Hvordan"-seksjonen beholder struktur men nytt innhold
- Roadmap-tidslinjen flyttes til komponent i stedet for inline
- "Tre veier inn" oppdateres med PathCard-komponenter og ny tekst
- Tjenester-preview og siste CTA er nye seksjoner

### 3.2 Bygg med oss (`/bygg-med-oss`)

**Avhenger av:** SectionBlock, FormBlock, PathCard, NewsletterEmbed

**Ny side.** Viktigste konverteringsside.

| # | Seksjon | Komponent(er) |
|---|---------|---------------|
| 1 | Hero | HeroSecondary |
| 2 | Hittil | SectionBlock + tekst |
| 3 | Hva vi jobber med | SectionBlock + problemkort (grid) |
| 4 | Ikke bare kode | SectionBlock + bidragsområde-grid |
| 5 | Hvem vi ser etter | SectionBlock + tekst (visuell bryter) |
| 6 | Slik kommer du i gang | SectionBlock + nummerert liste |
| 7 | Skjema | FormBlock (med flervalg) |
| 8 | Andre veier inn | PathCard × 2 (bli-medlem + følg oss) |

### 3.3 Bli medlem (`/bli-medlem`)

**Avhenger av:** SectionBlock, FormBlock, PathCard, NewsletterEmbed

**Erstatter `/bli-med`** (den gamle tabbed-siden). URL endres.

| # | Seksjon | Komponent(er) |
|---|---------|---------------|
| 1 | Hero | HeroSecondary |
| 2 | Hva betyr medlemskap? | SectionBlock + feature-liste |
| 3 | Vi er i starten | SectionBlock + tekst |
| 4 | Kontingent | SectionBlock + tekst |
| 5 | Slik melder du deg inn | SectionBlock + nummerert liste |
| 6 | Skjema | FormBlock (uten flervalg) |
| 7 | Andre veier inn | PathCard × 2 (bygg-med-oss + følg oss) |

**Redirect:** `/bli-med` → `/bli-medlem` (for eksisterende lenker).

### 3.4 Tjenester (`/tjenester`)

**Avhenger av:** SectionBlock, ServiceCard (alle varianter), CollapsibleSection

| # | Seksjon | Komponent(er) |
|---|---------|---------------|
| 1 | Hero | HeroSecondary |
| 2 | Tjenesteindeks | ServiceCard-grid (full + wishlist + infra) |
| 3 | Kontekst | SectionBlock + tekst |
| 4 | Hvordan tjenester lanseres | CollapsibleSection |
| 5 | Tjenestetyper | CollapsibleSection |
| 6 | CTA | Tekst + to knapper |

Tjenestene hentes fra content collection (utvidet schema). Gruppering etter status: I drift → Forslag → Ønskeliste → Infrastruktur.

### 3.5 Om oss (`/om`)

**Avhenger av:** SectionBlock, ContentCard (roller), ProcessFlow, Timeline (krønike)

Lengste og mest sammensatte siden.

| # | Seksjon | Komponent(er) |
|---|---------|---------------|
| — | ToC | Inline navigasjonsliste |
| 1 | Hero | HeroSecondary + inline stat-linje |
| 2 | Om Datakollektivet | SectionBlock + tekst + finansiering |
| 3 | Styret | SectionBlock + inline tabell |
| 4 | Organisasjon | SectionBlock + tekst + ContentCard (roller) |
| 5 | Fra idé til drift | SectionBlock + ProcessFlow |
| 6 | Vedtekter | SectionBlock + nøkkelpunkter + CTA |
| 7 | Krønike | SectionBlock + Timeline (krønike) |
| 8 | Kontakt | Inline kontaktinfo |
| 9 | CTA | Tekst + to knapper |

### 3.6 Footer

**Oppdateres med:** NewsletterEmbed + inline kontaktinfo + oppdaterte lenker som matcher ny navigasjon.

---

## Fase 4 — Polering

### 4.1 Konsistens
- Alle sider bruker SectionBlock med konsistent spacing og variant-mønster
- Fargealternering mellom seksjoner for visuell rytme
- CTA-knapper konsistent på tvers (primær/sekundær-mønster)

### 4.2 Responsivt
- PathCard: 3-kol → 1-kol på mobil
- ServiceCard: grid → stack på mobil
- ProcessFlow: horisontalt → vertikalt
- TableOfContents: sidebar → inline-liste
- Alle grids: standard responsive breakpoints

### 4.3 Tilgjengelighet
- Semantisk HTML (`<nav>`, `<main>`, `<section>`, `<article>`)
- ARIA-labels der nødvendig (collapsible, timeline-status)
- Skip-to-content-lenke
- Fokus-stiler for alle interaktive elementer

### 4.4 Opprydding
- Fjern `JoinPage.tsx` (erstattet av FormBlock + dedikerte sider)
- Fjern `/bli-med.astro` (erstattet av `/bli-medlem.astro` med redirect)
- Vurder om `/arrangementer` beholdes som-den-er eller fjernes fra navigasjon

---

## Avhengighetsgraf

```
Fase 1 (grunnmur)
├── 1.1 Utvide tjenester-schema
├── 1.2 Nye datafiler (roadmap.json, board.json)
└── 1.3 Oppdatere navigasjon

Fase 2 (komponenter) — kan delvis parallelliseres
├── 2.1 SectionBlock          ← brukes av ALT
├── 2.2 PathCard              ← brukes av forside, bli-medlem, bygg-med-oss
├── 2.3 ServiceCard           ← brukes av tjenester, forside
├── 2.4 NewsletterEmbed       ← brukes av forside, bli-medlem, bygg-med-oss, footer
├── 2.5 ContentCard            ← brukes av forside, om oss
├── 2.6 Timeline              ← brukes av forside, om oss
├── 2.7 FormBlock             ← brukes av bli-medlem, bygg-med-oss
├── 2.8 ProcessFlow           ← brukes av om oss
└── 2.9 CollapsibleSection    ← brukes av tjenester

Fase 3 (sider) — avhenger av relevante komponenter
├── 3.1 Forside       ← SectionBlock, ContentCard, Timeline, PathCard, ServiceCard, NewsletterEmbed
├── 3.2 Bygg med oss  ← SectionBlock, FormBlock, PathCard, NewsletterEmbed
├── 3.3 Bli medlem    ← SectionBlock, FormBlock, PathCard, NewsletterEmbed
├── 3.4 Tjenester     ← SectionBlock, ServiceCard, CollapsibleSection
├── 3.5 Om oss        ← SectionBlock, ContentCard, ProcessFlow, Timeline
└── 3.6 Footer        ← NewsletterEmbed

Fase 4 (polering) ← alt over
```

---

## Avklarte beslutninger

| Spørsmål | Beslutning |
|----------|------------|
| Backend for skjemaer? | Nei. Prototype uten backend. |
| Konkrete priser/kontingent? | 300,- |
| Nyhetsbrev-tjeneste? | Prototype uten integrasjon |
| Beholder vi `/arrangementer`? | Ja, beholdes som den er. Ikke i toppmenyen. |
| Beholder vi `/vedtekter` som egen side? | Ja, med lenke fra om oss. |
| Tjeneste-detaljsider (`/tjenester/[slug]`)? | Ja. Tjenester med status `i-drift` eller `forslag` får detaljside. |
| Skal "Bygg med oss" ha en dropdown i nav? | Nei — flat meny. |
| Visuell design / farger? | Dark wireframe. Stilig, minimalistisk, apple-esque. |

---

## Foreslått arbeidsøkter

For praktisk gjennomføring kan arbeidet deles i omtrent slike økter:

| Økt | Innhold | Estimat |
|-----|---------|---------|
| **A** | Fase 1 + SectionBlock + ContentCard + Timeline | Grunnmur + mest gjenbrukte komponenter |
| **B** | PathCard + NewsletterEmbed + ServiceCard | De tre neste komponentene med høy gjenbruk |
| **C** | Forside (sett sammen alt) | Hovedsiden med alle nye seksjoner |
| **D** | FormBlock + Bygg med oss + Bli medlem | Konverteringssidene |
| **E** | Tjenester (utvidet indeks + collapsible) | Oppdatert tjenesteside |
| **F** | Om oss (alle seksjoner) + Footer | Den lengste siden + oppdatert footer |
| **G** | Polering, responsivt, opprydding | Konsistens og kvalitet |
