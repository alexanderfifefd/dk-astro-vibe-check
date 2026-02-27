# UI-komponenter — overordnet plan

> Overblikk over gjenbrukbare komponenter, synergier mellom sider, og en leseguide for frontend-repoet.

---

## Leseguide for implementasjon

Du trenger ikke lese alt. Her er prioriteringen:

### Må leses

| Fil | Hvorfor |
|-----|---------|
| `kladd/forside.md` | Hovedsiden. Definerer de fleste komponentene. |
| `kladd/bygg-med-oss.md` | Viktigste konverteringsside. |
| `kladd/tjenester.md` | Definerer card-schema og tjeneste-datamodellen. |
| `kladd/bli-medlem.md` | Medlemsside med skjema og tilgangsliste. |
| `kladd/om-oss.md` | Lengste siden. ToC, krønike, roller, prosessflyt. |

### Nyttig kontekst (les ved behov)

| Fil | Når |
|-----|-----|
| `inn/fakta-og-organisasjon.md` | Hvis du trenger harde fakta om DK (styre, vedtekter, status). |
| `inn/tjenester-og-roadmap.md` | Hvis du trenger detaljer om tjenestene utover det som er i kladdene. |
| `inn/driftsgruppe-og-roller.md` | Hvis du trenger kontekst om roller og driftsgruppe. |

### Kan hoppes over

| Fil | Hvorfor |
|-----|---------|
| `inn/eksisterende-budskap.md` | Referanse til gammel side — erstattet av kladdene. |
| `inn/målgrupper-og-rekruttering.md` | Analysedokument — innsiktene er bakt inn i kladdene. |
| `inn/fra_bok.md` | Alexanders rånotater — bakt inn i kladdene. |
| `inn/copywriting-ai.md` | Generell referanse om landingssider. |

---

## Komponentoversikt

### 1. Hero

**Brukes på:** Forside, Bli medlem, Bygg med oss, Tjenester, Om oss

To varianter:
- **HeroPrimary** — Forsiden. Stort statement, ingress, to CTA-er.
- **HeroSecondary** — Alle andre sider. Tittel + ingress, mindre visuell tyngde.

Om oss har en variant med en stat-linje under ingressen (~20 medlemmer · org.nr).

### 2. SectionBlock

**Brukes på:** Alle sider

Gjenbrukbar wrapper for seksjoner. Props: tittel, ingress (valgfri), bakgrunnsfarge/variant, id (for anchor-lenker).

Varianter:
- Standard (hvit/mørk bg)
- Alternerende bakgrunn (for visuell rytme)
- Highlighted/accent (for viktige seksjoner)

### 3. BeliefCard / ValueCard

**Brukes på:** Forside ("Vi tror"), Forside ("Hvordan")

Kort med bold overskrift + 1–2 setninger. Enkel boks eller med venstre border-accent.

"Vi tror" har 5 stk. "Hvordan" har 3 stk. Samme komponent, ulik mengde.

### 4. Timeline

**Brukes på:** Forside ("Hvor vi er"), Om oss ("Krønike")

Vertikal tidslinje med steg. Hvert steg har:
- Indikator (ferdig / pågår / kommende)
- Tittel
- Beskrivelse
- Eventuelt dato (krøniken)

To varianter:
- **Roadmap** (forsiden) — status-basert (✓, pågår, kommende)
- **Krønike** (om oss) — dato-basert, kronologisk, vokser over tid

Kan være samme komponent med ulike props.

### 5. PathCard / PricingCard

**Brukes på:** Forside ("Tre veier inn"), Bli medlem (bunnen), Bygg med oss (bunnen)

Kort i kolonne-layout. Hver med:
- Tittel
- Kort beskrivelse / tagline
- Bullet-liste med nøkkelpunkter
- CTA-knapp

Varianter:
- **Tre kolonner** (forsiden) — ett kort er fremhevet (Bygg med oss)
- **To kolonner** (bunnen av bli-medlem og bygg-med-oss) — viser de to andre veiene inn
- "Følg oss"-kortet har embedded nyhetsbrev-skjema + Matrix-lenke i stedet for CTA-knapp

### 6. ServiceCard

**Brukes på:** Tjenester (hele indeksen), Forside (tjenester-preview)

Card med konsistente facets:
- Logo (SVG/ikon)
- Navn
- Beskrivelse (1–2 setninger)
- Status-badge (`I drift`, `Forslag`, `Ønskeliste`, `Påkrevd`)
- Kategori-badge (`Tjeneste` / `Infrastruktur`)
- Driftsform (der relevant)
- Lenke til tjenesten
- Lenke til "les mer" (der det finnes)

Varianter:
- **Full** (tjenestesiden) — alle facets synlige
- **Compact** (forsiden preview) — logo + navn + én setning
- **Wishlist** (ønskeliste) — dempet visuelt (dashed border, muted), viser "erstatter" og alternativer med logoer
- **Infra** (infrastruktur) — annen visuell behandling, mer teknisk

> Tjenestene bør være content collection / data-drevet — ikke hardkodet. Schema finnes i `kladd/tjenester.md`.

### 7. ProcessFlow

**Brukes på:** Om oss ("Fra idé til drift")

Visuell flyt med steg:
**Forslag** → **Diskusjon** → **Votering** → **Teknisk vurdering** → **Godkjenning** → **Utvikling** → **Lansering**

Horisontalt på desktop, vertikalt på mobil. Hvert steg er en node med tittel. Under flyten: en kort forklaringstekst.

### 8. PersonList

**Brukes på:** Om oss ("Styret")

Enkel liste med navn og rolle. To grupper (faste + vara). Kan være tabell eller en custom list.

### 9. RoleCard

**Brukes på:** Om oss ("Organisasjon")

Kort med rollenavn + beskrivelse. Tre stk: Systemansvarlig, Administrator, Moderator.

Samme grunnkomponent som BeliefCard/ValueCard — bold overskrift + tekst.

### 10. ContactBlock

**Brukes på:** Om oss ("Kontakt"), Footer

E-post, Matrix-lenke, Forgejo-lenke. Enkel komponent.

### 11. NewsletterEmbed

**Brukes på:** Forside ("Følg oss"-kortet), Bli medlem (bunnen), Bygg med oss (bunnen), Footer

E-post-felt + "Meld meg på"-knapp + Matrix-lenke. Gjenbrukes overalt der "Følg oss" dukker opp.

### 12. FormBlock

**Brukes på:** Bli medlem, Bygg med oss

Skjemakomponent med felt:
- Navn (påkrevd)
- E-post (påkrevd)
- Flervalg / checkboxes (valgfritt, kun bygg-med-oss)
- Melding / textarea (valgfritt)
- Submit-knapp
- Fotnote

Bli medlem og Bygg med oss bruker samme grunnkomponent med ulike felt.

### 13. CollapsibleSection

**Brukes på:** Tjenester ("Hvordan tjenester lanseres", "Tjenestetyper")

Ekspanderbar seksjon — tittel synlig, innhold skjult til man klikker. For sekundært innhold som ikke skal ta fokus fra hovedindeksen.

### 14. TableOfContents

**Brukes på:** Om oss

Sticky eller synlig øverst. Lenker til seksjoner med anchor. Kan være en sidebar på desktop, inline-liste på mobil.

### 15. StatBlock

**Brukes på:** Om oss (hero)

Enkelt tall eller nøkkelinfo. "~20 medlemmer · Org.nr: 936 667 864". Kan gjenbrukes andre steder etter hvert.

---

## Synergier og gjenbruk

| Komponent | Forside | Bli medlem | Bygg med oss | Tjenester | Om oss |
|-----------|---------|------------|--------------|-----------|--------|
| Hero | ✓ (primary) | ✓ | ✓ | ✓ | ✓ (+stat) |
| SectionBlock | ✓ | ✓ | ✓ | ✓ | ✓ |
| BeliefCard | ✓ | | | | ✓ (roller) |
| Timeline | ✓ (roadmap) | | | | ✓ (krønike) |
| PathCard | ✓ (3-col) | ✓ (2-col) | ✓ (2-col) | | |
| ServiceCard | ✓ (compact) | | | ✓ (full) | |
| ProcessFlow | | | | | ✓ |
| NewsletterEmbed | ✓ | ✓ | ✓ | | |
| FormBlock | | ✓ | ✓ | | |
| CollapsibleSection | | | | ✓ | |
| TableOfContents | | | | | ✓ |

### Høyest gjenbruk

1. **SectionBlock** — brukes overalt, bygg denne først
2. **PathCard** — 3 varianter av samme komponent, brukes på 3 sider
3. **ServiceCard** — data-drevet, brukes i to kontekster (full + compact)
4. **NewsletterEmbed** — dukker opp på minst 3 sider + footer
5. **Timeline** — to varianter (roadmap + krønike) av samme grunnkomponent
6. **BeliefCard** — enkel kort-komponent som også brukes for roller

---

## Data-drevne elementer

Disse bør være content collections eller data-filer, ikke hardkodet:

- **Tjenester** — schema i `kladd/tjenester.md` (card-schema-tabellen)
- **Styremedlemmer** — navn + rolle
- **Krønike** — dato + hendelse
- **Roadmap-steg** — tittel + beskrivelse + status
- **Bidragsområder** — (bygg med oss) — id, label, beskrivelse
