import {
  ArrowRight,
  Building2,
  CheckCircle2,
  MapPin,
  MessageSquareText,
  Phone,
  Search,
  ShieldCheck,
} from 'lucide-react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useEffect, useRef } from 'react'
import logo from './assets/images/pentadoc-logo-small.webp'
import omnichannelImage from './assets/images/omnichannel.webp'
import officeImage from './assets/images/pentadoc-office.webp'
import seoChannelConvergenceImage from './assets/images/seo-channel-convergence.jpg'
import seoDecisionArchitectureImage from './assets/images/seo-decision-architecture.jpg'
import seoFaqAnswersImage from './assets/images/seo-faq-answers.jpg'
import seoFirstCallImage from './assets/images/seo-first-call.jpg'
import seoOmnichannelStrategyImage from './assets/images/seo-omnichannel-strategy.jpg'
import seoServiceOperationsImage from './assets/images/seo-service-operations.jpg'
import { ContactForm } from './components/ContactForm'
import { LanguagePicker } from './components/LanguagePicker'
import { Reveal } from './components/Reveal'
import { StickyCTA } from './components/StickyCTA'
import {
  contact,
  referenceNames,
  seoReadinessIcons,
  seoWhyIcons,
} from './content'
import { useLang, useT } from './lib/i18n'
import type { PresentationMarkerCopy } from './lib/translations'

const pageUrl = 'https://digitalmovementuk.github.io/Pentadoc-Prototype/omnichannel-kundenservice-frankfurt/'
const pageImage = 'https://digitalmovementuk.github.io/Pentadoc-Prototype/og-omnichannel-frankfurt.png'

type PresentationMarkerProps = {
  copy: PresentationMarkerCopy
  number: string
  tone?: 'light' | 'dark'
  pointer?: 'left' | 'right' | 'top'
  relevanceLabel: string
}

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
  const t = useT()
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-lg border border-white/[0.55] bg-white/[0.90] px-3 shadow-nav backdrop-blur-xl sm:h-[72px] sm:px-5"
        aria-label={t.nav.aria}
      >
        <a className="focus-ring flex min-h-11 items-center rounded-md" href="../">
          <img className="h-8 w-auto sm:h-9" src={logo} alt="Pentadoc AG" width="177" height="48" />
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {t.nav.links.map((link) => (
            <a key={link.href} className="nav-link" href={`../${link.href}`}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a className="hidden nav-phone sm:inline-flex" href="tel:+4993126079110">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {t.nav.phoneLabel}
          </a>
          <LanguagePicker surface="light" compact />
          <a className="btn-primary min-w-[132px]" href="#kontakt">
            {t.nav.cta}
          </a>
        </div>
      </nav>
    </header>
  )
}

function OmnichannelMap() {
  const t = useT()
  return (
    <div className="omni-map" aria-label={t.seo.map.title}>
      <div className="omni-map-center">
        <span>{t.seo.map.center.eyebrow}</span>
        <strong>{t.seo.map.center.title}</strong>
      </div>
      {t.seo.map.readiness.map((card, index) => {
        const Icon = seoReadinessIcons[index] ?? seoReadinessIcons[0]
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
  const t = useT()
  return (
    <div className="seo-photo-visual" aria-label={t.seo.intent.title}>
      <img
        src={seoOmnichannelStrategyImage}
        alt={t.seo.visuals.intent.title}
        width="1570"
        height="1001"
        loading="lazy"
      />
      <div className="channel-system-card">
        <span>{t.seo.visuals.intent.eyebrow}</span>
        <strong>{t.seo.visuals.intent.title}</strong>
        <div className="channel-chip-grid">
          {t.seo.visuals.intent.chips.map((item) => (
            <small key={item}>{item}</small>
          ))}
        </div>
      </div>
    </div>
  )
}

function ChannelSystemVisual() {
  const t = useT()
  return (
    <div className="seo-photo-visual" aria-label={t.seo.solution.visualSrLabel}>
      <img
        src={seoChannelConvergenceImage}
        alt={t.seo.visuals.channel.title}
        width="1566"
        height="1004"
        loading="lazy"
      />
      <div className="channel-system-card">
        <span>{t.seo.visuals.channel.eyebrow}</span>
        <strong>{t.seo.visuals.channel.title}</strong>
        <div className="channel-chip-grid">
          {t.seo.visuals.channel.chips.map((item) => (
            <small key={item}>{item}</small>
          ))}
        </div>
      </div>
    </div>
  )
}

function FrankfurtMarketVisual() {
  const t = useT()
  return (
    <div className="seo-photo-visual seo-photo-visual-compact" aria-label={t.seo.visuals.frankfurt.title}>
      <img
        src={seoServiceOperationsImage}
        alt={t.seo.visuals.frankfurt.title}
        width="1566"
        height="1004"
        loading="lazy"
      />
      <div className="geo-visual-card">
        <MapPin className="h-5 w-5 text-brand-yellow" aria-hidden="true" />
        <strong>{t.seo.visuals.frankfurt.title}</strong>
        <span>{t.seo.visuals.frankfurt.body}</span>
      </div>
    </div>
  )
}

function QuestionArchitectureVisual() {
  const t = useT()
  return (
    <div className="seo-photo-visual" aria-label={t.seo.questions.title}>
      <img
        src={seoDecisionArchitectureImage}
        alt={t.seo.visuals.questions.title}
        width="1586"
        height="992"
        loading="lazy"
      />
      <div className="channel-system-card">
        <span>{t.seo.visuals.questions.eyebrow}</span>
        <strong>{t.seo.visuals.questions.title}</strong>
        <div className="channel-chip-grid">
          {t.seo.questions.clusters.map((cluster) => (
            <small key={cluster.title}>{cluster.title}</small>
          ))}
        </div>
      </div>
    </div>
  )
}

function RoadmapVisual() {
  const t = useT()
  return (
    <div className="seo-photo-visual" aria-label={t.seo.approach.title}>
      <img
        src={seoFirstCallImage}
        alt={t.seo.visuals.roadmap.title}
        width="1566"
        height="1005"
        loading="lazy"
      />
      <div className="channel-system-card">
        <span>{t.seo.visuals.roadmap.eyebrow}</span>
        <strong>{t.seo.visuals.roadmap.title}</strong>
        <div className="channel-chip-grid">
          {t.seo.approach.steps.slice(0, 3).map((step, index) => (
            <small key={step.title}>{String(index + 1).padStart(2, '0')}</small>
          ))}
        </div>
      </div>
    </div>
  )
}

function FaqSearchVisual() {
  const t = useT()
  return (
    <div className="seo-photo-visual" aria-label={t.seo.faq.title}>
      <img
        src={seoFaqAnswersImage}
        alt={t.seo.visuals.faq.title}
        width="1563"
        height="1006"
        loading="lazy"
      />
      <div className="channel-system-card">
        <span>{t.seo.visuals.faq.eyebrow}</span>
        <strong>{t.seo.visuals.faq.title}</strong>
        <div className="channel-chip-grid">
          {t.seo.faq.items.slice(0, 3).map((_item, index) => (
            <small key={index}>{t.seo.visuals.faq.chipPrefix} {index + 1}</small>
          ))}
        </div>
      </div>
    </div>
  )
}

function PresentationMarker({
  copy,
  number,
  tone = 'light',
  pointer = 'left',
  relevanceLabel,
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
      aria-label={`${copy.eyebrow} ${number}`}
    >
      <span className="presentation-marker-label">
        {copy.eyebrow} {number}
      </span>
      <h3>{copy.title}</h3>
      <p className="presentation-marker-subtitle">{copy.subtitle}</p>
      <p className="presentation-marker-relevance">
        <strong>{relevanceLabel}:</strong> {copy.relevance}
      </p>
      <ul>
        {copy.points.map((point) => (
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
  const t = useT()
  const { lang } = useLang()
  const relevanceLabel = lang === 'de' ? 'Relevanz für Ranking' : 'SEO relevance'

  useEffect(() => {
    document.title = t.seoPageTitle
    setMeta('name', 'description', t.seoPageDescription)
    setMeta('property', 'og:title', t.seoPageTitle)
    setMeta('property', 'og:description', t.seoPageDescription)
    setMeta('property', 'og:url', pageUrl)
    setMeta('property', 'og:image', pageImage)
    setMeta('property', 'og:image:width', '1200')
    setMeta('property', 'og:image:height', '630')
    setMeta('property', 'og:image:alt', 'Pentadoc Omnichannel Kundenservice Frankfurt')
    setMeta('name', 'twitter:title', t.seoPageTitle)
    setMeta('name', 'twitter:description', t.seoPageDescription)
    setMeta('name', 'twitter:image', pageImage)
    document.documentElement.lang = lang

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
      name: t.seoPageTitle,
      description: t.seoPageDescription,
      url: pageUrl,
      inLanguage: lang === 'de' ? 'de-DE' : 'en-GB',
      about: ['Omnichannel customer service', 'Case management', 'Customer Communication Management'],
      provider: {
        '@type': 'ProfessionalService',
        name: 'Pentadoc AG',
        url: 'https://pentadoc.com/',
        telephone: '+49 931 2607911-0',
        areaServed: { '@type': 'City', name: 'Frankfurt am Main' },
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Beethovenstraße 1a',
          postalCode: '97080',
          addressLocality: 'Würzburg',
          addressCountry: 'DE',
        },
      },
    })
    document.head.appendChild(schema)

    return () => {
      schema.remove()
    }
  }, [t, lang])

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
              <p className="section-kicker text-brand-yellow">{t.seo.hero.kicker}</p>
              <h1 id="seo-hero-title" className="seo-hero-title">
                {t.seo.hero.title}
              </h1>
              <p className="seo-hero-lead">{t.seo.hero.lead}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-start">
                <a className="btn-primary" href="#kontakt">
                  {t.seo.hero.primaryCta}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a className="btn-secondary-on-dark" href="#loesung">
                  {t.seo.hero.secondaryCta}
                </a>
              </div>
              <ul className="seo-hero-checks" aria-label={t.seo.hero.kicker}>
                {t.seo.hero.checks.map((check) => (
                  <li key={check}>
                    <CheckCircle2 className="h-4 w-4 text-brand-yellow" aria-hidden="true" />
                    {check}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="seo-hero-panel" delay={0.08}>
              <div className="seo-panel-top">
                <Search className="h-5 w-5 text-brand-yellow" aria-hidden="true" />
                <div>
                  <span>{t.seo.hero.panel.topLabel}</span>
                  <strong>{t.seo.hero.panel.topValue}</strong>
                </div>
              </div>
              <div className="seo-panel-metrics">
                {t.seo.hero.panel.metrics.map((m) => (
                  <div key={m.label}>
                    <span>{m.label}</span>
                    <strong>{m.value}</strong>
                  </div>
                ))}
              </div>
              <p>{t.seo.hero.panel.body}</p>
              <PresentationMarker
                copy={t.seo.markers.hero}
                number="01"
                pointer="left"
                relevanceLabel={relevanceLabel}
              />
            </Reveal>
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

        <section className="section bg-fog" aria-labelledby="intent-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="seo-split seo-split-visual-left">
              <Reveal>
                <IntentSearchVisual />
              </Reveal>
              <Reveal className="seo-split-copy">
                <p className="section-kicker text-brand-grey">{t.seo.intent.kicker}</p>
                <h2 id="intent-title" className="section-title">
                  {t.seo.intent.title}
                </h2>
                <PresentationMarker
                  copy={t.seo.markers.intent}
                  number="02"
                  pointer="left"
                  relevanceLabel={relevanceLabel}
                />
              </Reveal>
            </div>
            <div className="intent-grid">
              {t.seo.intent.cards.map((card) => (
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
              <p className="section-kicker text-brand-grey">{t.seo.solution.kicker}</p>
              <h2 id="solution-title" className="section-title">
                {t.seo.solution.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-graphite">{t.seo.solution.body}</p>
              <div className="seo-stat-row">
                {t.proofStats.map((stat) => (
                  <div key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
              <PresentationMarker
                copy={t.seo.markers.solution}
                number="03"
                pointer="right"
                relevanceLabel={relevanceLabel}
              />
            </Reveal>
            <div className="grid gap-4">
              <Reveal delay={0.04}>
                <ChannelSystemVisual />
              </Reveal>
              {t.seo.solution.painPoints.map((item, index) => (
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
              <p className="section-kicker text-brand-grey">{t.seo.frankfurt.kicker}</p>
              <h2 id="content-title" className="section-title">
                {t.seo.frankfurt.title}
              </h2>
            </Reveal>

            <div className="seo-article-grid">
              <article className="seo-article">
                <div className="seo-answer-box">
                  <p className="section-kicker text-brand-grey">{t.seo.frankfurt.shortAnswer.kicker}</p>
                  <h3>{t.seo.frankfurt.shortAnswer.title}</h3>
                  <p>{t.seo.frankfurt.shortAnswer.text}</p>
                </div>
                <PresentationMarker
                  copy={t.seo.markers.shortAnswer}
                  number="04"
                  pointer="top"
                  relevanceLabel={relevanceLabel}
                />
                {t.seo.frankfurt.sections.map((section) => (
                  <section key={section.title}>
                    <p className="section-kicker text-brand-grey">{section.kicker}</p>
                    <h3>{section.title}</h3>
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </section>
                ))}
              </article>

              <aside className="seo-aside" aria-label={t.seo.frankfurt.title}>
                <FrankfurtMarketVisual />
                {t.seo.frankfurt.aside.cards.map((card, index) => {
                  const icons = [MapPin, ShieldCheck, Building2]
                  const Icon = icons[index] ?? MapPin
                  return (
                    <div key={card.title} className="seo-aside-card">
                      <Icon className="h-6 w-6 text-brand-yellow" aria-hidden="true" />
                      <h3>{card.title}</h3>
                      <p>{card.text}</p>
                    </div>
                  )
                })}
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
                <p className="section-kicker text-brand-grey">{t.seo.questions.kicker}</p>
                <h2 id="question-cluster-title" className="section-title">
                  {t.seo.questions.title}
                </h2>
                <PresentationMarker
                  copy={t.seo.markers.questions}
                  number="05"
                  pointer="left"
                  relevanceLabel={relevanceLabel}
                />
              </Reveal>
            </div>
            <div className="question-grid">
              {t.seo.questions.clusters.map((cluster) => (
                <Reveal key={cluster.title}>
                  <article className="question-card">
                    <h3>{cluster.title}</h3>
                    <div className="question-accordion">
                      {cluster.qa.map((item) => (
                        <details key={item.question} className="question-accordion-item">
                          <summary>
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-yellow" aria-hidden="true" />
                            <span>{item.question}</span>
                            <span className="question-accordion-toggle" aria-hidden="true">+</span>
                          </summary>
                          <p>{item.answer}</p>
                        </details>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="feature-section" aria-labelledby="map-title">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-8">
            <Reveal>
              <p className="section-kicker text-brand-yellow">{t.seo.map.kicker}</p>
              <h2 id="map-title" className="section-title text-white">
                {t.seo.map.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/[0.80]">{t.seo.map.body}</p>
              <ul className="mt-7 grid gap-3 text-base leading-7 text-white/[0.84]">
                {t.seo.map.checklist.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-yellow" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <PresentationMarker
                copy={t.seo.markers.map}
                number="06"
                tone="dark"
                pointer="right"
                relevanceLabel={relevanceLabel}
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
                <p className="section-kicker text-brand-grey">{t.seo.approach.kicker}</p>
                <h2 id="approach-title" className="section-title">
                  {t.seo.approach.title}
                </h2>
                <p className="mt-5 text-lg leading-8 text-graphite">{t.seo.approach.body}</p>
              </Reveal>
            </div>
            <div className="process-grid">
              {t.seo.approach.steps.map((step, index) => (
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
                alt={t.seo.why.title}
                width="1000"
                height="813"
                loading="lazy"
              />
            </Reveal>
            <Reveal>
              <p className="section-kicker text-brand-grey">{t.seo.why.kicker}</p>
              <h2 id="why-title" className="section-title">
                {t.seo.why.title}
              </h2>
              <div className="benefit-stack">
                {t.seo.why.cards.map((card, index) => {
                  const Icon = seoWhyIcons[index] ?? seoWhyIcons[0]
                  return (
                    <article key={card.title} className="benefit-card">
                      <Icon className="h-6 w-6 text-brand-yellow" aria-hidden="true" />
                      <div>
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                      </div>
                    </article>
                  )
                })}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="faq" className="section bg-white" aria-labelledby="faq-title">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="seo-split">
              <Reveal className="seo-split-copy">
                <p className="section-kicker text-brand-grey">{t.seo.faq.kicker}</p>
                <h2 id="faq-title" className="section-title">
                  {t.seo.faq.title}
                </h2>
                <PresentationMarker
                  copy={t.seo.markers.faq}
                  number="07"
                  pointer="right"
                  relevanceLabel={relevanceLabel}
                />
              </Reveal>
              <Reveal>
                <FaqSearchVisual />
              </Reveal>
            </div>
            <div className="faq-list">
              {t.seo.faq.items.map((item) => (
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
              <p className="section-kicker text-brand-yellow">{t.seo.contact.kicker}</p>
              <h2 id="contact-title" className="section-title text-white">
                {t.seo.contact.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-white/[0.78]">{t.seo.contact.body}</p>
              <PresentationMarker
                copy={t.seo.markers.contact}
                number="08"
                tone="dark"
                pointer="right"
                relevanceLabel={relevanceLabel}
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
              <p className="section-kicker text-ink">{t.seo.finalCta.kicker}</p>
              <h2 id="final-title">{t.seo.finalCta.title}</h2>
            </div>
            <a className="btn-dark" href="#kontakt">
              {t.seo.finalCta.cta}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer" aria-label="Footer">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.85fr_1fr] lg:px-8">
          <div>
            <img className="h-10 w-auto" src={logo} alt="Pentadoc AG" width="177" height="48" loading="lazy" />
            <p className="mt-5 max-w-sm">{t.seo.footer.blurb}</p>
          </div>
          <div>
            <h2>{t.seo.footer.navHeading}</h2>
            <ul>
              {t.seo.footer.navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>{t.seo.footer.focusHeading}</h2>
            <ul>
              {t.seo.footer.focusItems.map((item) => (
                <li key={item}>{item}</li>
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

      <StickyCTA />
    </div>
  )
}
