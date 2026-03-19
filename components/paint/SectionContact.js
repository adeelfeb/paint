'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, FileText, MessageCircle } from 'lucide-react'
import ContactForm from '../designndev/ContactForm'
import { useLanguage } from '../../context/LanguageContext'
import { CAPABILITY_PDF_PATH } from '../../lib/paintConstants'

const CONTRACTORS = [
  'Galfar Engineering & Contracting',
  'Al Rajhi Ready Mix LLC',
  'Galfar Asperr Ready Mix',
]

export default function SectionContact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="scroll-mt-20">
      {/* Oman Market & Contractor Support – light background for contrast */}
      <div className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2"
          >
            Oman Market & Contractor Support
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 mb-10"
          >
            The company supplies industrial coating materials and protection systems to infrastructure and industrial contractors in the Sultanate of Oman.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl bg-slate-50 p-6 border border-slate-200 mb-8"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Contractor Support</h3>
            <ul className="space-y-2 text-slate-600 text-sm">
              {CONTRACTORS.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-slate-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl bg-slate-50 p-6 border border-slate-200 mb-10"
          >
            <h3 className="text-lg font-semibold text-slate-900 mb-3">Commitment</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              MOHMMED AL HJOUJ FOR INVESTMENT SPC is committed to supporting Oil & Gas operators and contractors with technically compliant coating systems, reliable material supply, and long-term asset protection solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Get in touch – distinct section with form (clearly visible, not white-on-white) */}
      <div className="py-16 sm:py-20 bg-slate-100 border-b border-slate-200">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-slate-800 text-white mb-4">
              <MessageCircle className="w-6 h-6" />
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              {t('contact.getQuoteTitle')}
            </h2>
            <p className="text-slate-600 text-lg">
              {t('contact.getQuoteSubtitle')}
            </p>
          </motion.div>
          <ContactForm showHeading={false} theme="default" />
        </div>
      </div>

      {/* Contact info card – dark card for contrast */}
      <div className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-slate-800 text-white p-6 sm:p-8 shadow-xl"
          >
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <p className="font-semibold text-slate-200 mb-4">MOHMMED AL HJOUJ FOR INVESTMENT SPC</p>
            <ul className="space-y-2 text-slate-300 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-slate-400">C.R. No.</span> 1550745
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />
                PC: 121 Mabela Industrial Area, Sultanate of Oman
              </li>
              <li>
                <a href="tel:+96898539796" className="flex items-center gap-2 hover:text-white no-underline">
                  <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  Mobile: +968 98539796
                </a>
              </li>
              <li>
                <a href="mailto:M-alhouj@hpc-om.com" className="flex items-center gap-2 hover:text-white no-underline">
                  <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  M-alhouj@hpc-om.com
                </a>
              </li>
            </ul>
            <a
              href={CAPABILITY_PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-teal-300 hover:text-teal-200 no-underline"
            >
              <FileText className="w-4 h-4" />
              {t('nav.downloadPdf')}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
