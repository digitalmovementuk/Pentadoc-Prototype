import { ArrowRight, CheckCircle2, Loader2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { contactTopics } from '../content'

type FormStatus = 'idle' | 'sending' | 'success' | 'fallback' | 'error'

type ContactFormProps = {
  compact?: boolean
}

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/alex@digitalmovement.uk'

export function ContactForm({ compact = false }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle')
  const formId = compact ? 'kontakt' : 'hero'

  const statusText = useMemo(() => {
    if (status === 'success') {
      return 'Danke. Ihre Anfrage wurde gesendet. Wir melden uns zeitnah.'
    }

    if (status === 'fallback') {
      return 'Das Formular konnte nicht direkt senden. Ihr E-Mail-Programm wurde als Ausweichweg geöffnet.'
    }

    if (status === 'error') {
      return 'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut oder nutzen Sie die E-Mail-Adresse im Footer.'
    }

    return null
  }, [status])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    if (formData.get('_honey')) {
      return
    }

    formData.set('_subject', 'Neue Pentadoc Homepage Anfrage')
    formData.set('_template', 'table')
    formData.set('_captcha', 'false')
    formData.set('Quelle', window.location.href)

    setStatus('sending')

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Form request failed')
      }

      form.reset()
      setStatus('success')
    } catch {
      const name = String(formData.get('Name') || '')
      const company = String(formData.get('Unternehmen') || '')
      const email = String(formData.get('E-Mail') || '')
      const phone = String(formData.get('Telefon') || '')
      const topic = String(formData.get('Thema') || '')
      const message = String(formData.get('Nachricht') || '')
      const body = encodeURIComponent(
        `Neue Pentadoc Anfrage\n\nName: ${name}\nUnternehmen: ${company}\nE-Mail: ${email}\nTelefon: ${phone}\nThema: ${topic}\n\nNachricht:\n${message}`,
      )

      window.location.href = `mailto:alex@digitalmovement.uk?subject=${encodeURIComponent(
        'Neue Pentadoc Homepage Anfrage',
      )}&body=${body}`
      setStatus('fallback')
    }
  }

  return (
    <form
      className={compact ? 'form-card form-card-compact' : 'form-card'}
      data-testid={compact ? 'contact-form' : 'hero-form'}
      aria-label={compact ? 'Kontaktformular' : 'Kontaktformular im Hero'}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="_subject" value="Neue Pentadoc Homepage Anfrage" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      <label className="sr-only" htmlFor={`${formId}-honey`}>
        Dieses Feld leer lassen
      </label>
      <input
        className="hidden"
        id={`${formId}-honey`}
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="form-card-header">
        <p className="section-kicker text-brand-grey">Erstgespräch anfragen</p>
        <h2 className="mt-2 text-2xl font-semibold leading-8 text-ink sm:text-3xl">
          In 30 Sekunden zur passenden Einordnung.
        </h2>
        <p className="mt-3 text-sm leading-6 text-graphite">
          Kurz schildern, worum es geht. Die Anfrage wird direkt an das zuständige Projektpostfach gesendet.
        </p>
      </div>

      <div className="mt-6 grid gap-4">
        <div className="field-grid">
          <div>
            <label className="form-label" htmlFor={`${formId}-name`}>
              Name
            </label>
            <input
              className="form-field"
              id={`${formId}-name`}
              name="Name"
              type="text"
              autoComplete="name"
              required
            />
          </div>
          <div>
            <label className="form-label" htmlFor={`${formId}-company`}>
              Unternehmen
            </label>
            <input
              className="form-field"
              id={`${formId}-company`}
              name="Unternehmen"
              type="text"
              autoComplete="organization"
              required
            />
          </div>
        </div>

        <div className="field-grid">
          <div>
            <label className="form-label" htmlFor={`${formId}-email`}>
              E-Mail
            </label>
            <input
              className="form-field"
              id={`${formId}-email`}
              name="E-Mail"
              type="email"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label className="form-label" htmlFor={`${formId}-phone`}>
              Telefon
            </label>
            <input
              className="form-field"
              id={`${formId}-phone`}
              name="Telefon"
              type="tel"
              autoComplete="tel"
            />
          </div>
        </div>

        <div>
          <label className="form-label" htmlFor={`${formId}-topic`}>
            Thema
          </label>
          <select className="form-field" id={`${formId}-topic`} name="Thema" defaultValue="" required>
            <option value="" disabled>
              Bitte auswählen
            </option>
            {contactTopics.map((topic) => (
              <option key={topic} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="form-label" htmlFor={`${formId}-message`}>
            Kurz zur Ausgangslage
          </label>
          <textarea
            className="form-field min-h-28 resize-y"
            id={`${formId}-message`}
            name="Nachricht"
            placeholder="Welche Kanäle, Systeme oder Prozesse sollen geklärt werden?"
            required
          />
        </div>
      </div>

      <button className="btn-primary mt-5 w-full" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Wird gesendet
          </>
        ) : (
          <>
            Anfrage senden
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>

      {statusText ? (
        <p
          className={`mt-4 flex gap-2 rounded-md px-3 py-2 text-sm font-semibold leading-5 ${
            status === 'error' ? 'bg-red-50 text-red-800' : 'bg-brand-soft text-ink'
          }`}
          role="status"
        >
          {status !== 'error' ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> : null}
          <span>{statusText}</span>
        </p>
      ) : null}
    </form>
  )
}
