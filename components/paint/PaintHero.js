'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { FileText, Phone, Mail, MapPin } from 'lucide-react'

export default function PaintHero() {
  return (
    <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-slate-500 font-semibold text-sm uppercase tracking-wider mb-2"
        >
          Oil & Gas Capability Profile
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.06 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight tracking-tight mb-2"
        >
          MOHMMED AL HJOUJ FOR INVESTMENT SPC
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="text-slate-600 text-base sm:text-lg mb-6"
        >
          Industrial Coatings • Corrosion Protection • Epoxy Systems
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.18 }}
          className="text-slate-500 text-sm mb-8"
        >
          Sultanate of Oman
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.24 }}
          className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-slate-600"
        >
          <span className="flex items-center justify-center gap-2">
            <span className="text-slate-400 font-medium">C.R. No.:</span> 1550745
          </span>
          <span className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-slate-400" />
            PC: 121 Mabela Industrial Area
          </span>
          <a href="tel:+96898539796" className="flex items-center gap-2 hover:text-slate-900 no-underline">
            <Phone className="w-4 h-4 text-slate-400" />
            +968 98539796
          </a>
          <a href="mailto:M-alhouj@hpc-om.com" className="flex items-center gap-2 hover:text-slate-900 no-underline">
            <Mail className="w-4 h-4 text-slate-400" />
            M-alhouj@hpc-om.com
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10"
        >
          <Link
            href="/pdf/capability-profile.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-colors no-underline"
          >
            <FileText className="w-5 h-5" />
            Download Capability Profile (PDF)
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
