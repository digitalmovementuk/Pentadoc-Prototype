import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import logo from '../assets/images/pentadoc-logo-small.webp'
import { navLinks } from '../content'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
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
        Zum Inhalt springen
      </a>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-ink/10 bg-white/90 shadow-sm backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <nav
          className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Hauptnavigation"
        >
          <a className="focus-ring flex min-h-11 items-center gap-3 rounded-md" href="#top">
            <img className="h-8 w-auto" src={logo} alt="Pentadoc AG" width="177" height="48" />
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className={`nav-link ${isScrolled ? 'text-ink' : 'text-white'}`}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              className={`focus-ring rounded-md px-3 py-2 text-sm font-semibold leading-5 ${
                isScrolled ? 'text-ink' : 'text-white'
              }`}
              href="tel:+4993126079110"
            >
              +49 931 2607911-0
            </a>
            <a className="btn-primary" href="#kontakt">
              Kontakt
            </a>
          </div>

          <button
            className={`focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-md lg:hidden ${
              isScrolled ? 'bg-white text-ink' : 'bg-white/[0.12] text-white backdrop-blur-sm'
            }`}
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsOpen(true)}
          >
            <Menu aria-hidden="true" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="fixed inset-0 z-[60] bg-ink/55 lg:hidden"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            onClick={closeMenu}
          >
            <motion.div
              id="mobile-menu"
              className="ml-auto flex h-full w-[min(88vw,380px)] flex-col bg-white p-5 shadow-2xl"
              initial={reduceMotion ? false : { x: 380 }}
              animate={{ x: 0 }}
              exit={reduceMotion ? undefined : { x: 380 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4">
                <img className="h-8 w-auto" src={logo} alt="Pentadoc AG" width="177" height="48" />
                <button
                  className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-ink"
                  type="button"
                  aria-label="Navigation schließen"
                  onClick={closeMenu}
                >
                  <X aria-hidden="true" />
                </button>
              </div>
              <motion.div
                className="mt-10 grid gap-2"
                initial="closed"
                animate="open"
                variants={{
                  open: { transition: { staggerChildren: reduceMotion ? 0 : 0.06 } },
                  closed: {},
                }}
              >
                {navLinks.map((link) => (
                  <motion.a
                    key={link.href}
                    className="focus-ring rounded-md px-2 py-3 text-lg font-semibold leading-7 text-ink"
                    href={link.href}
                    onClick={closeMenu}
                    variants={{
                      open: { opacity: 1, y: 0 },
                      closed: { opacity: 0, y: 10 },
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </motion.div>
              <a className="btn-primary mt-8 w-full" href="#kontakt" onClick={closeMenu}>
                Kontakt aufnehmen
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  )
}
