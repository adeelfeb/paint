'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { CAPABILITY_PDF_PATH } from '../../lib/paintConstants'
import BrandLogo from './BrandLogo'

export default function PaintFooter() {
  const year = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="bg-brand-900 text-brand-100 border-t border-brand-800">
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 border border-white/20 ring-1 ring-white/10">
                  <BrandLogo variant="light" className="w-7 h-7" aria-hidden />
                </span>
                <span className="text-white font-semibold tracking-[0.35em] text-sm uppercase">
                  MAH
                </span>
                <span className="sr-only">MOHMMED AL HJOUJ FOR INVESTMENT SPC</span>
              </div>
              <p className="text-brand-200/90 text-sm leading-relaxed">
                Industrial Coatings • Corrosion Protection • Epoxy Systems. Serving Oil & Gas, petrochemical, mining, defense, and infrastructure in the Sultanate of Oman and the region.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2 text-brand-200 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors no-underline">{t('nav.home')}</Link></li>
                <li><Link href="/overview" className="hover:text-white transition-colors no-underline">{t('nav.overview')}</Link></li>
                <li><Link href="/capabilities" className="hover:text-white transition-colors no-underline">{t('nav.capabilities')}</Link></li>
                <li><Link href="/standards" className="hover:text-white transition-colors no-underline">{t('nav.standards')}</Link></li>
                <li><Link href="/experience" className="hover:text-white transition-colors no-underline">{t('nav.experience')}</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors no-underline">{t('nav.products')}</Link></li>
                <li><Link href="/company-contact" className="hover:text-white transition-colors no-underline">{t('nav.contact')}</Link></li>
                <li><a href={CAPABILITY_PDF_PATH} target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent-light transition-colors no-underline">{t('nav.downloadPdf')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">{t('footer.contact')}</h4>
              <ul className="space-y-2 text-brand-200 text-sm">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-accent-light flex-shrink-0" />
                  PC: 121 Mabela Industrial Area, Sultanate of Oman
                </li>
                <li>
                  <a href="tel:+96898539796" className="flex items-center gap-2 hover:text-white no-underline">
                    <Phone className="w-4 h-4 text-brand-accent-light flex-shrink-0" />
                    +968 98539796
                  </a>
                </li>
                <li>
                  <a href="mailto:M-alhouj@hpc-om.com" className="flex items-center gap-2 hover:text-white no-underline">
                    <Mail className="w-4 h-4 text-brand-accent-light flex-shrink-0" />
                    M-alhouj@hpc-om.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 border-t border-brand-800/80 bg-brand-950/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-brand-300/90 text-sm">
          <p>© {year} MOHMMED AL HJOUJ FOR INVESTMENT SPC. C.R. No.: 1550745. All rights reserved.</p>
        </div>
      </section>
    </footer>
  )
}
