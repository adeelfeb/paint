'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Palette } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { getProductContent } from '../../lib/productTranslations'
import { PAINT_PRODUCTS, PRODUCT_SIZES, getProductById } from '../../data/paintProducts'
import { PAINT_BOX_IMAGES } from '../../data/paintImages'

const ALL_ID = 'all'
const CATEGORY_IDS = [ALL_ID, ...PRODUCT_SIZES, '10ml', '15ml']

export default function SectionProducts() {
  const { t, locale } = useLanguage()
  const [category, setCategory] = useState(ALL_ID)

  const filtered =
    category === ALL_ID
      ? PAINT_PRODUCTS
      : PAINT_PRODUCTS.filter((p) => p.id === category)

  const getCategoryLabel = (id) => {
    if (id === ALL_ID) return t('allCategories')
    const p = getProductById(id)
    return p ? p.size : id
  }

  return (
    <section id="products" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            {t('products.sectionTitle')}
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            {t('products.sectionSubtitle')}
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {CATEGORY_IDS.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setCategory(id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                category === id
                  ? 'bg-slate-800 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {getCategoryLabel(id)}
            </button>
          ))}
        </motion.div>

        {/* Product grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={category}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((product) => {
              const content = getProductContent(product.id, locale)
              const name = content?.name ?? product.name
              const shortDescription = content?.shortDescription ?? product.shortDescription
              const image = product.image || PAINT_BOX_IMAGES[0]

              return (
                <motion.article
                  key={product.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="group rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="relative w-full aspect-[4/3] bg-slate-100">
                    <Image
                      src={image}
                      alt={name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-slate-800/90 text-white text-xs font-semibold">
                      {product.size}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2">
                      {name}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4 flex-1">
                      {shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        href={`/products/${product.id}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium rounded-xl no-underline transition-colors"
                      >
                        {t('learnMore')}
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                      <Link
                        href={`/products/${product.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-medium rounded-xl no-underline transition-colors border border-slate-200"
                      >
                        <Palette className="w-4 h-4" />
                        {t('colorFinder')}
                      </Link>
                    </div>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
