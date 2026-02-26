import { useState } from 'react';

export default function JoinForm() {
  const [submitted, setSubmitted] = useState(false);

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
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text mb-1.5">
          Navn
        </label>
        <input
          type="text"
          id="name"
          required
          placeholder="Ditt navn"
          className="w-full bg-surface border border-border rounded px-4 py-2.5 text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text mb-1.5">
          E-post
        </label>
        <input
          type="email"
          id="email"
          required
          placeholder="din@epost.no"
          className="w-full bg-surface border border-border rounded px-4 py-2.5 text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text mb-1.5">
          Melding <span className="text-text-muted font-normal">(valgfritt)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Fortell oss gjerne litt om deg selv og hva du er interessert i..."
          className="w-full bg-surface border border-border rounded px-4 py-2.5 text-text placeholder:text-text-muted/50 focus:outline-none focus:border-accent transition-colors resize-y"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-accent text-base font-medium rounded px-5 py-2.5 hover:bg-accent-hover transition-colors cursor-pointer"
      >
        Send inn
      </button>

      <p className="text-xs text-text-muted text-center">
        Prototype — ingen data lagres ennå.
      </p>
    </form>
  );
}
