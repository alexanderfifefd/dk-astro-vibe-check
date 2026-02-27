# Datakollektivet – Nettside

## Mål

Lage innhold for Datakollektivets nettside som:

1. **Forklarer hva Datakollektivet er** — for folk som aldri har hørt om det
2. **Rekrutterer utviklere og andre bidragsytere** — dette er hovedfokus
3. **Skaper enighet blant eksisterende medlemmer** — om hva DK er og hva vi kommuniserer utad

## Leveranse

Tekst, budskap og struktur for en nettside med flere sider. UI-tenking er relevant (det er en nettside, ikke et essay), men tekst er primært.

### Sider

| Side | URL | Funksjon |
|------|-----|----------|
| Forside | / | Hook, overbevisning, status, tre veier inn |
| Bli medlem | /bli-medlem | Medlemskap — hva du får, hva du kan påvirke, skjema |
| Bygg med oss | /bygg-med-oss | Rekruttering av utviklere/bidragsytere, konkrete problemer |
| Tjenester | /tjenester | Roadmap — i drift, neste opp, ønskeliste, lanseringsprosess |
| Om oss | /om | Hvem vi er, styre, organisasjon, krønike, vedtekter |

"Følg oss" er et embedded nyhetsbrev-skjema på forsiden og i footer — ikke en egen side.

### Navigasjon

Toppbar: Logo + Tjenester | Om oss | Bygg med oss | **Bli medlem** (primærknapp)

## Status

Kladder for alle hovedsider er skrevet. Klar for implementasjon.

## Viktige merknader

- Eksisterende nettside-innhold er delvis KI-drevet og skal **ikke** behandles som fasit.
- Kontekst fra "Om Datakollektivet"-dokumentet er mer pålitelig, men også dette er et arbeidsdokument.
- Tekst og budskap er primært, men sidestruktur og UI-tenking er relevant — dette er en nettside, ikke et essay.

## Innhold

### inn/

Syntetisert kontekst og kildemateriale:

- [`fakta-og-organisasjon.md`](inn/fakta-og-organisasjon.md) — Harde fakta: formål, verdier, organisasjon, vedtekter, status
- [`eksisterende-budskap.md`](inn/eksisterende-budskap.md) — Hva den nåværende nettsiden sier (med forbehold om KI-innhold)
- [`målgrupper-og-rekruttering.md`](inn/målgrupper-og-rekruttering.md) — Målgrupper, inngangsporter, rekrutteringsstrategi, spenninger
- [`tjenester-og-roadmap.md`](inn/tjenester-og-roadmap.md) — Tjenester, tjenestetyper, lanseringsprosess, ønskeliste med alternativer
- [`driftsgruppe-og-roller.md`](inn/driftsgruppe-og-roller.md) — Driftsgruppe, roller, vedtektsutfordringer, diskusjonspunkter
- [`fra_bok.md`](inn/fra_bok.md) — Alexanders egne tanker om struktur og budskap (primærkilde)
- [`copywriting-ai.md`](inn/copywriting-ai.md) — Referanse: prinsipper for conversion-orientert landingsside

### kladd/

Utkast til sideinnhold:

- [`forside.md`](kladd/forside.md) — Forsiden: Hero → Vi tror → Hvordan → Hvor vi er → Tre veier inn → Tjenester preview → CTA
- [`bli-medlem.md`](kladd/bli-medlem.md) — Bli medlem: hva du får, hva du kan forme, kontingent, skjema
- [`bygg-med-oss.md`](kladd/bygg-med-oss.md) — Rekruttering: konkrete tekniske problemer, hvem vi ser etter, bidragsområder, skjema
- [`tjenester.md`](kladd/tjenester.md) — Tjeneste-indeks med cards, roadmap, ønskeliste med logoer
- [`om-oss.md`](kladd/om-oss.md) — Om Datakollektivet: intro, styre, arbeidsgrupper, fra idé til drift, vedtekter, krønike, kontakt

### analyse/

_Ingen artefakter ennå._

### diskusjon/

_Ingen artefakter ennå._

### plan/

- [`ui-komponenter.md`](plan/ui-komponenter.md) — Overordnet komponentplan, synergier mellom sider, gjenbrukstabell, leseguide for frontend-repo
- [`implementasjonsplan.md`](plan/implementasjonsplan.md) — Steg-for-steg implementasjonsplan: grunnmur → komponenter → sider → polering
