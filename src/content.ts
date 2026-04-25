import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BadgeCheck,
  BrainCircuit,
  Building2,
  CheckCircle2,
  FileStack,
  GitBranch,
  Layers3,
  MessageSquareText,
  Network,
  Route,
  ShieldCheck,
  Workflow,
} from 'lucide-react'

export type NavLink = {
  label: string
  href: string
}

export type Service = {
  title: string
  text: string
  result: string
  icon: LucideIcon
}

export type Signal = {
  title: string
  text: string
}

export type FiveD = {
  label: string
  text: string
  icon: LucideIcon
}

export const navLinks: NavLink[] = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: '5-D Modell', href: '#modell' },
  { label: 'Referenzen', href: '#referenzen' },
  { label: 'Vorgehen', href: '#vorgehen' },
  { label: 'Kontakt', href: '#kontakt' },
]

export const proofStats = [
  { value: '25+', label: 'Jahre am Markt' },
  { value: '850+', label: 'umgesetzte Projekte' },
  { value: '120+', label: 'namhafte Kunden' },
  { value: '2000+', label: 'Jahre kombinierte Erfahrung' },
]

export const referenceNames = [
  'Allianz',
  'AOK',
  'BARMER',
  'DAK-Gesundheit',
  'DEVK',
  'SIGNAL IDUNA',
  'Deutsche Post',
  'Lufthansa',
  'Deutsche Bundesbank',
  'T-Mobile',
]

export const problemSignals: Signal[] = [
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
]

export const services: Service[] = [
  {
    title: 'Anliegenmanagement',
    text: 'Kundenanliegen vom Eingang bis zur Bearbeitung strukturiert erfassen, priorisieren und steuerbar machen.',
    result: 'Mehr Transparenz, kürzere Liegezeiten und klare Verantwortung.',
    icon: MessageSquareText,
  },
  {
    title: 'Input Management',
    text: 'Post, Dokumente, E-Mail und digitale Kanäle zu einem belastbaren Zielbild und umsetzbaren Betriebsmodell verbinden.',
    result: 'Eingänge werden schneller nutzbar und weniger abhängig von Medienbrüchen.',
    icon: FileStack,
  },
  {
    title: 'Customer Communication Management',
    text: 'Kundendialoge, Dokumentenerstellung und Ausspielung konsistent über alle relevanten Kanäle aufstellen.',
    result: 'Kommunikation wird verständlicher, einheitlicher und besser integrierbar.',
    icon: Layers3,
  },
  {
    title: 'E2E-Prozessautomation',
    text: 'Abläufe über Bereichsgrenzen hinweg analysieren und Automatisierung dort priorisieren, wo sie messbar entlastet.',
    result: 'Programme zahlen auf den Gesamtprozess ein, nicht nur auf einzelne Teilschritte.',
    icon: Workflow,
  },
  {
    title: 'IT-Strategie Versicherung',
    text: 'Zielbilder, Sourcing-Fragen, Architekturentscheidungen und Transformationspfade für Versicherer und Krankenkassen klären.',
    result: 'Fachbereich und IT entscheiden mit demselben Bild vor Augen.',
    icon: Network,
  },
  {
    title: 'KI-Prototyping',
    text: 'Konkrete KI-Anwendungsfälle in dokumenten- und prozessnahen Abläufen schnell, kontrolliert und fachlich sauber testen.',
    result: 'Potenziale werden sichtbar, bevor große Programme gestartet werden.',
    icon: BrainCircuit,
  },
  {
    title: 'Lösungsmigration',
    text: 'Systemablösen, Datenbestände und Kommunikationslösungen so planen, dass Risiken früh sichtbar werden.',
    result: 'Migrationen laufen mit klarer Roadmap, Abhängigkeiten und Betriebslogik.',
    icon: GitBranch,
  },
  {
    title: 'Organisationelle Transformation',
    text: 'Strukturen, Rollen und Arbeitsweisen so begleiten, dass digitale Veränderung im Unternehmen ankommt.',
    result: 'Neue Lösungen werden nicht nur eingeführt, sondern genutzt.',
    icon: Building2,
  },
]

export const fiveDModel: FiveD[] = [
  {
    label: 'Strategie',
    text: 'Realistisches Zielbild, belastbare Prioritäten und klare Entscheidungsgrundlagen.',
    icon: Route,
  },
  {
    label: 'Technologie',
    text: 'Unabhängige Bewertung von Systemlandschaften, Architektur und Lösungsoptionen.',
    icon: Network,
  },
  {
    label: 'Prozesse',
    text: 'End-to-end Sicht auf Kundenanliegen, Eingangskanäle und operative Bearbeitung.',
    icon: Workflow,
  },
  {
    label: 'Kultur',
    text: 'Akzeptanz, Befähigung und Sicherheit für Teams, die Veränderung tragen müssen.',
    icon: ShieldCheck,
  },
  {
    label: 'Organisation',
    text: 'Rollen, Governance und Strukturen für stabile Umsetzung im Tagesgeschäft.',
    icon: Building2,
  },
]

export const processSteps = [
  {
    title: 'Ausgangslage verdichten',
    text: 'Ziele, Kanäle, Systeme, Prozessbrüche und laufende Initiativen werden schnell sortiert.',
  },
  {
    title: 'Zielbild und Nutzenlogik klären',
    text: 'Pentadoc übersetzt Anforderungen in ein priorisiertes Bild aus fachlicher, technischer und organisatorischer Sicht.',
  },
  {
    title: 'Roadmap entscheidbar machen',
    text: 'Migrationspfade, Auswahlfragen, Risiken, Rollen und Quick Wins werden so konkret, dass Entscheidungen möglich sind.',
  },
  {
    title: 'Umsetzung verankern',
    text: 'Teams werden durch Einführung, Steuerung und Stabilisierung begleitet, ohne den laufenden Betrieb auszublenden.',
  },
]

export const benefits = [
  {
    title: 'Herstellerunabhängig',
    text: 'Die Beratung ist nicht an einzelne Produkte gebunden und kann dadurch sauber zwischen Fachnutzen, IT-Realität und Umsetzbarkeit abwägen.',
    icon: BadgeCheck,
  },
  {
    title: 'Versicherungsnah',
    text: 'Der öffentliche Auftritt zeigt einen klaren Schwerpunkt auf Versicherer, Krankenkassen und Organisationen mit komplexen Kundenprozessen.',
    icon: ShieldCheck,
  },
  {
    title: 'Von Strategie bis Migration',
    text: 'Pentadoc verbindet Zielbild, Prozessdesign, IT-Strategie, Organisation und konkrete Umstellung in einem nachvollziehbaren Vorgehen.',
    icon: ArrowRight,
  },
]

export const proofNotes = [
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
]

export const faqs = [
  {
    question: 'Für wen ist Pentadoc besonders relevant?',
    answer:
      'Für Versicherer, Krankenkassen und Organisationen mit hohem Volumen an Kundenanliegen, Dokumenten, Eingangskanälen und komplexen Fachprozessen.',
  },
  {
    question: 'Kann Pentadoc auch einzelne Themen prüfen?',
    answer:
      'Ja. Themen wie KI-Prototyping, Lösungsmigration, Input Management oder IT-Strategie können einzeln betrachtet oder in ein größeres Transformationsprogramm eingebettet werden.',
  },
  {
    question: 'Was sollte in der Anfrage stehen?',
    answer:
      'Hilfreich sind Ausgangslage, betroffene Kanäle oder Systeme, gewünschtes Ziel, grober Zeitrahmen und die Frage, die im ersten Gespräch geklärt werden soll.',
  },
  {
    question: 'Wer sollte beim ersten Termin dabei sein?',
    answer:
      'Meist reichen Fachbereich, IT oder Prozessmanagement. Bei frühen Orientierungen kann auch eine kleine Runde genügen, um das Thema sauber einzugrenzen.',
  },
  {
    question: 'Ist Pentadoc an bestimmte Softwareanbieter gebunden?',
    answer:
      'Der öffentliche Auftritt positioniert Pentadoc als herstellerunabhängige Beratung. Entscheidungen können daher stärker am Zielbild und an der Umsetzbarkeit ausgerichtet werden.',
  },
  {
    question: 'Wo sitzt Pentadoc?',
    answer:
      'Pentadoc AG sitzt laut Impressum in der Goethestraße 1, 97072 Würzburg, Deutschland, und berät überregional.',
  },
]

export const contact = {
  phone: '+49 (0)931 2607911-0',
  email: 'info@pentadoc.com',
  addressLines: ['Pentadoc AG', 'Goethestraße 1', '97072 Würzburg', 'Deutschland'],
  linkedIn: 'https://www.linkedin.com/company/pentadoc-ag',
  website: 'https://pentadoc.com/',
}

export const checklist = [
  'Zielbild für Eingang, Bearbeitung und Kommunikation',
  'Priorisierung nach Fachnutzen und Umsetzungsrisiko',
  'Roadmap für Systeme, Prozesse, Rollen und Migration',
  'Entscheidungsgrundlage für Vorstand, Fachbereich und IT',
]

export const contactTopics = [
  'Anliegenmanagement',
  'Input Management',
  'Customer Communication Management',
  'IT-Strategie Versicherung',
  'KI-Prototyping',
  'Lösungsmigration',
  'Organisationelle Transformation',
  'Erstgespräch allgemein',
]

export const heroChecklist = [
  'Herstellerunabhängige Beratung',
  'Spezialisiert auf Versicherungen und Krankenkassen',
  'Von Zielbild bis Umsetzung und Migration',
  'Erstes Gespräch ohne Umwege',
]

export const outcomePillars = [
  { label: 'Klarheit', text: 'Was ist fachlich nötig?' },
  { label: 'Machbarkeit', text: 'Was trägt die IT-Landschaft?' },
  { label: 'Wirkung', text: 'Was verbessert Kundenerlebnis und Betrieb?' },
]

export const conversionPoints = [
  {
    title: '30 Sekunden',
    text: 'Name, E-Mail, Thema und ein kurzer Kontext reichen für den Start.',
    icon: CheckCircle2,
  },
  {
    title: 'Fachlich vorsortiert',
    text: 'Die Anfrage enthält genug Kontext, damit das Gespräch direkt produktiv wird.',
    icon: MessageSquareText,
  },
  {
    title: 'Direkter Rückweg',
    text: 'Das Formular sendet die Anfrage an das zuständige Projektpostfach.',
    icon: Route,
  },
]
