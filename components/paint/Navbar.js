'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'

const WHATSAPP_NUMBER = '9230999670475'

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
    return pathname.startsWith(href)
  }

  const navLinks = [
    { href: '/', key: 'home' },
    { href: '/#products', key: 'products' },
    { href: `https://wa.me/${WHATSAPP_NUMBER}`, key: 'contact', external: true },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5">
        <div
          className={`flex items-center justify-between gap-4 rounded-xl px-3 sm:px-4 py-2.5 min-h-[52px] transition-all duration-300 ${
            scrolled
              ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border border-teal-900/30'
              : 'bg-slate-900/90 backdrop-blur-sm border border-slate-700/50'
          }`}
        >
          <Link
            href="/"
            className="text-lg sm:text-xl font-bold no-underline flex items-center gap-1.5 tracking-tight"
            aria-label="Home"
          >
            <span className="text-teal-400">Paint</span>
            <span className="text-slate-300">Pro</span>
          </Link>

          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-1 sm:gap-2">
              {navLinks.map((item) =>
                item.external ? (
                  <a
                    key={item.href}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 text-sm font-medium rounded-lg transition-all no-underline hover:no-underline focus:no-underline text-teal-400 bg-teal-500/10 hover:bg-teal-500/20 hover:text-teal-300"
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-all no-underline hover:no-underline focus:no-underline ${
                      isActive(item.href)
                        ? 'text-teal-400 bg-teal-500/10'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                )
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="hidden md:flex items-center gap-2">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center h-9 px-4 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-lg no-underline hover:no-underline transition-colors"
              >
                {t('nav.contact')}
              </a>
              <div className="flex items-center rounded-lg border border-slate-600 overflow-hidden">
                <button
                  type="button"
                  onClick={() => setLocale('en')}
                  className={`px-2.5 py-1.5 text-xs font-medium transition-colors ${locale === 'en' ? 'bg-teal-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
                  aria-label="English"
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLocale('ar')}
                  className={`px-2.5 py-1.5 text-xs font-medium transition-colors ${locale === 'ar' ? 'bg-teal-600 text-white' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
                  aria-label="العربية"
                >
                  عر
                </button>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsMenuOpen((o) => !o)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50"
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
              className="md:hidden mt-2 overflow-hidden"
            >
              <div className="rounded-xl bg-slate-900/95 backdrop-blur-md border border-slate-700/50 shadow-xl py-2 px-2">
                {navLinks.map((item) =>
                  item.external ? (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2.5 text-sm font-medium rounded-lg no-underline hover:no-underline text-teal-400 bg-teal-500/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t(`nav.${item.key}`)}
                    </a>
                  ) : (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-3 py-2.5 text-sm font-medium rounded-lg no-underline hover:no-underline ${
                        isActive(item.href) ? 'text-teal-400 bg-teal-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {t(`nav.${item.key}`)}
                    </Link>
                  )
                )}
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-center py-2.5 text-sm font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-lg no-underline hover:no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.contact')}
                </a>
                <div className="flex justify-center gap-2 mt-2">
                  <button
                    type="button"
                    onClick={() => { setLocale('en'); setIsMenuOpen(false); }}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg ${locale === 'en' ? 'bg-teal-600 text-white' : 'bg-slate-700 text-slate-400'}`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => { setLocale('ar'); setIsMenuOpen(false); }}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg ${locale === 'ar' ? 'bg-teal-600 text-white' : 'bg-slate-700 text-slate-400'}`}
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
