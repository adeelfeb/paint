'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PAINT_PRODUCTS } from '../../data/paintProducts'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const CARD_WIDTH = 280
const CARD_HEIGHT = 400

const DUPE = 2

export default function ProductCarousel() {
  const scrollRef = useRef(null)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll)
    window.addEventListener('resize', checkScroll)
    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const t = setInterval(() => {
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 10
      if (atEnd) el.scrollTo({ left: 0, behavior: 'smooth' })
      else el.scrollBy({ left: el.clientWidth * 0.5, behavior: 'smooth' })
    }, 4000)
    return () => clearInterval(t)
  }, [])

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    const step = el.clientWidth * 0.8
    el.scrollBy({ left: dir === 'left' ? -step : step, behavior: 'smooth' })
  }

  const openModal = (product) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedProduct(null)
  }

  const { t } = useLanguage()
  const stripProducts = Array(DUPE).fill(null).flatMap(() => PAINT_PRODUCTS)

  return (
    <section id="products" className="relative bg-slate-900">
      {/* Auto-scrolling strip visible in hero viewport – both directions */}
      <div className="-mt-20 sm:-mt-24 pt-2 pb-4 overflow-hidden">
        <div className="carousel-auto-bidirectional flex gap-4 w-max">
          {stripProducts.map((product, index) => (
            <div
              key={`strip-${index}-${product.id}`}
              className="flex-shrink-0"
              style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
            >
              <ProductCard product={product} onClick={openModal} />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">{t('products.sectionTitle')}</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t('products.sectionSubtitle')}
          </p>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {PAINT_PRODUCTS.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="flex-shrink-0"
                style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
              >
                <ProductCard product={product} onClick={openModal} />
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none justify-between px-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className={`pointer-events-auto p-2 rounded-full bg-slate-800 border border-slate-600 text-slate-300 hover:text-white hover:bg-teal-600/80 hover:border-teal-500 transition-colors ${!canScrollLeft ? 'opacity-40 cursor-not-allowed' : ''}`}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className={`pointer-events-auto p-2 rounded-full bg-slate-800 border border-slate-600 text-slate-300 hover:text-white hover:bg-teal-600/80 hover:border-teal-500 transition-colors ${!canScrollRight ? 'opacity-40 cursor-not-allowed' : ''}`}
              disabled={!canScrollRight}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        <ProductModal
          product={selectedProduct}
          isOpen={modalOpen}
          onClose={closeModal}
        />
      </AnimatePresence>
    </section>
  )
}
