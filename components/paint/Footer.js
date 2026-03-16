'use client'

import Link from 'next/link'
import { useLanguage } from '../../context/LanguageContext'

const WHATSAPP_NUMBER = '9230999670475'

export default function PaintFooter() {
  const year = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-teal-400">Paint Pro</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {t('footer.tagline')}
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-200">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/" className="hover:text-teal-400 transition-colors no-underline">{t('nav.home')}</Link></li>
                <li><Link href="/#products" className="hover:text-teal-400 transition-colors no-underline">{t('nav.products')}</Link></li>
                <li><Link href="/#contact" className="hover:text-teal-400 transition-colors no-underline">{t('footer.getQuote')}</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-teal-400 transition-colors no-underline">{t('footer.privacyPolicy')}</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-200">{t('footer.contact')}</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-400 transition-colors no-underline"
                  >
                    {t('footer.whatsapp')}
                  </a>
                </li>
                <li><Link href="/#contact" className="hover:text-teal-400 transition-colors no-underline">{t('footer.getQuote')}</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
          <p>© {year} {t('footer.copyright')}</p>
        </div>
      </section>
    </footer>
  )
}
