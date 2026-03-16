'use client'

import { motion } from 'framer-motion'
import ContactForm from '../designndev/ContactForm'

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-800/50 border-t border-slate-700/50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get a Quote
          </h2>
          <p className="text-slate-400 text-lg">
            Need industrial coatings or corrosion protection? Tell us your requirements and we&apos;ll get back to you.
          </p>
        </motion.div>
        <ContactForm showHeading={false} />
      </div>
    </section>
  )
}
