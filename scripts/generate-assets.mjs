import { mkdir } from 'node:fs/promises'
import sharp from 'sharp'

await mkdir('public', { recursive: true })

const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="12" fill="#565657"/>
  <path d="M16 18h18c8.8 0 15 5.8 15 14s-6.2 14-15 14H24v-9h9.5c3.5 0 5.9-1.9 5.9-5s-2.4-5-5.9-5H26v19H16V18z" fill="#f6ce46"/>
  <path d="M47 46l-8-8 5.8-5.8L53 40.4 47 46z" fill="#ffffff"/>
</svg>`

await sharp(Buffer.from(faviconSvg)).toFile('public/favicon.svg')

for (const size of [16, 32, 48]) {
  await sharp(Buffer.from(faviconSvg)).resize(size, size).png().toFile(`public/favicon-${size}.png`)
}

await sharp(Buffer.from(faviconSvg)).resize(180, 180).png().toFile('public/apple-touch-icon.png')

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#565657"/>
  <rect x="70" y="70" width="1060" height="490" rx="22" fill="#f4f4f4"/>
  <rect x="70" y="70" width="1060" height="96" rx="22" fill="#f6ce46"/>
  <text x="110" y="133" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="700" fill="#565657">Pentadoc AG</text>
  <text x="110" y="270" font-family="Inter, Arial, sans-serif" font-size="62" font-weight="700" fill="#141617">Digitale Transformation</text>
  <text x="110" y="340" font-family="Inter, Arial, sans-serif" font-size="62" font-weight="700" fill="#141617">für Versicherer</text>
  <text x="110" y="420" font-family="Inter, Arial, sans-serif" font-size="30" font-weight="500" fill="#565657">Input Management, Anliegenmanagement, CCM, IT-Strategie und Migration.</text>
  <rect x="110" y="480" width="290" height="58" rx="8" fill="#ffffff" stroke="#f6ce46" stroke-width="4"/>
  <text x="137" y="518" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="700" fill="#565657">Erstgespräch anfragen</text>
  <circle cx="994" cy="292" r="88" fill="#565657"/>
  <path d="M952 255h74c36 0 61 24 61 58s-25 58-61 58h-38v-36h36c14 0 24-8 24-22s-10-22-24-22h-31v80h-41V255z" fill="#f6ce46"/>
  <path d="M1080 394l-42-42 23-23 42 42-23 23z" fill="#ffffff"/>
</svg>`

await sharp(Buffer.from(ogSvg)).png().toFile('public/og-image.png')

const omnichannelOgSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#141414"/>
  <rect x="62" y="62" width="1076" height="506" rx="24" fill="#f6f5f1"/>
  <rect x="62" y="62" width="1076" height="96" rx="24" fill="#ffcc00"/>
  <text x="108" y="124" font-family="Inter, Arial, sans-serif" font-size="34" font-weight="700" fill="#141414">Pentadoc AG</text>
  <text x="108" y="245" font-family="Inter, Arial, sans-serif" font-size="56" font-weight="700" fill="#141414">Omnichannel Kundenservice</text>
  <text x="108" y="312" font-family="Inter, Arial, sans-serif" font-size="56" font-weight="700" fill="#141414">Frankfurt</text>
  <text x="108" y="394" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="500" fill="#626269">Beratung für Versicherer, Krankenkassen und</text>
  <text x="108" y="434" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="500" fill="#626269">dokumentennahe Kundenservice-Prozesse.</text>
  <rect x="108" y="486" width="338" height="58" rx="8" fill="#141414"/>
  <text x="135" y="524" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="700" fill="#ffcc00">Suchterm SEO GEO Page</text>
  <circle cx="950" cy="310" r="124" fill="#141414"/>
  <circle cx="950" cy="310" r="72" fill="#ffcc00"/>
  <circle cx="816" cy="214" r="44" fill="#ffffff" stroke="#141414" stroke-width="8"/>
  <circle cx="1082" cy="214" r="44" fill="#ffffff" stroke="#141414" stroke-width="8"/>
  <circle cx="816" cy="430" r="44" fill="#ffffff" stroke="#141414" stroke-width="8"/>
  <circle cx="1082" cy="430" r="44" fill="#ffffff" stroke="#141414" stroke-width="8"/>
  <path d="M847 238l54 40M1051 238l-54 40M847 406l54-40M1051 406l-54-40" stroke="#141414" stroke-width="12" stroke-linecap="round"/>
  <text x="900" y="322" font-family="Inter, Arial, sans-serif" font-size="28" font-weight="800" fill="#141414">FFM</text>
</svg>`

await sharp(Buffer.from(omnichannelOgSvg)).png().toFile('public/og-omnichannel-frankfurt.png')
