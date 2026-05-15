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
import { ContactForm } from './components/ContactForm'
import { Navbar } from './components/Navbar'
import { Reveal } from './components/Reveal'
import { StickyCTA } from './components/StickyCTA'
import { OmnichannelFrankfurtPage } from './OmnichannelFrankfurtPage'
import {
  benefits,
  checklist,
  contact,
  conversionPoints,
  faqs,
  fiveDModel,
  heroChecklist,
  outcomePillars,
  problemSignals,
  processSteps,
  proofNotes,
  proofStats,
  referenceNames,
  services,
} from './content'

function App() {
  const currentPath = window.location.pathname.replace(/\/+$/, '')

  if (currentPath.endsWith('/omnichannel-kundenservice-frankfurt')) {
    return <OmnichannelFrankfurtPage />
  }

  return (
    <div id="top" className="min-h-screen bg-fog text-ink">
      <Navbar />
      <main id="main-content">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-media" data-testid="hero-media" aria-hidden="true">
            <img
              src={heroImage}
              alt=""
              className="h-full w-full object-cover"
              width="1600"
              height="900"
              fetchPriority="high"
            />
          </div>
          <div className="hero-scrim" aria-hidden="true" />
          <div className="hero-line-field" aria-hidden="true" />

          <div className="hero-shell">
            <Reveal className="hero-copy">
              <p className="section-kicker text-brand-yellow">Pentadoc AG</p>
              <h1 id="hero-title" className="hero-title">
                Digitale Transformation für Versicherer, die im Alltag funktioniert.
              </h1>
              <p className="hero-lead">
                Herstellerunabhängige Unternehmensberatung für Input Management, Anliegenmanagement,
                Customer Communication Management, IT-Strategie, KI-Prototyping und Migration.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-start">
                <a className="btn-primary" href="#kontakt">
                  Erstgespräch anfragen
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a className="btn-secondary-on-dark" href="#leistungen">
                  Leistungen ansehen
                </a>
              </div>

              <ul className="hero-checklist" aria-label="Stärken von Pentadoc">
                {heroChecklist.map((item) => (
                  <li key={item}>
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="hero-metrics" aria-label="Zahlen, Daten und Fakten">
                {proofStats.map((stat) => (
                  <div key={stat.label} className="metric-card">
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="hero-form-wrap" delay={0.08}>
              <ContactForm />
            </Reveal>
          </div>
        </section>

        <section className="reference-strip" aria-label="Ausgewählte Referenzen">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="reference-inner">
              <p className="text-sm font-semibold leading-5 text-graphite">
                Öffentliche Referenzen und Kundenlogos auf pentadoc.com
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
              <p className="section-kicker text-brand-grey">Warum jetzt</p>
              <h2 id="problem-title" className="section-title">
                Digitalisierung scheitert selten an Ideen. Sie scheitert an unverbundenen Entscheidungen.
              </h2>
              <p className="mt-5 text-lg leading-8 text-graphite">
                Versicherer und Krankenkassen müssen Eingangskanäle, Kundenerwartung, historisch
                gewachsene IT, Prozesslogik und Veränderung im Betrieb gleichzeitig beherrschen.
                Pentadoc bringt diese Ebenen in ein entscheidbares Zielbild.
              </p>
            </Reveal>
            <div className="grid gap-4">
              {problemSignals.map((signal, index) => (
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
              <p className="section-kicker text-brand-grey">Beratungsleistungen</p>
              <h2 id="services-title" className="section-title">
                Eine Beratungskette für Eingang, Bearbeitung, Kommunikation und Veränderung.
              </h2>
            </Reveal>

            <div className="service-grid">
              {services.map((service, index) => {
                const Icon = service.icon
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
              <p className="section-kicker text-brand-yellow">Signatur-Thema</p>
              <h2 id="feature-title" className="section-title text-white">
                Anliegenmanagement macht Kundenerwartung, Fachprozess und IT steuerbar.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/[0.80]">
                Moderne Anliegen entstehen nicht nur in einem Postkorb. Sie laufen über Portale,
                Dokumente, E-Mail, Telefon, Fachsysteme und interne Übergaben. Entscheidend ist,
                diese Signale richtig zu verstehen und in belastbare Bearbeitung zu bringen.
              </p>
              <ul className="mt-7 grid gap-3 text-base leading-7 text-white/[0.84]">
                {checklist.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-yellow" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="workflow-visual" aria-label="Anliegenmanagement Ablauf">
                <img
                  className="workflow-image"
                  src={anliegenmanagementImage}
                  alt="Grafische Darstellung vernetzter Anliegenbearbeitung"
                  width="1027"
                  height="1013"
                  loading="eager"
                />
                <div className="workflow-stack">
                  {outcomePillars.map((pillar) => (
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
              <p className="section-kicker text-brand-grey">5-D Modell</p>
              <h2 id="model-title" className="section-title">
                Strategie, Technologie, Prozesse, Kultur und Organisation in einem Bild.
              </h2>
            </Reveal>

            <div className="model-grid">
              {fiveDModel.map((item, index) => {
                const Icon = item.icon
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
                <p className="section-kicker text-brand-grey">Vertrauen</p>
                <h2 id="proof-title" className="section-title">
                  Substanz aus Projekten, Referenzen und öffentlicher Anerkennung.
                </h2>
                <p className="mt-5 text-lg leading-8 text-graphite">
                  Pentadoc nennt öffentlich über 25 Jahre am Markt, mehr als 850 Projekte
                  und über 120 namhafte Kunden. Die Referenzen zeigen besonders viel Nähe
                  zu Versicherung, Gesundheit, Kommunikation und dokumentennahen Prozessen.
                </p>
              </Reveal>

              <div className="proof-layout">
                {proofNotes.map((note, index) => (
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
                <p className="section-kicker text-brand-grey">Auszeichnungen</p>
                <p className="mt-2 text-sm leading-6 text-graphite">
                  Auf pentadoc.com öffentlich gezeigte Arbeitgeber- und Unternehmensauszeichnungen.
                </p>
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
                <p className="section-kicker text-brand-grey">Vorgehen</p>
                <h2 id="process-title" className="section-title">
                  Erst Klarheit schaffen, dann Veränderung sauber aufsetzen.
                </h2>
                <p className="mt-5 text-lg leading-8 text-graphite">
                  Das Ziel ist nicht mehr Folienlogik, sondern eine Umsetzungsbasis,
                  mit der Fachbereich, IT und Führung gemeinsam entscheiden können.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <img
                  className="image-panel"
                  src={itStrategyImage}
                  alt="Workshop zur IT-Strategie und digitalen Transformation"
                  width="1200"
                  height="800"
                  loading="eager"
                />
              </Reveal>
            </div>

            <div className="process-grid">
              {processSteps.map((step, index) => (
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
                alt="Pentadoc Büro- und Teamsituation"
                width="1000"
                height="813"
                loading="eager"
              />
            </Reveal>
            <div>
              <Reveal>
                <p className="section-kicker text-brand-grey">Warum Pentadoc</p>
                <h2 id="why-title" className="section-title">
                  Eine spezialisierte Beratung für Programme, die im Betrieb bestehen müssen.
                </h2>
              </Reveal>
              <div className="benefit-stack">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
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
              <p className="section-kicker text-brand-yellow">Kontaktweg</p>
              <h2 id="conversion-title" className="section-title text-white">
                Wenig Reibung für den ersten Schritt. Genug Kontext für ein gutes Gespräch.
              </h2>
            </Reveal>
            <div className="conversion-grid">
              {conversionPoints.map((point, index) => {
                const Icon = point.icon
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
              <p className="section-kicker text-brand-grey">Kontakt</p>
              <h2 id="contact-title" className="section-title">
                Bringen Sie Klarheit in die nächste Transformationsentscheidung.
              </h2>
              <p className="mt-5 text-lg leading-8 text-graphite">
                Teilen Sie kurz mit, welche Kanäle, Systeme oder Prozessfragen betroffen sind.
                Danach kann das Thema fachlich eingeordnet und der passende nächste Schritt geklärt werden.
              </p>

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
              <p className="section-kicker text-brand-grey">FAQ</p>
              <h2 id="faq-title" className="section-title">
                Häufige Fragen vor dem ersten Austausch.
              </h2>
            </Reveal>
            <div className="faq-list">
              {faqs.map((faq) => (
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
              <p className="section-kicker text-ink">Nächster Schritt</p>
              <h2 id="final-title">
                Aus vielen offenen Fragen wird ein entscheidbarer Transformationspfad.
              </h2>
            </div>
            <a className="btn-dark" href="#kontakt">
              Anfrage starten
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>

        <footer className="footer" aria-label="Footer">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.85fr_1fr] lg:px-8">
            <div>
              <img className="h-10 w-auto" src={logo} alt="Pentadoc AG" width="177" height="48" loading="lazy" />
              <p className="mt-5 max-w-sm text-sm leading-6 text-graphite">
                Herstellerunabhängige Unternehmensberatung für digitale Transformation,
                Input Management, Anliegenmanagement, CCM, IT-Strategie, KI-Prototyping und Migration.
              </p>
            </div>
            <div>
              <h2>Navigation</h2>
              <ul>
                {['Leistungen', '5-D Modell', 'Referenzen', 'Vorgehen', 'Kontakt'].map((item) => (
                  <li key={item}>
                    <a href={`#${item === '5-D Modell' ? 'modell' : item.toLowerCase()}`}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Leistungen</h2>
              <ul>
                {services.slice(0, 6).map((service) => (
                  <li key={service.title}>
                    <a href="#leistungen">{service.title}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Kontakt</h2>
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
                  <a href="https://pentadoc.com/impressum/">Impressum</a>
                </li>
                <li>
                  <a href="https://pentadoc.com/datenschutz/">Datenschutz</a>
                </li>
              </ul>
            </div>
          </div>
        <div className="footer-bottom">
          <p>© 2026 Pentadoc AG.</p>
          <p>Digitale Transformation für Versicherer, Krankenkassen und Finanzdienstleister.</p>
        </div>
      </footer>
      </main>
      <StickyCTA />
    </div>
  )
}

export default App
