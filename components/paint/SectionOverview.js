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
            <strong className="text-slate-800">MOHAMMAD ALHJOUJ FOR INVESTMENT SPC</strong> is an Oman-based industrial solutions provider specialized in protective coatings, waterproofing systems, construction chemicals, and technical support. As the authorized representative of leading manufacturers such as HPC and UNICHEM, we serve oil & gas, petrochemical, power, cement, infrastructure, and construction—with local availability, reliable supply, and engineering guidance.
          </p>
          <p>
            We combine local market knowledge with world-class products and QHSE standards. Our supply partners are certified to ISO 9001:2015 and ISO 14001:2015; we help customers reduce life-cycle costs, manage risk, and meet stringent specifications.
          </p>
          <p>
            Headquartered in Muscat with logistics coverage across the Sultanate, we support operators, contractors, and developers with systems engineered for durability, safety, and long-term asset protection—aligned with Oman Vision 2040.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
