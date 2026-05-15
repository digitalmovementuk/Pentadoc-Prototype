import { ArrowRight, CheckCircle2, Loader2, ShieldCheck } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useT } from '../lib/i18n'

type FormStatus = 'idle' | 'sending' | 'success' | 'fallback' | 'error'

type ContactFormProps = {
  compact?: boolean
  variant?: 'standard' | 'hero'
  defaultTopic?: string
  mailSubjectOverride?: string
}

const FORM_ENDPOINT = 'https://formsubmit.co/ajax/alex@digitalmovement.uk'

export function ContactForm({
  compact = false,
  variant = 'standard',
  defaultTopic,
  mailSubjectOverride,
}: ContactFormProps) {
  const t = useT()
  const f = t.contactForm
  const [status, setStatus] = useState<FormStatus>('idle')
  const isHero = variant === 'hero'
  const formId = isHero ? 'hero-lead' : compact ? 'kontakt' : 'hero'
  const mailSubject = mailSubjectOverride ?? f.mailSubject

  const statusText = useMemo(() => {
    if (status === 'success') return f.statusSuccess
    if (status === 'fallback') return f.statusFallback
    if (status === 'error') return f.statusError
    return null
  }, [status, f])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    if (formData.get('_honey')) {
      return
    }

    formData.set('_subject', mailSubject)
    formData.set('_template', 'table')
    formData.set('_captcha', 'false')
    formData.set('Quelle', window.location.href)
    if (defaultTopic && !formData.get('Thema')) {
      formData.set('Thema', defaultTopic)
    }

    setStatus('sending')

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
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
      const topic = String(formData.get('Thema') || defaultTopic || '')
      const message = String(formData.get('Nachricht') || '')
      const body = encodeURIComponent(
        `${mailSubject}\n\nName: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone}\nTopic: ${topic}\n\nMessage:\n${message}`,
      )

      window.location.href = `mailto:alex@digitalmovement.uk?subject=${encodeURIComponent(
        mailSubject,
      )}&body=${body}`
      setStatus('fallback')
    }
  }

  const cardClass = isHero
    ? 'form-card form-card-hero'
    : compact
      ? 'form-card form-card-compact'
      : 'form-card'

  return (
    <form
      className={cardClass}
      data-testid={compact || isHero ? 'contact-form' : 'hero-form'}
      aria-label={compact || isHero ? f.aria : f.ariaHero}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="_subject" value={mailSubject} />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_captcha" value="false" />
      {isHero && defaultTopic ? (
        <input type="hidden" name="Thema" value={defaultTopic} />
      ) : null}
      <label className="sr-only" htmlFor={`${formId}-honey`}>
        {f.honeypotLabel}
      </label>
      <input
        className="hidden"
        id={`${formId}-honey`}
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="form-card-header">
        <p className="section-kicker text-brand-grey">
          {isHero ? f.heroKicker : f.headerKicker}
        </p>
        <h2 className="mt-2 text-2xl font-semibold leading-8 text-ink sm:text-3xl">
          {isHero ? f.heroTitle : f.headerTitle}
        </h2>
        <p className="mt-3 text-sm leading-6 text-graphite">
          {isHero ? f.heroSubtitle : f.headerSubtitle}
        </p>
      </div>

      <div className="mt-6 grid gap-4">
        {isHero ? (
          <>
            <div className="field-grid">
              <div>
                <label className="form-label" htmlFor={`${formId}-name`}>
                  {f.nameLabel}
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
                  {f.companyLabel}
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
                  {f.emailLabel}
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
                  {f.phoneLabel}
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
              <label className="form-label" htmlFor={`${formId}-message`}>
                {f.messageLabel}
              </label>
              <textarea
                className="form-field min-h-24 resize-y"
                id={`${formId}-message`}
                name="Nachricht"
                placeholder={f.messagePlaceholder}
                rows={3}
                required
              />
            </div>
          </>
        ) : (
          <>
            <div className="field-grid">
              <div>
                <label className="form-label" htmlFor={`${formId}-name`}>
                  {f.nameLabel}
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
                  {f.companyLabel}
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
                  {f.emailLabel}
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
                  {f.phoneLabel}
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
                {f.topicLabel}
              </label>
              <select
                className="form-field"
                id={`${formId}-topic`}
                name="Thema"
                defaultValue={defaultTopic ?? ''}
                required
              >
                <option value="" disabled>
                  {f.topicPlaceholder}
                </option>
                {f.topics.map((topic) => (
                  <option key={topic} value={topic}>
                    {topic}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="form-label" htmlFor={`${formId}-message`}>
                {f.messageLabel}
              </label>
              <textarea
                className="form-field min-h-28 resize-y"
                id={`${formId}-message`}
                name="Nachricht"
                placeholder={f.messagePlaceholder}
                required
              />
            </div>
          </>
        )}
      </div>

      <button className="btn-primary mt-5 w-full" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            {f.submitting}
          </>
        ) : (
          <>
            {isHero ? f.heroSubmit : f.submit}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </>
        )}
      </button>

      {isHero ? (
        <p className="form-trust">
          <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{f.heroTrust}</span>
        </p>
      ) : null}

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
