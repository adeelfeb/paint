'use client'

import { useRef, useEffect } from 'react'
import { PRODUCT_SIZES, getProductById } from '../../data/paintProducts'
import ProductCard from './ProductCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const CARD_WIDTH = 280
const CARD_HEIGHT = 400
const CARD_GAP = 24

export default function HeroProductsCarousel({ onProductClick }) {
  const scrollRef = useRef(null)
  const { t } = useLanguage()
  const products = PRODUCT_SIZES.map(getProductById).filter(Boolean)

  useEffect(() => {
    const el = scrollRef.current
    if (!el || products.length === 0) return
    const id = setInterval(() => {
      const max = el.scrollWidth - el.clientWidth
      if (max <= 0) return
      const step = CARD_WIDTH + CARD_GAP
      if (el.scrollLeft >= max - 10) el.scrollTo({ left: 0, behavior: 'smooth' })
      else el.scrollBy({ left: step, behavior: 'smooth' })
    }, 4000)
    return () => clearInterval(id)
  }, [products.length])

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -(CARD_WIDTH + CARD_GAP) : CARD_WIDTH + CARD_GAP, behavior: 'smooth' })
  }

  if (products.length === 0) return null

  return (
    <section id="products-preview" className="relative bg-slate-900 border-t border-slate-800/80 py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">
          {t('products.sectionTitle')}
        </h2>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide pb-2 -mx-4 px-4 sm:-mx-6 sm:px-6"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0"
                style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
              >
                <ProductCard product={product} onClick={onProductClick} />
              </div>
            ))}
          </div>
          <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none justify-between px-1">
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label={t('products.prev')}
              className="pointer-events-auto p-2 rounded-full bg-slate-800/90 border border-slate-600 text-slate-300 hover:text-white hover:bg-teal-600/80 hover:border-teal-500 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label={t('products.next')}
              className="pointer-events-auto p-2 rounded-full bg-slate-800/90 border border-slate-600 text-slate-300 hover:text-white hover:bg-teal-600/80 hover:border-teal-500 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
