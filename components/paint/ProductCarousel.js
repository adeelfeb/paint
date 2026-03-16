'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PAINT_PRODUCTS } from '../../data/paintProducts'
import ProductCard from './ProductCard'
import ProductModal from './ProductModal'
import { ChevronLeft, ChevronRight } from 'lucide-react'

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

  return (
    <section id="products" className="py-16 sm:py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Our Products</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Industrial coatings in multiple sizes — 3 ML, 5 ML, 6 ML and more. Click any card for full details.
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
                className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px]"
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
              className={`pointer-events-auto p-2 rounded-full bg-slate-800 border border-slate-600 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors ${!canScrollLeft ? 'opacity-40 cursor-not-allowed' : ''}`}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className={`pointer-events-auto p-2 rounded-full bg-slate-800 border border-slate-600 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors ${!canScrollRight ? 'opacity-40 cursor-not-allowed' : ''}`}
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
