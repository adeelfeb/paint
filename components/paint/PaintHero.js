'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { getFeaturedProduct } from '../../data/paintProducts'
import { Droplets, Shield, Factory } from 'lucide-react'

const featured = getFeaturedProduct()

export default function PaintHero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Subtle grid / texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-4"
            >
              Arabic-Based Startup • Industrial Paints
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-6"
            >
              Industrial Coatings &{' '}
              <span className="text-amber-400">Corrosion Protection</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-300 text-lg sm:text-xl max-w-xl mb-8"
            >
              Premium epoxy systems in 3 ML, 5 ML, 6 ML and more. Korean & American base formulations for industries across the region. Quality you can quote.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/#products"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold rounded-xl transition-colors shadow-lg shadow-amber-500/25"
              >
                <Droplets className="w-5 h-5" />
                View Products
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl border border-slate-600 transition-colors"
              >
                Get a Quote
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-6 text-slate-400 text-sm"
            >
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-amber-500/80" />
                Corrosion protection
              </span>
              <span className="flex items-center gap-2">
                <Factory className="w-4 h-4 text-amber-500/80" />
                Industry-ready
              </span>
            </motion.div>
          </div>

          {/* Featured product highlight – 3 ML */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl bg-slate-800/60 border border-slate-700/60 p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
              <p className="text-amber-400 text-sm font-semibold uppercase tracking-wider mb-2">Featured Product</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">{featured.name}</h2>
              <p className="text-slate-400 mb-4">{featured.tagline}</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">{featured.shortDescription}</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-500/20 text-amber-400 font-medium">
                <Droplets className="w-4 h-4" />
                {featured.size} • Epoxy System
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
