'use client'

import { motion } from 'framer-motion'

export default function SectionOverview() {
  return (
    <section id="overview" className="py-16 sm:py-20 bg-white border-b border-slate-200 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6"
        >
          Company Overview
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4"
        >
          <p>
            <strong className="text-slate-800">MOHMMED AL HJOUJ FOR INVESTMENT SPC</strong> is a specialized supplier of high-performance industrial coating systems and corrosion protection solutions serving the Oil & Gas, petrochemical, mining, defense, and infrastructure sectors.
          </p>
          <p>
            The company provides technically compliant coating solutions designed to perform in aggressive industrial environments including hydrocarbon exposure, chemical processing facilities, heavy industrial operations, and desert climatic conditions.
          </p>
          <p>
            With extensive technical experience dating back to 2010, the company supports industrial operators, contractors, and infrastructure developers with reliable coating systems engineered for durability, safety, and long-term asset protection.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
