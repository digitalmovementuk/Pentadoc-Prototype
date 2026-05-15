import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import logo from '../assets/images/pentadoc-logo-small.webp'
import { useT } from '../lib/i18n'
import { LanguagePicker } from './LanguagePicker'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const reduceMotion = useReducedMotion()
  const t = useT()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const closeMenu = () => setIsOpen(false)

  return (
    <>
      <a className="skip-link" href="#main-content">
        {t.nav.skipToContent}
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 px-3 pt-3 transition-all duration-300 sm:px-5 ${
          isScrolled ? 'pb-3' : 'pb-0'
        }`}
      >
        <nav
          className={`mx-auto flex h-16 max-w-7xl items-center justify-between rounded-lg border px-3 shadow-nav backdrop-blur-xl transition-all duration-300 sm:h-[72px] sm:px-5 ${
            isScrolled
              ? 'border-ink/10 bg-white/95'
              : 'border-white/[0.55] bg-white/[0.86]'
          }`}
          aria-label={t.nav.aria}
        >
          <a className="focus-ring flex min-h-11 items-center rounded-md" href="#top">
            <img className="h-8 w-auto sm:h-9" src={logo} alt="Pentadoc AG" width="177" height="48" />
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {t.nav.links.map((link) => (
              <a key={link.href} className="nav-link" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a className="nav-phone" href="tel:+4993126079110">
              <Phone className="h-4 w-4" aria-hidden="true" />
              {t.nav.phoneLabel}
            </a>
            <LanguagePicker surface="light" compact={isScrolled} />
            <a className="btn-primary min-w-[150px]" href="#kontakt">
              {t.nav.cta}
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguagePicker surface="light" compact />
            <button
              className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-md bg-ink text-white"
              type="button"
              aria-label={t.nav.openMenu}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen(true)}
            >
              <Menu aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink/70 lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            onClick={closeMenu}
          >
            <motion.div
              id="mobile-menu"
              className="ml-auto flex h-full w-[min(88vw,390px)] flex-col bg-white p-5 shadow-2xl"
              initial={reduceMotion ? false : { x: 390 }}
              animate={{ x: 0 }}
              exit={reduceMotion ? undefined : { x: 390 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4">
                <img className="h-9 w-auto" src={logo} alt="Pentadoc AG" width="177" height="48" />
                <button
                  className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-ink/10 text-ink"
                  type="button"
                  aria-label={t.nav.closeMenu}
                  onClick={closeMenu}
                >
                  <X aria-hidden="true" />
                </button>
              </div>

              <div className="mt-9 grid gap-2">
                {t.nav.links.map((link) => (
                  <a
                    key={link.href}
                    className="mobile-link"
                    href={link.href}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-auto grid gap-3 border-t border-ink/10 pt-5">
                <a className="btn-primary w-full" href="#kontakt" onClick={closeMenu}>
                  {t.nav.mobileSendRequest}
                </a>
                <a className="btn-secondary w-full" href="tel:+4993126079110">
                  {t.nav.mobileCallDirect}
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
