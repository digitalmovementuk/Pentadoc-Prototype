import type { LucideIcon } from 'lucide-react'
import {
  ArrowRight,
  BrainCircuit,
  Building2,
  CheckCircle2,
  FileStack,
  GitBranch,
  Layers3,
  MessageSquareText,
  Network,
  ShieldCheck,
  Workflow,
} from 'lucide-react'

export type NavLink = {
  label: string
  href: string
}

export type Service = {
  title: string
  description: string
  benefit: string
  href: string
  icon: LucideIcon
}

export const navLinks: NavLink[] = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'Vorgehen', href: '#vorgehen' },
  { label: 'Referenzen', href: '#referenzen' },
  { label: 'Über uns', href: '#ueber-uns' },
  { label: 'FAQ', href: '#faq' },
]

export const services: Service[] = [
  {
    title: 'Anliegenmanagement',
    description:
      'Strukturierte Bearbeitung von Kundenanliegen vom Eingang bis zur Steuerung in die passenden Fachprozesse.',
    benefit: 'Mehr Transparenz, weniger Liegezeit und klare Priorisierung im Tagesgeschäft.',
    href: '#kontakt',
    icon: MessageSquareText,
  },
  {
    title: 'Input Management',
    description:
      'Analyse, Zielbild und Umsetzung moderner Eingangskanäle für Post, E-Mail, Dokumente und digitale Vorgänge.',
    benefit: 'Eingänge werden schneller nutzbar, statt in Medienbrüchen hängen zu bleiben.',
    href: '#kontakt',
    icon: FileStack,
  },
  {
    title: 'Customer Communication Management',
    description:
      'Beratung für kundennahe Kommunikation, Dokumentenerstellung und konsistente Ausspielung über Kanäle.',
    benefit: 'Kommunikation wird verständlicher, steuerbarer und besser in Prozesse integriert.',
    href: '#kontakt',
    icon: Layers3,
  },
  {
    title: 'E2E-Prozessautomation',
    description:
      'Prozesse werden über Bereichsgrenzen hinweg betrachtet, priorisiert und für Automatisierung vorbereitet.',
    benefit: 'Automatisierung setzt dort an, wo sie im Gesamtprozess messbar entlastet.',
    href: '#kontakt',
    icon: Workflow,
  },
  {
    title: 'IT-Strategie Versicherung',
    description:
      'IT-Zielbilder, Sourcing-Entscheidungen und Transformationsroadmaps für Versicherer und Krankenkassen.',
    benefit: 'Fachbereich, IT und Umsetzungspartner arbeiten mit einem belastbaren gemeinsamen Plan.',
    href: '#kontakt',
    icon: Network,
  },
  {
    title: 'KI-Prototyping',
    description:
      'Schnelle, kontrollierte Prototypen für konkrete KI-Anwendungsfälle in dokumenten- und prozessnahen Abläufen.',
    benefit: 'Chancen werden greifbar, Risiken früh sichtbar und Entscheidungen fundierter.',
    href: '#kontakt',
    icon: BrainCircuit,
  },
  {
    title: 'Lösungsmigration',
    description:
      'Planung und Begleitung von Migrationen, wenn Systeme, Dokumentbestände oder Kommunikationslösungen abgelöst werden.',
    benefit: 'Abhängigkeiten, Datenqualität und Betriebsrisiken werden vor der Umstellung sichtbar.',
    href: '#kontakt',
    icon: GitBranch,
  },
  {
    title: 'Organisationelle Transformation',
    description:
      'Begleitung von Strukturen, Rollen und Arbeitsweisen, damit digitale Veränderung im Betrieb ankommt.',
    benefit: 'Neue Lösungen werden nicht nur eingeführt, sondern im Alltag nutzbar verankert.',
    href: '#kontakt',
    icon: Building2,
  },
]

export const proofStats = [
  { value: '25+', label: 'Jahre Beratungserfahrung' },
  { value: '850+', label: 'öffentlich genannte Projekte' },
  { value: '120+', label: 'öffentlich genannte Kunden' },
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

export const processSteps = [
  {
    title: 'Einordnen',
    text: 'Ziele, Kanäle, Systeme, Prozessbrüche und laufende Initiativen werden gemeinsam sortiert.',
  },
  {
    title: 'Zielbild festlegen',
    text: 'Pentadoc übersetzt Anforderungen in ein priorisiertes Zielbild mit fachlicher, technischer und organisatorischer Sicht.',
  },
  {
    title: 'Umsetzung vorbereiten',
    text: 'Roadmap, Auswahlfragen, Migrationspfade und Rollen werden so konkret, dass Entscheidungen möglich werden.',
  },
  {
    title: 'Begleiten',
    text: 'Teams werden durch Umsetzung, Einführung und Stabilisierung begleitet, ohne den laufenden Betrieb aus dem Blick zu verlieren.',
  },
]

export const benefits = [
  {
    title: 'Versicherungsnah gedacht',
    text: 'Die Beratung setzt bei realen Anliegen, Beständen, Korrespondenz und regulatorisch geprägten Abläufen an.',
    icon: ShieldCheck,
  },
  {
    title: 'Von Strategie bis Migration',
    text: 'Pentadoc verbindet Zielbild, Prozessdesign, IT-Strategie und konkrete Umstellung in einem nachvollziehbaren Vorgehen.',
    icon: ArrowRight,
  },
  {
    title: 'Klare Entscheidungsgrundlagen',
    text: 'Komplexe Optionen werden auf Risiken, Abhängigkeiten und nächsten Nutzen heruntergebrochen.',
    icon: CheckCircle2,
  },
]

export const faqs = [
  {
    question: 'Für welche Unternehmen ist Pentadoc relevant?',
    answer:
      'Der öffentliche Auftritt richtet sich vor allem an Versicherer, Krankenkassen und Organisationen mit komplexem Input Management, Anliegenbearbeitung und Kundenkommunikation.',
  },
  {
    question: 'Kann Pentadoc auch einzelne Themen wie KI oder Migration betrachten?',
    answer:
      'Ja. Die Website nennt unter anderem KI-Prototyping und Lösungsmigration als eigene Beratungsfelder, die auch in größere Transformationsprogramme eingebettet werden können.',
  },
  {
    question: 'Wie startet ein Erstgespräch?',
    answer:
      'Sinnvoll ist ein kurzer fachlicher Überblick: aktuelle Ausgangslage, betroffene Kanäle oder Systeme, Zieltermin und gewünschte Entscheidung. Dafür reicht das Kontaktformular oder ein direkter Anruf.',
  },
  {
    question: 'Wer sollte beim ersten Termin dabei sein?',
    answer:
      'Meist helfen Vertreter aus Fachbereich, IT oder Prozessmanagement. Bei frühen Orientierungen genügt auch eine kleinere Runde, um das Thema sauber einzugrenzen.',
  },
  {
    question: 'Nennt die öffentliche Website feste Preise?',
    answer:
      'Nein. Für Beratungsleistungen werden öffentlich keine Pauschalpreise genannt. Der Umfang sollte deshalb nach Ziel, Komplexität und gewünschter Begleitung geklärt werden.',
  },
  {
    question: 'Wo sitzt Pentadoc?',
    answer:
      'Im Impressum ist Pentadoc AG mit Goethestraße 1, 97072 Würzburg angegeben. Die Beratung richtet sich überregional an Unternehmen im deutschsprachigen Markt.',
  },
]

export const contact = {
  phone: '+49 (0)931 2607911-0',
  fax: '+49 (0)931 2607911-19',
  email: 'info@pentadoc.com',
  addressLines: ['Pentadoc AG', 'Goethestraße 1', '97072 Würzburg', 'Deutschland'],
  linkedIn: 'https://www.linkedin.com/company/pentadoc-ag',
  website: 'https://pentadoc.com/',
}
