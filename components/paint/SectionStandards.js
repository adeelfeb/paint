'use client'

import { motion } from 'framer-motion'
import { Shield, CheckCircle } from 'lucide-react'

const STANDARDS = [
  'SSPC Surface Preparation Standards',
  'NACE Corrosion Protection Practices',
  'ISO Surface Cleanliness Standards',
]

const QC_PROCEDURES = [
  'Abrasive blasting and surface preparation',
  'Dry Film Thickness (DFT) inspection',
  'Holiday testing when required',
  'Environmental monitoring during application',
  'Coating batch traceability documentation',
  'Inspection and Test Plans (ITP)',
]

export default function SectionStandards() {
  return (
    <section id="standards" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2"
        >
          Technical Standards & Quality Control
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-600 mb-10"
        >
          All coating applications follow internationally recognized surface preparation and quality control procedures.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl bg-slate-50 p-6 border border-slate-100"
          >
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-slate-700" />
              <h3 className="text-lg font-semibold text-slate-900">Technical Standards</h3>
            </div>
            <ul className="space-y-2 text-slate-600 text-sm">
              {STANDARDS.map((item, i) => (
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
            className="rounded-xl bg-slate-50 p-6 border border-slate-100"
          >
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-slate-700" />
              <h3 className="text-lg font-semibold text-slate-900">Quality Control Procedures</h3>
            </div>
            <ul className="space-y-2 text-slate-600 text-sm">
              {QC_PROCEDURES.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-slate-400">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-slate-600 text-sm"
        >
          Primary epoxy and waterproofing systems are manufactured by <strong className="text-slate-800">UNICHEM</strong>, an established industrial coatings manufacturer with industry experience since 1976.
        </motion.p>
      </div>
    </section>
  )
}
