'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { useLanguage } from '../../context/LanguageContext'
import { getVariantsForSize } from '../../data/paintVariants'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const CARD_WIDTH = 160
const CARD_GAP = 16

export default function VariantCarousel({ sizeId }) {
  const scrollRef = useRef(null)
  const { locale, t } = useLanguage()
  const variants = getVariantsForSize(sizeId)
  const isAr = locale === 'ar'

  useEffect(() => {
    const el = scrollRef.current
    if (!el || variants.length === 0) return
    const t = setInterval(() => {
      const max = el.scrollWidth - el.clientWidth
      if (max <= 0) return
      const next = el.scrollLeft + CARD_WIDTH + CARD_GAP
      if (next >= max) el.scrollTo({ left: 0, behavior: 'smooth' })
      else el.scrollBy({ left: CARD_WIDTH + CARD_GAP, behavior: 'smooth' })
    }, 2800)
    return () => clearInterval(t)
  }, [sizeId, variants.length])

  if (variants.length === 0) return null

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir === 'left' ? -(CARD_WIDTH + CARD_GAP) : CARD_WIDTH + CARD_GAP, behavior: 'smooth' })
  }

  return (
    <div className="relative w-full flex flex-col items-center">
      <div
        ref={scrollRef}
        className="flex overflow-x-auto overflow-y-hidden scroll-smooth scrollbar-hide pb-2 w-full scroll-snap-x snap-mandatory"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        <div className="flex gap-4 min-w-max flex-shrink-0 mx-auto justify-center">
        {variants.map((v, i) => (
          <div
            key={`${sizeId}-${i}`}
            role="presentation"
            aria-hidden="true"
            className="flex-shrink-0 rounded-xl overflow-hidden bg-slate-800/60 border border-slate-700/60 transition-colors snap-center pointer-events-none select-none"
            style={{ width: CARD_WIDTH }}
          >
            <div className="relative aspect-square bg-slate-700/50">
              <Image
                src={v.image}
                alt=""
                fill
                className="object-cover"
                sizes="160px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
              <span className="absolute bottom-2 left-2 right-2 text-xs font-semibold text-white drop-shadow-md truncate block text-center">
                {isAr ? v.nameAr : v.nameEn}
              </span>
            </div>
            <div className="px-2 py-1.5 text-center">
              <span className="text-[10px] uppercase tracking-wider text-amber-400/90 font-medium">
                {v.color}
              </span>
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className="flex sm:hidden gap-2 mt-2">
        <button
          type="button"
          onClick={() => scroll('left')}
          aria-label={t('products.prev')}
          className="p-2 rounded-full bg-slate-800 border border-slate-600 text-slate-300 hover:text-white hover:bg-teal-600/80"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll('right')}
          aria-label={t('products.next')}
          className="p-2 rounded-full bg-slate-800 border border-slate-600 text-slate-300 hover:text-white hover:bg-teal-600/80"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="hidden sm:flex absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none justify-between px-1">
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); scroll('left'); }}
          aria-label={t('products.prev')}
          className="pointer-events-auto p-1.5 rounded-full bg-slate-800/90 border border-slate-600 text-slate-300 hover:text-white hover:bg-teal-600/80 hover:border-teal-500 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); scroll('right'); }}
          aria-label={t('products.next')}
          className="pointer-events-auto p-1.5 rounded-full bg-slate-800/90 border border-slate-600 text-slate-300 hover:text-white hover:bg-teal-600/80 hover:border-teal-500 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
