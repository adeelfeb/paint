'use client'

import { useLanguage } from '../../context/LanguageContext'

export default function VariantDetailModal({ variant, sizeId, isOpen, onClose }) {
  if (!variant || !isOpen) return null
  const { t, locale } = useLanguage()
  const isAr = locale === 'ar'
  const sizeNum = (sizeId || '').replace('ml', '')
  const name = isAr ? variant.nameAr : variant.nameEn

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      onKeyDown={(e) => e.key === 'Escape' && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="variant-modal-title"
    >
      <div
        className="bg-slate-800 rounded-2xl border border-slate-600 shadow-xl max-w-sm w-full p-6 text-left"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.key === 'Escape' && onClose()}
      >
        <h3 id="variant-modal-title" className="text-lg font-bold text-white mb-1">
          {name}
        </h3>
        <p className="text-slate-400 text-sm mb-3">
          {t('products.variantPartOf', { size: sizeNum })}
        </p>
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-500/20 text-amber-400 text-sm font-medium">
          {variant.color}
        </div>
        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-2 rounded-xl bg-slate-700 text-slate-200 hover:bg-slate-600 transition-colors text-sm font-medium"
          >
            {locale === 'ar' ? 'إغلاق' : 'Close'}
          </button>
        </div>
      </div>
    </div>
  )
}
