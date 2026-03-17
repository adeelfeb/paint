'use client'

import { motion } from 'framer-motion'
import { Fuel, Factory } from 'lucide-react'

const UPSTREAM = [
  'Pipeline and flowline corrosion protection',
  'Wellhead structural coating systems',
  'Skid mounted equipment protection',
  'Tank external protection systems',
  'Secondary containment protection',
  'UV-resistant desert environment coatings',
]

const REFINERY = [
  'Chemical-resistant epoxy flooring systems',
  'Tank internal lining systems',
  'Structural steel corrosion protection',
  'Pipe rack coating systems',
  'Industrial waterproofing systems',
]

export default function SectionCapabilities() {
  return (
    <section id="capabilities" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2"
        >
          Oil & Gas Technical Capabilities
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-slate-600 mb-10"
        >
          The company provides advanced protective coating solutions for upstream, downstream, and industrial infrastructure facilities.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-xl bg-white p-6 border border-slate-200 shadow-sm"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 text-white">
                <Fuel className="w-5 h-5" />
              </span>
              <h3 className="text-lg font-semibold text-slate-900">Upstream & Field Assets</h3>
            </div>
            <ul className="space-y-2 text-slate-600 text-sm">
              {UPSTREAM.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-slate-400 mt-0.5">•</span>
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
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 text-white">
                <Factory className="w-5 h-5" />
              </span>
              <h3 className="text-lg font-semibold text-slate-900">Refinery & Industrial Facilities</h3>
            </div>
            <ul className="space-y-2 text-slate-600 text-sm">
              {REFINERY.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-slate-400 mt-0.5">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
