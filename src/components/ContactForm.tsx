import { useState } from 'react'

const topics = [
  'Anliegenmanagement',
  'Input Management',
  'Customer Communication Management',
  'IT-Strategie',
  'KI-Prototyping',
  'Lösungsmigration',
  'Erstgespräch allgemein',
]

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [submitted, setSubmitted] = useState(false)

  return (
    <form
      className="rounded-lg border border-white/20 bg-white p-5 text-left shadow-xl shadow-black/20 md:p-6"
      aria-label={compact ? 'Kontaktformular im Kontaktbereich' : 'Kontaktformular im Hero'}
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitted(true)
      }}
    >
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase leading-5 text-brand-blue">
          Erstes Gespräch anfragen
        </p>
        <h2 className="mt-2 text-2xl font-semibold leading-8 text-ink">
          Worum geht es bei Ihnen?
        </h2>
        <p className="mt-2 text-sm leading-6 text-ink-muted">
          Ein kurzer Überblick genügt. Für dieses Prototyp-Formular werden keine Daten versendet.
        </p>
      </div>

      <div className="grid gap-4">
        <div>
          <label className="form-label" htmlFor={compact ? 'name-final' : 'name'}>
            Name
          </label>
          <input
            className="form-field"
            id={compact ? 'name-final' : 'name'}
            name="name"
            type="text"
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label className="form-label" htmlFor={compact ? 'company-final' : 'company'}>
            Unternehmen
          </label>
          <input
            className="form-field"
            id={compact ? 'company-final' : 'company'}
            name="company"
            type="text"
            autoComplete="organization"
            required
          />
        </div>
        <div>
          <label className="form-label" htmlFor={compact ? 'email-final' : 'email'}>
            E-Mail
          </label>
          <input
            className="form-field"
            id={compact ? 'email-final' : 'email'}
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label className="form-label" htmlFor={compact ? 'topic-final' : 'topic'}>
            Thema
          </label>
          <select
            className="form-field"
            id={compact ? 'topic-final' : 'topic'}
            name="topic"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Bitte auswählen
            </option>
            {topics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="form-label" htmlFor={compact ? 'message-final' : 'message'}>
            Nachricht
          </label>
          <textarea
            className="form-field min-h-28 resize-y"
            id={compact ? 'message-final' : 'message'}
            name="message"
            placeholder="Kurz zur Ausgangslage, zum Ziel oder zu einem geplanten Termin."
          />
        </div>
      </div>

      <button className="btn-primary mt-5 w-full" type="submit">
        Anfrage vorbereiten
      </button>
      {submitted ? (
        <p className="mt-3 rounded-md bg-brand-mint px-3 py-2 text-sm font-medium leading-5 text-ink">
          Danke. In der Live-Version würde die Anfrage jetzt an Pentadoc übermittelt.
        </p>
      ) : null}
    </form>
  )
}
