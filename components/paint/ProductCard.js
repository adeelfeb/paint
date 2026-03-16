'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Droplets, ChevronRight } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

export default function ProductCard({ product, onClick }) {
  const { t } = useLanguage()
  const image = product.image || 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&q=80'

  return (
    <motion.button
      type="button"
      onClick={() => onClick(product)}
      className="group text-left w-full rounded-2xl bg-slate-800/60 border border-slate-700/60 overflow-hidden hover:border-teal-500/40 hover:bg-slate-800/80 transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-slate-900 flex flex-col h-[400px] min-h-[400px] max-h-[400px]"
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Fixed-height image area – paint box/can */}
      <div className="relative w-full h-[160px] flex-shrink-0 bg-slate-700/50">
        <Image
          src={image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="280px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
        <span className="absolute top-2 left-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-teal-500/90 text-slate-900 text-xs font-semibold">
          <Droplets className="w-3.5 h-3.5" />
          {product.size}
        </span>
        <ChevronRight className="absolute top-2 right-2 w-5 h-5 text-white/80 group-hover:text-teal-400 group-hover:translate-x-0.5 transition-all" />
      </div>

      {/* Fixed-height content – same size for all cards */}
      <div className="flex flex-col flex-1 min-h-0 p-4 sm:p-5">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-teal-400/90 transition-colors line-clamp-2">
          {product.name}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2 flex-1 min-h-0">
          {product.shortDescription}
        </p>
        <span className="text-teal-400 text-sm font-medium inline-flex items-center gap-1 mt-auto">
          {t('products.viewDetails')}
          <ChevronRight className="w-4 h-4" />
        </span>
      </div>
    </motion.button>
  )
}

