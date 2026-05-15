import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'

const distDir = 'dist'
const rootIndex = join(distDir, 'index.html')

const pages = [
  {
    slug: 'pentadoc-homepage',
    title: 'Pentadoc AG | Digitale Transformation für Versicherer',
    description:
      'Pentadoc AG berät Versicherer und Krankenkassen zu Input Management, Anliegenmanagement, CCM, IT-Strategie, KI-Prototyping und Migration.',
    canonical: 'https://digitalmovementuk.github.io/Pentadoc-Prototype/pentadoc-homepage/',
    image: 'https://digitalmovementuk.github.io/Pentadoc-Prototype/og-image.png',
    imageAlt: 'Pentadoc AG Homepage-Redesign',
  },
  {
    slug: 'omnichannel-kundenservice-frankfurt',
    title: 'Omnichannel Kundenservice Frankfurt | Pentadoc AG',
    description:
      'Omnichannel Kundenservice Beratung in Frankfurt für Versicherer und Krankenkassen: Kanäle, Anliegen, Prozesse, CCM, Input Management und IT-Roadmap sauber verbinden.',
    canonical: 'https://digitalmovementuk.github.io/Pentadoc-Prototype/omnichannel-kundenservice-frankfurt/',
    image: 'https://digitalmovementuk.github.io/Pentadoc-Prototype/og-omnichannel-frankfurt.png',
    imageAlt: 'Pentadoc Omnichannel Kundenservice Frankfurt',
  },
]

const seoFaqItems = [
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

const seoSections = [
  {
    title: 'Was ist Omnichannel Kundenservice Beratung in Frankfurt?',
    body: [
      'Omnichannel Kundenservice Beratung in Frankfurt hilft Versicherern, Krankenkassen und Finanzdienstleistern dabei, Telefon, E-Mail, Portal, App, Dokumente und ausgehende Kommunikation zu einem einheitlichen Serviceprozess zu verbinden. Entscheidend sind nicht möglichst viele Kanäle, sondern ein gemeinsames Bild vom Kundenanliegen, klare Zuständigkeiten, anschlussfähige IT und eine realistische Roadmap.',
      'Wer nach Omnichannel Kundenservice Frankfurt sucht, sucht selten nur eine Software. Meist steht dahinter eine konkrete Frage im Betrieb: Wie lassen sich Anruf, Brief, E-Mail, Portal, Chat, App und ausgehende Kommunikation so verbinden, dass Kunden nicht jedes Mal von vorne anfangen müssen? Für Versicherer, Krankenkassen und Finanzdienstleister im Rhein-Main-Gebiet ist diese Frage besonders wichtig, weil viele Produkte erklärungsbedürftig sind, Unterlagen rechtssicher verarbeitet werden müssen und Serviceprozesse häufig über mehrere Fachbereiche laufen.',
      'Ein guter Omnichannel-Ansatz beginnt deshalb nicht beim Kanal. Er beginnt beim Anliegen. Welche Information kommt an? Was will die versicherte Person erreichen? Welche Nachweise fehlen? Welche Antwort ist fachlich, technisch und regulatorisch möglich? Erst wenn diese Fragen sauber beantwortet werden, können Portale, Contact Center, Dokumentenprozesse, Customer Communication Management und Workflow-Automation sinnvoll zusammenspielen.',
    ],
  },
  {
    title: 'Warum der Standort Frankfurt ein starkes Thema für Omnichannel ist',
    body: [
      'Frankfurt ist ein dichter Markt für Versicherungen, Banken, Dienstleister, Beratung, IT und regulierte Geschäftsmodelle. Viele Teams arbeiten mit hohen Fallzahlen, verteilten Zuständigkeiten und gewachsenen Systemlandschaften. Genau hier entsteht der typische Omnichannel-Druck: Kunden erwarten schnelle Rückmeldung, der Betrieb muss wirtschaftlich bleiben und die IT darf nicht durch unklare Anforderungen überlastet werden.',
      'Für Organisationen in Frankfurt und Rhein-Main ist ein lokaler Suchbegriff wie Omnichannel Kundenservice Frankfurt daher ein guter Einstieg in eine geschäftliche Diskussion. Gemeint ist nicht, dass jede Lösung physisch aus Frankfurt kommen muss. Entscheidend ist, dass die Beratung die Anforderungen eines anspruchsvollen Finanz- und Versicherungsstandorts versteht: hohe Erwartungen an Servicequalität, saubere Dokumentation, nachvollziehbare Entscheidungen und stabile Umsetzung in bestehenden Strukturen.',
    ],
  },
  {
    title: 'Was eine Omnichannel Beratung für Versicherer leisten sollte',
    body: [
      'Eine belastbare Beratung für Omnichannel Kundenservice muss die Brücke zwischen Fachbereich, Kundenservice, IT, Prozessmanagement und Kommunikation schlagen. Im ersten Schritt werden die heutigen Kontaktpunkte sichtbar gemacht: Welche Eingangskanäle gibt es? Welche Systeme halten Daten? Welche Dokumente entstehen? Welche Vorgänge bleiben liegen? Welche Auskünfte unterscheiden sich je nach Kanal? Aus diesen Beobachtungen entsteht kein abstraktes Zielbild, sondern ein Entscheidungsmodell.',
      'Pentadoc betrachtet Omnichannel in diesem Zusammenhang als Teil einer größeren Transformationsaufgabe. Input Management, Anliegenmanagement, Customer Communication Management, IT-Strategie, Migration und Organisation greifen ineinander. Wenn nur ein neuer Kanal ergänzt wird, bleibt der Grundkonflikt bestehen. Wenn aber Anliegen, Daten, Dokumente, Kommunikation und Bearbeitung gemeinsam gedacht werden, entsteht eine realistische Roadmap für besseren Kundenservice.',
      'Wichtig ist auch die Übersetzung zwischen Managementsprache und Umsetzungsalltag. Vorstände und Bereichsleitungen brauchen Entscheidungsgrundlagen, Teams brauchen klare Prioritäten und die IT braucht Anforderungen, die nicht alle Ausnahmen gleichzeitig lösen sollen. Eine gute Omnichannel Beratung macht diese Ebenen sichtbar. Sie zeigt, welche Maßnahmen Kundenerlebnis und Effizienz verbessern, welche Abhängigkeiten zuerst geklärt werden müssen und welche Themen bewusst später kommen können.',
    ],
  },
  {
    title: 'Von der Idee zur Roadmap für Omnichannel Kundenservice',
    body: [
      'Der Weg zu einem besseren Omnichannel Kundenservice in Frankfurt beginnt mit einer nüchternen Bestandsaufnahme. Nicht jede Organisation braucht sofort ein großes Transformationsprogramm. Manchmal genügt ein klarer Blick auf die wichtigsten Kundenanliegen, die größten Medienbrüche und die Systeme, die heute Entscheidungen blockieren. Daraus lassen sich Quick Wins, Migrationsbedarfe und strategische Entscheidungen sauber trennen.',
      'Eine gute Roadmap beantwortet konkrete Fragen. Welche Informationen müssen beim ersten Kontakt verfügbar sein? Wann wird ein Anliegen automatisch erkannt? Wo braucht es menschliche Entscheidung? Welche Ausgabekanäle sind für welche Kundengruppen sinnvoll? Welche Briefe, E-Mails oder Portalnachrichten müssen überarbeitet werden? Welche Dienstleister, Kernsysteme und Fachverfahren müssen angebunden werden? Diese Fragen machen aus Omnichannel ein führbares Programm statt ein Schlagwort.',
    ],
  },
  {
    title: 'Woran ein reifer Omnichannel Kundenservice erkennbar ist',
    body: [
      'Ein reifer Omnichannel Kundenservice zeigt sich nicht an der Zahl der Kanäle. Er zeigt sich daran, dass Kundenanliegen erkennbar, bearbeitbar und nachvollziehbar sind. Kunden erhalten konsistente Informationen. Mitarbeitende sehen den Kontext. Dokumente und Nachrichten sind nicht losgelöst vom Prozess. Führungskräfte können erkennen, wo Rückstände, Qualitätsthemen oder Automatisierungspotenziale liegen.',
      'Für Versicherer und Krankenkassen ist diese Reife besonders wertvoll, weil Servicequalität, Effizienz und Vertrauen zusammenhängen. Wenn ein Schaden, eine Mitgliedschaft, ein Leistungsfall oder eine Vertragsänderung über mehrere Kontakte läuft, zählt nicht der einzelne Kanal. Es zählt das durchgängige Erlebnis. Genau dafür braucht es eine Beratung, die Omnichannel, Anliegenmanagement und technische Machbarkeit zusammenbringt.',
      'Für Frankfurt bedeutet das: Die Seite adressiert nicht nur ein lokales Keyword, sondern einen realen Bedarf von Organisationen, die zwischen Kundenerwartung, regulatorischer Sorgfalt und gewachsenen Systemlandschaften entscheiden müssen.',
    ],
  },
]

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;')
}

function buildSeoSchema(page) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://pentadoc.com/#organization',
        name: 'Pentadoc AG',
        url: 'https://pentadoc.com/',
        sameAs: ['https://www.linkedin.com/company/pentadoc-ag'],
      },
      {
        '@type': 'ProfessionalService',
        '@id': 'https://pentadoc.com/#professional-service',
        name: 'Pentadoc AG',
        url: 'https://pentadoc.com/',
        telephone: '+49 931 2607911-0',
        email: 'info@pentadoc.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Goethestraße 1',
          postalCode: '97072',
          addressLocality: 'Würzburg',
          addressCountry: 'DE',
        },
        areaServed: [
          {
            '@type': 'City',
            name: 'Frankfurt am Main',
          },
          {
            '@type': 'AdministrativeArea',
            name: 'Rhein-Main',
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${page.canonical}#service`,
        name: 'Omnichannel Kundenservice Beratung Frankfurt',
        serviceType: 'Omnichannel Kundenservice Beratung',
        areaServed: {
          '@type': 'City',
          name: 'Frankfurt am Main',
        },
        provider: {
          '@id': 'https://pentadoc.com/#professional-service',
        },
        audience: {
          '@type': 'BusinessAudience',
          audienceType: 'Versicherer, Krankenkassen und Finanzdienstleister',
        },
        description: page.description,
      },
      {
        '@type': 'WebPage',
        '@id': `${page.canonical}#webpage`,
        url: page.canonical,
        name: page.title,
        description: page.description,
        inLanguage: 'de-DE',
        isPartOf: {
          '@type': 'WebSite',
          '@id': 'https://digitalmovementuk.github.io/Pentadoc-Prototype/#website',
          url: 'https://digitalmovementuk.github.io/Pentadoc-Prototype/',
          name: 'Pentadoc AG Redesign Prototype',
        },
        about: {
          '@id': `${page.canonical}#service`,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: page.image,
          width: 1200,
          height: 630,
          caption: page.imageAlt,
        },
        dateModified: '2026-05-15',
      },
      {
        '@type': 'FAQPage',
        '@id': `${page.canonical}#faq`,
        mainEntity: seoFaqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${page.canonical}#breadcrumbs`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Pentadoc AG',
            item: 'https://digitalmovementuk.github.io/Pentadoc-Prototype/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Omnichannel Kundenservice Frankfurt',
            item: page.canonical,
          },
        ],
      },
    ],
  }
}

function buildStaticSeoContent(page) {
  const sections = seoSections
    .map(
      (section) => `<section>
          <h2>${escapeHtml(section.title)}</h2>
          ${section.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('\n          ')}
        </section>`,
    )
    .join('\n        ')

  const faqs = seoFaqItems
    .map(
      (item) => `<details>
          <summary>${escapeHtml(item.question)}</summary>
          <p>${escapeHtml(item.answer)}</p>
        </details>`,
    )
    .join('\n        ')

  return `<main id="main-content" class="seo-static-fallback">
      <header>
        <p>Omnichannel Kundenservice Frankfurt</p>
        <h1>Omnichannel Kundenservice Frankfurt für Versicherer und Krankenkassen.</h1>
        <p>${escapeHtml(page.description)}</p>
      </header>
      <article>
        ${sections}
      </article>
      <section>
        <h2>Häufige Fragen zu Omnichannel Kundenservice Frankfurt</h2>
        ${faqs}
      </section>
      <section>
        <h2>Kontakt</h2>
        <p>Pentadoc AG berät überregional zu Omnichannel Kundenservice, Anliegenmanagement, Input Management, Customer Communication Management, IT-Strategie und Migration.</p>
        <p><a href="tel:+4993126079110">+49 (0)931 2607911-0</a> · <a href="mailto:info@pentadoc.com">info@pentadoc.com</a></p>
      </section>
    </main>`
}

function updateMeta(html, page) {
  let next = html
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${escapeAttribute(page.description)}" />`,
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${page.canonical}" />`,
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${escapeAttribute(page.title)}" />`,
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${escapeAttribute(page.description)}" />`,
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${page.canonical}" />`,
    )
    .replace(
      /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:image" content="${page.image}" />`,
    )
    .replace(
      /<meta\s+property="og:image:alt"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:image:alt" content="${escapeAttribute(page.imageAlt)}" />`,
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${escapeAttribute(page.title)}" />`,
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${escapeAttribute(page.description)}" />`,
    )
    .replace(
      /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:image" content="${page.image}" />`,
    )

  if (!next.includes('name="robots"')) {
    next = next.replace(
      '<meta name="viewport" content="width=device-width, initial-scale=1.0" />',
      '<meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <meta name="robots" content="index, follow, max-image-preview:large" />',
    )
  }

  next = next
    .replaceAll('href="./', 'href="../')
    .replaceAll('src="./', 'src="../')
    .replaceAll('content="./', 'content="../')

  return next
}

function optimizeSeoPage(html, page) {
  const schema = `<script type="application/ld+json">${JSON.stringify(buildSeoSchema(page))}</script>`

  return html
    .replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/, schema)
    .replace('<div id="root"></div>', `<div id="root">${buildStaticSeoContent(page)}</div>`)
}

const source = await readFile(rootIndex, 'utf8')

await writeFile(join(distDir, '.nojekyll'), '')

for (const page of pages) {
  const target = join(distDir, page.slug, 'index.html')
  const html = updateMeta(source, page)
  await mkdir(dirname(target), { recursive: true })
  await writeFile(
    target,
    page.slug === 'omnichannel-kundenservice-frankfurt' ? optimizeSeoPage(html, page) : html,
  )
}
