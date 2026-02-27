import { useState } from 'react';

type Track = 'volunteer' | 'member' | 'follow';

const contributionAreas = [
  { id: 'dev', label: 'Utvikling', desc: 'Kode, frontend, backend, DevOps' },
  { id: 'design', label: 'Design', desc: 'UX, visuell design, tilgjengelighet' },
  { id: 'ops', label: 'Drift og infrastruktur', desc: 'Sysadmin, nettverk, sikkerhet' },
  { id: 'content', label: 'Innhold og kommunikasjon', desc: 'Tekst, sosiale medier, oversettelse' },
  { id: 'democracy', label: 'Demokrati og organisasjon', desc: 'Vedtekter, moderering, prosesser' },
  { id: 'advisory', label: 'Rådgivning', desc: 'Erfaring og veiledning' },
];

const tabs: { id: Track; label: string; desc: string }[] = [
  { id: 'member', label: 'Bli medlem', desc: 'Innflytelse på retningen og tilgang til tjenester når de lanseres.' },
  { id: 'volunteer', label: 'Bygg med oss', desc: 'Bidra med kode, design, drift, innhold eller rådgivning.' },
  { id: 'follow', label: 'Følg oss', desc: 'Hold deg oppdatert med nyhetsbrev.' },
];

export default function JoinPage() {
  const [track, setTrack] = useState<Track>('member');
  const [selectedAreas, setSelectedAreas] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const selectTrack = (newTrack: Track) => {
    setTrack(newTrack);
    setSubmitted(false);
  };

  const toggleArea = (id: string) => {
    setSelectedAreas((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-accent/30 bg-accent/5 rounded p-8 text-center">
        <p className="text-lg font-semibold text-text mb-2">Takk for din interesse!</p>
        <p className="text-text-muted text-sm">
          Dette skjemaet er foreløpig kun en prototype. Vi tar kontakt når vi er klare.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="grid md:grid-cols-3">
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => selectTrack(tab.id)}
            className={`text-left p-5 border border-border transition-colors cursor-pointer ${
              i === 0 ? 'rounded-tl' : ''
            } ${
              i === tabs.length - 1 ? 'rounded-tr' : ''
            } ${
              i > 0 ? 'border-l-0' : ''
            } ${
              track === tab.id
                ? 'bg-accent/10 border-b-surface'
                : 'bg-surface-raised/50 hover:bg-surface-raised'
            }`}
          >
            <h3
              className={`font-semibold mb-1 ${
                track === tab.id ? 'text-accent' : 'text-text'
              }`}
            >
              {tab.label}
            </h3>
            <p className="text-sm text-text-muted">
              {tab.desc}
            </p>
          </button>
        ))}
      </div>

      <div
        key={track}
        className="bg-surface border border-border border-t-0 rounded-b p-6 md:p-8 animate-fade-in"
      >
        {track === 'volunteer' && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Hva vil du bidra med?</h3>
            <p className="text-sm text-text-muted mb-5">
              Velg ett eller flere områder du er interessert i. Ingenting er bindende.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {contributionAreas.map((area) => (
                <button
                  key={area.id}
                  type="button"
                  onClick={() => toggleArea(area.id)}
                  className={`text-left p-3 rounded border text-sm transition-all cursor-pointer ${
                    selectedAreas.includes(area.id)
                      ? 'bg-accent/15 border-accent'
                      : 'bg-surface-raised border-border-strong hover:border-accent/50'
                  }`}
                >
                  <span
                    className={`font-medium block mb-0.5 ${
                      selectedAreas.includes(area.id) ? 'text-accent' : 'text-text'
                    }`}
                  >
                    {area.label}
                  </span>
                  <span className="text-xs text-text-muted">{area.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {track === 'member' && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Bli med som medlem</h3>
            <p className="text-sm text-text-muted">
              Som medlem får du stemmerett i generalforsamlingen, innflytelse over hvilke
              tjenester vi prioriterer, og tilgang til selvhostede, personvernvennlige
              tjenester eid av fellesskapet.
            </p>
          </div>
        )}

        {track === 'follow' && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Meld deg på nyhetsbrev</h3>
            <p className="text-sm text-text-muted">
              Få oppdateringer om hva vi jobber med, nye tjenester og arrangementer.
              Ingen forpliktelser — du kan melde deg av når som helst.
            </p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {track !== 'follow' && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">
                Navn
              </label>
              <input
                type="text"
                id="name"
                required
                placeholder="Ditt navn"
                className="w-full bg-base border border-border rounded px-4 py-2.5 text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">
              E-post
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="din@epost.no"
              className="w-full bg-base border border-border rounded px-4 py-2.5 text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors"
            />
          </div>

          {track !== 'follow' && (
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">
                Melding <span className="text-text-muted font-normal">(valgfritt)</span>
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder={
                  track === 'volunteer'
                    ? 'Fortell oss gjerne litt om bakgrunnen din og hvordan du ønsker å bidra...'
                    : 'Fortell oss gjerne hva du er interessert i...'
                }
                className="w-full bg-base border border-border rounded px-4 py-2.5 text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors resize-y"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-accent text-base font-medium rounded px-5 py-2.5 hover:bg-accent-hover transition-colors cursor-pointer"
          >
            {track === 'follow' ? 'Meld meg på' : 'Send inn'}
          </button>

          <p className="text-xs text-text-muted text-center">
            Prototype — ingen data lagres ennå.
          </p>
        </form>
      </div>
    </div>
  );
}
