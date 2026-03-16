'use client'

import { motion } from 'framer-motion'
import { PRODUCT_SIZES, getProductById } from '../../data/paintProducts'
import ProductCard from './ProductCard'
import VariantCarousel from './VariantCarousel'
import { useLanguage } from '../../context/LanguageContext'

const CARD_WIDTH = 280
const CARD_HEIGHT = 400

export default function ProductsBySizeSection({ onProductClick }) {
  const { t } = useLanguage()

  return (
    <section id="products" className="relative bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">{t('products.sectionTitle')}</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t('products.sectionSubtitle')}
          </p>
        </motion.div>

        <div className="space-y-16">
          {PRODUCT_SIZES.map((sizeId, idx) => {
            const product = getProductById(sizeId)
            if (!product) return null
            const sizeNum = sizeId.replace('ml', '')
            return (
              <motion.div
                key={sizeId}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="scroll-mt-24"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-teal-400 mb-4 border-b border-slate-700 pb-2 flex items-center gap-2 flex-wrap">
                  {t('products.sectionSize', { size: sizeNum })}
                  <span className="text-xs font-medium text-amber-400/90 bg-amber-500/10 px-2 py-0.5 rounded">
                    {t('products.industrialGrade')}
                  </span>
                </h3>

                {/* Same row: carousel in front (first), main product card second. Responsive: column on small, row on lg */}
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center lg:items-stretch">
                  {/* Carousel in front – flexible width, centered content */}
                  <div className="w-full lg:flex-1 lg:min-w-0 flex flex-col items-center justify-center order-first">
                    <VariantCarousel sizeId={sizeId} />
                  </div>

                  {/* Main product card – clickable, opens modal */}
                  <div
                    className="flex-shrink-0 order-last lg:order-none"
                    style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
                  >
                    <ProductCard product={product} onClick={onProductClick} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
