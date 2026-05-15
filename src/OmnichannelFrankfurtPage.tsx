import {
  ArrowRight,
  Building2,
  CheckCircle2,
  FileStack,
  GitBranch,
  Layers3,
  MapPin,
  MessageSquareText,
  Network,
  Phone,
  Route,
  Search,
  ShieldCheck,
  Workflow,
} from 'lucide-react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import anliegenmanagementImage from './assets/images/anliegenmanagement.webp'
import itStrategyImage from './assets/images/it-strategy.webp'
import logo from './assets/images/pentadoc-logo-small.webp'
import omnichannelImage from './assets/images/omnichannel.webp'
import officeImage from './assets/images/pentadoc-office.webp'
import { ContactForm } from './components/ContactForm'
import { Reveal } from './components/Reveal'
import { StickyCTA } from './components/StickyCTA'
import { contact, navLinks, proofStats, referenceNames } from './content'

const pageUrl = 'https://digitalmovementuk.github.io/Pentadoc-Prototype/omnichannel-kundenservice-frankfurt/'
const pageTitle = 'Omnichannel Kundenservice Frankfurt | Pentadoc AG'
const pageDescription =
  'Omnichannel Kundenservice Beratung in Frankfurt für Versicherer und Krankenkassen: Kanäle, Anliegen, Prozesse, CCM, Input Management und IT-Roadmap sauber verbinden.'
const pageImage = 'https://digitalmovementuk.github.io/Pentadoc-Prototype/og-omnichannel-frankfurt.png'

type PresentationMarkerProps = {
  eyebrow: string
  number: string
  title: string
  subtitle: string
  relevance: string
  points: string[]
  tone?: 'light' | 'dark'
  pointer?: 'left' | 'right' | 'top'
}

const readinessCards = [
  {
    label: 'Eingänge',
    text: 'Post, E-Mail, Portal, Telefon und App werden als ein steuerbarer Eingang betrachtet.',
    icon: FileStack,
  },
  {
    label: 'Anliegen',
    text: 'Kundenanliegen werden erkannt, priorisiert und an die richtige Bearbeitung übergeben.',
    icon: MessageSquareText,
  },
  {
    label: 'Kommunikation',
    text: 'Antworten, Dokumente und Statusmeldungen folgen einer konsistenten Logik.',
    icon: Layers3,
  },
  {
    label: 'Betrieb',
    text: 'Prozesse, Rollen, Systeme und Kennzahlen werden im Alltag handhabbar.',
    icon: Workflow,
  },
]

const intentCards = [
  {
    label: 'Gesuchtes Thema',
    title: 'Omnichannel Kundenservice Frankfurt',
    text: 'Der Einstieg beantwortet direkt, was Unternehmen mit diesem Suchbegriff klären wollen: Kanalstrategie, Anliegensteuerung, Serviceprozesse, Kommunikation und IT-Roadmap.',
  },
  {
    label: 'Direkte Antwort',
    title: 'Definition zuerst, Details danach',
    text: 'Der Einstieg erklärt sofort, was Omnichannel Kundenservice Beratung bedeutet und für wen sie relevant ist. Danach folgen Standortbezug, Vorgehen, Fachfragen und Kontaktweg.',
  },
  {
    label: 'Kaufabsicht',
    title: 'Vom Problem zur Anfrage',
    text: 'Die Argumentation führt von typischen Servicebrüchen über ein Zielbild zu einer konkreten Erstgesprächsanfrage. So bleibt der Inhalt informativ und gleichzeitig kommerziell.',
  },
]

const painPoints = [
  {
    title: 'Viele Kanäle, aber kein gemeinsames Bild',
    text: 'Ein Kunde ruft an, sendet danach Unterlagen per E-Mail und erhält später ein Schreiben. Ohne gemeinsame Sicht entstehen doppelte Arbeit, Rückfragen und widersprüchliche Auskünfte.',
  },
  {
    title: 'Automatisierung greift zu kurz',
    text: 'OCR, Workflow und Portale helfen nur dann, wenn Anliegenlogik, Fachregeln und Bearbeitung sauber zusammenspielen. Einzelne Tools ersetzen kein tragfähiges Betriebsmodell.',
  },
  {
    title: 'CCM und Input Management laufen getrennt',
    text: 'Eingehende Dokumente und ausgehende Kommunikation werden häufig separat optimiert. Der Kundendialog bleibt dadurch brüchig, obwohl beide Seiten fachlich zusammengehören.',
  },
]

const approachSteps = [
  {
    title: 'Frankfurter Ausgangslage sortieren',
    text: 'Welche Kundengruppen, Eingangskanäle, Fachprozesse, Standorte, Dienstleister und Systeme prägen den heutigen Kundenservice?',
  },
  {
    title: 'Zielbild für Omnichannel entwickeln',
    text: 'Welche Kanäle sollen führen, welche Informationen müssen sofort sichtbar sein und welche Entscheidungen brauchen Fachbereich, IT und Management?',
  },
  {
    title: 'Roadmap und Architektur klären',
    text: 'Welche Schritte bringen schnell Wirkung, welche Migrationen sind kritisch und welche Abhängigkeiten müssen vor einer Ausschreibung entschieden werden?',
  },
  {
    title: 'Umsetzung steuerbar machen',
    text: 'Wie werden Rollen, KPIs, Betriebsprozesse und Kommunikation so verankert, dass Omnichannel nicht nur als Konzept, sondern im Tagesgeschäft funktioniert?',
  },
]

const questionClusters = [
  {
    title: 'Strategische Fragen',
    questions: [
      'Welche Rolle soll Omnichannel im Kundenservice-Zielbild spielen?',
      'Welche Kanäle sind für Frankfurt und Rhein-Main geschäftlich wirklich relevant?',
      'Welche Entscheidungen brauchen Vorstand, Fachbereich und IT zuerst?',
    ],
  },
  {
    title: 'Operative Fragen',
    questions: [
      'Welche Anliegen bleiben heute zwischen Telefon, Portal, E-Mail und Dokumenten hängen?',
      'Wo entstehen Rückfragen, Liegezeiten oder doppelte Bearbeitung?',
      'Welche Informationen brauchen Mitarbeitende beim ersten Kontakt?',
    ],
  },
  {
    title: 'Technische Fragen',
    questions: [
      'Welche Systeme müssen Kundendaten, Dokumente und Statusinformationen teilen?',
      'Welche Rolle spielen Input Management, CCM und Workflow-Automation?',
      'Welche Migrationen oder Schnittstellen bestimmen die Roadmap?',
    ],
  },
]

const seoSections = [
  {
    kicker: 'Suchintention',
    title: 'Was Unternehmen mit Omnichannel Kundenservice in Frankfurt wirklich suchen',
    body: [
      'Wer nach Omnichannel Kundenservice Frankfurt sucht, sucht selten nur eine Software. Meist steht dahinter eine konkrete Frage im Betrieb: Wie lassen sich Anruf, Brief, E-Mail, Portal, Chat, App und ausgehende Kommunikation so verbinden, dass Kunden nicht jedes Mal von vorne anfangen müssen? Für Versicherer, Krankenkassen und Finanzdienstleister im Rhein-Main-Gebiet ist diese Frage besonders wichtig, weil viele Produkte erklärungsbedürftig sind, Unterlagen rechtssicher verarbeitet werden müssen und Serviceprozesse häufig über mehrere Fachbereiche laufen.',
      'Ein guter Omnichannel-Ansatz beginnt deshalb nicht beim Kanal. Er beginnt beim Anliegen. Welche Information kommt an? Was will die versicherte Person erreichen? Welche Nachweise fehlen? Welche Antwort ist fachlich, technisch und regulatorisch möglich? Erst wenn diese Fragen sauber beantwortet werden, können Portale, Contact Center, Dokumentenprozesse, Customer Communication Management und Workflow-Automation sinnvoll zusammenspielen.',
      'So wird aus einem Suchbegriff ein Gespräch über Servicequalität, Bearbeitungslogik, digitale Eingangskanäle und belastbare Transformationsprioritäten.',
    ],
  },
  {
    kicker: 'Frankfurt',
    title: 'Warum der Standort Frankfurt ein starkes Thema für Omnichannel ist',
    body: [
      'Frankfurt ist ein dichter Markt für Versicherungen, Banken, Dienstleister, Beratung, IT und regulierte Geschäftsmodelle. Viele Teams arbeiten mit hohen Fallzahlen, verteilten Zuständigkeiten und gewachsenen Systemlandschaften. Genau hier entsteht der typische Omnichannel-Druck: Kunden erwarten schnelle Rückmeldung, der Betrieb muss wirtschaftlich bleiben und die IT darf nicht durch unklare Anforderungen überlastet werden.',
      'Für Organisationen in Frankfurt und Rhein-Main ist ein lokaler Suchbegriff wie Omnichannel Kundenservice Frankfurt daher ein guter Einstieg in eine geschäftliche Diskussion. Gemeint ist nicht, dass jede Lösung physisch aus Frankfurt kommen muss. Entscheidend ist, dass die Beratung die Anforderungen eines anspruchsvollen Finanz- und Versicherungsstandorts versteht: hohe Erwartungen an Servicequalität, saubere Dokumentation, nachvollziehbare Entscheidungen und stabile Umsetzung in bestehenden Strukturen.',
    ],
  },
  {
    kicker: 'Beratung',
    title: 'Was eine Omnichannel Beratung für Versicherer leisten sollte',
    body: [
      'Eine belastbare Beratung für Omnichannel Kundenservice muss die Brücke zwischen Fachbereich, Kundenservice, IT, Prozessmanagement und Kommunikation schlagen. Im ersten Schritt werden die heutigen Kontaktpunkte sichtbar gemacht: Welche Eingangskanäle gibt es? Welche Systeme halten Daten? Welche Dokumente entstehen? Welche Vorgänge bleiben liegen? Welche Auskünfte unterscheiden sich je nach Kanal? Aus diesen Beobachtungen entsteht kein abstraktes Zielbild, sondern ein Entscheidungsmodell.',
      'Pentadoc betrachtet Omnichannel in diesem Zusammenhang als Teil einer größeren Transformationsaufgabe. Input Management, Anliegenmanagement, Customer Communication Management, IT-Strategie, Migration und Organisation greifen ineinander. Wenn nur ein neuer Kanal ergänzt wird, bleibt der Grundkonflikt bestehen. Wenn aber Anliegen, Daten, Dokumente, Kommunikation und Bearbeitung gemeinsam gedacht werden, entsteht eine realistische Roadmap für besseren Kundenservice.',
      'Wichtig ist auch die Übersetzung zwischen Managementsprache und Umsetzungsalltag. Vorstände und Bereichsleitungen brauchen Entscheidungsgrundlagen, Teams brauchen klare Prioritäten und die IT braucht Anforderungen, die nicht alle Ausnahmen gleichzeitig lösen sollen. Eine gute Omnichannel Beratung macht diese Ebenen sichtbar. Sie zeigt, welche Maßnahmen Kundenerlebnis und Effizienz verbessern, welche Abhängigkeiten zuerst geklärt werden müssen und welche Themen bewusst später kommen können.',
    ],
  },
  {
    kicker: 'Umsetzung',
    title: 'Von der Idee zur Roadmap für Omnichannel Kundenservice',
    body: [
      'Der Weg zu einem besseren Omnichannel Kundenservice in Frankfurt beginnt mit einer nüchternen Bestandsaufnahme. Nicht jede Organisation braucht sofort ein großes Transformationsprogramm. Manchmal genügt ein klarer Blick auf die wichtigsten Kundenanliegen, die größten Medienbrüche und die Systeme, die heute Entscheidungen blockieren. Daraus lassen sich Quick Wins, Migrationsbedarfe und strategische Entscheidungen sauber trennen.',
      'Eine gute Roadmap beantwortet konkrete Fragen. Welche Informationen müssen beim ersten Kontakt verfügbar sein? Wann wird ein Anliegen automatisch erkannt? Wo braucht es menschliche Entscheidung? Welche Ausgabekanäle sind für welche Kundengruppen sinnvoll? Welche Briefe, E-Mails oder Portalnachrichten müssen überarbeitet werden? Welche Dienstleister, Kernsysteme und Fachverfahren müssen angebunden werden? Diese Fragen machen aus Omnichannel ein führbares Programm statt ein Schlagwort.',
    ],
  },
  {
    kicker: 'Ergebnis',
    title: 'Woran ein reifer Omnichannel Kundenservice erkennbar ist',
    body: [
      'Ein reifer Omnichannel Kundenservice zeigt sich nicht an der Zahl der Kanäle. Er zeigt sich daran, dass Kundenanliegen erkennbar, bearbeitbar und nachvollziehbar sind. Kunden erhalten konsistente Informationen. Mitarbeitende sehen den Kontext. Dokumente und Nachrichten sind nicht losgelöst vom Prozess. Führungskräfte können erkennen, wo Rückstände, Qualitätsthemen oder Automatisierungspotenziale liegen.',
      'Für Versicherer und Krankenkassen ist diese Reife besonders wertvoll, weil Servicequalität, Effizienz und Vertrauen zusammenhängen. Wenn ein Schaden, eine Mitgliedschaft, ein Leistungsfall oder eine Vertragsänderung über mehrere Kontakte läuft, zählt nicht der einzelne Kanal. Es zählt das durchgängige Erlebnis. Genau dafür braucht es eine Beratung, die Omnichannel, Anliegenmanagement und technische Machbarkeit zusammenbringt.',
      'Für Frankfurt bedeutet das: Die Seite adressiert nicht nur ein lokales Keyword, sondern einen realen Bedarf von Organisationen, die zwischen Kundenerwartung, regulatorischer Sorgfalt und gewachsenen Systemlandschaften entscheiden müssen.',
    ],
  },
]

const faqItems = [
  {
    question: 'Ist Omnichannel Kundenservice in Frankfurt ein lokales oder ein fachliches Thema?',
    answer:
      'Beides. Der Standort Frankfurt ist als Such- und Marktsignal relevant, die eigentliche Aufgabe liegt aber in der fachlichen Verbindung von Kanälen, Anliegen, Dokumenten, Kommunikation, IT und Betrieb.',
  },
  {
    question: 'Muss vor einer Omnichannel Beratung bereits eine Software ausgewählt sein?',
    answer:
      'Nein. Häufig ist es besser, zuerst Zielbild, Anforderungen, Prozesse und Abhängigkeiten zu klären. Erst danach lässt sich beurteilen, welche Lösung oder Migration sinnvoll ist.',
  },
  {
    question: 'Für welche Organisationen passt diese Seite?',
    answer:
      'Vor allem für Versicherer, Krankenkassen und Finanzdienstleister mit hohem Kontaktvolumen, vielen Dokumenten, mehreren Eingangskanälen und komplexer Bearbeitung.',
  },
  {
    question: 'Kann der Einstieg klein starten?',
    answer:
      'Ja. Ein strukturierter Erstworkshop kann bereits zeigen, welche Kanäle, Anliegen und Systeme den größten Hebel haben und welche Entscheidungen als Nächstes nötig sind.',
  },
]

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.content = content
}

function SeoNavigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-lg border border-white/[0.55] bg-white/[0.90] px-3 shadow-nav backdrop-blur-xl sm:h-[72px] sm:px-5"
        aria-label="Hauptnavigation"
      >
        <a className="focus-ring flex min-h-11 items-center rounded-md" href="../">
          <img className="h-8 w-auto sm:h-9" src={logo} alt="Pentadoc AG" width="177" height="48" />
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} className="nav-link" href={`../${link.href}`}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a className="hidden nav-phone sm:inline-flex" href="tel:+4993126079110">
            <Phone className="h-4 w-4" aria-hidden="true" />
            +49 931 2607911-0
          </a>
          <a className="btn-primary min-w-[132px]" href="#kontakt">
            Erstgespräch
          </a>
        </div>
      </nav>
    </header>
  )
}

function OmnichannelMap() {
  return (
    <div className="omni-map" aria-label="Omnichannel Zielbild">
      <div className="omni-map-center">
        <span>Frankfurt</span>
        <strong>Omnichannel Kundenservice</strong>
      </div>
      {readinessCards.map((card, index) => {
        const Icon = card.icon
        return (
          <article key={card.label} className={`omni-node omni-node-${index + 1}`}>
            <Icon className="h-5 w-5 text-brand-yellow" aria-hidden="true" />
            <h3>{card.label}</h3>
            <p>{card.text}</p>
          </article>
        )
      })}
    </div>
  )
}

function IntentSearchVisual() {
  return (
    <div className="seo-visual-card search-intent-visual" aria-label="SEO- und AI-Suchintention">
      <div className="visual-window-bar">
        <span />
        <span />
        <span />
        <strong>Suchseite</strong>
      </div>
      <div className="visual-query-row">
        <Search className="h-5 w-5 text-brand-yellow" aria-hidden="true" />
        <span>omnichannel kundenservice frankfurt</span>
      </div>
      <div className="visual-intent-grid">
        {['Service', 'Ort', 'Zielgruppe', 'Anfrage'].map((item) => (
          <div key={item}>
            <span>{item}</span>
            <strong>
              {item === 'Service' && 'Omnichannel'}
              {item === 'Ort' && 'Frankfurt'}
              {item === 'Zielgruppe' && 'Versicherer'}
              {item === 'Anfrage' && 'Erstgespräch'}
            </strong>
          </div>
        ))}
      </div>
      <div className="visual-answer-card">
        <span>Zitierfähige Antwort</span>
        <p>
          Definition, Zielgruppe, Standortbezug und Ergebnis stehen zuerst. Danach folgt die fachliche Tiefe.
        </p>
      </div>
    </div>
  )
}

function ChannelSystemVisual() {
  return (
    <div className="seo-photo-visual" aria-label="Omnichannel System aus Kanälen und Anliegen">
      <img
        src={anliegenmanagementImage}
        alt="Visualisierung vernetzter Anliegenbearbeitung"
        width="1027"
        height="1013"
        loading="lazy"
      />
      <div className="channel-system-card">
        <span>Kanalsteuerung</span>
        <strong>Anliegen als gemeinsamer Nenner</strong>
        <div className="channel-chip-grid">
          {['Telefon', 'E-Mail', 'Portal', 'App', 'Brief', 'CCM'].map((item) => (
            <small key={item}>{item}</small>
          ))}
        </div>
      </div>
    </div>
  )
}

function FrankfurtMarketVisual() {
  return (
    <div className="seo-photo-visual seo-photo-visual-compact" aria-label="Frankfurt und Rhein-Main als Zielmarkt">
      <img
        src={itStrategyImage}
        alt="Strategische IT- und Prozessberatung für Omnichannel Kundenservice"
        width="1600"
        height="900"
        loading="lazy"
      />
      <div className="geo-visual-card">
        <MapPin className="h-5 w-5 text-brand-yellow" aria-hidden="true" />
        <strong>Frankfurt am Main</strong>
        <span>Finanz-, Versicherungs- und Serviceprozesse mit hoher Suchrelevanz.</span>
      </div>
    </div>
  )
}

function QuestionArchitectureVisual() {
  return (
    <div className="seo-visual-card question-architecture-visual" aria-label="Fragearchitektur für Entscheider">
      <div className="question-architecture-center">
        <span>Käuferfragen</span>
        <strong>Antwortstruktur</strong>
      </div>
      {questionClusters.map((cluster, index) => (
        <div key={cluster.title} className={`question-orbit question-orbit-${index + 1}`}>
          <span>{cluster.title}</span>
          <small>{cluster.questions.length} konkrete Suchfragen</small>
        </div>
      ))}
    </div>
  )
}

function RoadmapVisual() {
  return (
    <div className="seo-visual-card roadmap-visual" aria-label="Omnichannel Roadmap">
      {approachSteps.map((step, index) => (
        <div key={step.title} className="roadmap-step-visual">
          <span>{String(index + 1).padStart(2, '0')}</span>
          <div>
            <strong>{step.title}</strong>
            <small>{step.text}</small>
          </div>
        </div>
      ))}
    </div>
  )
}

function FaqSearchVisual() {
  return (
    <div className="seo-visual-card faq-search-visual" aria-label="FAQ- und AI-Search-Antworten">
      <div className="visual-query-row">
        <MessageSquareText className="h-5 w-5 text-brand-yellow" aria-hidden="true" />
        <span>Welche Fragen beantwortet die Seite?</span>
      </div>
      <div className="faq-answer-preview">
        <span>AI-ready Antwortblock</span>
        <p>Kurze Frage. Direkte Antwort. Danach klare fachliche Einordnung.</p>
      </div>
      <div className="faq-visual-stack">
        {faqItems.slice(0, 3).map((item) => (
          <div key={item.question}>
            <CheckCircle2 className="h-4 w-4 text-brand-yellow" aria-hidden="true" />
            <span>{item.question}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function PresentationMarker({
  eyebrow,
  number,
  title,
  subtitle,
  relevance,
  points,
  tone = 'light',
  pointer = 'left',
}: PresentationMarkerProps) {
  const pointerClass = {
    left: 'presentation-marker-left',
    right: 'presentation-marker-right',
    top: 'presentation-marker-top',
  }[pointer]
  const reduceMotion = useReducedMotion()
  const markerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: markerRef,
    offset: ['start 98%', 'center 56%'],
  })
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 62,
    damping: 20,
    mass: 0.65,
  })
  const opacity = useTransform(smoothProgress, [0, 0.2, 0.62, 1], [0.18, 0.38, 0.9, 1])
  const y = useTransform(smoothProgress, [0, 1], [48, 0])
  const scale = useTransform(smoothProgress, [0, 1], [0.97, 1])
  const filter = useTransform(smoothProgress, [0, 0.45, 0.8, 1], ['blur(14px)', 'blur(7px)', 'blur(0px)', 'blur(0px)'])

  return (
    <motion.aside
      ref={markerRef}
      className={`presentation-marker ${pointerClass} ${tone === 'dark' ? 'presentation-marker-dark' : ''}`}
      style={reduceMotion ? undefined : { opacity, y, scale, filter }}
      aria-label={`${eyebrow} ${number}`}
    >
      <span className="presentation-marker-label">
        {eyebrow} {number}
      </span>
      <h3>{title}</h3>
      <p className="presentation-marker-subtitle">{subtitle}</p>
      <p className="presentation-marker-relevance">
        <strong>Relevanz für Ranking:</strong> {relevance}
      </p>
      <ul>
        {points.map((point) => (
          <li key={point}>
            <CheckCircle2 className="h-4 w-4 text-brand-yellow" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </motion.aside>
  )
}

export function OmnichannelFrankfurtPage() {
  useEffect(() => {
    document.title = pageTitle
    setMeta('name', 'description', pageDescription)
    setMeta('property', 'og:title', pageTitle)
    setMeta('property', 'og:description', pageDescription)
    setMeta('property', 'og:url', pageUrl)
    setMeta('property', 'og:image', pageImage)
    setMeta('property', 'og:image:width', '1200')
    setMeta('property', 'og:image:height', '630')
    setMeta('property', 'og:image:alt', 'Pentadoc Omnichannel Kundenservice Frankfurt')
    setMeta('name', 'twitter:title', pageTitle)
    setMeta('name', 'twitter:description', pageDescription)
    setMeta('name', 'twitter:image', pageImage)

    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]') ?? document.createElement('link')
    canonical.rel = 'canonical'
    canonical.href = pageUrl
    document.head.appendChild(canonical)

    const schema = document.createElement('script')
    schema.type = 'application/ld+json'
    schema.dataset.pageSchema = 'omnichannel-frankfurt'
    schema.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: pageTitle,
      description: pageDescription,
      url: pageUrl,
      inLanguage: 'de-DE',
      about: ['Omnichannel Kundenservice', 'Anliegenmanagement', 'Customer Communication Management'],
      provider: {
        '@type': 'ProfessionalService',
        name: 'Pentadoc AG',
        url: 'https://pentadoc.com/',
        telephone: '+49 931 2607911-0',
        areaServed: {
          '@type': 'City',
          name: 'Frankfurt am Main',
        },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Goethestraße 1',
          postalCode: '97072',
          addressLocality: 'Würzburg',
          addressCountry: 'DE',
        },
      },
    })
    document.head.appendChild(schema)

    return () => {
      schema.remove()
    }
  }, [])

  return (
    <div id="top" className="min-h-screen bg-fog text-ink">
      <SeoNavigation />
      <main id="main-content">
        <section className="seo-hero" aria-labelledby="seo-hero-title">
          <div className="seo-hero-media" aria-hidden="true">
            <img src={omnichannelImage} alt="" width="1600" height="900" fetchPriority="high" />
          </div>
          <div className="seo-hero-scrim" aria-hidden="true" />
          <div className="hero-line-field" aria-hidden="true" />

          <div className="seo-hero-shell">
            <Reveal className="seo-hero-copy">
              <p className="section-kicker text-brand-yellow">Omnichannel Kundenservice Frankfurt</p>
              <h1 id="seo-hero-title" className="seo-hero-title">
                Omnichannel Kundenservice Frankfurt für Versicherer und Krankenkassen.
              </h1>
              <p className="seo-hero-lead">
                Herstellerunabhängige Beratung für Teams, die Kanäle, Anliegen, Dokumente,
                Kommunikation und IT im Rhein-Main-Gebiet zu einem steuerbaren Kundenerlebnis verbinden wollen.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-start">
                <a className="btn-primary" href="#kontakt">
                  Omnichannel Erstgespräch
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a className="btn-secondary-on-dark" href="#loesung">
                  Seite ansehen
                </a>
              </div>
              <ul className="seo-hero-checks" aria-label="Thematische Schwerpunkte">
                <li>
                  <CheckCircle2 className="h-4 w-4 text-brand-yellow" aria-hidden="true" />
                  Input Management, Anliegenmanagement und CCM zusammen denken
                </li>
                <li>
                  <CheckCircle2 className="h-4 w-4 text-brand-yellow" aria-hidden="true" />
                  Speziell für Versicherer, Krankenkassen und Finanzdienstleister
                </li>
                <li>
                  <CheckCircle2 className="h-4 w-4 text-brand-yellow" aria-hidden="true" />
                  Frankfurt und Rhein-Main als regionale Such- und Marktsignale
                </li>
              </ul>
            </Reveal>

            <Reveal className="seo-hero-panel" delay={0.08}>
              <div className="seo-panel-top">
                <Search className="h-5 w-5 text-brand-yellow" aria-hidden="true" />
                <div>
                  <span>Gesuchtes Thema</span>
                  <strong>omnichannel kundenservice frankfurt</strong>
                </div>
              </div>
              <div className="seo-panel-metrics">
                <div>
                  <span>Service</span>
                  <strong>Omnichannel</strong>
                </div>
                <div>
                  <span>Ort</span>
                  <strong>Frankfurt</strong>
                </div>
                <div>
                  <span>Zielgruppe</span>
                  <strong>Versicherung</strong>
                </div>
              </div>
              <p>
                Der Einstieg beantwortet die wichtigste Käuferfrage zuerst und führt danach in klare
                Entscheidungs-, Prozess- und IT-Themen für einen Omnichannel-Fahrplan.
              </p>
              <PresentationMarker
                eyebrow="SEO-Strategie"
                number="01"
                title="Erster Bildschirm mit klarer Suchabsicht"
                subtitle="Der Einstieg beantwortet sofort: Was ist das Thema, für wen ist es relevant und wo wird gesucht?"
                relevance="Google und KI-Systeme erkennen schneller, dass diese Seite exakt zur Suchanfrage, Zielgruppe und Region passt."
                points={[
                  'Suchbegriff sichtbar: „omnichannel kundenservice frankfurt“',
                  'Ort, Service und Zielgruppe als eigene Felder im Hero',
                  'CTA direkt neben der Suchintention statt erst am Seitenende',
                ]}
                pointer="left"
              />
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

        <section className="section bg-fog" aria-labelledby="intent-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="seo-split seo-split-visual-left">
              <Reveal>
                <IntentSearchVisual />
              </Reveal>
              <Reveal className="seo-split-copy">
                <p className="section-kicker text-brand-grey">Suchintention</p>
                <h2 id="intent-title" className="section-title">
                  Was hinter dem Suchbegriff wirklich geklärt werden muss.
                </h2>
                <PresentationMarker
                  eyebrow="Suchintention"
                  number="02"
                  title="Suchintention vor Fließtext"
                  subtitle="Google und KI-Suchsysteme verstehen schneller, welche Nutzerfrage die Seite bedient."
                  relevance="Eine klare Intent-Struktur erhöht die Chance, für kommerzielle Suchanfragen und KI-Antworten als passende Quelle verstanden zu werden."
                  points={[
                    'Drei Karten trennen Thema, Direktantwort und Kaufabsicht',
                    'Die Seite erklärt zuerst die Entscheidungssituation, nicht das Unternehmen',
                    'Das hilft auch im Pitch: der Kunde sieht sofort die Logik hinter der Seite',
                  ]}
                  pointer="left"
                />
              </Reveal>
            </div>
            <div className="intent-grid">
              {intentCards.map((card) => (
                <Reveal key={card.title}>
                  <article className="intent-card">
                    <span>{card.label}</span>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="loesung" className="section bg-white" aria-labelledby="solution-title">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.84fr_1.16fr] lg:px-8">
            <Reveal>
              <p className="section-kicker text-brand-grey">Ausgangslage</p>
              <h2 id="solution-title" className="section-title">
                Omnichannel beginnt nicht beim Kanal. Es beginnt beim Kundenanliegen.
              </h2>
              <p className="mt-5 text-lg leading-8 text-graphite">
                In Versicherungen und Krankenkassen treffen Kundenkontakte über viele Wege ein:
                App, Portal, Telefon, Brief, E-Mail, Maklerkontakt und interne Übergabe. Ein Frankfurter
                Omnichannel-Programm muss diese Signale so ordnen, dass Service, Fachbereich und IT
                mit derselben Wahrheit arbeiten.
              </p>
              <div className="seo-stat-row">
                {proofStats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
              <PresentationMarker
                eyebrow="Google-Suche"
                number="03"
                title="Themenautorität statt Keyword-Fülltext"
                subtitle="Die Copy baut ein semantisches Themenfeld auf, damit die Seite mehr als nur ein einzelnes Keyword abdeckt."
                relevance="Breite fachliche Abdeckung signalisiert Google, dass die Seite das Thema vollständig behandelt und nicht nur ein Keyword wiederholt."
                points={[
                  'Omnichannel wird mit Anliegenmanagement, Input Management, CCM und IT-Strategie verbunden',
                  'Problemkarten zeigen echte Servicebrüche statt generischer Marketingaussagen',
                  'Proof-Zahlen geben der Seite fachliche Glaubwürdigkeit',
                ]}
                pointer="right"
              />
            </Reveal>
            <div className="grid gap-4">
              <Reveal delay={0.04}>
                <ChannelSystemVisual />
              </Reveal>
              {painPoints.map((item, index) => (
                <Reveal key={item.title} delay={0.08 + index * 0.04}>
                  <article className="signal-panel">
                    <span>0{index + 1}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="frankfurt" className="seo-content-section" aria-labelledby="content-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal className="section-heading">
              <p className="section-kicker text-brand-grey">Frankfurt Suchintention</p>
              <h2 id="content-title" className="section-title">
                Antworten, die Entscheider vor einem Omnichannel-Projekt brauchen.
              </h2>
            </Reveal>

            <div className="seo-article-grid">
              <article className="seo-article">
                <div className="seo-answer-box">
                  <p className="section-kicker text-brand-grey">Kurzantwort</p>
                  <h3>Was ist Omnichannel Kundenservice Beratung in Frankfurt?</h3>
                  <p>
                    Omnichannel Kundenservice Beratung in Frankfurt hilft Versicherern, Krankenkassen
                    und Finanzdienstleistern dabei, Telefon, E-Mail, Portal, App, Dokumente und
                    ausgehende Kommunikation zu einem einheitlichen Serviceprozess zu verbinden.
                    Entscheidend sind nicht möglichst viele Kanäle, sondern ein gemeinsames Bild vom
                    Kundenanliegen, klare Zuständigkeiten, anschlussfähige IT und eine realistische Roadmap.
                  </p>
                </div>
                <PresentationMarker
                  eyebrow="KI-Suche"
                  number="04"
                  title="Kurzantwort, die KI-Systeme zitieren können"
                  subtitle="Die Antwort ist so geschrieben, dass sie in KI-Suche, Snippets und Verkaufsgesprächen direkt zitierbar ist."
                  relevance="KI-Suchsysteme bevorzugen klare Antwortblöcke, weil sie diese leichter extrahieren, zusammenfassen und als Quelle nennen können."
                  points={[
                    'Definition steht vor der langen Argumentation',
                    'Ein Satz nennt Zielgruppe, Kanäle, Prozess und Ergebnis',
                    'Danach folgt die Struktur: Definition, Standort, Beratung, Roadmap, Ergebnis',
                  ]}
                  pointer="top"
                />
                {seoSections.map((section) => (
                  <section key={section.title}>
                    <p className="section-kicker text-brand-grey">{section.kicker}</p>
                    <h3>{section.title}</h3>
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </section>
                ))}
              </article>

              <aside className="seo-aside" aria-label="Omnichannel Beratung zusammengefasst">
                <FrankfurtMarketVisual />
                <div className="seo-aside-card">
                  <MapPin className="h-6 w-6 text-brand-yellow" aria-hidden="true" />
                  <h3>Frankfurt und Rhein-Main</h3>
                  <p>
                    Regionale Suchseite für Unternehmen, die Omnichannel Kundenservice in einem
                    anspruchsvollen Finanz- und Versicherungsumfeld klären wollen.
                  </p>
                </div>
                <div className="seo-aside-card">
                  <ShieldCheck className="h-6 w-6 text-brand-yellow" aria-hidden="true" />
                  <h3>Versicherungsnah</h3>
                  <p>
                    Fokus auf Kundenanliegen, Dokumente, Kommunikation, Prozesslogik und Migration
                    statt isolierter Kanaloptimierung.
                  </p>
                </div>
                <div className="seo-aside-card">
                  <Building2 className="h-6 w-6 text-brand-yellow" aria-hidden="true" />
                  <h3>Überregional beraten</h3>
                  <p>
                    Pentadoc sitzt in Würzburg und berät überregional. Frankfurt wird hier als
                    kommerziell relevante Zielregion adressiert.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section bg-white" aria-labelledby="question-cluster-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="seo-split seo-split-visual-left">
              <Reveal>
                <QuestionArchitectureVisual />
              </Reveal>
              <Reveal className="seo-split-copy">
                <p className="section-kicker text-brand-grey">Entscheiderfragen</p>
                <h2 id="question-cluster-title" className="section-title">
                  Die Seite deckt Strategie, Betrieb und Technik in einer klaren Fragearchitektur ab.
                </h2>
                <PresentationMarker
                  eyebrow="Inhaltsarchitektur"
                  number="05"
                  title="Käuferfragen als Inhaltsarchitektur"
                  subtitle="Die Seite ist entlang der Fragen aufgebaut, die Entscheider vor einer Anfrage wirklich stellen."
                  relevance="Wenn die Seite echte Entscheidungsfragen beantwortet, gewinnt sie Relevanz für mehrere Suchphrasen und für dialogartige KI-Suchen."
                  points={[
                    'Strategiefragen für Management und Fachbereich',
                    'Operative Fragen für Service, Backoffice und Prozessverantwortliche',
                    'Technische Fragen für IT, Daten, Schnittstellen und Migration',
                  ]}
                  pointer="left"
                />
              </Reveal>
            </div>
            <div className="question-grid">
              {questionClusters.map((cluster) => (
                <Reveal key={cluster.title}>
                  <article className="question-card">
                    <h3>{cluster.title}</h3>
                    <ul>
                      {cluster.questions.map((question) => (
                        <li key={question}>
                          <CheckCircle2 className="h-4 w-4 text-brand-yellow" aria-hidden="true" />
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-section" aria-labelledby="map-title">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
            <Reveal>
              <p className="section-kicker text-brand-yellow">Zielbild</p>
              <h2 id="map-title" className="section-title text-white">
                Ein Omnichannel Zielbild verbindet Eingang, Anliegen, Kommunikation und Betrieb.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/[0.80]">
                Der Unterschied zwischen mehreren Kanälen und echtem Omnichannel liegt in der Steuerung.
                Ein Kanal darf nicht nur erreichbar sein. Er muss in denselben Prozess, dieselbe
                Informationslage und dieselbe Kommunikationslogik einzahlen.
              </p>
              <ul className="mt-7 grid gap-3 text-base leading-7 text-white/[0.84]">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-yellow" aria-hidden="true" />
                  <span>Kundenkontext über Kontaktpunkte hinweg sichtbar machen</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-yellow" aria-hidden="true" />
                  <span>Dokumente und Nachrichten fachlich mit dem Anliegen verbinden</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-yellow" aria-hidden="true" />
                  <span>Roadmap für Systeme, Rollen, Migration und Steuerung ableiten</span>
                </li>
              </ul>
              <PresentationMarker
                eyebrow="Semantische Struktur"
                number="06"
                title="Fachbegriffe als verbundenes System"
                subtitle="Wichtige Such- und AI-Entitäten werden als zusammenhängendes System erklärt, nicht als lose Begriffe."
                relevance="Suchmaschinen und KI-Systeme verstehen die Seite besser, wenn Begriffe wie Kanäle, Anliegen, Kommunikation und Betrieb logisch verbunden sind."
                points={[
                  'Knoten: Eingänge, Anliegen, Kommunikation und Betrieb',
                  'Zentrum: Frankfurt + Omnichannel Kundenservice',
                  'Visuelle Struktur macht die fachliche Beziehung sofort verständlich',
                ]}
                tone="dark"
                pointer="right"
              />
            </Reveal>
            <Reveal delay={0.08}>
              <OmnichannelMap />
            </Reveal>
          </div>
        </section>

        <section id="vorgehen" className="section bg-white" aria-labelledby="approach-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="seo-split seo-split-visual-left">
              <Reveal>
                <RoadmapVisual />
              </Reveal>
              <Reveal className="seo-split-copy">
                <p className="section-kicker text-brand-grey">Vorgehen</p>
                <h2 id="approach-title" className="section-title">
                  Vom Suchbegriff zur entscheidbaren Omnichannel Roadmap.
                </h2>
                <p className="mt-5 text-lg leading-8 text-graphite">
                  Die visuelle Roadmap zeigt, dass die Seite nicht nur ranken soll. Sie führt vom
                  Suchinteresse über fachliche Klärung bis zu einem konkreten Beratungsfahrplan.
                </p>
              </Reveal>
            </div>
            <div className="process-grid">
              {approachSteps.map((step, index) => (
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
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.98fr_1.02fr] lg:px-8">
            <Reveal>
              <img
                className="image-panel"
                src={officeImage}
                alt="Pentadoc Büro- und Teamsituation"
                width="1000"
                height="813"
                loading="lazy"
              />
            </Reveal>
            <Reveal>
              <p className="section-kicker text-brand-grey">Warum Pentadoc</p>
              <h2 id="why-title" className="section-title">
                Herstellerunabhängig, versicherungsnah und stark in dokumentennahen Prozessen.
              </h2>
              <div className="benefit-stack">
                <article className="benefit-card">
                  <Route className="h-6 w-6 text-brand-yellow" aria-hidden="true" />
                  <div>
                    <h3>Zielbild statt Tool-Liste</h3>
                    <p>
                      Der erste Mehrwert liegt in klaren Entscheidungen: Welche Kanäle, Anliegen,
                      Dokumente, Systeme und Rollen müssen zusammenspielen?
                    </p>
                  </div>
                </article>
                <article className="benefit-card">
                  <Network className="h-6 w-6 text-brand-yellow" aria-hidden="true" />
                  <div>
                    <h3>IT-Strategie und Migration</h3>
                    <p>
                      Omnichannel wird mit Architektur, Daten, Schnittstellen und Migrationspfaden
                      verbunden, damit die Roadmap im Betrieb realistisch bleibt.
                    </p>
                  </div>
                </article>
                <article className="benefit-card">
                  <GitBranch className="h-6 w-6 text-brand-yellow" aria-hidden="true" />
                  <div>
                    <h3>Von Frankfurt aus anschlussfähig</h3>
                    <p>
                      Die Seite spricht den Frankfurter Markt an, bleibt aber fachlich auf
                      überregionale Versicherungs- und Krankenkassenprozesse ausgerichtet.
                    </p>
                  </div>
                </article>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="faq" className="section bg-white" aria-labelledby="faq-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="seo-split">
              <Reveal className="seo-split-copy">
                <p className="section-kicker text-brand-grey">FAQ</p>
                <h2 id="faq-title" className="section-title">
                  Häufige Fragen zu Omnichannel Kundenservice Frankfurt.
                </h2>
                <PresentationMarker
                  eyebrow="Fragenabdeckung"
                  number="07"
                  title="FAQ für lange Suchfragen und KI-Antworten"
                  subtitle="FAQ-Blöcke beantworten konkrete Folgefragen, die Käufer in Google und KI-Suchsystemen stellen."
                  relevance="Direkte Fragen und Antworten erhöhen die Chance auf lange Suchanfragen, hervorgehobene Google-Antworten und verwendbare KI-Antworten."
                  points={[
                    'Lokale Frage: Frankfurt als Standort- und Suchsignal',
                    'Kauffrage: Software zuerst oder Zielbild zuerst?',
                    'Einstiegsfrage: Wie klein kann ein erstes Projekt starten?',
                  ]}
                  pointer="right"
                />
              </Reveal>
              <Reveal>
                <FaqSearchVisual />
              </Reveal>
            </div>
            <div className="faq-list">
              {faqItems.map((item) => (
                <details key={item.question} className="faq-item">
                  <summary>
                    <span>{item.question}</span>
                    <span aria-hidden="true">+</span>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="section bg-ink text-white" aria-labelledby="contact-title">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
            <Reveal>
              <p className="section-kicker text-brand-yellow">Kontakt</p>
              <h2 id="contact-title" className="section-title text-white">
                Klären Sie, ob Omnichannel in Frankfurt ein Kanal-, Prozess- oder Architekturthema ist.
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/[0.78]">
                Teilen Sie kurz mit, welche Kanäle, Systeme oder Serviceprozesse betroffen sind.
                Daraus lässt sich ein erster fachlicher Zuschnitt für Omnichannel, Anliegenmanagement
                oder Customer Communication Management ableiten.
              </p>
              <PresentationMarker
                eyebrow="Lead-Strategie"
                number="08"
                title="Vom Informationsbedarf zur qualifizierten Anfrage"
                subtitle="Eine gute SEO-Seite beantwortet Fragen und führt dann natürlich zum nächsten geschäftlichen Schritt."
                relevance="Ranking bringt nur Wert, wenn die Seite aus Sichtbarkeit eine passende Anfrage macht. Deshalb verbindet die Copy Beratungsthema und Kontaktgrund."
                points={[
                  'Kontakttext wiederholt das konkrete Omnichannel-Problem',
                  'Formular fragt nach Ausgangslage statt nur nach Kontaktdaten',
                  'CTA bleibt sichtbar, ohne den Inhalt zu verdrängen',
                ]}
                tone="dark"
                pointer="right"
              />
              <div className="mt-8 grid gap-3 rounded-lg border border-white/[0.12] bg-white/[0.08] p-5">
                <a className="flex min-h-11 items-center gap-3 font-semibold text-white" href="tel:+4993126079110">
                  <Phone className="h-5 w-5 text-brand-yellow" aria-hidden="true" />
                  {contact.phone}
                </a>
                <a className="flex min-h-11 items-center gap-3 font-semibold text-white" href={`mailto:${contact.email}`}>
                  <MessageSquareText className="h-5 w-5 text-brand-yellow" aria-hidden="true" />
                  {contact.email}
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <ContactForm compact />
            </Reveal>
          </div>
        </section>

        <section className="final-cta" aria-labelledby="final-title">
          <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
            <div>
              <p className="section-kicker text-ink">Nächster Schritt</p>
              <h2 id="final-title">
                Aus einem Suchbegriff wird ein prüfbarer Omnichannel-Fahrplan.
              </h2>
            </div>
            <a className="btn-dark" href="#kontakt">
              Anfrage starten
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer" aria-label="Footer">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.85fr_1fr] lg:px-8">
          <div>
            <img className="h-10 w-auto" src={logo} alt="Pentadoc AG" width="177" height="48" loading="lazy" />
            <p className="mt-5 max-w-sm">
              Herstellerunabhängige Unternehmensberatung für digitale Transformation, Input Management,
              Anliegenmanagement, Omnichannel Kundenservice, CCM, IT-Strategie und Migration.
            </p>
          </div>
          <div>
            <h2>Navigation</h2>
            <ul>
              <li>
                <a href="#loesung">Lösung</a>
              </li>
              <li>
                <a href="#frankfurt">Frankfurt</a>
              </li>
              <li>
                <a href="#vorgehen">Vorgehen</a>
              </li>
              <li>
                <a href="#kontakt">Kontakt</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Schwerpunkte</h2>
            <ul>
              <li>Omnichannel Kundenservice</li>
              <li>Anliegenmanagement</li>
              <li>Input Management</li>
              <li>Customer Communication Management</li>
              <li>IT-Strategie Versicherung</li>
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
          <p>© 2026 Pentadoc AG. Omnichannel SEO-Landingpage.</p>
          <p>Faktenbasis: öffentlich verfügbare Informationen auf pentadoc.com und Projektschwerpunkt Omnichannel.</p>
        </div>
      </footer>

      <StickyCTA />
    </div>
  )
}
