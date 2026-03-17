'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

function usePathname() {
  const [pathname, setPathname] = useState('')
  useEffect(() => {
    setPathname(window.location.pathname)
    const scheduleUpdate = () => {
      queueMicrotask(() => setPathname(window.location.pathname))
    }
    window.addEventListener('popstate', scheduleUpdate)
    const origPush = history.pushState
    const origReplace = history.replaceState
    history.pushState = (...args) => { origPush.apply(history, args); scheduleUpdate() }
    history.replaceState = (...args) => { origReplace.apply(history, args); scheduleUpdate() }
    return () => {
      window.removeEventListener('popstate', scheduleUpdate)
      history.pushState = origPush
      history.replaceState = origReplace
    }
  }, [])
  return pathname
}

const SECTION_KEYS = [
  { href: '/#overview', key: 'overview' },
  { href: '/#capabilities', key: 'capabilities' },
  { href: '/#standards', key: 'standards' },
  { href: '/#experience', key: 'experience' },
  { href: '/#products', key: 'products' },
  { href: '/#contact', key: 'contact' },
]

export default function PaintNavbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { locale, setLocale, t } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href) => {
    if (href === '/') return pathname === '/'
    if (href.startsWith('http')) return false
    return pathname.startsWith(href) || (href === '/#products' && pathname.startsWith('/products'))
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5">
        <div
          className={`flex items-center justify-between gap-4 rounded-xl px-3 sm:px-4 py-2.5 min-h-[56px] transition-all duration-300 ${
            scrolled
              ? 'bg-white/98 backdrop-blur-md shadow-md border border-slate-200'
              : 'bg-white/95 backdrop-blur-sm border border-slate-100'
          }`}
        >
          <Link
            href="/"
            className="flex items-center gap-2 no-underline text-slate-800 shrink-0"
            aria-label="Home"
          >
            <Image
              src="/logo.jpeg"
              alt="MOHMMED AL HJOUJ FOR INVESTMENT SPC"
              width={140}
              height={44}
              className="h-8 w-auto max-h-10 object-contain object-left"
              priority
            />
          </Link>

          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center gap-1">
              {SECTION_KEYS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all no-underline whitespace-nowrap ${
                    isActive(item.href)
                      ? 'text-slate-900 bg-slate-100'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href="/pdf/capability-profile.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center h-9 px-4 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg no-underline transition-colors"
            >
              {t('nav.downloadPdf')}
            </a>
            <div className="hidden md:flex items-center rounded-lg border border-slate-200 overflow-hidden bg-slate-50">
              <button
                type="button"
                onClick={() => setLocale('en')}
                className={`px-2.5 py-1.5 text-xs font-medium transition-colors ${locale === 'en' ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                aria-label="English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLocale('ar')}
                className={`px-2.5 py-1.5 text-xs font-medium transition-colors ${locale === 'ar' ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
                aria-label="العربية"
              >
                عر
              </button>
            </div>
            <button
              type="button"
              onClick={() => setIsMenuOpen((o) => !o)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden mt-2 overflow-hidden"
            >
              <div className="rounded-xl bg-white border border-slate-200 shadow-xl py-2 px-2">
                {SECTION_KEYS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2.5 text-sm font-medium rounded-lg no-underline ${
                      isActive(item.href) ? 'text-slate-900 bg-slate-100' : 'text-slate-600 hover:bg-slate-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                ))}
                <a
                  href="/pdf/capability-profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-center py-2.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.downloadPdf')}
                </a>
                <div className="flex justify-center gap-2 mt-2 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => { setLocale('en'); setIsMenuOpen(false); }}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg ${locale === 'en' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600'}`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => { setLocale('ar'); setIsMenuOpen(false); }}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg ${locale === 'ar' ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-600'}`}
                  >
                    العربية
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
