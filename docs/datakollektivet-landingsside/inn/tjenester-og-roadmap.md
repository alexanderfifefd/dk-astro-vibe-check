# Tjenester, tjenestetyper og roadmap

> Ny inn-fil. Samler informasjon om tjenester, driftsmodeller og lanseringsprosess — til bruk for tjenestesiden.

## Tjenester per nå

### I drift

| Tjeneste | Driftsmodell | Systemansvarlig | Beskrivelse |
|----------|-------------|-----------------|-------------|
| **Loomio** | Foreningsdriftet | Max Brosnahan | Medlemsdemokrati — diskusjoner, forslag, avstemninger |
| **Matrix** | Samarbeid (Data.coop) | — | Desentralisert, kryptert meldingstjeneste |

### I drift (oppdatert)

Forgejo er egentlig i drift allerede som medlemsinitiativ (Hornwitser). Skal formaliseres og gjøres mer tilgjengelig, men er oppe.

### Forslag

| Tjeneste | Status | Beskrivelse |
|----------|--------|-------------|
| **Zulip** | Forslagsfase, behandles | Kommunikasjon for driftsgruppe og utvikling |

### Ønskeliste / kommende (fra medlemsavstemning + konkrete alternativer)

| Kategori | Konkrete alternativer | Erstatter |
|----------|-----------------------|-----------|
| Fillagring | Nextcloud | Google Drive, Dropbox |
| Fotolagring | Immich | Google Photos, iCloud |
| Dokumentbehandling | (Nextcloud Office, CryptPad) | Google Docs, Office 365 |
| Desentraliserte sosiale medier | (Mastodon, Pixelfed) | Twitter, Instagram |
| Arrangementstjenester | (Mobilizon) | Facebook Events |
| E-post | (Mailcow, Stalwart) | Gmail, Outlook |
| Videomøter | (Jitsi Meet) | Zoom, Google Meet |

> Alternativene i parentes er eksempler, ikke beslutninger. Hva som velges bestemmes av medlemmene.

## Tjenestetyper

Fire kategorier som beskriver hvordan en tjeneste driftes:

- **Foreningsdriftet** — Driftes direkte av foreningen med utnevnt systemansvarlig og administratorer. Full kontroll. Eks: Loomio.
- **Medlemsinitiativ** — Driftes av et enkeltmedlem på vegne av fellesskapet. Ikke formelt foreningstjeneste ennå. Kan formaliseres over tid. Eks: Forgejo.
- **Samarbeid** — Tilbys gjennom samarbeid med en ekstern aktør. Ikke direkte under foreningens kontroll. Eks: Matrix via Data.coop.
- **Infrastruktur** — Tjenester som primært er grunnlag for andre tjenester (SSO, lagring, orkestrering), ikke direkte sluttbrukertjenester.

> Disse kategoriene er ikke helt avklart. De reflekterer hvor foreningen er i oppstartsfasen.

## Lanseringsprosess for tjenester

Utkast til hvordan en tjeneste går fra idé til drift:

0. **Medlemsforslag** - Et medlem kan etterspørre eller foreslå en tjeneste.
1. **Byggere evaluerer** — Systemansvarlig og minst en annen frivillig foreslår en tjeneste.
2. **Votering** — Forslaget går opp til votering blant medlemmene.
3. **Driftsgruppen** — Vurderer teknisk gjennomførbarhet, sikkerhet, ressursbehov.
4. **Styret** — Godkjenner systemansvarlig, administratorer, og det endelige juridiske ansvaret.
5. **Utvikling** — Oppsett, konfigurasjon, testing, dokumentasjon.
6. **Administratorer** — Utnevnes av styret for den spesifikke tjenesten.
7. **Moderatorer** — Utnevnes for sosiale tjenester.
8. **Lansering** — Tjenesten gjøres tilgjengelig for medlemmer.

> Denne prosessen er ikke formalisert ennå — men det er viktig å kommunisere at det finnes en prosess, og at medlemmene har reell innflytelse.

## Viktig kontekst for kommunikasjon

**Vi kan ikke love at vi bygger alt dette.** Vi trenger medlemmer som er villige til å bli med og bygge. Vi trenger flere folk. Vi trenger mer infrastruktur. Vi trenger å starte et hensiktsmessig sted.

Spesielt: vi trenger å utvikle infrastrukturen mye før vi føler oss trygge på å ta vare på persondata som bilder og dokumenter — på en måte der vi er sikre på at det er sikret og driftssikkert.

Budskapet er ærlig: dette er hva vi vil, dette er hva som finnes, og dette trenger vi hjelp med.

## Nøkkelbudskap for tjenestesiden
// Dette passer også bra på forsiden.

> "Åpen kildekode-teknologi burde ikke være forbeholdt de med teknologikompetanse."

Det finnes massevis av god, åpen programvare. Men i praksis er det bare folk som vet hvordan man drifter en server som har tilgang til å bruke den. Datakollektivet vil endre det.
