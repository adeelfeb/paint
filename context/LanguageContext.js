'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { translations, isRtl } from '../lib/translations'

const STORAGE_KEY = 'paint-pro-locale'

const LanguageContext = createContext({
  locale: 'en',
  setLocale: () => {},
  t: () => '',
  isRtl: false,
})

export function LanguageProvider({ children }) {
  const [locale, setLocaleState] = useState('ar')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored && (stored === 'en' || stored === 'ar')) setLocaleState(stored)
    } catch (_) {}
    setMounted(true)
  }, [])

  const setLocale = (next) => {
    if (next !== 'en' && next !== 'ar') return
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch (_) {}
  }

  useEffect(() => {
    if (!mounted) return
    const dir = locale === 'ar' ? 'rtl' : 'ltr'
    const lang = locale === 'ar' ? 'ar' : 'en'
    document.documentElement.setAttribute('dir', dir)
    document.documentElement.setAttribute('lang', lang)
  }, [locale, mounted])

  const t = (key, vars = {}) => {
    const keys = key.split('.')
    let obj = translations[locale] || translations.en
    for (const k of keys) {
      obj = obj?.[k]
    }
    let str = typeof obj === 'string' ? obj : (obj ?? key)
    Object.keys(vars).forEach((v) => {
      str = str.replace(new RegExp(`{{${v}}}`, 'g'), vars[v])
    })
    return str
  }

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t,
        isRtl: isRtl(locale),
        mounted,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
