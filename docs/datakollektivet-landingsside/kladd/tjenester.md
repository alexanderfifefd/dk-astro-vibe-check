# Tjenester — kladd

> Denne siden er en indeks over tjenester + roadmap. Den skal fungere som en oversikt du kan komme tilbake til — cards med facets, ikke bare tekst. Etter en kort intro skal den gå rett på innhold. Prosess og tjenestetyper er sekundært innhold (collapsible eller egen underseksjon).

---

## 1. Hero

### Tittel

Tjenester

### Ingress

Datakollektivet drifter digitale tjenester for sine medlemmer. Hvilke tjenester vi tilbyr bestemmes av medlemmene. Alt er åpen kildekode, selvhostet, og styrt av fellesskapet.

---

## 2. Tjenesteindeks

> Rett under hero. Ingen lang intro — gå rett på kortene. Alle tjenester i ett grid, uavhengig av status. Kortene har et konsistent sett med facets. Filtrering/sortering etter status, type, etc. er en bonus.

### Card-schema (datamodell per tjeneste)

| Felt | Beskrivelse |
|------|-------------|
| **Navn** | Tjenestenavn |
| **Logo** | SVG/ikon |
| **Beskrivelse** | 1–2 setninger |
| **Kategori** | `Tjeneste` eller `Infrastruktur` |
| **Driftsform** | Foreningsdriftet / Medlemsinitiativ / Samarbeid |
| **Status** | `I drift` / `Forslag` / `Ønskeliste` |
| **Lenke** | URL til tjenesten (der den finnes) |
| **Les mer** | Lenke til tjenesteside (der den finnes) |
| **Lanseringsdato** | Dato eller "—" |

### Tjenester — I drift

---

**Loomio**
Verktøy for medlemsdemokrati — diskusjoner, forslag og avstemninger.
- Kategori: `Tjeneste`
- Driftsform: `Foreningsdriftet`
- Systemansvarlig: Max Brosnahan
- Status: `I drift`
- → loomio.datakollektivet.no

**Matrix**
Desentralisert, kryptert meldingstjeneste — et alternativ til Slack, Discord og Messenger.
- Kategori: `Tjeneste`
- Driftsform: `Samarbeid` (via Data.coop)
- Status: `I drift`
- → matrix.datakollektivet.no

**Forgejo**
Selvhostet kodeplattform for foreningens prosjekter og samarbeid.
- Kategori: `Tjeneste`
- Driftsform: `Medlemsinitiativ` (Hornwitser)
- Status: `I drift`
- → forge.hornwitser.no/datakollektivet

### Tjenester — Forslag

---

**Zulip**
Kommunikasjonsverktøy for driftsgruppe og utvikling.
- Kategori: `Tjeneste`
- Driftsform: _Ikke avklart_
- Status: `Forslag` — behandles nå

### Tjenester — Ønskeliste

> Visuelt grid med logoer. Disse er ikke besluttet — men de er rangert av medlemmene og representerer retningen. Tydeligere visuell markering at dette er fremtid, ikke nåtid.

---

**Fillagring**
Sikker, selvhostet lagring av filer og dokumenter.
_Erstatter: Google Drive, Dropbox_
- Kategori: `Tjeneste`
- Alternativer: `Nextcloud`
- Status: `Ønskeliste`

**Fotolagring**
Selvhostet lagring og organisering av bilder.
_Erstatter: Google Photos, iCloud Photos_
- Kategori: `Tjeneste`
- Alternativer: `Immich`
- Status: `Ønskeliste`

**Dokumentbehandling**
Samskriving og redigering av dokumenter.
_Erstatter: Google Docs, Office 365_
- Kategori: `Tjeneste`
- Alternativer: `Nextcloud Office` · `CryptPad`
- Status: `Ønskeliste`

**Desentraliserte sosiale medier**
Fediverse-tilknyttet plattform eid av fellesskapet.
_Erstatter: Twitter/X, Instagram_
- Kategori: `Tjeneste`
- Alternativer: `Mastodon` · `Pixelfed`
- Status: `Ønskeliste`

**Arrangementstjenester**
Verktøy for å organisere og publisere arrangementer.
_Erstatter: Facebook Events_
- Kategori: `Tjeneste`
- Alternativer: `Mobilizon`
- Status: `Ønskeliste`

**E-post**
Personvernvennlig e-post driftet av fellesskapet.
_Erstatter: Gmail, Outlook_
- Kategori: `Tjeneste`
- Alternativer: `Mailcow` · `Stalwart`
- Status: `Ønskeliste`

**Videomøter**
Selvhostet videokonferanse.
_Erstatter: Zoom, Google Meet_
- Kategori: `Tjeneste`
- Alternativer: `Jitsi Meet`
- Status: `Ønskeliste`

### Infrastruktur — Ønskeliste / påkrevd

> Infrastruktur er ikke sluttbrukertjenester, men grunnlaget som gjør tjenestene mulig.

---

**SSO / Single Sign-On**
Én innlogging, tilgang til alle tjenester.
- Kategori: `Infrastruktur`
- Status: `Påkrevd` — kritisk for skalering

**Medlemsstyring**
Registrering, kontingent, tilgangsstyring på nett.
- Kategori: `Infrastruktur`
- Status: `Påkrevd`

**Distribuert storage**
Lagring på tvers av tjenester.
- Kategori: `Infrastruktur`
- Status: `Ønskeliste` — nødvendig for fil-/fotolagring

---

## 3. Kontekst

> Kort, ærlig seksjon mellom tjenestene og de sekundære innholdene.

### Tekst

Vi kan ikke love at vi bygger alt dette. Vi trenger medlemmer som er villige til å bli med og bygge. Og vi trenger å utvikle infrastrukturen mye — spesielt før vi begynner å håndtere persondata som bilder og dokumenter. Det skal gjøres ordentlig, eller ikke i det hele tatt.

---

## 4. Hvordan tjenester lanseres _(collapsible / secondary)_

> Denne seksjonen er viktig men sekundær. Den kan være collapsible ("Hvordan fungerer dette?"), en FAQ-seksjon, eller en lenke til egen underside. Skal ikke ta fokus fra tjenesteindeksen.

### Seksjonstittel

Hvordan en tjeneste går fra idé til drift

### Steg

1. **Forslag** — Hvem som helst kan foreslå en tjeneste.
2. **Diskusjon og votering** — Forslaget diskuteres og stemmes over i Loomio.
3. **Teknisk vurdering** — Driftsgruppen vurderer gjennomførbarhet, sikkerhet og ressursbehov.
4. **Godkjenning** — Styret godkjenner formelt.
5. **Utvikling** — En systemansvarlig tar eierskap. Oppsett, konfigurasjon, testing.
6. **Lansering** — Administratorer og eventuelt moderatorer utnevnes. Tjenesten gjøres tilgjengelig.

### Fotnote

Denne prosessen er ikke fullt formalisert ennå — men den reflekterer hvordan vi jobber i praksis.

---

## 5. Tjenestetyper _(collapsible / secondary)_

> Forklarer driftsmodellene. Sekundært innhold — for folk som vil forstå detaljene.

### Seksjonstittel

Forskjellige driftsmodeller

**Foreningsdriftet** — Driftes direkte av foreningen med utnevnt systemansvarlig og administratorer.

**Medlemsinitiativ** — Driftes av et enkeltmedlem på vegne av fellesskapet. Kan formaliseres over tid.

**Samarbeid** — Tilbys gjennom samarbeid med en ekstern aktør.

---

## 6. CTA

### Tekst

Har du et forslag til en tjeneste, eller vil du bidra til å bygge noe? Som medlem kan du fremme forslag og stemme over hva vi prioriterer.

### CTA-er

- **Bli medlem** → /bli-medlem
- **Bygg med oss** → /bygg-med-oss

---

## Strukturnotater

### Tone

Faktisk og oversiktlig. Denne siden er referanse + roadmap. Ærlig om hva vi har, hva vi ønsker, og hva som kreves for å komme dit.

### Nøkkelbudskap

1. Vi har tjenester i drift — dette er reelt
2. Hva som kommer neste bestemmes demokratisk
3. Det finnes gode, åpne alternativer — problemet er drift og infrastruktur, ikke software
4. Vi trenger mer folk og mer infrastruktur
5. Infrastruktur vs. Tjeneste er et viktig skille

### Visuell tenking

- **Cards er primærformatet.** Hele indeksen er kort med konsistente facets.
- Gruppering etter status: I drift → Forslag → Ønskeliste → Infrastruktur
- Logoer er viktige — gjør siden visuelt tung og gjenkjennelig
- Status-badges på hvert kort (`I drift`, `Forslag`, `Ønskeliste`, `Påkrevd`)
- Driftsform-badge der relevant
- Infrastruktur-kort har en annen visuell behandling (mer teknisk, mindre "produkt")
- Prosess og tjenestetyper er collapsible — klikk for å utvide, ikke synlig som standard
- Ønskeliste-kort er visuelt dempet (dashed border, muted farger) for å signalisere at dette er fremtid
