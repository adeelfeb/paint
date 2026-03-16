'use client'

import { motion } from 'framer-motion'
import ContactForm from '../designndev/ContactForm'
import { MessageCircle } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

export default function ContactSection() {
  const { t } = useLanguage()
  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-slate-800/80 to-slate-900 border-t border-slate-700/50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-teal-500/20 text-teal-400 mb-4">
            <MessageCircle className="w-6 h-6" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {t('contact.getQuoteTitle')}
          </h2>
          <p className="text-slate-400 text-lg max-w-lg mx-auto">
            {t('contact.getQuoteSubtitle')}
          </p>
        </motion.div>
        <ContactForm showHeading={false} theme="paint" />
      </div>
    </section>
  )
}
