import { ArrowRight, Phone } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useT } from '../lib/i18n'

export function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const t = useT()

  useEffect(() => {
    const onScroll = () => {
      const footer = document.querySelector('footer')
      const footerTop = footer?.getBoundingClientRect().top ?? Number.POSITIVE_INFINITY
      setVisible(window.scrollY > 620 && footerTop > window.innerHeight + 140)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <div
      className={`sticky-cta ${visible ? 'sticky-cta-visible' : ''}`}
      aria-hidden={!visible}
      data-testid="sticky-cta"
    >
      <div className="sticky-cta-panel">
        <div className="hidden min-w-0 md:block">
          <p className="text-sm font-semibold leading-5 text-white">{t.stickyCta.headline}</p>
          <p className="text-xs leading-5 text-white/[0.72]">{t.stickyCta.sub}</p>
        </div>
        <div className="flex w-full items-center justify-end gap-2 md:w-auto">
          <a className="sticky-phone" href="tel:+4993126079110">
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">{t.stickyCta.call}</span>
          </a>
          <a className="sticky-button" href="#kontakt">
            {t.stickyCta.request}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  )
}
