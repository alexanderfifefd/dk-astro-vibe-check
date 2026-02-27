# Driftsgruppe, roller og organisasjonsstruktur

> Kilde: Appendix om sikkerhet/organisasjonsstruktur + innkalling til innledende møte om driftsgruppen (februar 2026). Denne informasjonen er viktig bakgrunn for hvordan DK fremstilles, spesielt på Om oss, Bygg med oss og Tjenester.

## Status

Driftsgruppen er **ikke formalisert ennå**. Arbeidsgruppene (Formidling, Infrastruktur og Sikkerhet) har vært enkle i oppstartsfasen. De er i prosess med å formaliseres i en driftsgruppe, men det krever noen vedtektsendringer.

Et innledende møte er kunngjort (februar 2026) for å diskutere struktur, ansvar og demokratiske mekanismer.

## Roller (utkast, ikke vedtatt)

### Systemansvarlig
Ansvar for ett konkret system. Sørger for driftssikkerhet og at dokumentasjon finnes og er oppdatert.

- Planlegger og leder implementasjonen i samarbeid med andre
- Ansvarlig for sikkerhet innenfor felles rammer
- Sørger for at systemet følger krav og prosedyrer
- Første kontaktpunkt for styret/driftsgruppen
- Rapporterer jevnlig om status, risiko og hendelser

### Administratorer
Praktiske tilganger til systemene (SSH, web-admin, databaser). Systemansvarlige er også administrator i sitt system.

- Utfører tekniske endringer innenfor rammene systemansvarlig og driftsgruppe har satt
- Følger prosedyrer for oppdateringer, deploy, nøkkelrotasjon

### Moderatorer
Håndterer innhold og brukeratferd i tjenester med diskusjoner/brukerinnhold. Følger Code of Conduct. Trenger ikke tekniske tilganger — rollen holdes adskilt fra drift.

## Vedtektsutfordring

Vedtektene sier at styret utnevner en driftsgruppe og at "alle som er i driftsgruppen kalles administratorer". Alexander mener det er hensiktsmessig at folk kan være i driftsgruppen uten å ha tilganger — f.eks. i rådgivende roller. Dette krever vedtektsendring.

## Systemdokumentasjon (mål per system)

- Systemark (formål, brukere, kritikalitet, avhengigheter)
- Risikovurdering
- Tilgangsoversikt/tilgangsmatrise
- Driftshåndbok
- Backup- og recovery-plan
- Hendelseshåndteringsplan

Målet: en ny person med relevant kompetanse skal kunne forstå, ta over og videreutvikle systemet basert på dokumentasjonen.

## Fundamentalt spørsmål

> "Hvordan strukturer man en ideell organisasjon som motiverer og veileder frivillige til å produksjonssette og drifte programvare som når opp til et høyt nok teknisk nivå samtidig som det møter øvrige medlemmenes interesser."

## Åpne diskusjonspunkter (fra innkallingen)

### Bottom-up vs. Top-down
Ikke tro på top-down der ledelse delegerer. Det mest interessante kommer ut av det uplanlagte og medlemsinitierte. Organisasjonsstrukturen må være fleksibel nok til at individer kan forankre initiativ mot medlemmer og styre.

### Ansvar
Teknologer har ofte masse motivasjon i byggefasen, men den falmer i driftsfasen. Lett at kritiske brikker får for mye ansvar og blir single points of failure. Hvordan fordele ansvar uten å overbelaste frivillige?

### Motivasjon
To grupper:
- Folk med **mindre formell kompetanse** som motiveres av å lære og bygge erfaring
- Folk med **mye erfaring** som er opptatte med jobb/familie men kan sparring og peke i riktig retning

Hvordan koble disse sammen?

### Demokratiske mekanismer
Livssyklusen til et system trenger demokratiske mekanismer: medlemmer påvirker hva som bygges, valg som angår dem under drift, og kan ved mistillit tvinge frem ansvarsbytte eller nedleggelse.

### Teknisk kompleksitet vs. medlemsbehov
Spenning mellom hva teknologer ønsker (nye teknologier, kompleksitet, fleksibilitet) og hva medlemmer trenger (tjenester som løser et behov). Behov for lederskap i driftsgruppen, eller eget infrastrukturteam på tvers?

### Hva er nok prosess?
Hva er nødvendig prosess som gjør DK bedre, sikrere, med varighet og kontinuitet? Og hva er unødvendig prosess som føles ut som ubetalt arbeid og knebler motivasjon?
