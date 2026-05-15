import { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Quote,
} from 'lucide-react'
import anliegenmanagementImage from './assets/images/anliegenmanagement.webp'
import gptwBayern from './assets/images/gptw-bayern-2026.png'
import gptwConsulting from './assets/images/gptw-consulting-2026.png'
import heroImage from './assets/images/team-workshop.webp'
import itStrategyImage from './assets/images/it-strategy.webp'
import kununuBadge from './assets/images/kununu-2026.png'
import logo from './assets/images/pentadoc-logo-small.webp'
import officeImage from './assets/images/pentadoc-office.webp'

const HERO_VIDEO_SRC = `${import.meta.env.BASE_URL}hero-background.mp4`
import { ContactForm } from './components/ContactForm'
import { Navbar } from './components/Navbar'
import { Reveal } from './components/Reveal'
import { StickyCTA } from './components/StickyCTA'
import { OmnichannelFrankfurtPage } from './OmnichannelFrankfurtPage'
import {
  benefitIcons,
  contact,
  conversionIcons,
  fiveDIcons,
  referenceNames,
  serviceIcons,
} from './content'
import { useLang, useT } from './lib/i18n'

function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, '')

  if (currentPath.endsWith('/omnichannel-kundenservice-frankfurt')) {
    return <OmnichannelFrankfurtPage />
  }

  return <Homepage />
}

function Homepage() {
  const t = useT()
  const { lang } = useLang()
  const heroVideoRef = useRef<HTMLVideoElement>(null)
  const [isVideoPaused, setIsVideoPaused] = useState(false)

  useEffect(() => {
    document.title = t.pageTitle
    const meta = document.head.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (meta) meta.content = t.pageDescription
    document.documentElement.lang = lang
  }, [t, lang])

  const toggleVideo = () => {
    const v = heroVideoRef.current
    if (!v) return
    if (v.paused) {
      v.play()
      setIsVideoPaused(false)
    } else {
      v.pause()
      setIsVideoPaused(true)
    }
  }
  const videoToggleLabel = lang === 'de'
    ? (isVideoPaused ? 'Video abspielen' : 'Video pausieren')
    : (isVideoPaused ? 'Play video' : 'Pause video')

  return (
    <div id="top" className="min-h-screen bg-fog text-ink">
      <Navbar />
      <main id="main-content">
        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero__video-shell" aria-hidden="true">
            <video
              ref={heroVideoRef}
              className="hero__video"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              disablePictureInPicture
              poster={heroImage}
            >
              <source src={HERO_VIDEO_SRC} type="video/mp4" />
            </video>
          </div>
          <button
            className={`hero__media-control ${isVideoPaused ? 'is-paused' : ''}`}
            type="button"
            aria-label={videoToggleLabel}
            onClick={toggleVideo}
          >
            <span className="hero__media-icon" aria-hidden="true" />
          </button>

          <div className="hero__grid">
            <div className="hero__copy">
              <div className="hero__copy-main">
                <span className="pill pill--dark pill--brand">
                  <span className="pill__dot" aria-hidden="true" />
                  {t.hero.kicker}
                </span>

                <h1 id="hero-title" className="hero__title">
                  <span className="hero__title-line hero__title-line--one">
                    {t.hero.titleLine1}
                    <span className="hero__gt" aria-hidden="true">&gt;</span>
                  </span>
                  <span className="hero__title-line hero__title-line--two">
                    {t.hero.titleLine2}
                  </span>
                </h1>

                <h2 className="hero__lead">{t.hero.lead}</h2>

                <div className="hero__actions">
                  <a href="#kontakt" className="btn btn--accent">
                    {t.hero.primaryCta}
                    <ArrowRight className="btn__arrow" aria-hidden="true" />
                  </a>
                  <a href="#leistungen" className="btn btn--ghost-on-dark">
                    {t.hero.secondaryCta}
                  </a>
                </div>
              </div>

              <div className="hero__shapes" aria-label={t.hero.pillarsLabel}>
                {t.hero.pillars.map((label) => (
                  <span key={label} className="hero__shape">
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero__form-wrap">
              <div className="hero__card">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="hero__scroll-cue" aria-hidden="true">
            <span />
          </div>
        </section>

        <section className="reference-strip" aria-label={t.references.label}>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="reference-inner">
              <p className="text-sm font-semibold leading-5 text-graphite">
                {t.references.note}
              </p>
              <div className="reference-marquee">
                {referenceNames.map((name) => (
                  <span key={name}>{name}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-white" aria-labelledby="problem-title">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
            <Reveal>
              <p className="section-kicker text-brand-grey">{t.problem.kicker}</p>
              <h2 id="problem-title" className="section-title">
                {t.problem.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-graphite">{t.problem.body}</p>
            </Reveal>
            <div className="grid gap-4">
              {t.problem.signals.map((signal, index) => (
                <Reveal key={signal.title} delay={index * 0.04}>
                  <article className="signal-panel">
                    <span>0{index + 1}</span>
                    <div>
                      <h3>{signal.title}</h3>
                      <p>{signal.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="leistungen" className="section bg-fog" aria-labelledby="services-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="section-heading">
              <p className="section-kicker text-brand-grey">{t.services.kicker}</p>
              <h2 id="services-title" className="section-title">
                {t.services.title}
              </h2>
            </Reveal>

            <div className="service-grid">
              {t.services.items.map((service, index) => {
                const Icon = serviceIcons[index] ?? serviceIcons[0]
                return (
                  <Reveal key={service.title} delay={index * 0.025}>
                    <article className="service-card">
                      <div className="service-icon">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                      <strong>{service.result}</strong>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <section className="feature-section" aria-labelledby="feature-title">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <Reveal>
              <p className="section-kicker text-brand-yellow">{t.feature.kicker}</p>
              <h2 id="feature-title" className="section-title text-white">
                {t.feature.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/[0.80]">{t.feature.body}</p>
              <ul className="mt-7 grid gap-3 text-base leading-7 text-white/[0.84]">
                {t.feature.checklist.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-yellow" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="workflow-visual" aria-label={t.feature.visualLabel}>
                <img
                  className="workflow-image"
                  src={anliegenmanagementImage}
                  alt={t.feature.visualLabel}
                  width="1027"
                  height="1013"
                  loading="eager"
                />
                <div className="workflow-stack">
                  {t.feature.pillars.map((pillar) => (
                    <div key={pillar.label}>
                      <span>{pillar.label}</span>
                      <p>{pillar.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="modell" className="section bg-white" aria-labelledby="model-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="section-heading">
              <p className="section-kicker text-brand-grey">{t.model.kicker}</p>
              <h2 id="model-title" className="section-title">
                {t.model.title}
              </h2>
            </Reveal>

            <div className="model-grid">
              {t.model.items.map((item, index) => {
                const Icon = fiveDIcons[index] ?? fiveDIcons[0]
                return (
                  <Reveal key={item.label} delay={index * 0.04}>
                    <article className="model-card">
                      <div className="model-number">{index + 1}</div>
                      <Icon className="h-6 w-6 text-brand-yellow" aria-hidden="true" />
                      <h3>{item.label}</h3>
                      <p>{item.text}</p>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <section id="referenzen" className="section bg-fog" aria-labelledby="proof-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
              <Reveal>
                <p className="section-kicker text-brand-grey">{t.proof.kicker}</p>
                <h2 id="proof-title" className="section-title">
                  {t.proof.title}
                </h2>
                <p className="mt-5 text-lg leading-8 text-graphite">{t.proof.body}</p>
              </Reveal>

              <div className="proof-layout">
                {t.proof.notes.map((note, index) => (
                  <Reveal key={note.company} delay={index * 0.04}>
                    <article className="proof-card">
                      <Quote className="h-6 w-6 text-brand-yellow" aria-hidden="true" />
                      <p>{note.text}</p>
                      <div>
                        <strong>{note.company}</strong>
                        <span>{note.person}</span>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal className="award-panel" delay={0.1}>
              <div>
                <p className="section-kicker text-brand-grey">{t.proof.awardsKicker}</p>
                <p className="mt-2 text-sm leading-6 text-graphite">{t.proof.awardsBody}</p>
              </div>
              <div className="award-logos">
                <img src={gptwBayern} alt="Great Place to Work Bayern 2026" width="300" height="300" loading="eager" />
                <img src={gptwConsulting} alt="Great Place to Work Consulting 2026" width="300" height="300" loading="eager" />
                <img src={kununuBadge} alt="kununu Top Company 2026" width="228" height="300" loading="eager" />
              </div>
            </Reveal>
          </div>
        </section>

        <section id="vorgehen" className="section bg-white" aria-labelledby="process-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <Reveal>
                <p className="section-kicker text-brand-grey">{t.process.kicker}</p>
                <h2 id="process-title" className="section-title">
                  {t.process.title}
                </h2>
                <p className="mt-5 text-lg leading-8 text-graphite">{t.process.body}</p>
              </Reveal>
              <Reveal delay={0.08}>
                <img
                  className="image-panel"
                  src={itStrategyImage}
                  alt={t.process.title}
                  width="1200"
                  height="800"
                  loading="eager"
                />
              </Reveal>
            </div>

            <div className="process-grid">
              {t.process.steps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.04}>
                  <article className="process-card">
                    <span>{String(index + 1).padStart(2, '0')}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-fog" aria-labelledby="why-title">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.98fr_1.02fr] lg:px-8">
            <Reveal>
              <img
                className="image-panel"
                src={officeImage}
                alt={t.why.title}
                width="1000"
                height="813"
                loading="eager"
              />
            </Reveal>
            <div>
              <Reveal>
                <p className="section-kicker text-brand-grey">{t.why.kicker}</p>
                <h2 id="why-title" className="section-title">
                  {t.why.title}
                </h2>
              </Reveal>
              <div className="benefit-stack">
                {t.why.benefits.map((benefit, index) => {
                  const Icon = benefitIcons[index] ?? benefitIcons[0]
                  return (
                    <Reveal key={benefit.title} delay={index * 0.04}>
                      <article className="benefit-card">
                        <Icon className="h-6 w-6 text-brand-yellow" aria-hidden="true" />
                        <div>
                          <h3>{benefit.title}</h3>
                          <p>{benefit.text}</p>
                        </div>
                      </article>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-ink text-white" aria-labelledby="conversion-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="section-heading">
              <p className="section-kicker text-brand-yellow">{t.conversion.kicker}</p>
              <h2 id="conversion-title" className="section-title text-white">
                {t.conversion.title}
              </h2>
            </Reveal>
            <div className="conversion-grid">
              {t.conversion.points.map((point, index) => {
                const Icon = conversionIcons[index] ?? conversionIcons[0]
                return (
                  <Reveal key={point.title} delay={index * 0.04}>
                    <article className="conversion-card">
                      <Icon className="h-6 w-6 text-brand-yellow" aria-hidden="true" />
                      <h3>{point.title}</h3>
                      <p>{point.text}</p>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <section id="kontakt" className="section bg-white" aria-labelledby="contact-title">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <Reveal>
              <p className="section-kicker text-brand-grey">{t.contact.kicker}</p>
              <h2 id="contact-title" className="section-title">
                {t.contact.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-graphite">{t.contact.body}</p>

              <div className="contact-panel">
                <a href="tel:+4993126079110">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {contact.phone}
                </a>
                <a href={`mailto:${contact.email}`}>
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  {contact.email}
                </a>
                <div>
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                  <span>{contact.addressLines.slice(1).join(', ')}</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <ContactForm compact />
            </Reveal>
          </div>
        </section>

        <section id="faq" className="section bg-fog" aria-labelledby="faq-title">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center">
              <p className="section-kicker text-brand-grey">{t.faq.kicker}</p>
              <h2 id="faq-title" className="section-title">
                {t.faq.title}
              </h2>
            </Reveal>
            <div className="faq-list">
              {t.faq.items.map((faq) => (
                <details key={faq.question} className="faq-item">
                  <summary>
                    <span>{faq.question}</span>
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="final-title">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
            <div>
              <p className="section-kicker text-ink">{t.finalCta.kicker}</p>
              <h2 id="final-title">{t.finalCta.title}</h2>
            </div>
            <a className="btn-dark" href="#kontakt">
              {t.finalCta.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        <footer className="footer" aria-label="Footer">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.85fr_1fr] lg:px-8">
            <div>
              <img className="h-10 w-auto" src={logo} alt="Pentadoc AG" width="177" height="48" loading="lazy" />
              <p className="mt-5 max-w-sm text-sm leading-6 text-graphite">{t.footer.blurb}</p>
            </div>
            <div>
              <h2>{t.footer.navHeading}</h2>
              <ul>
                {t.footer.navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2>{t.footer.servicesHeading}</h2>
              <ul>
                {t.services.items.slice(0, 6).map((service) => (
                  <li key={service.title}>
                    <a href="#leistungen">{service.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2>{t.footer.contactHeading}</h2>
              <address className="not-italic">
                {contact.addressLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </address>
              <ul>
                <li>
                  <a href="tel:+4993126079110">{contact.phone}</a>
                </li>
                <li>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
                <li>
                  <a href={contact.linkedIn} target="_blank" rel="noreferrer">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://pentadoc.com/impressum/">{t.footer.imprint}</a>
                </li>
                <li>
                  <a href="https://pentadoc.com/datenschutz/">{t.footer.privacy}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>{t.footer.copyright}</p>
            <p>{t.footer.tagline}</p>
          </div>
        </footer>
      </main>
      <StickyCTA />
    </div>
  )
}

export default App
