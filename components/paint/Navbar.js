'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

function usePathname() {
  const [pathname, setPathname] = useState('')
  useEffect(() => {
    if (typeof window !== 'undefined') setPathname(window.location.pathname)
    const handlePop = () => setPathname(window.location.pathname)
    window.addEventListener('popstate', handlePop)
    const origPush = history.pushState
    const origReplace = history.replaceState
    history.pushState = (...args) => { origPush.apply(history, args); handlePop() }
    history.replaceState = (...args) => { origReplace.apply(history, args); handlePop() }
    return () => {
      window.removeEventListener('popstate', handlePop)
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  const navLinks = [
    { href: '/', label: 'الرئيسية', labelEn: 'Home' },
    { href: '/#products', label: 'المنتجات', labelEn: 'Products' },
    { href: '/contact', label: 'اتصل بنا', labelEn: 'Contact' },
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
              ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border border-amber-900/30'
              : 'bg-slate-900/90 backdrop-blur-sm border border-slate-700/50'
          }`}
        >
          <Link
            href="/"
            className="text-lg sm:text-xl font-bold no-underline flex items-center gap-1.5 tracking-tight"
            aria-label="Home"
          >
            <span className="text-amber-400">Paint</span>
            <span className="text-slate-300">Pro</span>
          </Link>

          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-1 sm:gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all no-underline ${
                    isActive(item.href)
                      ? 'text-amber-400 bg-amber-500/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {item.labelEn}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="hidden md:flex items-center gap-2">
              <Link
                href="/login"
                className="inline-flex items-center h-9 px-4 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-lg no-underline transition-colors"
              >
                Login
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center h-9 px-4 text-sm font-semibold text-slate-200 bg-slate-700/80 hover:bg-slate-600 rounded-lg no-underline transition-colors border border-slate-600"
              >
                Dashboard
              </Link>
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
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2.5 text-sm font-medium rounded-lg no-underline ${
                      isActive(item.href) ? 'text-amber-400 bg-amber-500/10' : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.labelEn}
                  </Link>
                ))}
                <div className="flex gap-2 pt-2 mt-2 border-t border-slate-700/50 px-2">
                  <Link
                    href="/login"
                    className="flex-1 text-center py-2.5 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-lg no-underline"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/dashboard"
                    className="flex-1 text-center py-2.5 text-sm font-semibold text-slate-200 bg-slate-700 hover:bg-slate-600 rounded-lg no-underline border border-slate-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
