'use client'

import { motion } from 'framer-motion'
import { Droplets, ChevronRight } from 'lucide-react'

export default function ProductCard({ product, onClick }) {
  return (
    <motion.button
      type="button"
      onClick={() => onClick(product)}
      className="group text-left w-full rounded-2xl bg-slate-800/60 border border-slate-700/60 p-6 sm:p-7 hover:border-amber-500/40 hover:bg-slate-800/80 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-900"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start justify-between gap-3 mb-4">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-400 text-sm font-semibold">
          <Droplets className="w-4 h-4" />
          {product.size}
        </span>
        <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all flex-shrink-0" />
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400/90 transition-colors">
        {product.name}
      </h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
        {product.shortDescription}
      </p>
      <span className="text-amber-400 text-sm font-medium inline-flex items-center gap-1">
        View details
        <ChevronRight className="w-4 h-4" />
      </span>
    </motion.button>
  )
}
