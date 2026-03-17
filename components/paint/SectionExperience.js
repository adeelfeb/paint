'use client'

import { motion } from 'framer-motion'
import { Building2, Shield } from 'lucide-react'

const JORDAN_CLIENTS = [
  'Jordan Petroleum Refinery Company',
  'Jordan Phosphate Mines Company',
  'Jordan Bromine Company',
  'Arab Potash Company',
  'Dar Al Dawa Development & Investment',
]

const PROJECT_SCOPE = [
  'Industrial tank protection systems',
  'Epoxy flooring for process plants',
  'Corrosion protection for steel structures',
  'Chemical containment areas',
  'Industrial facility protection systems',
]

export default function SectionExperience() {
  return (
    <section id="experience" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-slate-900 mb-10"
        >
          Industrial Project Experience
        </motion.h2>
        <p className="text-slate-600 mb-8">
          The company has supported major industrial operators in heavy chemical and industrial environments.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl bg-white p-6 sm:p-8 border border-slate-200 shadow-sm mb-8"
        >
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="w-5 h-5 text-slate-700" />
            <h3 className="text-lg font-semibold text-slate-900">Key Industrial Clients – Jordan</h3>
          </div>
          <ul className="space-y-2 text-slate-600 text-sm mb-6">
            {JORDAN_CLIENTS.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-slate-400">•</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-slate-600 text-sm font-medium mb-2">Project scope includes:</p>
          <ul className="space-y-2 text-slate-600 text-sm">
            {PROJECT_SCOPE.map((item, i) => (
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
          className="rounded-xl bg-white p-6 border border-slate-200 shadow-sm"
        >
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-slate-700" />
            <h3 className="text-lg font-semibold text-slate-900">Defense Coating Experience</h3>
          </div>
          <p className="text-slate-600 text-sm">
            Main supplier of armored vehicle coating systems for vehicles manufactured by the Jordan Design and Development Bureau (JODDB).
          </p>
        </motion.div>
      </div>
    </section>
  )
}
