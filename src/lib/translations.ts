export type Lang = 'de' | 'en'

export type NavLink = { label: string; href: string }
export type Service = { title: string; text: string; result: string }
export type Signal = { title: string; text: string }
export type FiveD = { label: string; text: string }
export type ProcessStep = { title: string; text: string }
export type Benefit = { title: string; text: string }
export type ProofNote = { company: string; person: string; text: string }
export type Faq = { question: string; answer: string }
export type IntentCard = { label: string; title: string; text: string }
export type ReadinessCard = { label: string; text: string }
export type QuestionCluster = { title: string; qa: { question: string; answer: string }[] }
export type SeoSection = { kicker: string; title: string; body: string[] }

export type PresentationMarkerCopy = {
  eyebrow: string
  title: string
  subtitle: string
  relevance: string
  points: string[]
}

export type Translations = {
  pageTitle: string
  pageDescription: string
  seoPageTitle: string
  seoPageDescription: string
  nav: {
    languageLabel: string
    languages: Record<Lang, string>
    skipToContent: string
    aria: string
    openMenu: string
    closeMenu: string
    cta: string
    phoneLabel: string
    mobileSendRequest: string
    mobileCallDirect: string
    links: NavLink[]
  }
  hero: {
    kicker: string
    title: string
    titleLine1: string
    titleLine2: string
    lead: string
    primaryCta: string
    secondaryCta: string
    checklistLabel: string
    checklist: string[]
    metricsLabel: string
    pillarsLabel: string
    pillars: string[]
  }
  proofStats: { value: string; label: string }[]
  references: {
    label: string
    note: string
  }
  problem: {
    kicker: string
    title: string
    body: string
    signals: Signal[]
  }
  services: {
    kicker: string
    title: string
    items: Service[]
  }
  feature: {
    kicker: string
    title: string
    body: string
    checklist: string[]
    visualLabel: string
    pillars: { label: string; text: string }[]
  }
  model: {
    kicker: string
    title: string
    items: FiveD[]
  }
  proof: {
    kicker: string
    title: string
    body: string
    notes: ProofNote[]
    awardsKicker: string
    awardsBody: string
  }
  process: {
    kicker: string
    title: string
    body: string
    steps: ProcessStep[]
  }
  why: {
    kicker: string
    title: string
    benefits: Benefit[]
  }
  conversion: {
    kicker: string
    title: string
    points: { title: string; text: string }[]
  }
  contact: {
    kicker: string
    title: string
    body: string
  }
  contactForm: {
    aria: string
    ariaHero: string
    headerKicker: string
    headerTitle: string
    headerSubtitle: string
    heroKicker: string
    heroTitle: string
    heroSubtitle: string
    heroSubmit: string
    heroTrust: string
    nameLabel: string
    companyLabel: string
    emailLabel: string
    phoneLabel: string
    topicLabel: string
    topicPlaceholder: string
    messageLabel: string
    messagePlaceholder: string
    submit: string
    submitting: string
    honeypotLabel: string
    statusSuccess: string
    statusFallback: string
    statusError: string
    mailSubject: string
    topics: string[]
  }
  faq: {
    kicker: string
    title: string
    items: Faq[]
  }
  finalCta: {
    kicker: string
    title: string
    cta: string
  }
  footer: {
    blurb: string
    navHeading: string
    servicesHeading: string
    contactHeading: string
    imprint: string
    privacy: string
    copyright: string
    tagline: string
    navItems: NavLink[]
  }
  stickyCta: {
    headline: string
    sub: string
    call: string
    request: string
  }
  seo: {
    hero: {
      kicker: string
      title: string
      lead: string
      primaryCta: string
      secondaryCta: string
      checks: string[]
      panel: {
        topLabel: string
        topValue: string
        metrics: { label: string; value: string }[]
        body: string
      }
    }
    intent: {
      kicker: string
      title: string
      cards: IntentCard[]
    }
    solution: {
      kicker: string
      title: string
      body: string
      painPoints: Signal[]
      visualSrLabel: string
    }
    frankfurt: {
      kicker: string
      title: string
      shortAnswer: {
        kicker: string
        title: string
        text: string
      }
      sections: SeoSection[]
      aside: {
        cards: { title: string; text: string }[]
      }
    }
    questions: {
      kicker: string
      title: string
      clusters: QuestionCluster[]
    }
    map: {
      kicker: string
      title: string
      body: string
      checklist: string[]
      center: { eyebrow: string; title: string }
      readiness: ReadinessCard[]
    }
    approach: {
      kicker: string
      title: string
      body: string
      steps: ProcessStep[]
    }
    why: {
      kicker: string
      title: string
      cards: Benefit[]
    }
    faq: {
      kicker: string
      title: string
      items: Faq[]
    }
    contact: {
      kicker: string
      title: string
      body: string
    }
    finalCta: {
      kicker: string
      title: string
      cta: string
    }
    footer: {
      blurb: string
      navHeading: string
      navItems: NavLink[]
      focusHeading: string
      focusItems: string[]
    }
    markers: {
      hero: PresentationMarkerCopy
      intent: PresentationMarkerCopy
      solution: PresentationMarkerCopy
      shortAnswer: PresentationMarkerCopy
      questions: PresentationMarkerCopy
      map: PresentationMarkerCopy
      faq: PresentationMarkerCopy
      contact: PresentationMarkerCopy
    }
    visuals: {
      intent: { eyebrow: string; title: string; chips: string[] }
      channel: { eyebrow: string; title: string; chips: string[] }
      frankfurt: { title: string; body: string }
      questions: { eyebrow: string; title: string }
      roadmap: { eyebrow: string; title: string }
      faq: { eyebrow: string; title: string; chipPrefix: string }
    }
  }
}

const de: Translations = {
  pageTitle: 'Pentadoc AG | Digitale Transformation für Versicherer',
  pageDescription:
    'Pentadoc AG berät Versicherer und Krankenkassen zu Input Management, Anliegenmanagement, CCM, IT-Strategie, KI-Prototyping und Migration.',
  seoPageTitle: 'Omnichannel Kundenservice Frankfurt | Pentadoc AG',
  seoPageDescription:
    'Omnichannel Kundenservice Beratung in Frankfurt für Versicherer und Krankenkassen: Kanäle, Anliegen, Prozesse, CCM, Input Management und IT-Roadmap sauber verbinden.',
  nav: {
    languageLabel: 'Sprache',
    languages: { de: 'Deutsch', en: 'English' },
    skipToContent: 'Zum Inhalt springen',
    aria: 'Hauptnavigation',
    openMenu: 'Navigation öffnen',
    closeMenu: 'Navigation schließen',
    cta: 'Erstgespräch',
    phoneLabel: '+49 931 2607911-0',
    mobileSendRequest: 'Anfrage senden',
    mobileCallDirect: 'Direkt anrufen',
    links: [
      { label: 'Leistungen', href: '#leistungen' },
      { label: '5-D Modell', href: '#modell' },
      { label: 'Referenzen', href: '#referenzen' },
      { label: 'Vorgehen', href: '#vorgehen' },
      { label: 'Kontakt', href: '#kontakt' },
    ],
  },
  hero: {
    kicker: 'Pentadoc AG',
    title: 'Digitale Transformation für Versicherer, die im Alltag funktioniert.',
    titleLine1: 'Komplexe Transformation',
    titleLine2: 'Klare Umsetzung.',
    lead: 'Herstellerunabhängige Beratung für Versicherer und Krankenkassen — Input Management, Anliegenmanagement, CCM, IT-Strategie, KI-Prototyping und Migration.',
    primaryCta: 'Erstgespräch anfragen',
    secondaryCta: 'Leistungen ansehen',
    checklistLabel: 'Stärken von Pentadoc',
    checklist: [
      'Herstellerunabhängige Beratung',
      'Spezialisiert auf Versicherungen und Krankenkassen',
      'Von Zielbild bis Umsetzung und Migration',
      'Erstes Gespräch ohne Umwege',
    ],
    metricsLabel: 'Zahlen, Daten und Fakten',
    pillarsLabel: 'Leistungsfokus',
    pillars: ['Anliegen', 'Prozesse', 'Migration'],
  },
  proofStats: [
    { value: '25+', label: 'Jahre am Markt' },
    { value: '850+', label: 'umgesetzte Projekte' },
    { value: '120+', label: 'namhafte Kunden' },
    { value: '2000+', label: 'Jahre kombinierte Erfahrung' },
  ],
  references: {
    label: 'Ausgewählte Referenzen',
    note: 'Öffentliche Referenzen und Kundenlogos auf pentadoc.com',
  },
  problem: {
    kicker: 'Warum jetzt',
    title: 'Digitalisierung scheitert selten an Ideen. Sie scheitert an unverbundenen Entscheidungen.',
    body: 'Versicherer und Krankenkassen müssen Eingangskanäle, Kundenerwartung, historisch gewachsene IT, Prozesslogik und Veränderung im Betrieb gleichzeitig beherrschen. Pentadoc bringt diese Ebenen in ein entscheidbares Zielbild.',
    signals: [
      {
        title: 'Eingänge werden schneller, aber nicht klarer',
        text: 'Briefe, E-Mails, Portale und interne Übergaben treffen gleichzeitig ein. Ohne gemeinsame Steuerung entstehen Liegezeiten, Rückfragen und unklare Prioritäten.',
      },
      {
        title: 'Automatisierung stockt an Fachlogik',
        text: 'Viele Programme starten technisch. Die Wirkung entsteht aber erst, wenn Anliegen, Prozesse, Rollen und Kundenerwartung sauber zusammengeführt werden.',
      },
      {
        title: 'Migrationen brauchen mehr als Systemwechsel',
        text: 'Datenqualität, Betriebsrisiken, Abhängigkeiten und Akzeptanz entscheiden darüber, ob neue Lösungen im Alltag wirklich tragen.',
      },
    ],
  },
  services: {
    kicker: 'Beratungsleistungen',
    title: 'Eine Beratungskette für Eingang, Bearbeitung, Kommunikation und Veränderung.',
    items: [
      {
        title: 'Anliegenmanagement',
        text: 'Kundenanliegen vom Eingang bis zur Bearbeitung strukturiert erfassen, priorisieren und steuerbar machen.',
        result: 'Mehr Transparenz, kürzere Liegezeiten und klare Verantwortung.',
      },
      {
        title: 'Input Management',
        text: 'Post, Dokumente, E-Mail und digitale Kanäle zu einem belastbaren Zielbild und umsetzbaren Betriebsmodell verbinden.',
        result: 'Eingänge werden schneller nutzbar und weniger abhängig von Medienbrüchen.',
      },
      {
        title: 'Customer Communication Management',
        text: 'Kundendialoge, Dokumentenerstellung und Ausspielung konsistent über alle relevanten Kanäle aufstellen.',
        result: 'Kommunikation wird verständlicher, einheitlicher und besser integrierbar.',
      },
      {
        title: 'E2E-Prozessautomation',
        text: 'Abläufe über Bereichsgrenzen hinweg analysieren und Automatisierung dort priorisieren, wo sie messbar entlastet.',
        result: 'Programme zahlen auf den Gesamtprozess ein, nicht nur auf einzelne Teilschritte.',
      },
      {
        title: 'IT-Strategie Versicherung',
        text: 'Zielbilder, Sourcing-Fragen, Architekturentscheidungen und Transformationspfade für Versicherer und Krankenkassen klären.',
        result: 'Fachbereich und IT entscheiden mit demselben Bild vor Augen.',
      },
      {
        title: 'KI-Prototyping',
        text: 'Konkrete KI-Anwendungsfälle in dokumenten- und prozessnahen Abläufen schnell, kontrolliert und fachlich sauber testen.',
        result: 'Potenziale werden sichtbar, bevor große Programme gestartet werden.',
      },
      {
        title: 'Lösungsmigration',
        text: 'Systemablösen, Datenbestände und Kommunikationslösungen so planen, dass Risiken früh sichtbar werden.',
        result: 'Migrationen laufen mit klarer Roadmap, Abhängigkeiten und Betriebslogik.',
      },
      {
        title: 'Organisationelle Transformation',
        text: 'Strukturen, Rollen und Arbeitsweisen so begleiten, dass digitale Veränderung im Unternehmen ankommt.',
        result: 'Neue Lösungen werden nicht nur eingeführt, sondern genutzt.',
      },
    ],
  },
  feature: {
    kicker: 'Signatur-Thema',
    title: 'Anliegenmanagement macht Kundenerwartung, Fachprozess und IT steuerbar.',
    body: 'Moderne Anliegen entstehen nicht nur in einem Postkorb. Sie laufen über Portale, Dokumente, E-Mail, Telefon, Fachsysteme und interne Übergaben. Entscheidend ist, diese Signale richtig zu verstehen und in belastbare Bearbeitung zu bringen.',
    checklist: [
      'Zielbild für Eingang, Bearbeitung und Kommunikation',
      'Priorisierung nach Fachnutzen und Umsetzungsrisiko',
      'Roadmap für Systeme, Prozesse, Rollen und Migration',
      'Entscheidungsgrundlage für Vorstand, Fachbereich und IT',
    ],
    visualLabel: 'Anliegenmanagement Ablauf',
    pillars: [
      { label: 'Klarheit', text: 'Was ist fachlich nötig?' },
      { label: 'Machbarkeit', text: 'Was trägt die IT-Landschaft?' },
      { label: 'Wirkung', text: 'Was verbessert Kundenerlebnis und Betrieb?' },
    ],
  },
  model: {
    kicker: '5-D Modell',
    title: 'Strategie, Technologie, Prozesse, Kultur und Organisation in einem Bild.',
    items: [
      { label: 'Strategie', text: 'Realistisches Zielbild, belastbare Prioritäten und klare Entscheidungsgrundlagen.' },
      { label: 'Technologie', text: 'Unabhängige Bewertung von Systemlandschaften, Architektur und Lösungsoptionen.' },
      { label: 'Prozesse', text: 'End-to-end Sicht auf Kundenanliegen, Eingangskanäle und operative Bearbeitung.' },
      { label: 'Kultur', text: 'Akzeptanz, Befähigung und Sicherheit für Teams, die Veränderung tragen müssen.' },
      { label: 'Organisation', text: 'Rollen, Governance und Strukturen für stabile Umsetzung im Tagesgeschäft.' },
    ],
  },
  proof: {
    kicker: 'Vertrauen',
    title: 'Substanz aus Projekten, Referenzen und öffentlicher Anerkennung.',
    body: 'Pentadoc nennt öffentlich über 25 Jahre am Markt, mehr als 850 Projekte und über 120 namhafte Kunden. Die Referenzen zeigen besonders viel Nähe zu Versicherung, Gesundheit, Kommunikation und dokumentennahen Prozessen.',
    notes: [
      {
        company: 'SIGNAL IDUNA',
        person: 'Jens Clasen, Bereichsleiter',
        text: 'Die öffentliche Referenz hebt Pentadoc als Partner für Input-Management-Erneuerung, Marktkenntnis und passgenaue Konzeption hervor.',
      },
      {
        company: 'AOK Baden-Württemberg',
        person: 'Melanie Dollmann-Guldenschuh, IT-Lösungsdesignerin',
        text: 'Im PoC-Kontext werden Fachkompetenz, Struktur und lösungsorientierte Beratung von Pentadoc betont.',
      },
      {
        company: 'IKK Südwest',
        person: 'Jürgen Becker, Geschäftsbereichsleiter',
        text: 'Die Referenz beschreibt spürbare Verbesserungen durch die mehrdimensionale Betrachtung der Pentadoc-Methode.',
      },
    ],
    awardsKicker: 'Auszeichnungen',
    awardsBody: 'Auf pentadoc.com öffentlich gezeigte Arbeitgeber- und Unternehmensauszeichnungen.',
  },
  process: {
    kicker: 'Vorgehen',
    title: 'Erst Klarheit schaffen, dann Veränderung sauber aufsetzen.',
    body: 'Das Ziel ist nicht mehr Folienlogik, sondern eine Umsetzungsbasis, mit der Fachbereich, IT und Führung gemeinsam entscheiden können.',
    steps: [
      { title: 'Ausgangslage verdichten', text: 'Ziele, Kanäle, Systeme, Prozessbrüche und laufende Initiativen werden schnell sortiert.' },
      { title: 'Zielbild und Nutzenlogik klären', text: 'Pentadoc übersetzt Anforderungen in ein priorisiertes Bild aus fachlicher, technischer und organisatorischer Sicht.' },
      { title: 'Roadmap entscheidbar machen', text: 'Migrationspfade, Auswahlfragen, Risiken, Rollen und Quick Wins werden so konkret, dass Entscheidungen möglich sind.' },
      { title: 'Umsetzung verankern', text: 'Teams werden durch Einführung, Steuerung und Stabilisierung begleitet, ohne den laufenden Betrieb auszublenden.' },
    ],
  },
  why: {
    kicker: 'Warum Pentadoc',
    title: 'Eine spezialisierte Beratung für Programme, die im Betrieb bestehen müssen.',
    benefits: [
      { title: 'Herstellerunabhängig', text: 'Die Beratung ist nicht an einzelne Produkte gebunden und kann dadurch sauber zwischen Fachnutzen, IT-Realität und Umsetzbarkeit abwägen.' },
      { title: 'Versicherungsnah', text: 'Der öffentliche Auftritt zeigt einen klaren Schwerpunkt auf Versicherer, Krankenkassen und Organisationen mit komplexen Kundenprozessen.' },
      { title: 'Von Strategie bis Migration', text: 'Pentadoc verbindet Zielbild, Prozessdesign, IT-Strategie, Organisation und konkrete Umstellung in einem nachvollziehbaren Vorgehen.' },
    ],
  },
  conversion: {
    kicker: 'Kontaktweg',
    title: 'Wenig Reibung für den ersten Schritt. Genug Kontext für ein gutes Gespräch.',
    points: [
      { title: '30 Sekunden', text: 'Name, E-Mail, Thema und ein kurzer Kontext reichen für den Start.' },
      { title: 'Fachlich vorsortiert', text: 'Die Anfrage enthält genug Kontext, damit das Gespräch direkt produktiv wird.' },
      { title: 'Direkter Rückweg', text: 'Das Formular sendet die Anfrage an das zuständige Projektpostfach.' },
    ],
  },
  contact: {
    kicker: 'Kontakt',
    title: 'Bringen Sie Klarheit in die nächste Transformationsentscheidung.',
    body: 'Teilen Sie kurz mit, welche Kanäle, Systeme oder Prozessfragen betroffen sind. Danach kann das Thema fachlich eingeordnet und der passende nächste Schritt geklärt werden.',
  },
  contactForm: {
    aria: 'Kontaktformular',
    ariaHero: 'Kontaktformular im Hero',
    headerKicker: 'Erstgespräch anfragen',
    headerTitle: 'In 30 Sekunden zur passenden Einordnung.',
    headerSubtitle: 'Kurz schildern, worum es geht. Die Anfrage wird direkt an das zuständige Projektpostfach gesendet.',
    heroKicker: 'Kostenloses Erstgespräch',
    heroTitle: 'Antwort innerhalb von 24 Stunden.',
    heroSubtitle: 'Kurz die Ausgangslage schildern. Wir melden uns mit einer ersten fachlichen Einschätzung — direkt, ohne Umwege.',
    heroSubmit: 'Anfrage senden',
    heroTrust: 'Kein Newsletter. Keine Datenweitergabe. Antwort meist binnen 24 Std.',
    nameLabel: 'Name',
    companyLabel: 'Unternehmen',
    emailLabel: 'E-Mail',
    phoneLabel: 'Telefon',
    topicLabel: 'Thema',
    topicPlaceholder: 'Bitte auswählen',
    messageLabel: 'Kurz zur Ausgangslage',
    messagePlaceholder: 'Welche Kanäle, Systeme oder Prozesse sollen geklärt werden?',
    submit: 'Anfrage senden',
    submitting: 'Wird gesendet',
    honeypotLabel: 'Dieses Feld leer lassen',
    statusSuccess: 'Danke. Ihre Anfrage wurde gesendet. Wir melden uns zeitnah.',
    statusFallback: 'Das Formular konnte nicht direkt senden. Ihr E-Mail-Programm wurde als Ausweichweg geöffnet.',
    statusError: 'Die Anfrage konnte gerade nicht gesendet werden. Bitte versuchen Sie es erneut oder nutzen Sie die E-Mail-Adresse im Footer.',
    mailSubject: 'Neue Pentadoc Homepage Anfrage',
    topics: [
      'Omnichannel Kundenservice',
      'Anliegenmanagement',
      'Input Management',
      'Customer Communication Management',
      'IT-Strategie Versicherung',
      'KI-Prototyping',
      'Lösungsmigration',
      'Organisationelle Transformation',
      'Erstgespräch allgemein',
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: 'Häufige Fragen vor dem ersten Austausch.',
    items: [
      { question: 'Für wen ist Pentadoc besonders relevant?', answer: 'Für Versicherer, Krankenkassen und Organisationen mit hohem Volumen an Kundenanliegen, Dokumenten, Eingangskanälen und komplexen Fachprozessen.' },
      { question: 'Kann Pentadoc auch einzelne Themen prüfen?', answer: 'Ja. Themen wie KI-Prototyping, Lösungsmigration, Input Management oder IT-Strategie können einzeln betrachtet oder in ein größeres Transformationsprogramm eingebettet werden.' },
      { question: 'Was sollte in der Anfrage stehen?', answer: 'Hilfreich sind Ausgangslage, betroffene Kanäle oder Systeme, gewünschtes Ziel, grober Zeitrahmen und die Frage, die im ersten Gespräch geklärt werden soll.' },
      { question: 'Wer sollte beim ersten Termin dabei sein?', answer: 'Meist reichen Fachbereich, IT oder Prozessmanagement. Bei frühen Orientierungen kann auch eine kleine Runde genügen, um das Thema sauber einzugrenzen.' },
      { question: 'Ist Pentadoc an bestimmte Softwareanbieter gebunden?', answer: 'Der öffentliche Auftritt positioniert Pentadoc als herstellerunabhängige Beratung. Entscheidungen können daher stärker am Zielbild und an der Umsetzbarkeit ausgerichtet werden.' },
      { question: 'Wo sitzt Pentadoc?', answer: 'Pentadoc AG sitzt in der Beethovenstraße 1a, 97080 Würzburg, Deutschland, und berät überregional.' },
    ],
  },
  finalCta: {
    kicker: 'Nächster Schritt',
    title: 'Aus vielen offenen Fragen wird ein entscheidbarer Transformationspfad.',
    cta: 'Anfrage starten',
  },
  footer: {
    blurb: 'Herstellerunabhängige Unternehmensberatung für digitale Transformation, Input Management, Anliegenmanagement, CCM, IT-Strategie, KI-Prototyping und Migration.',
    navHeading: 'Navigation',
    servicesHeading: 'Leistungen',
    contactHeading: 'Kontakt',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    copyright: '© 2026 Pentadoc AG.',
    tagline: 'Digitale Transformation für Versicherer, Krankenkassen und Finanzdienstleister.',
    navItems: [
      { label: 'Leistungen', href: '#leistungen' },
      { label: '5-D Modell', href: '#modell' },
      { label: 'Referenzen', href: '#referenzen' },
      { label: 'Vorgehen', href: '#vorgehen' },
      { label: 'Kontakt', href: '#kontakt' },
    ],
  },
  stickyCta: {
    headline: 'Bereit für eine klare Transformationsentscheidung?',
    sub: 'Kurze Anfrage senden oder direkt anrufen.',
    call: 'Anrufen',
    request: 'Anfrage senden',
  },
  seo: {
    hero: {
      kicker: 'Omnichannel Kundenservice Frankfurt',
      title: 'Omnichannel Kundenservice Frankfurt für Versicherer und Krankenkassen.',
      lead: 'Herstellerunabhängige Beratung für Teams, die Kanäle, Anliegen, Dokumente, Kommunikation und IT im Rhein-Main-Gebiet zu einem steuerbaren Kundenerlebnis verbinden wollen.',
      primaryCta: 'Omnichannel Erstgespräch',
      secondaryCta: 'Lösung ansehen',
      checks: [
        'Input Management, Anliegenmanagement und CCM zusammen denken',
        'Speziell für Versicherer, Krankenkassen und Finanzdienstleister',
        'Frankfurt und Rhein-Main als regionale Service- und Entscheidungsräume',
      ],
      panel: {
        topLabel: 'Worum es geht',
        topValue: 'Omnichannel Kundenservice in Frankfurt',
        metrics: [
          { label: 'Service', value: 'Omnichannel' },
          { label: 'Ort', value: 'Frankfurt' },
          { label: 'Zielgruppe', value: 'Versicherung' },
        ],
        body: 'Ein erstes Gespräch klärt die wichtigste Ausgangsfrage zuerst und ordnet danach Entscheidungs-, Prozess- und IT-Themen für einen realistischen Omnichannel-Fahrplan.',
      },
    },
    intent: {
      kicker: 'Klärungsbedarf',
      title: 'Was vor einem Omnichannel-Projekt wirklich geklärt werden muss.',
      cards: [
        { label: 'Ausgangslage', title: 'Omnichannel Kundenservice Frankfurt', text: 'Viele Serviceorganisationen wollen Kanäle, Anliegen, Dokumente, Kommunikation und IT so verbinden, dass Kunden nicht mehrfach von vorne beginnen müssen.' },
        { label: 'Direkte Antwort', title: 'Definition zuerst, Details danach', text: 'Der Einstieg erklärt sofort, was Omnichannel Kundenservice Beratung bedeutet und für wen sie relevant ist. Danach folgen Standortbezug, Vorgehen, Fachfragen und Kontaktweg.' },
        { label: 'Nächster Schritt', title: 'Vom Problem zur Anfrage', text: 'Die Seite führt von typischen Servicebrüchen über ein klares Zielbild zu einem Erstgespräch, in dem Prioritäten und nächste Entscheidungen sauber eingegrenzt werden.' },
      ],
    },
    solution: {
      kicker: 'Ausgangslage',
      title: 'Omnichannel beginnt nicht beim Kanal. Es beginnt beim Kundenanliegen.',
      body: 'In Versicherungen und Krankenkassen treffen Kundenkontakte über viele Wege ein: App, Portal, Telefon, Brief, E-Mail, Maklerkontakt und interne Übergabe. Ein Frankfurter Omnichannel-Programm muss diese Signale so ordnen, dass Service, Fachbereich und IT mit derselben Wahrheit arbeiten.',
      visualSrLabel: 'Omnichannel System aus Kanälen und Anliegen',
      painPoints: [
        { title: 'Viele Kanäle, aber kein gemeinsames Bild', text: 'Ein Kunde ruft an, sendet danach Unterlagen per E-Mail und erhält später ein Schreiben. Ohne gemeinsame Sicht entstehen doppelte Arbeit, Rückfragen und widersprüchliche Auskünfte.' },
        { title: 'Automatisierung greift zu kurz', text: 'OCR, Workflow und Portale helfen nur dann, wenn Anliegenlogik, Fachregeln und Bearbeitung sauber zusammenspielen. Einzelne Tools ersetzen kein tragfähiges Betriebsmodell.' },
        { title: 'CCM und Input Management laufen getrennt', text: 'Eingehende Dokumente und ausgehende Kommunikation werden häufig separat optimiert. Der Kundendialog bleibt dadurch brüchig, obwohl beide Seiten fachlich zusammengehören.' },
      ],
    },
    frankfurt: {
      kicker: 'Frankfurt und Rhein-Main',
      title: 'Antworten, die Entscheider vor einem Omnichannel-Projekt brauchen.',
      shortAnswer: {
        kicker: 'Kurzantwort',
        title: 'Was ist Omnichannel Kundenservice Beratung in Frankfurt?',
        text: 'Omnichannel Kundenservice Beratung in Frankfurt hilft Versicherern, Krankenkassen und Finanzdienstleistern dabei, Telefon, E-Mail, Portal, App, Dokumente und ausgehende Kommunikation zu einem einheitlichen Serviceprozess zu verbinden. Entscheidend sind nicht möglichst viele Kanäle, sondern ein gemeinsames Bild vom Kundenanliegen, klare Zuständigkeiten, anschlussfähige IT und eine realistische Roadmap.',
      },
      sections: [
        {
          kicker: 'Ausgangslage',
          title: 'Was Unternehmen vor einem Omnichannel-Projekt klären müssen',
          body: [
            'Versicherer, Krankenkassen und Finanzdienstleister suchen selten nur eine neue Software. Meist steht dahinter eine konkrete Frage im Betrieb: Wie lassen sich Anruf, Brief, E-Mail, Portal, Chat, App und ausgehende Kommunikation so verbinden, dass Kunden nicht jedes Mal von vorne anfangen müssen? Im Rhein-Main-Gebiet ist diese Frage besonders wichtig, weil viele Produkte erklärungsbedürftig sind, Unterlagen rechtssicher verarbeitet werden müssen und Serviceprozesse häufig über mehrere Fachbereiche laufen.',
            'Ein guter Omnichannel-Ansatz beginnt deshalb nicht beim Kanal. Er beginnt beim Anliegen. Welche Information kommt an? Was will die versicherte Person erreichen? Welche Nachweise fehlen? Welche Antwort ist fachlich, technisch und regulatorisch möglich? Erst wenn diese Fragen sauber beantwortet werden, können Portale, Contact Center, Dokumentenprozesse, Customer Communication Management und Workflow-Automation sinnvoll zusammenspielen.',
            'So entsteht ein belastbares Gespräch über Servicequalität, Bearbeitungslogik, digitale Eingangskanäle und Transformationsprioritäten.',
          ],
        },
        {
          kicker: 'Frankfurt',
          title: 'Warum der Standort Frankfurt ein starkes Thema für Omnichannel ist',
          body: [
            'Frankfurt ist ein dichter Markt für Versicherungen, Banken, Dienstleister, Beratung, IT und regulierte Geschäftsmodelle. Viele Teams arbeiten mit hohen Fallzahlen, verteilten Zuständigkeiten und gewachsenen Systemlandschaften. Genau hier entsteht der typische Omnichannel-Druck: Kunden erwarten schnelle Rückmeldung, der Betrieb muss wirtschaftlich bleiben und die IT darf nicht durch unklare Anforderungen überlastet werden.',
            'Für Organisationen in Frankfurt und Rhein-Main zählt eine Beratung, die die Anforderungen eines anspruchsvollen Finanz- und Versicherungsstandorts versteht: hohe Erwartungen an Servicequalität, saubere Dokumentation, nachvollziehbare Entscheidungen und stabile Umsetzung in bestehenden Strukturen.',
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
            'Für Unternehmen in Frankfurt bedeutet das: Omnichannel ist kein reines Kanalprojekt, sondern eine Entscheidung darüber, wie Kundenerwartung, regulatorische Sorgfalt und gewachsene Systemlandschaften zusammengebracht werden.',
          ],
        },
      ],
      aside: {
        cards: [
          { title: 'Frankfurt und Rhein-Main', text: 'Beratung für Unternehmen, die Kundenservice, Dokumente, Kommunikation und IT in einem anspruchsvollen Finanz- und Versicherungsumfeld verbinden wollen.' },
          { title: 'Versicherungsnah', text: 'Fokus auf Kundenanliegen, Dokumente, Kommunikation, Prozesslogik und Migration statt isolierter Kanaloptimierung.' },
          { title: 'Überregional beraten', text: 'Pentadoc sitzt in Würzburg und begleitet Organisationen in Frankfurt, Rhein-Main und darüber hinaus.' },
        ],
      },
    },
    questions: {
      kicker: 'Entscheiderfragen',
      title: 'Strategie, Betrieb und Technik werden in klaren Entscheiderfragen geordnet.',
      clusters: [
        {
          title: 'Strategische Fragen',
          qa: [
            { question: 'Welche Rolle soll Omnichannel im Kundenservice-Zielbild spielen?', answer: 'Es ist die Steuerungsebene — jeder Kanal zahlt auf eine gemeinsame Anliegenlogik ein. Ohne sie entstehen nur parallele Postkörbe, kein echtes Omnichannel.' },
            { question: 'Welche Kanäle sind für Frankfurt und Rhein-Main geschäftlich wirklich relevant?', answer: 'Telefon, Maklerkontakt, E-Mail und Portal dominieren weiterhin; App und Chat wachsen am schnellsten. Entscheidend ist nicht das Hinzufügen, sondern welche Kanäle für welche Kundengruppe führen müssen.' },
            { question: 'Welche Entscheidungen brauchen Vorstand, Fachbereich und IT zuerst?', answer: 'Drei: welche Kanäle führen, welche Anliegen end-to-end automatisiert werden und welche Altsysteme ersetzt statt nur angebunden werden. Sind diese geklärt, ordnet sich der Rest der Roadmap.' },
          ],
        },
        {
          title: 'Operative Fragen',
          qa: [
            { question: 'Welche Anliegen bleiben heute zwischen Telefon, Portal, E-Mail und Dokumenten hängen?', answer: 'Typisch sind Schadenrückfragen, fehlende Unterlagen, Vertragsänderungen und Beschwerden — alles, was ein Hin und Her über mehrere Kontaktpunkte auslöst.' },
            { question: 'Wo entstehen Rückfragen, Liegezeiten oder doppelte Bearbeitung?', answer: 'An den Nahtstellen: zwischen Front- und Backoffice, zwischen OCR und Anliegenlogik, und zwischen Ausgangspost und Kundenakte.' },
            { question: 'Welche Informationen brauchen Mitarbeitende beim ersten Kontakt?', answer: 'Kundenidentität, offene Anliegen, letzte Kontaktinfo, aktuelle Dokumente und die nächste erlaubte Aktion. Fehlt davon etwas auf einem Bildschirm, startet jedes Gespräch bei null.' },
          ],
        },
        {
          title: 'Technische Fragen',
          qa: [
            { question: 'Welche Systeme müssen Kundendaten, Dokumente und Statusinformationen teilen?', answer: 'Mindestens: CRM oder Bestandssystem, Dokumenten- und Input Management, CCM, Kontaktcenter-Plattform und Anliegenmanagement. Status und IDs müssen über alle Systeme hinweg stimmen.' },
            { question: 'Welche Rolle spielen Input Management, CCM und Workflow-Automation?', answer: 'Input Management klassifiziert das Eingehende, CCM erstellt das Ausgehende, Workflow-Automation steuert den Vorgang dazwischen. Echtes Omnichannel braucht alle drei mit demselben Datenmodell.' },
            { question: 'Welche Migrationen oder Schnittstellen bestimmen die Roadmap?', answer: 'Meist die Migration des Kernsystems, der Wechsel der Dokumenten- bzw. Input-Plattform und die Einführung eines Event-Bus oder einer Anliegen-API. Sie geben das Tempo für alles Weitere vor.' },
          ],
        },
      ],
    },
    map: {
      kicker: 'Zielbild',
      title: 'Ein Omnichannel Zielbild verbindet Eingang, Anliegen, Kommunikation und Betrieb.',
      body: 'Der Unterschied zwischen mehreren Kanälen und echtem Omnichannel liegt in der Steuerung. Ein Kanal darf nicht nur erreichbar sein. Er muss in denselben Prozess, dieselbe Informationslage und dieselbe Kommunikationslogik einzahlen.',
      checklist: [
        'Kundenkontext über Kontaktpunkte hinweg sichtbar machen',
        'Dokumente und Nachrichten fachlich mit dem Anliegen verbinden',
        'Roadmap für Systeme, Rollen, Migration und Steuerung ableiten',
      ],
      center: { eyebrow: 'Frankfurt', title: 'Omnichannel Kundenservice' },
      readiness: [
        { label: 'Eingänge', text: 'Post, E-Mail, Portal, Telefon und App werden als ein steuerbarer Eingang betrachtet.' },
        { label: 'Anliegen', text: 'Kundenanliegen werden erkannt, priorisiert und an die richtige Bearbeitung übergeben.' },
        { label: 'Kommunikation', text: 'Antworten, Dokumente und Statusmeldungen folgen einer konsistenten Logik.' },
        { label: 'Betrieb', text: 'Prozesse, Rollen, Systeme und Kennzahlen werden im Alltag handhabbar.' },
      ],
    },
    approach: {
      kicker: 'Vorgehen',
      title: 'Vom ersten Klärungsbedarf zur entscheidbaren Omnichannel Roadmap.',
      body: 'Die Roadmap zeigt, wie aus einem ersten Klärungsbedarf ein konkreter Beratungsfahrplan mit Prioritäten, Abhängigkeiten und nächsten Umsetzungsschritten wird.',
      steps: [
        { title: 'Frankfurter Ausgangslage sortieren', text: 'Welche Kundengruppen, Eingangskanäle, Fachprozesse, Standorte, Dienstleister und Systeme prägen den heutigen Kundenservice?' },
        { title: 'Zielbild für Omnichannel entwickeln', text: 'Welche Kanäle sollen führen, welche Informationen müssen sofort sichtbar sein und welche Entscheidungen brauchen Fachbereich, IT und Management?' },
        { title: 'Roadmap und Architektur klären', text: 'Welche Schritte bringen schnell Wirkung, welche Migrationen sind kritisch und welche Abhängigkeiten müssen vor einer Ausschreibung entschieden werden?' },
        { title: 'Umsetzung steuerbar machen', text: 'Wie werden Rollen, KPIs, Betriebsprozesse und Kommunikation so verankert, dass Omnichannel nicht nur als Konzept, sondern im Tagesgeschäft funktioniert?' },
      ],
    },
    why: {
      kicker: 'Warum Pentadoc',
      title: 'Herstellerunabhängig, versicherungsnah und stark in dokumentennahen Prozessen.',
      cards: [
        { title: 'Zielbild statt Tool-Liste', text: 'Der erste Mehrwert liegt in klaren Entscheidungen: Welche Kanäle, Anliegen, Dokumente, Systeme und Rollen müssen zusammenspielen?' },
        { title: 'IT-Strategie und Migration', text: 'Omnichannel wird mit Architektur, Daten, Schnittstellen und Migrationspfaden verbunden, damit die Roadmap im Betrieb realistisch bleibt.' },
        { title: 'Von Frankfurt aus anschlussfähig', text: 'Pentadoc begleitet Organisationen im Frankfurter Markt und bleibt fachlich auf überregionale Versicherungs- und Krankenkassenprozesse ausgerichtet.' },
      ],
    },
    faq: {
      kicker: 'FAQ',
      title: 'Häufige Fragen zu Omnichannel Kundenservice Frankfurt.',
      items: [
        { question: 'Ist Omnichannel Kundenservice in Frankfurt ein lokales oder ein fachliches Thema?', answer: 'Beides. Frankfurt steht für ein dichtes Finanz- und Versicherungsumfeld, die eigentliche Aufgabe liegt aber in der fachlichen Verbindung von Kanälen, Anliegen, Dokumenten, Kommunikation, IT und Betrieb.' },
        { question: 'Muss vor einer Omnichannel Beratung bereits eine Software ausgewählt sein?', answer: 'Nein. Häufig ist es besser, zuerst Zielbild, Anforderungen, Prozesse und Abhängigkeiten zu klären. Erst danach lässt sich beurteilen, welche Lösung oder Migration sinnvoll ist.' },
        { question: 'Für welche Organisationen passt diese Seite?', answer: 'Vor allem für Versicherer, Krankenkassen und Finanzdienstleister mit hohem Kontaktvolumen, vielen Dokumenten, mehreren Eingangskanälen und komplexer Bearbeitung.' },
        { question: 'Kann der Einstieg klein starten?', answer: 'Ja. Ein strukturierter Erstworkshop kann bereits zeigen, welche Kanäle, Anliegen und Systeme den größten Hebel haben und welche Entscheidungen als Nächstes nötig sind.' },
      ],
    },
    contact: {
      kicker: 'Kontakt',
      title: 'Klären Sie, ob Omnichannel in Frankfurt ein Kanal-, Prozess- oder Architekturthema ist.',
      body: 'Teilen Sie kurz mit, welche Kanäle, Systeme oder Serviceprozesse betroffen sind. Daraus lässt sich ein erster fachlicher Zuschnitt für Omnichannel, Anliegenmanagement oder Customer Communication Management ableiten.',
    },
    finalCta: {
      kicker: 'Nächster Schritt',
      title: 'Aus dem ersten Gespräch wird ein prüfbarer Omnichannel-Fahrplan.',
      cta: 'Anfrage starten',
    },
    footer: {
      blurb: 'Herstellerunabhängige Unternehmensberatung für digitale Transformation, Input Management, Anliegenmanagement, Omnichannel Kundenservice, CCM, IT-Strategie und Migration.',
      navHeading: 'Navigation',
      navItems: [
        { label: 'Lösung', href: '#loesung' },
        { label: 'Frankfurt', href: '#frankfurt' },
        { label: 'Vorgehen', href: '#vorgehen' },
        { label: 'Kontakt', href: '#kontakt' },
      ],
      focusHeading: 'Schwerpunkte',
      focusItems: [
        'Omnichannel Kundenservice',
        'Anliegenmanagement',
        'Input Management',
        'Customer Communication Management',
        'IT-Strategie Versicherung',
      ],
    },
    markers: {
      hero: {
        eyebrow: 'SEO-Strategie',
        title: 'Erster Bildschirm mit klarer Suchabsicht',
        subtitle: 'Der Einstieg beantwortet sofort: Was ist das Thema, für wen ist es relevant und wo wird gesucht?',
        relevance: 'Google und KI-Systeme erkennen schneller, dass diese Seite exakt zur Suchanfrage, Zielgruppe und Region passt.',
        points: [
          'Service, Standort und Zielgruppe werden sofort sichtbar',
          'Ort, Service und Zielgruppe als eigene Felder im Hero',
          'Der nächste Schritt steht direkt neben der fachlichen Einordnung',
        ],
      },
      intent: {
        eyebrow: 'Klärungsbedarf',
        title: 'Erst die Nutzerfrage klären',
        subtitle: 'Google und KI-Suchsysteme verstehen schneller, welche Nutzerfrage die Seite bedient.',
        relevance: 'Eine klare Struktur erhöht die Chance, für fachliche Suchanfragen und KI-Antworten als passende Quelle verstanden zu werden.',
        points: [
          'Drei Karten trennen Ausgangslage, Direktantwort und nächsten Schritt',
          'Die Seite erklärt zuerst die Entscheidungssituation, nicht das Unternehmen',
          'Entscheider erkennen sofort, ob die Seite ihr konkretes Problem trifft',
        ],
      },
      solution: {
        eyebrow: 'Google-Suche',
        title: 'Fachliche Tiefe statt Wortwiederholung',
        subtitle: 'Der Seiteninhalt baut ein semantisches Themenfeld auf, damit die Seite mehr als nur eine einzelne Suchanfrage abdeckt.',
        relevance: 'Breite fachliche Abdeckung signalisiert Google, dass die Seite das Thema vollständig behandelt und nicht nur Begriffe wiederholt.',
        points: [
          'Omnichannel wird mit Anliegenmanagement, Input Management, CCM und IT-Strategie verbunden',
          'Problemkarten zeigen echte Servicebrüche statt generischer Marketingaussagen',
          'Proof-Zahlen geben der Seite fachliche Glaubwürdigkeit',
        ],
      },
      shortAnswer: {
        eyebrow: 'KI-Suche',
        title: 'Kurzantwort, die KI-Systeme zitieren können',
        subtitle: 'Die Antwort ist so geschrieben, dass sie in KI-Suche, Snippets und Verkaufsgesprächen direkt zitierbar ist.',
        relevance: 'KI-Suchsysteme bevorzugen klare Antwortblöcke, weil sie diese leichter extrahieren, zusammenfassen und als Quelle nennen können.',
        points: [
          'Definition steht vor der langen Argumentation',
          'Ein Satz nennt Zielgruppe, Kanäle, Prozess und Ergebnis',
          'Danach folgt die Struktur: Definition, Standort, Beratung, Roadmap, Ergebnis',
        ],
      },
      questions: {
        eyebrow: 'Inhaltsarchitektur',
        title: 'Entscheiderfragen als Inhaltsarchitektur',
        subtitle: 'Die Seite ist entlang der Fragen aufgebaut, die Entscheider vor einer Anfrage wirklich stellen.',
        relevance: 'Wenn die Seite echte Entscheidungsfragen beantwortet, gewinnt sie Relevanz für mehrere Suchphrasen und für dialogartige KI-Suchen.',
        points: [
          'Strategiefragen für Management und Fachbereich',
          'Operative Fragen für Service, Backoffice und Prozessverantwortliche',
          'Technische Fragen für IT, Daten, Schnittstellen und Migration',
        ],
      },
      map: {
        eyebrow: 'Semantische Struktur',
        title: 'Fachbegriffe als verbundenes System',
        subtitle: 'Wichtige Such- und AI-Entitäten werden als zusammenhängendes System erklärt, nicht als lose Begriffe.',
        relevance: 'Suchmaschinen und KI-Systeme verstehen die Seite besser, wenn Begriffe wie Kanäle, Anliegen, Kommunikation und Betrieb logisch verbunden sind.',
        points: [
          'Knoten: Eingänge, Anliegen, Kommunikation und Betrieb',
          'Zentrum: Frankfurt + Omnichannel Kundenservice',
          'Visuelle Struktur macht die fachliche Beziehung sofort verständlich',
        ],
      },
      faq: {
        eyebrow: 'Fragenabdeckung',
        title: 'FAQ für lange Suchfragen und KI-Antworten',
        subtitle: 'FAQ-Blöcke beantworten konkrete Folgefragen, die Käufer in Google und KI-Suchsystemen stellen.',
        relevance: 'Direkte Fragen und Antworten erhöhen die Chance auf lange Suchanfragen, hervorgehobene Google-Antworten und verwendbare KI-Antworten.',
        points: [
          'Lokale Frage: Frankfurt als Standort- und Suchsignal',
          'Kauffrage: Software zuerst oder Zielbild zuerst?',
          'Einstiegsfrage: Wie klein kann ein erstes Projekt starten?',
        ],
      },
      contact: {
        eyebrow: 'Lead-Strategie',
        title: 'Vom Informationsbedarf zur qualifizierten Anfrage',
        subtitle: 'Eine gute SEO-Seite beantwortet Fragen und führt dann natürlich zum nächsten geschäftlichen Schritt.',
        relevance: 'Ranking bringt nur Wert, wenn die Seite aus Sichtbarkeit eine passende Anfrage macht. Deshalb verbindet der Text Beratungsthema und Kontaktgrund.',
        points: [
          'Kontakttext wiederholt das konkrete Omnichannel-Problem',
          'Formular fragt nach Ausgangslage statt nur nach Kontaktdaten',
          'CTA bleibt sichtbar, ohne den Inhalt zu verdrängen',
        ],
      },
    },
    visuals: {
      intent: { eyebrow: 'Beratungsfokus', title: 'Omnichannel Kundenservice in Frankfurt', chips: ['Service', 'Frankfurt', 'Versicherer', 'Erstgespräch'] },
      channel: { eyebrow: 'Kanalsteuerung', title: 'Anliegen als gemeinsamer Nenner', chips: ['Telefon', 'E-Mail', 'Portal', 'App', 'Brief', 'CCM'] },
      frankfurt: { title: 'Frankfurt am Main', body: 'Beratung für Finanz-, Versicherungs- und Serviceorganisationen im Rhein-Main-Gebiet.' },
      questions: { eyebrow: 'Entscheiderfragen', title: 'Strategie, Betrieb und Technik sauber trennen' },
      roadmap: { eyebrow: 'Roadmap', title: 'Vom ersten Gespräch zu klaren Umsetzungsschritten' },
      faq: { eyebrow: 'Klare Antworten', title: 'Häufige Fragen vor dem ersten Gespräch', chipPrefix: 'Frage' },
    },
  },
}

const en: Translations = {
  pageTitle: 'Pentadoc AG | Digital transformation for insurers',
  pageDescription:
    'Pentadoc AG advises insurers and health funds on input management, case management, CCM, IT strategy, AI prototyping and migration.',
  seoPageTitle: 'Omnichannel customer service Frankfurt | Pentadoc AG',
  seoPageDescription:
    'Omnichannel customer service consulting in Frankfurt for insurers and health funds: connect channels, customer cases, processes, CCM, input management and IT roadmap cleanly.',
  nav: {
    languageLabel: 'Language',
    languages: { de: 'German', en: 'English' },
    skipToContent: 'Skip to content',
    aria: 'Main navigation',
    openMenu: 'Open navigation',
    closeMenu: 'Close navigation',
    cta: 'Talk to us',
    phoneLabel: '+49 931 2607911-0',
    mobileSendRequest: 'Send request',
    mobileCallDirect: 'Call us directly',
    links: [
      { label: 'Services', href: '#leistungen' },
      { label: '5-D model', href: '#modell' },
      { label: 'References', href: '#referenzen' },
      { label: 'Approach', href: '#vorgehen' },
      { label: 'Contact', href: '#kontakt' },
    ],
  },
  hero: {
    kicker: 'Pentadoc AG',
    title: 'Digital transformation for insurers — built to hold up in daily operations.',
    titleLine1: 'Complex transformation',
    titleLine2: 'Clear delivery.',
    lead: 'Vendor-independent consulting for insurers and health funds — input management, case management, CCM, IT strategy, AI prototyping and migration.',
    primaryCta: 'Request an intro call',
    secondaryCta: 'See our services',
    checklistLabel: 'What sets Pentadoc apart',
    checklist: [
      'Vendor-independent consulting',
      'Specialised in insurers and health funds',
      'From target picture through implementation and migration',
      'A first conversation without detours',
    ],
    metricsLabel: 'Facts and figures',
    pillarsLabel: 'Service focus',
    pillars: ['Cases', 'Processes', 'Migration'],
  },
  proofStats: [
    { value: '25+', label: 'years in the market' },
    { value: '850+', label: 'delivered projects' },
    { value: '120+', label: 'well-known clients' },
    { value: '2000+', label: 'years of combined experience' },
  ],
  references: {
    label: 'Selected references',
    note: 'Public references and client logos shown on pentadoc.com',
  },
  problem: {
    kicker: 'Why now',
    title: 'Digitalisation rarely fails on ideas. It fails on disconnected decisions.',
    body: 'Insurers and health funds have to master inbound channels, customer expectations, legacy IT, process logic and operational change all at once. Pentadoc brings these layers into one decidable target picture.',
    signals: [
      {
        title: 'Inbound is getting faster, but no clearer',
        text: 'Letters, emails, portals and internal hand-offs arrive in parallel. Without joint steering you get waiting times, follow-ups and unclear priorities.',
      },
      {
        title: 'Automation gets stuck on business logic',
        text: 'Many programmes start on the technical side. Real impact only kicks in when cases, processes, roles and customer expectations are brought together properly.',
      },
      {
        title: 'Migrations need more than a system swap',
        text: 'Data quality, operational risk, dependencies and adoption decide whether new solutions actually hold up in daily work.',
      },
    ],
  },
  services: {
    kicker: 'Consulting services',
    title: 'A consulting chain for intake, handling, communication and change.',
    items: [
      { title: 'Case management', text: 'Capture, prioritise and steer customer cases from intake all the way through to handling.', result: 'More transparency, shorter waiting times and clear ownership.' },
      { title: 'Input management', text: 'Connect mail, documents, email and digital channels into a robust target picture and a working operating model.', result: 'Inbound becomes usable faster and less dependent on media breaks.' },
      { title: 'Customer communication management', text: 'Set up customer dialogue, document creation and delivery consistently across all relevant channels.', result: 'Communication becomes clearer, more consistent and easier to integrate.' },
      { title: 'End-to-end process automation', text: 'Analyse processes across organisational borders and prioritise automation where it visibly takes load off the team.', result: 'Programmes contribute to the overall process, not just to individual steps.' },
      { title: 'IT strategy for insurance', text: 'Clarify target pictures, sourcing questions, architecture decisions and transformation paths for insurers and health funds.', result: 'Business and IT decide with the same picture in mind.' },
      { title: 'AI prototyping', text: 'Test concrete AI use cases in document- and process-near workflows quickly, in a controlled way and with proper business framing.', result: 'Potential becomes visible before large programmes get launched.' },
      { title: 'Solution migration', text: 'Plan system replacements, data migrations and communication solutions so risks become visible early.', result: 'Migrations run with a clear roadmap, dependencies and operating model.' },
      { title: 'Organisational transformation', text: 'Guide structures, roles and ways of working so digital change actually lands in the organisation.', result: 'New solutions are not just rolled out — they get used.' },
    ],
  },
  feature: {
    kicker: 'Signature topic',
    title: 'Case management turns customer expectation, business process and IT into something you can steer.',
    body: 'Modern customer cases do not live in a single inbox. They run through portals, documents, email, phone, core systems and internal hand-offs. The decisive piece is to read those signals correctly and turn them into reliable processing.',
    checklist: [
      'Target picture for intake, handling and communication',
      'Prioritisation by business value and delivery risk',
      'Roadmap for systems, processes, roles and migration',
      'Decision basis for board, business and IT',
    ],
    visualLabel: 'Case management flow',
    pillars: [
      { label: 'Clarity', text: 'What does the business actually need?' },
      { label: 'Feasibility', text: 'What can the IT landscape support?' },
      { label: 'Impact', text: 'What improves customer experience and operations?' },
    ],
  },
  model: {
    kicker: '5-D model',
    title: 'Strategy, technology, processes, culture and organisation in one picture.',
    items: [
      { label: 'Strategy', text: 'A realistic target picture, robust priorities and clear ground for decisions.' },
      { label: 'Technology', text: 'Independent assessment of system landscapes, architecture and solution options.' },
      { label: 'Processes', text: 'An end-to-end view on customer cases, inbound channels and operational handling.' },
      { label: 'Culture', text: 'Acceptance, enablement and safety for teams who have to carry the change.' },
      { label: 'Organisation', text: 'Roles, governance and structures for stable delivery inside daily business.' },
    ],
  },
  proof: {
    kicker: 'Trust',
    title: 'Substance built on projects, references and public recognition.',
    body: 'Pentadoc publicly states over 25 years in the market, more than 850 projects and over 120 well-known clients. The references show a strong focus on insurance, health, communication and document-heavy processes.',
    notes: [
      { company: 'SIGNAL IDUNA', person: 'Jens Clasen, Head of Division', text: 'The public reference highlights Pentadoc as a partner for input management renewal, market knowledge and tailored design.' },
      { company: 'AOK Baden-Württemberg', person: 'Melanie Dollmann-Guldenschuh, IT solution designer', text: 'In a proof-of-concept context, Pentadoc is praised for expertise, structure and solution-oriented consulting.' },
      { company: 'IKK Südwest', person: 'Jürgen Becker, Head of Business Unit', text: 'The reference describes tangible improvements through the multi-dimensional view of the Pentadoc approach.' },
    ],
    awardsKicker: 'Awards',
    awardsBody: 'Employer and company awards shown publicly on pentadoc.com.',
  },
  process: {
    kicker: 'Approach',
    title: 'Create clarity first, then set up change properly.',
    body: 'The goal is no longer slide-deck logic. The goal is a delivery base business, IT and leadership can decide from together.',
    steps: [
      { title: 'Compact the starting situation', text: 'Goals, channels, systems, process breaks and running initiatives get sorted quickly.' },
      { title: 'Clarify target picture and value logic', text: 'Pentadoc translates requirements into a prioritised picture across business, technical and organisational angles.' },
      { title: 'Make the roadmap decidable', text: 'Migration paths, vendor questions, risks, roles and quick wins become concrete enough to be decided.' },
      { title: 'Anchor delivery', text: 'Teams are supported through rollout, steering and stabilisation without losing sight of daily operations.' },
    ],
  },
  why: {
    kicker: 'Why Pentadoc',
    title: 'A specialised consultancy for programmes that have to hold up in operations.',
    benefits: [
      { title: 'Vendor-independent', text: 'The advice is not tied to any single product, so we can weigh business value, IT reality and feasibility cleanly.' },
      { title: 'Close to insurance', text: 'The public profile shows a clear focus on insurers, health funds and organisations with complex customer processes.' },
      { title: 'From strategy to migration', text: 'Pentadoc connects target picture, process design, IT strategy, organisation and concrete change in one coherent approach.' },
    ],
  },
  conversion: {
    kicker: 'How we connect',
    title: 'Low friction for the first step. Enough context for a good conversation.',
    points: [
      { title: '30 seconds', text: 'Name, email, topic and a short context are enough to get going.' },
      { title: 'Pre-sorted by topic', text: 'Your request already carries enough context for the conversation to be productive from the first minute.' },
      { title: 'Direct path back', text: 'The form sends your request to the right project inbox.' },
    ],
  },
  contact: {
    kicker: 'Contact',
    title: 'Bring clarity to the next transformation decision.',
    body: 'Tell us briefly which channels, systems or process questions are involved. From there we can sort the topic and clarify the right next step.',
  },
  contactForm: {
    aria: 'Contact form',
    ariaHero: 'Contact form in hero',
    headerKicker: 'Request an intro call',
    headerTitle: '30 seconds to the right framing.',
    headerSubtitle: 'A short note about what is going on. The request goes straight to the right project inbox.',
    heroKicker: 'Free intro call',
    heroTitle: 'A reply within 24 hours.',
    heroSubtitle: 'Tell us the situation in a few lines. We come back with a first expert take — direct, no detours.',
    heroSubmit: 'Send request',
    heroTrust: 'No newsletter. No data sharing. Reply usually within 24 hours.',
    nameLabel: 'Name',
    companyLabel: 'Company',
    emailLabel: 'Email',
    phoneLabel: 'Phone',
    topicLabel: 'Topic',
    topicPlaceholder: 'Please select',
    messageLabel: 'A few lines on the situation',
    messagePlaceholder: 'Which channels, systems or processes should we clarify?',
    submit: 'Send request',
    submitting: 'Sending',
    honeypotLabel: 'Leave this field empty',
    statusSuccess: 'Thanks. Your request has been sent. We will be in touch shortly.',
    statusFallback: 'The form could not send directly. Your email client was opened as a fallback.',
    statusError: 'The request could not be sent right now. Please try again, or use the email address in the footer.',
    mailSubject: 'New Pentadoc homepage request',
    topics: [
      'Omnichannel customer service',
      'Case management',
      'Input management',
      'Customer communication management',
      'IT strategy for insurance',
      'AI prototyping',
      'Solution migration',
      'Organisational transformation',
      'General intro call',
    ],
  },
  faq: {
    kicker: 'FAQ',
    title: 'Common questions before a first conversation.',
    items: [
      { question: 'Who is Pentadoc most relevant for?', answer: 'For insurers, health funds and organisations with high volumes of customer cases, documents, inbound channels and complex business processes.' },
      { question: 'Can Pentadoc look at single topics?', answer: 'Yes. Topics like AI prototyping, solution migration, input management or IT strategy can be looked at on their own or embedded into a larger transformation programme.' },
      { question: 'What should the initial request contain?', answer: 'It helps to share the starting situation, affected channels or systems, the desired outcome, a rough timeline and the question to be clarified in the first conversation.' },
      { question: 'Who should join the first meeting?', answer: 'Usually business, IT or process management is enough. For early framing, a small group can already get us to a clean scope.' },
      { question: 'Is Pentadoc tied to specific software vendors?', answer: 'The public profile positions Pentadoc as vendor-independent consulting. Decisions can therefore stay anchored to the target picture and to what is actually feasible.' },
      { question: 'Where is Pentadoc based?', answer: 'Pentadoc AG is headquartered at Beethovenstraße 1a, 97080 Würzburg, Germany, and advises clients across the country.' },
    ],
  },
  finalCta: {
    kicker: 'Next step',
    title: 'A pile of open questions becomes a decidable transformation path.',
    cta: 'Start a request',
  },
  footer: {
    blurb: 'Vendor-independent consulting for digital transformation, input management, case management, CCM, IT strategy, AI prototyping and migration.',
    navHeading: 'Navigation',
    servicesHeading: 'Services',
    contactHeading: 'Contact',
    imprint: 'Imprint',
    privacy: 'Privacy',
    copyright: '© 2026 Pentadoc AG.',
    tagline: 'Digital transformation for insurers, health funds and financial services.',
    navItems: [
      { label: 'Services', href: '#leistungen' },
      { label: '5-D model', href: '#modell' },
      { label: 'References', href: '#referenzen' },
      { label: 'Approach', href: '#vorgehen' },
      { label: 'Contact', href: '#kontakt' },
    ],
  },
  stickyCta: {
    headline: 'Ready for a clear transformation decision?',
    sub: 'Send a short request or call us directly.',
    call: 'Call',
    request: 'Send request',
  },
  seo: {
    hero: {
      kicker: 'Omnichannel customer service Frankfurt',
      title: 'Omnichannel customer service in Frankfurt for insurers and health funds.',
      lead: 'Vendor-independent consulting for teams who want to connect channels, customer cases, documents, communication and IT in the Rhine-Main region into one customer experience they can actually steer.',
      primaryCta: 'Omnichannel intro call',
      secondaryCta: 'See the solution',
      checks: [
        'Think input management, case management and CCM together',
        'Specifically for insurers, health funds and financial services',
        'Frankfurt and Rhine-Main as a regional service and decision space',
      ],
      panel: {
        topLabel: 'What this is about',
        topValue: 'Omnichannel customer service in Frankfurt',
        metrics: [
          { label: 'Service', value: 'Omnichannel' },
          { label: 'Location', value: 'Frankfurt' },
          { label: 'Audience', value: 'Insurance' },
        ],
        body: 'A first conversation clarifies the leading question first, then sorts decision, process and IT topics into a realistic omnichannel roadmap.',
      },
    },
    intent: {
      kicker: 'What to clarify',
      title: 'What actually has to be clarified before an omnichannel project.',
      cards: [
        { label: 'Starting situation', title: 'Omnichannel customer service Frankfurt', text: 'Many service organisations want to connect channels, customer cases, documents, communication and IT so customers do not have to start over from scratch every time.' },
        { label: 'Direct answer', title: 'Definition first, details after', text: 'The opening explains right away what omnichannel customer service consulting means and who it is relevant for. After that come location, approach, expert questions and contact.' },
        { label: 'Next step', title: 'From problem to request', text: 'The page leads from typical service breaks via a clear target picture to a first conversation, where priorities and next decisions get scoped cleanly.' },
      ],
    },
    solution: {
      kicker: 'Starting situation',
      title: 'Omnichannel does not start with the channel. It starts with the customer case.',
      body: 'In insurance and health funds, customer contacts arrive through many routes: app, portal, phone, letter, email, broker contact, internal hand-off. A Frankfurt omnichannel programme has to order those signals so service, business and IT work from the same truth.',
      visualSrLabel: 'Omnichannel system of channels and cases',
      painPoints: [
        { title: 'Many channels, no shared picture', text: 'A customer calls, then sends documents by email and later gets a letter. Without a shared view you get duplicate work, follow-ups and contradictory answers.' },
        { title: 'Automation falls short', text: 'OCR, workflow and portals only help when case logic, business rules and handling really play together. Single tools do not replace a workable operating model.' },
        { title: 'CCM and input management run separately', text: 'Inbound documents and outbound communication often get optimised separately. The customer dialogue stays broken even though both sides belong together.' },
      ],
    },
    frankfurt: {
      kicker: 'Frankfurt and Rhine-Main',
      title: 'Answers decision-makers need before an omnichannel project.',
      shortAnswer: {
        kicker: 'Short answer',
        title: 'What is omnichannel customer service consulting in Frankfurt?',
        text: 'Omnichannel customer service consulting in Frankfurt helps insurers, health funds and financial services connect phone, email, portal, app, documents and outbound communication into one consistent service process. What matters is not the number of channels, but a shared picture of the customer case, clear ownership, an IT landscape that can connect, and a realistic roadmap.',
      },
      sections: [
        {
          kicker: 'Starting situation',
          title: 'What companies have to clarify before an omnichannel project',
          body: [
            'Insurers, health funds and financial services rarely look for a piece of software in isolation. Behind the request usually sits a concrete operational question: how do we connect call, letter, email, portal, chat, app and outbound communication so customers do not have to start over every time? In the Rhine-Main region this question matters even more, because many products need explaining, documents need legally safe handling, and service processes typically run across several business units.',
            'A good omnichannel approach therefore does not start with the channel. It starts with the case. What information has arrived? What does the insured person want to achieve? What evidence is missing? What answer is possible from a business, technical and regulatory point of view? Only once those questions are answered cleanly can portals, contact centres, document processes, customer communication management and workflow automation play together in a useful way.',
            'That is how you get a serious conversation about service quality, handling logic, digital inbound channels and transformation priorities.',
          ],
        },
        {
          kicker: 'Frankfurt',
          title: 'Why Frankfurt is a strong location for omnichannel',
          body: [
            'Frankfurt is a dense market for insurance, banks, service providers, consulting, IT and regulated business models. Many teams work with high case volumes, distributed ownership and grown system landscapes. That is exactly where the typical omnichannel pressure shows up: customers expect fast responses, operations have to stay economical, and IT cannot be flooded by unclear requirements.',
            'For organisations in Frankfurt and Rhine-Main, the relevant kind of consulting understands a demanding finance and insurance hub: high expectations on service quality, clean documentation, traceable decisions and stable delivery inside existing structures.',
          ],
        },
        {
          kicker: 'Consulting',
          title: 'What omnichannel consulting for insurers should actually deliver',
          body: [
            'Reliable consulting for omnichannel customer service has to bridge business, customer service, IT, process management and communication. In the first step, today\'s touchpoints get made visible: which inbound channels exist? Which systems hold which data? Which documents get produced? Which cases get stuck? Which answers differ from channel to channel? From those observations we build a decision model, not an abstract target picture.',
            'Pentadoc sees omnichannel in that context as part of a wider transformation task. Input management, case management, customer communication management, IT strategy, migration and organisation interlock. Adding a single new channel leaves the underlying conflict untouched. Once cases, data, documents, communication and handling are thought through together, a realistic roadmap for better service shows up.',
            'Equally important is translating between management language and delivery reality. Boards and division heads need a basis for decisions, teams need clear priorities, and IT needs requirements that do not try to solve every edge case at once. Good omnichannel consulting makes those layers visible. It shows which moves improve customer experience and efficiency, which dependencies have to be cleared first, and which topics deliberately come later.',
          ],
        },
        {
          kicker: 'Delivery',
          title: 'From idea to roadmap for omnichannel customer service',
          body: [
            'The road to better omnichannel customer service in Frankfurt starts with a sober inventory. Not every organisation needs a large transformation programme straight away. Sometimes a clear look at the most important customer cases, the biggest media breaks and the systems that block decisions today is enough. From there you can cleanly separate quick wins, migration needs and strategic decisions.',
            'A good roadmap answers concrete questions. Which information has to be available at first contact? When is a case identified automatically? Where is human judgement required? Which outbound channels make sense for which customer groups? Which letters, emails or portal messages need rewriting? Which providers, core systems and business systems have to be connected? These questions turn omnichannel from a buzzword into a programme you can lead.',
          ],
        },
        {
          kicker: 'Outcome',
          title: 'How you recognise a mature omnichannel customer service',
          body: [
            'A mature omnichannel customer service does not show in the number of channels. It shows in the fact that customer cases are recognisable, workable and traceable. Customers get consistent information. Staff see context. Documents and messages are not detached from the process. Leaders can see where backlog, quality issues or automation potential sit.',
            'For insurers and health funds, that maturity is especially valuable, because service quality, efficiency and trust hang together. When a claim, a membership, a benefits case or a contract change runs across several contacts, what matters is not the individual channel. What matters is the continuous experience. That is exactly what calls for consulting that ties omnichannel, case management and technical feasibility together.',
            'For companies in Frankfurt, that means: omnichannel is not a pure channel project. It is a decision about how customer expectation, regulatory care and grown system landscapes get brought together.',
          ],
        },
      ],
      aside: {
        cards: [
          { title: 'Frankfurt and Rhine-Main', text: 'Consulting for companies that want to connect customer service, documents, communication and IT inside a demanding finance and insurance environment.' },
          { title: 'Close to insurance', text: 'Focus on customer cases, documents, communication, process logic and migration instead of isolated channel optimisation.' },
          { title: 'Working nationwide', text: 'Pentadoc is based in Würzburg and works with organisations in Frankfurt, Rhine-Main and beyond.' },
        ],
      },
    },
    questions: {
      kicker: 'Decision-maker questions',
      title: 'Strategy, operations and technology get sorted into clear decision-maker questions.',
      clusters: [
        {
          title: 'Strategic questions',
          qa: [
            { question: 'What role should omnichannel play in the customer service target picture?', answer: 'It is the steering layer — every channel feeds into one shared case logic. Without it, you only get parallel inboxes, not real omnichannel.' },
            { question: 'Which channels really matter commercially in Frankfurt and Rhine-Main?', answer: 'Phone, broker contact, email and portal still dominate; app and chat grow fastest. The choice is less about adding channels and more about which ones must lead for which customer group.' },
            { question: 'Which decisions do the board, the business unit and IT need first?', answer: 'Three: which channels lead, which cases get automated end-to-end, and which legacy systems get replaced rather than just connected. Settle those and the rest of the roadmap falls into place.' },
          ],
        },
        {
          title: 'Operational questions',
          qa: [
            { question: 'Which cases get stuck today between phone, portal, email and documents?', answer: 'Typically claim updates, missing-document follow-ups, contract changes and complaints — anything that triggers a back-and-forth across more than two touchpoints.' },
            { question: 'Where do follow-ups, waiting times or duplicate work appear?', answer: 'At the seams: between front office and back office, between OCR and case logic, and between outgoing letters and the underlying customer record.' },
            { question: 'What information do staff need at first contact?', answer: 'Customer identity, open cases, last contact context, current documents, and the next allowed action. If that is not visible on one screen, every call starts from zero.' },
          ],
        },
        {
          title: 'Technical questions',
          qa: [
            { question: 'Which systems need to share customer data, documents and status?', answer: 'At a minimum: CRM or policy core, document and input management, CCM, contact-centre platform, and case management. Status and identifiers have to align across all of them.' },
            { question: 'What role do input management, CCM and workflow automation play?', answer: 'Input management classifies what arrives, CCM produces what goes out, and workflow automation orchestrates the case in between. Real omnichannel needs all three speaking the same data model.' },
            { question: 'Which migrations or interfaces drive the roadmap?', answer: 'Usually the core-system migration, the document or input-platform swap, and the introduction of an event bus or case API. They set the pace for everything else.' },
          ],
        },
      ],
    },
    map: {
      kicker: 'Target picture',
      title: 'An omnichannel target picture connects intake, cases, communication and operations.',
      body: 'The difference between several channels and real omnichannel sits in the steering. A channel cannot just be reachable. It has to feed into the same process, the same information state and the same communication logic.',
      checklist: [
        'Make customer context visible across touchpoints',
        'Tie documents and messages to the case from a business angle',
        'Derive a roadmap for systems, roles, migration and steering',
      ],
      center: { eyebrow: 'Frankfurt', title: 'Omnichannel customer service' },
      readiness: [
        { label: 'Intake', text: 'Mail, email, portal, phone and app are treated as one intake we can steer.' },
        { label: 'Cases', text: 'Customer cases get recognised, prioritised and handed to the right team.' },
        { label: 'Communication', text: 'Replies, documents and status messages follow one consistent logic.' },
        { label: 'Operations', text: 'Processes, roles, systems and KPIs become workable in daily business.' },
      ],
    },
    approach: {
      kicker: 'Approach',
      title: 'From the first need for clarity to a decidable omnichannel roadmap.',
      body: 'The roadmap shows how an initial need for clarity turns into a concrete consulting plan with priorities, dependencies and next delivery steps.',
      steps: [
        { title: 'Sort the Frankfurt starting situation', text: 'Which customer groups, inbound channels, business processes, locations, providers and systems shape today\'s customer service?' },
        { title: 'Develop the omnichannel target picture', text: 'Which channels should lead, which information has to be visible immediately, and which decisions do business, IT and management need to take?' },
        { title: 'Clarify roadmap and architecture', text: 'Which steps create fast impact, which migrations are critical, and which dependencies have to be decided before a tender goes out?' },
        { title: 'Make delivery steerable', text: 'How do we anchor roles, KPIs, operating processes and communication so omnichannel works not just as a concept, but in everyday operations?' },
      ],
    },
    why: {
      kicker: 'Why Pentadoc',
      title: 'Vendor-independent, close to insurance and strong in document-heavy processes.',
      cards: [
        { title: 'Target picture, not a tool list', text: 'The first value sits in clear decisions: which channels, cases, documents, systems and roles have to play together?' },
        { title: 'IT strategy and migration', text: 'Omnichannel gets connected to architecture, data, interfaces and migration paths, so the roadmap stays realistic in operations.' },
        { title: 'From Frankfurt, ready to connect', text: 'Pentadoc works with organisations in the Frankfurt market and stays focused on national insurance and health-fund processes.' },
      ],
    },
    faq: {
      kicker: 'FAQ',
      title: 'Common questions about omnichannel customer service Frankfurt.',
      items: [
        { question: 'Is omnichannel customer service in Frankfurt a local or a business topic?', answer: 'Both. Frankfurt stands for a dense finance and insurance environment, but the actual job sits in the business connection of channels, cases, documents, communication, IT and operations.' },
        { question: 'Does software have to be chosen before omnichannel consulting?', answer: 'No. It is often better to clarify the target picture, requirements, processes and dependencies first. Only then can you judge which solution or migration makes sense.' },
        { question: 'Which organisations is this page for?', answer: 'Mainly for insurers, health funds and financial services with high contact volume, lots of documents, several inbound channels and complex handling.' },
        { question: 'Can we start small?', answer: 'Yes. A structured first workshop can already show which channels, cases and systems carry the biggest leverage, and which decisions come next.' },
      ],
    },
    contact: {
      kicker: 'Contact',
      title: 'Clarify whether omnichannel in Frankfurt is a channel, a process or an architecture question.',
      body: 'Tell us briefly which channels, systems or service processes are involved. From there we can sketch a first scope for omnichannel, case management or customer communication management.',
    },
    finalCta: {
      kicker: 'Next step',
      title: 'A first conversation turns into a checkable omnichannel plan.',
      cta: 'Start a request',
    },
    footer: {
      blurb: 'Vendor-independent consulting for digital transformation, input management, case management, omnichannel customer service, CCM, IT strategy and migration.',
      navHeading: 'Navigation',
      navItems: [
        { label: 'Solution', href: '#loesung' },
        { label: 'Frankfurt', href: '#frankfurt' },
        { label: 'Approach', href: '#vorgehen' },
        { label: 'Contact', href: '#kontakt' },
      ],
      focusHeading: 'Focus areas',
      focusItems: [
        'Omnichannel customer service',
        'Case management',
        'Input management',
        'Customer communication management',
        'IT strategy for insurance',
      ],
    },
    markers: {
      hero: {
        eyebrow: 'SEO strategy',
        title: 'First screen with clear search intent',
        subtitle: 'The opening answers it on the spot: what is the topic, who is it for, where is it searched?',
        relevance: 'Google and AI systems recognise faster that this page matches the search query, audience and region.',
        points: [
          'Service, location and audience are visible right away',
          'Location, service and audience as their own fields in the hero',
          'The next step sits right next to the business framing',
        ],
      },
      intent: {
        eyebrow: 'What to clarify',
        title: 'User question first',
        subtitle: 'Google and AI search systems understand faster which user question the page is answering.',
        relevance: 'A clear structure increases the chance of being picked up as a relevant source for expert queries and AI answers.',
        points: [
          'Three cards split starting situation, direct answer and next step',
          'The page first explains the decision situation, not the company',
          'Decision-makers see right away whether the page hits their concrete problem',
        ],
      },
      solution: {
        eyebrow: 'Google search',
        title: 'Depth, not repetition',
        subtitle: 'The page builds a semantic topic field, so it covers more than one isolated query.',
        relevance: 'Broad expert coverage signals to Google that the page treats the topic in full and is not just repeating terms.',
        points: [
          'Omnichannel gets linked with case management, input management, CCM and IT strategy',
          'Problem cards show real service breaks, not generic marketing claims',
          'Proof numbers give the page expert credibility',
        ],
      },
      shortAnswer: {
        eyebrow: 'AI search',
        title: 'A short answer AI systems can cite',
        subtitle: 'The answer is written so AI search, snippets and sales conversations can quote it directly.',
        relevance: 'AI search systems prefer clear answer blocks, because they extract, summarise and cite them more easily.',
        points: [
          'Definition sits in front of the long argument',
          'One sentence names audience, channels, process and outcome',
          'After that comes the structure: definition, location, consulting, roadmap, outcome',
        ],
      },
      questions: {
        eyebrow: 'Content architecture',
        title: 'Decision-maker questions as content architecture',
        subtitle: 'The page is built along the questions decision-makers really ask before they send an enquiry.',
        relevance: 'When the page answers real decision questions, it picks up relevance for multiple queries and for conversational AI search.',
        points: [
          'Strategic questions for management and the business unit',
          'Operational questions for service, back-office and process owners',
          'Technical questions for IT, data, interfaces and migration',
        ],
      },
      map: {
        eyebrow: 'Semantic structure',
        title: 'Expert terms as a connected system',
        subtitle: 'Key search and AI entities are explained as a connected system, not as loose terms.',
        relevance: 'Search engines and AI systems understand the page better when terms like channels, cases, communication and operations are logically linked.',
        points: [
          'Nodes: intake, cases, communication and operations',
          'Centre: Frankfurt + omnichannel customer service',
          'The visual structure makes the business relationship instantly clear',
        ],
      },
      faq: {
        eyebrow: 'Question coverage',
        title: 'FAQ for long search queries and AI answers',
        subtitle: 'FAQ blocks answer the concrete follow-up questions buyers ask in Google and AI search.',
        relevance: 'Direct questions and answers increase the chance of long-tail visibility, featured Google answers and usable AI replies.',
        points: [
          'Local question: Frankfurt as a location and search signal',
          'Buying question: software first or target picture first?',
          'Entry question: how small can a first project start?',
        ],
      },
      contact: {
        eyebrow: 'Lead strategy',
        title: 'From information need to a qualified enquiry',
        subtitle: 'A good SEO page answers questions and then naturally leads to the next business step.',
        relevance: 'Ranking only pays off when the page turns visibility into a fitting enquiry. That is why the copy ties the consulting topic to the reason to get in touch.',
        points: [
          'Contact copy repeats the concrete omnichannel problem',
          'The form asks about the situation, not just contact details',
          'The CTA stays visible without overshadowing the content',
        ],
      },
    },
    visuals: {
      intent: { eyebrow: 'Consulting focus', title: 'Omnichannel customer service in Frankfurt', chips: ['Service', 'Frankfurt', 'Insurance', 'Intro call'] },
      channel: { eyebrow: 'Channel steering', title: 'The case as the common denominator', chips: ['Phone', 'Email', 'Portal', 'App', 'Letter', 'CCM'] },
      frankfurt: { title: 'Frankfurt am Main', body: 'Consulting for finance, insurance and service organisations in the Rhine-Main region.' },
      questions: { eyebrow: 'Decision-maker questions', title: 'Keep strategy, operations and technology cleanly apart' },
      roadmap: { eyebrow: 'Roadmap', title: 'From a first conversation to clear delivery steps' },
      faq: { eyebrow: 'Clear answers', title: 'Common questions before the first conversation', chipPrefix: 'Question' },
    },
  },
}

export const translations: Record<Lang, Translations> = { de, en }
