'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { CAPABILITY_PDF_PATH } from '../../lib/paintConstants'
import BrandLogo from './BrandLogo'

export default function PaintHero() {
  return (
    <section className="relative overflow-hidden pt-24 sm:pt-28 pb-16 sm:pb-20 border-b border-slate-200/80 bg-white">
      {/* VIRON hero background: matte + industrial green glow + subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-brand-50/40 to-white" aria-hidden />
      <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-brand-200/35 blur-3xl" aria-hidden />
      <div className="absolute -bottom-28 -left-24 w-[30rem] h-[30rem] rounded-full bg-brand-accent-muted/70 blur-3xl" aria-hidden />
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
                <div className="text-slate-900 font-extrabold tracking-[0.35em] text-sm uppercase">
                  VIRON
                </div>
                <div className="text-slate-500 text-xs font-semibold tracking-wide">
                  Industrial Coatings & Automotive Systems
                </div>
              </div>
            </div>

            <p className="text-brand-800 font-semibold text-xs sm:text-sm uppercase tracking-[0.22em] mb-3">
              Built for harsh environments
            </p>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-950 leading-[1.05] tracking-tight">
              Coatings that protect.<br className="hidden sm:block" /> Systems that perform.
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-xl font-medium">
              Epoxy, polyurethane, and corrosion-control solutions with clear system layering, readable specs, and QR-linked TDS.
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
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-950 hover:bg-slate-900 text-white font-semibold rounded-xl shadow-md transition-colors no-underline"
              >
                <FileText className="w-5 h-5" />
                Download TDS / Profile (PDF)
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-900 font-semibold rounded-xl border border-slate-300 transition-colors no-underline shadow-sm"
              >
                View products
                <ArrowRight className="w-5 h-5 text-brand-800" />
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-white/70 backdrop-blur p-5 shadow-lg shadow-slate-200/60">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { Icon: MapPin, label: 'Oman-based' },
                  { Icon: Phone, label: '+968 98539796' },
                  { Icon: Mail, label: 'M-alhouj@hpc-om.com' },
                  { Icon: FileText, label: 'QR-linked TDS' },
                ].map(({ Icon, label }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-slate-200 bg-white p-4 flex items-center gap-3"
                  >
                    <span className="w-10 h-10 rounded-xl bg-brand-50 text-brand-900 flex items-center justify-center ring-1 ring-brand-200/70">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-slate-900 truncate">{label}</div>
                      <div className="text-xs text-slate-500">Trusted industrial finish</div>
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
