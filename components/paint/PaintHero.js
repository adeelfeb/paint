'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { CAPABILITY_PDF_PATH } from '../../lib/paintConstants'
import BrandLogo from './BrandLogo'

export default function PaintHero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 pb-20 sm:pb-24 border-b border-slate-200/80 bg-white">
      {/* Light background — matches rest of site; no green wash behind header */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/40 to-white"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15 118 110 / 0.12) 1px, transparent 0)`,
          backgroundSize: '28px 28px',
        }}
        aria-hidden
      />
      <div
        className="absolute top-0 right-0 w-[min(100%,28rem)] h-[min(50vh,20rem)] bg-gradient-to-bl from-brand-100/50 to-transparent rounded-bl-[40%]"
        aria-hidden
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border border-slate-200/90 shadow-md shadow-slate-200/50 mb-6">
            <BrandLogo variant="default" className="w-14 h-14 sm:w-16 sm:h-16" aria-hidden />
          </div>
          <p className="text-brand-700 font-semibold text-xs sm:text-sm uppercase tracking-[0.2em] mb-3">
            Oil & Gas Capability Profile
          </p>
          <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-bold text-slate-900 leading-tight tracking-tight max-w-4xl mx-auto">
            MOHMMED AL HJOUJ FOR INVESTMENT SPC
          </h1>
          <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Industrial Coatings • Corrosion Protection • Epoxy Systems
          </p>
          <p className="mt-2 text-slate-500 text-sm">Sultanate of Oman</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm text-slate-700"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            <span className="text-brand-800 font-semibold">C.R.</span>
            1550745
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
            <MapPin className="w-4 h-4 text-brand-600 shrink-0" />
            PC: 121 Mabela Industrial Area
          </span>
          <a
            href="tel:+96898539796"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm hover:border-brand-300 hover:bg-brand-50/50 text-slate-800 no-underline transition-colors"
          >
            <Phone className="w-4 h-4 text-brand-600 shrink-0" />
            +968 98539796
          </a>
          <a
            href="mailto:M-alhouj@hpc-om.com"
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm hover:border-brand-300 hover:bg-brand-50/50 text-slate-800 no-underline transition-colors"
          >
            <Mail className="w-4 h-4 text-brand-600 shrink-0" />
            M-alhouj@hpc-om.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22 }}
          className="mt-10 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3"
        >
          <Link
            href={CAPABILITY_PDF_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-800 hover:bg-brand-900 text-white font-semibold rounded-xl shadow-md shadow-brand-900/15 transition-colors no-underline"
          >
            <FileText className="w-5 h-5" />
            Download Capability Profile (PDF)
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl border border-slate-300 transition-colors no-underline shadow-sm"
          >
            View products
            <ArrowRight className="w-5 h-5 text-brand-700" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
