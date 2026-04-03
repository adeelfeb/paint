'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { CAPABILITY_PDF_PATH } from '../../lib/paintConstants'
import BrandLogo from './BrandLogo'

export default function PaintHero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-20 border-b border-brand-200/30 bg-gradient-to-b from-white via-brand-50/50 to-brand-50/30">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50/30 via-transparent to-brand-accent-muted/25" aria-hidden />
      <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-brand-300/25 blur-3xl" aria-hidden />
      <div className="absolute top-1/2 -right-16 w-72 h-72 rounded-full bg-brand-600/10 blur-2xl" aria-hidden />
      <div className="absolute -bottom-28 -left-24 w-[30rem] h-[30rem] rounded-full bg-brand-accent-muted/80 blur-3xl" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(17,24,39,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,24,39,0.08) 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
        >
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-3 mb-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm">
                <BrandLogo variant="default" className="w-8 h-8" aria-hidden />
              </span>
              <div className="leading-tight">
                <div className="text-slate-900 font-extrabold tracking-[0.12em] text-xs sm:text-sm uppercase leading-tight">
                  MOHAMMAD ALHJOUJ
                </div>
                <div className="text-slate-500 text-[10px] sm:text-xs font-semibold tracking-wide">
                  FOR INVESTMENT SPC
                </div>
              </div>
            </div>

            <p className="text-brand-700 font-semibold text-[10px] sm:text-xs uppercase tracking-[0.2em] mb-2.5 max-w-md">
              Coatings • Waterproofing • Chemicals
            </p>
            <h1 className="text-2xl sm:text-4xl font-black text-brand-950 leading-[1.12] tracking-tight">
              <span className="text-slate-900">Vision 2040 aligned.</span>{' '}
              <span className="bg-gradient-to-r from-brand-700 via-brand-600 to-brand-800 bg-clip-text text-transparent">
                Industrial solutions.
              </span>
            </h1>
            <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-md font-normal leading-relaxed">
              HPC & UNICHEM partner — oil & gas, infrastructure, construction.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.12 }}
              className="mt-7 flex flex-col sm:flex-row flex-wrap items-start gap-3"
            >
              <Link
                href={CAPABILITY_PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-brand-900 to-brand-800 hover:from-brand-950 hover:to-brand-900 text-white font-semibold rounded-xl shadow-brand-md transition-all no-underline"
              >
                <FileText className="w-5 h-5" />
                Download TDS / Profile (PDF)
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-brand-50/80 text-brand-950 font-semibold rounded-xl border border-brand-200/80 transition-all no-underline shadow-brand-sm"
              >
                View products
                <ArrowRight className="w-5 h-5 text-brand-700" />
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-brand-200/50 bg-white/85 backdrop-blur-md p-5 shadow-brand-glow">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { Icon: MapPin, label: 'Sandan Industrial City, Muscat' },
                  {
                    Icon: Phone,
                    label: '+968 9853 9796 / +968 7600 9006',
                    sub: 'Head office',
                  },
                  { Icon: Mail, label: 'M-alhouj@hpc-om.com', sub: 'hb.sales@hpc-om.co' },
                  { Icon: FileText, label: 'JSRS • ISO-aligned partners', sub: 'TDS & SDS on request' },
                ].map(({ Icon, label, sub }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-brand-100/90 bg-gradient-to-br from-white to-brand-50/40 p-4 flex items-center gap-3 shadow-sm"
                  >
                    <span className="w-10 h-10 rounded-xl bg-brand-100/90 text-brand-800 flex items-center justify-center ring-1 ring-brand-200/50 shadow-sm">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-slate-900 leading-snug">{label}</div>
                      <div className="text-xs text-slate-500">{sub ?? 'Sultanate of Oman'}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
