import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { translations, type Lang, type Translations } from './translations'

type LanguageContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}

const STORAGE_KEY = 'pentadoc-lang'

const LanguageContext = createContext<LanguageContextValue | null>(null)

function detectInitialLang(): Lang {
  if (typeof window === 'undefined') return 'de'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'de' || stored === 'en') return stored
  } catch {
    /* ignore */
  }
  const nav = window.navigator?.language?.toLowerCase() ?? ''
  if (nav.startsWith('en')) return 'en'
  return 'de'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => detectInitialLang())

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      window.localStorage.setItem(STORAGE_KEY, l)
    } catch {
      /* ignore */
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = l
    }
  }, [])

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang, setLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within <LanguageProvider>')
  return ctx
}

export function useT() {
  return useLang().t
}
