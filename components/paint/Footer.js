'use client'

import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

export default function PaintFooter() {
  const year = new Date().getFullYear()
  const { t } = useLanguage()

  return (
    <footer className="bg-slate-100 text-slate-800 border-t border-slate-200">
      <section className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-slate-900">MOHMMED AL HJOUJ FOR INVESTMENT SPC</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Industrial Coatings • Corrosion Protection • Epoxy Systems. Serving Oil & Gas, petrochemical, mining, defense, and infrastructure in the Sultanate of Oman and the region.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-900">{t('footer.quickLinks')}</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li><Link href="/#overview" className="hover:text-slate-900 transition-colors no-underline">{t('nav.overview')}</Link></li>
                <li><Link href="/#capabilities" className="hover:text-slate-900 transition-colors no-underline">{t('nav.capabilities')}</Link></li>
                <li><Link href="/#standards" className="hover:text-slate-900 transition-colors no-underline">{t('nav.standards')}</Link></li>
                <li><Link href="/#experience" className="hover:text-slate-900 transition-colors no-underline">{t('nav.experience')}</Link></li>
                <li><Link href="/#products" className="hover:text-slate-900 transition-colors no-underline">{t('nav.products')}</Link></li>
                <li><Link href="/#contact" className="hover:text-slate-900 transition-colors no-underline">{t('nav.contact')}</Link></li>
                <li><a href="/pdf/capability-profile.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors no-underline">{t('nav.downloadPdf')}</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-900">{t('footer.contact')}</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-500 flex-shrink-0" />
                  PC: 121 Mabela Industrial Area, Sultanate of Oman
                </li>
                <li>
                  <a href="tel:+96898539796" className="flex items-center gap-2 hover:text-slate-900 no-underline">
                    <Phone className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    +968 98539796
                  </a>
                </li>
                <li>
                  <a href="mailto:M-alhouj@hpc-om.com" className="flex items-center gap-2 hover:text-slate-900 no-underline">
                    <Mail className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    M-alhouj@hpc-om.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
          <p>© {year} MOHMMED AL HJOUJ FOR INVESTMENT SPC. C.R. No.: 1550745. All rights reserved.</p>
        </div>
      </section>
    </footer>
  )
}
