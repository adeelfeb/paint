'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../../context/LanguageContext'
import { CAPABILITY_PDF_PATH } from '../../lib/paintConstants'
import BrandLogo from './BrandLogo'

const NAV_ITEMS = [
  { href: '/', key: 'home' },
  { href: '/overview', key: 'overview' },
  { href: '/capabilities', key: 'capabilities' },
  { href: '/standards', key: 'standards' },
  { href: '/experience', key: 'experience' },
  { href: '/products', key: 'products' },
  { href: '/company-contact', key: 'contact' },
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
    return pathname.startsWith(href)
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
          className={`flex items-center justify-between gap-4 rounded-xl px-3 sm:px-4 py-2.5 min-h-[56px] transition-all duration-300 bg-white border border-slate-200/90 ${
            scrolled ? 'shadow-md shadow-slate-200/60' : 'shadow-sm shadow-slate-200/40'
          }`}
        >
          <Link
            href="/"
            className="group flex items-center justify-center no-underline shrink-0 rounded-full p-0.5 ring-1 ring-brand-200/60 bg-white shadow-sm hover:shadow-md hover:ring-brand-300 transition-all"
            aria-label="Home — MOHMMED AL HJOUJ FOR INVESTMENT SPC"
          >
            <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-50 to-brand-100/80">
              <BrandLogo variant="default" className="w-[22px] h-[22px] sm:w-[26px] sm:h-[26px] group-hover:scale-[1.03] transition-transform" />
            </span>
          </Link>

          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all no-underline whitespace-nowrap ${
                    isActive(item.href)
                      ? 'text-brand-900 bg-brand-50 ring-1 ring-brand-200/60'
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <a
              href={CAPABILITY_PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center h-9 px-4 text-sm font-semibold text-white bg-brand-800 hover:bg-brand-900 rounded-lg no-underline transition-colors shadow-sm"
            >
              {t('nav.downloadPdf')}
            </a>
            <div className="hidden md:flex items-center rounded-lg border border-brand-200 overflow-hidden bg-brand-50/50">
              <button
                type="button"
                onClick={() => setLocale('en')}
                className={`px-2.5 py-1.5 text-xs font-medium transition-colors ${locale === 'en' ? 'bg-brand-800 text-white' : 'text-slate-600 hover:bg-brand-100'}`}
                aria-label="English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLocale('ar')}
                className={`px-2.5 py-1.5 text-xs font-medium transition-colors ${locale === 'ar' ? 'bg-brand-800 text-white' : 'text-slate-600 hover:bg-brand-100'}`}
                aria-label="العربية"
              >
                عر
              </button>
            </div>
            <button
              type="button"
              onClick={() => setIsMenuOpen((o) => !o)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-brand-800 hover:text-brand-900 hover:bg-brand-50"
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
              <div className="rounded-xl bg-white border border-brand-100 shadow-xl py-2 px-2">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2.5 text-sm font-medium rounded-lg no-underline ${
                      isActive(item.href) ? 'text-brand-900 bg-brand-50' : 'text-slate-700 hover:bg-slate-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t(`nav.${item.key}`)}
                  </Link>
                ))}
                <a
                  href={CAPABILITY_PDF_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-center py-2.5 text-sm font-semibold text-white bg-brand-800 hover:bg-brand-900 rounded-lg no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.downloadPdf')}
                </a>
                <div className="flex justify-center gap-2 mt-2 pt-2 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => { setLocale('en'); setIsMenuOpen(false); }}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg ${locale === 'en' ? 'bg-brand-800 text-white' : 'bg-brand-50 text-slate-600'}`}
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => { setLocale('ar'); setIsMenuOpen(false); }}
                    className={`px-3 py-1.5 text-sm font-medium rounded-lg ${locale === 'ar' ? 'bg-brand-800 text-white' : 'bg-brand-50 text-slate-600'}`}
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
