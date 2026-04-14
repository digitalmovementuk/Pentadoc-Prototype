import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from './components/ContactForm'
import { Navbar } from './components/Navbar'
import { Reveal } from './components/Reveal'
import {
  benefits,
  contact,
  faqs,
  processSteps,
  proofStats,
  referenceNames,
  services,
} from './content'
import anliegenmanagementImage from './assets/images/anliegenmanagement.webp'
import gptwBayern from './assets/images/gptw-bayern-2026.png'
import gptwConsulting from './assets/images/gptw-consulting-2026.png'
import heroImage from './assets/images/team-workshop.webp'
import itStrategyImage from './assets/images/it-strategy.webp'
import kununuBadge from './assets/images/kununu-2026.png'
import officeImage from './assets/images/pentadoc-office.webp'
import omnichannelImage from './assets/images/omnichannel.webp'
import logo from './assets/images/pentadoc-logo-small.webp'

function App() {
  return (
    <div id="top" className="min-h-screen bg-porcelain text-ink">
      <Navbar />
      <main id="main-content">
        <section className="relative isolate overflow-hidden bg-ink text-white" aria-labelledby="hero-title">
          <div className="absolute inset-0 -z-20 min-h-full" data-testid="hero-media" aria-hidden="true">
            <img
              className="h-full min-h-[900px] w-full object-cover opacity-[0.42]"
              src={heroImage}
              alt=""
              width="1920"
              height="1280"
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(110deg,rgba(20,22,23,0.94)_0%,rgba(33,41,52,0.86)_48%,rgba(86,86,87,0.48)_100%)]" />

          <div className="mx-auto grid min-h-[860px] max-w-7xl items-center gap-10 px-4 pb-16 pt-28 sm:px-6 lg:grid-cols-[1.02fr_0.78fr] lg:px-8 lg:pt-32">
            <Reveal>
              <p className="eyebrow text-brand-mint">Digitalisierung für Versicherer und Krankenkassen</p>
              <h1 id="hero-title" className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Komplexe Anliegen, Dokumente und Kommunikation endlich steuerbar machen.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/[0.84]">
                Pentadoc berät Unternehmen bei Input Management, Anliegenmanagement, Customer Communication Management, IT-Strategie, KI-Prototyping und Migration.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a className="btn-primary" href="#kontakt">
                  Erstgespräch anfragen
                </a>
                <a className="btn-secondary-on-dark" href="#leistungen">
                  Leistungen ansehen
                </a>
              </div>
              <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 text-sm leading-6 text-white/[0.82] sm:grid-cols-3">
                {proofStats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-white/[0.14] bg-white/[0.08] p-4 backdrop-blur-sm">
                    <strong className="block text-2xl leading-8 text-white">{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <ContactForm />
            </Reveal>
          </div>
        </section>

        <section className="border-y border-ink/10 bg-white py-7" aria-label="Ausgewählte Referenzen">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase leading-5 tracking-[0.14em] text-ink-muted">
              Öffentliche Referenzen und Kundenlogos auf pentadoc.com
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {referenceNames.map((name) => (
                <span key={name} className="rounded-md border border-ink/10 bg-porcelain px-4 py-2 text-sm font-semibold leading-5 text-ink">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" aria-labelledby="positioning-title">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <Reveal>
              <p className="eyebrow text-brand-blue">Warum es jetzt zählt</p>
              <h2 id="positioning-title" className="section-title">
                Wenn Eingangskanäle wachsen, reichen einzelne Systemprojekte nicht mehr.
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="grid gap-5 text-lg leading-8 text-ink-muted">
                <p>
                  Versicherer und Krankenkassen stehen vor demselben Druck: mehr digitale Kanäle, hohe Erwartungen an Reaktionszeiten, historisch gewachsene Systemlandschaften und Automatisierungsvorhaben, die ohne sauberes Zielbild schnell versanden.
                </p>
                <p>
                  Pentadoc positioniert sich genau an dieser Schnittstelle aus Fachprozess, IT, Organisation und Kommunikation. Die Beratung hilft, Entscheidungsgrundlagen zu schaffen, Umsetzungsrisiken sichtbar zu machen und Veränderung in tragfähige Programme zu übersetzen.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="leistungen" className="section bg-white" aria-labelledby="services-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <p className="eyebrow text-brand-blue">Leistungen</p>
              <h2 id="services-title" className="section-title">
                Beratung für die gesamte Kette aus Eingang, Bearbeitung, Kommunikation und Veränderung.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <Reveal key={service.title} delay={index * 0.03}>
                    <article className="service-card">
                      <Icon className="h-7 w-7 text-brand-blue" aria-hidden="true" />
                      <h3 className="mt-5 text-xl font-semibold leading-7 text-ink">{service.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-ink-muted">{service.description}</p>
                      <p className="mt-4 text-sm font-semibold leading-6 text-ink">{service.benefit}</p>
                      <a className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-md text-sm font-semibold leading-5 text-brand-blue focus-ring" href={service.href}>
                        Thema besprechen <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section bg-ink text-white" aria-labelledby="featured-title">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-8">
            <Reveal>
              <p className="eyebrow text-brand-mint">Signatur-Thema</p>
              <h2 id="featured-title" className="section-title text-white">
                Modernes Anliegenmanagement verbindet Kundenerwartung mit operativer Steuerung.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/78">
                Anliegen entstehen über Briefe, Portale, E-Mails und interne Übergaben. Entscheidend ist nicht nur der Eingang, sondern die Fähigkeit, Vorgänge zu verstehen, zu priorisieren und in belastbare Bearbeitung zu überführen.
              </p>
              <ul className="mt-7 grid gap-3 text-base leading-7 text-white/[0.84]">
                {[
                  'Eingänge und Fachprozesse gemeinsam betrachten',
                  'Automatisierungspotenzial realistisch bewerten',
                  'Rollen, Kennzahlen und Steuerungslogik klären',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-mint" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
                <img className="h-full min-h-72 w-full rounded-lg object-cover" src={anliegenmanagementImage} alt="Grafische Darstellung vernetzter Anliegenbearbeitung" width="1027" height="1013" loading="lazy" />
                <div className="grid gap-4">
                  <img className="h-56 w-full rounded-lg object-cover" src={itStrategyImage} alt="Workshop-Situation zu IT-Strategie und Transformation" width="1920" height="1280" loading="lazy" />
                  <img className="h-56 w-full rounded-lg object-cover" src={omnichannelImage} alt="Beratungsszene für Omnichannel-Kommunikation" width="1280" height="854" loading="lazy" />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="vorgehen" className="section" aria-labelledby="process-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="max-w-3xl">
              <p className="eyebrow text-brand-blue">Vorgehen</p>
              <h2 id="process-title" className="section-title">
                Erst Klarheit schaffen, dann Veränderung sauber aufsetzen.
              </h2>
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-4">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 0.05}>
                  <article className="relative rounded-lg border border-ink/10 bg-white p-6 shadow-sm">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand-mint text-sm font-bold leading-5 text-ink">
                      {index + 1}
                    </span>
                    <h3 className="mt-6 text-xl font-semibold leading-7">{step.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-ink-muted">{step.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-white" aria-labelledby="benefits-title">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <Reveal>
              <p className="eyebrow text-brand-blue">Warum Pentadoc</p>
              <h2 id="benefits-title" className="section-title">
                Beratung für Teams, die Fachlichkeit, IT und Betrieb zusammenbringen müssen.
              </h2>
              <p className="mt-5 text-lg leading-8 text-ink-muted">
                Die öffentliche Positionierung zeigt eine klare Spezialisierung auf dokumenten-, kommunikations- und prozessnahe Transformation in regulierten Organisationen.
              </p>
            </Reveal>
            <div className="grid gap-5">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <Reveal key={benefit.title} delay={index * 0.05}>
                    <article className="flex gap-5 rounded-lg border border-ink/10 bg-porcelain p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-brand-mint text-ink">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold leading-7">{benefit.title}</h3>
                        <p className="mt-2 text-base leading-7 text-ink-muted">{benefit.text}</p>
                      </div>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

        <section id="referenzen" className="section bg-porcelain" aria-labelledby="proof-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <Reveal>
                <p className="eyebrow text-brand-blue">Vertrauen</p>
                <h2 id="proof-title" className="section-title">
                  Öffentliche Referenzen, Erfahrung und Arbeitgeber-Auszeichnungen schaffen Substanz.
                </h2>
                <p className="mt-5 text-lg leading-8 text-ink-muted">
                  Pentadoc nennt auf der eigenen Website mehr als 25 Jahre Erfahrung, über 850 Projekte und über 120 Kunden. Dazu werden namhafte Referenzlogos aus Versicherung, Gesundheit, Logistik, Finanzen und Telekommunikation gezeigt.
                </p>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="grid grid-cols-3 gap-4 rounded-lg border border-ink/10 bg-white p-5 shadow-sm">
                  <img className="mx-auto h-24 w-auto object-contain" src={gptwBayern} alt="Great Place to Work Bayern 2026 Auszeichnung" width="300" height="300" loading="lazy" />
                  <img className="mx-auto h-24 w-auto object-contain" src={gptwConsulting} alt="Great Place to Work Consulting 2026 Auszeichnung" width="300" height="300" loading="lazy" />
                  <img className="mx-auto h-24 w-auto object-contain" src={kununuBadge} alt="kununu Top Company 2026 Auszeichnung" width="228" height="300" loading="lazy" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="ueber-uns" className="section bg-white" aria-labelledby="about-title">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.96fr_1.04fr] lg:px-8">
            <Reveal>
              <img className="aspect-[5/4] w-full rounded-lg object-cover" src={officeImage} alt="Pentadoc AG Büro- und Teamaufnahme" width="1200" height="975" loading="lazy" />
            </Reveal>
            <Reveal delay={0.08}>
              <p className="eyebrow text-brand-blue">Über Pentadoc AG</p>
              <h2 id="about-title" className="section-title">
                Eine Beratung aus Würzburg für digitale Prozesse mit hohem Anspruch an Verlässlichkeit.
              </h2>
              <p className="mt-5 text-lg leading-8 text-ink-muted">
                Pentadoc AG sitzt laut Impressum in der Goethestraße 1 in Würzburg. Der öffentliche Auftritt zeigt einen klaren Fokus auf Beratungsleistungen rund um Versicherungen, Krankenkassen, Input Management, Customer Communication Management und digitale Transformation.
              </p>
              <p className="mt-4 text-lg leading-8 text-ink-muted">
                Vertretungsberechtigt genannt werden Joachim Adam, Guido Schmitz und Dr. Sebastian Schulz. Für diese Preview bleibt die Darstellung bewusst faktisch und nutzt keine nicht belegten Team- oder Leistungsversprechen.
              </p>
            </Reveal>
          </div>
        </section>

        <section id="kontakt" className="section bg-ink text-white" aria-labelledby="contact-title">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <Reveal>
              <p className="eyebrow text-brand-mint">Kontakt</p>
              <h2 id="contact-title" className="section-title text-white">
                Ein gutes Erstgespräch beginnt mit einer klaren Ausgangslage.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/78">
                Teilen Sie kurz mit, welche Kanäle, Systeme oder Prozessfragen betroffen sind. Das Gespräch kann anschließend fachlich eingeordnet werden.
              </p>
              <div className="mt-8 grid gap-4 text-base leading-7 text-white/[0.84]">
                <a className="contact-link" href="tel:+4993126079110">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  {contact.phone}
                </a>
                <a className="contact-link" href={`mailto:${contact.email}`}>
                  <Mail className="h-5 w-5" aria-hidden="true" />
                  {contact.email}
                </a>
                <div className="contact-link">
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

        <section id="faq" className="section bg-white" aria-labelledby="faq-title">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center">
              <p className="eyebrow text-brand-blue">FAQ</p>
              <h2 id="faq-title" className="section-title">
                Häufige Fragen vor dem ersten Austausch.
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-3">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-lg border border-ink/10 bg-porcelain p-5">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold leading-7 text-ink focus-ring">
                    {faq.question}
                    <span className="text-brand-blue transition group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-3 text-base leading-7 text-ink-muted">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-mint py-16" aria-labelledby="final-title">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
            <div>
              <p className="eyebrow text-ink">Nächster Schritt</p>
              <h2 id="final-title" className="mt-3 max-w-3xl break-words text-3xl font-semibold leading-10 text-ink sm:text-4xl">
                Bringen Sie Klarheit in die nächste Transformationsentscheidung.
              </h2>
            </div>
            <a className="btn-dark" href="#kontakt">
              Gespräch anfragen
            </a>
          </div>
        </section>

        <footer className="bg-white py-14" aria-label="Footer">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1fr] lg:px-8">
            <div>
              <img className="h-10 w-auto" src={logo} alt="Pentadoc AG" width="177" height="48" loading="lazy" />
              <p className="mt-5 max-w-sm text-sm leading-6 text-ink-muted">
                Beratung für digitale Transformation, Input Management, Anliegenmanagement, CCM, IT-Strategie, KI-Prototyping und Migration.
              </p>
            </div>
            <div>
              <h2 className="footer-heading">Navigation</h2>
              <ul className="footer-list">
                {['Leistungen', 'Vorgehen', 'Referenzen', 'Über uns', 'FAQ'].map((item) => (
                  <li key={item}><a href={`#${item === 'Über uns' ? 'ueber-uns' : item.toLowerCase()}`}>{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="footer-heading">Leistungen</h2>
              <ul className="footer-list">
                {services.slice(0, 6).map((service) => (
                  <li key={service.title}><a href="#leistungen">{service.title}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="footer-heading">Kontakt</h2>
              <address className="not-italic text-sm leading-6 text-ink-muted">
                {contact.addressLines.map((line) => <span key={line} className="block">{line}</span>)}
              </address>
              <ul className="footer-list mt-4">
                <li><a href="tel:+4993126079110">{contact.phone}</a></li>
                <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
                <li><a href={contact.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://pentadoc.com/impressum/">Impressum</a></li>
                <li><a href="https://pentadoc.com/datenschutz/">Datenschutz</a></li>
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-ink/10 px-4 pt-6 text-sm leading-6 text-ink-muted sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <p>© 2026 Pentadoc AG. Preview-Konzept für eine Homepage-Neugestaltung.</p>
            <p>Öffnungszeiten wurden öffentlich nicht sicher gefunden.</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
