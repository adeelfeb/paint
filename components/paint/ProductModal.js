'use client'

import Modal from '../Modal'
import { Droplets } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { getProductContent } from '../../lib/productTranslations'

export default function ProductModal({ product, isOpen, onClose }) {
  const { locale, t } = useLanguage()
  if (!product) return null

  const content = getProductContent(product.id, locale)
  const name = content?.name ?? product.name
  const tagline = content?.tagline ?? product.tagline
  const fullDescription = content?.fullDescription ?? product.fullDescription
  const applications = content?.applications ?? product.applications ?? []
  const industries = content?.industries ?? product.industries ?? []
  const specs = content?.specs ?? product.specs ?? {}

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={name}
      showCloseButton={true}
      size="lg"
      closeOnOverlayClick={true}
      closeOnEscape={true}
      className="paint-product-modal"
    >
      <div className="space-y-6">
        <div>
          <div className="flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-wider">
            <Droplets className="w-4 h-4" />
            {product.size}
          </div>
          <p className="text-slate-600 mt-1">{tagline}</p>
        </div>

        <p className="text-slate-700 leading-relaxed">{fullDescription}</p>

        <div>
          <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">
            {t('products.applications')}
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-slate-600 text-sm">
            {applications.map((app, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                {app}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-2">
            {t('products.industries')}
          </h3>
          <div className="flex flex-wrap gap-2">
            {industries.map((ind, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm font-medium"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-slate-50 border border-slate-200 p-4">
          <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
            {t('products.specifications')}
          </h3>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <div><dt className="text-slate-500">{t('products.coverage')}</dt><dd className="font-medium text-slate-800">{specs.coverage}</dd></div>
            <div><dt className="text-slate-500">{t('products.dryTime')}</dt><dd className="font-medium text-slate-800">{specs.dryTime}</dd></div>
            <div><dt className="text-slate-500">{t('products.recoatWindow')}</dt><dd className="font-medium text-slate-800">{specs.recoatWindow}</dd></div>
            <div><dt className="text-slate-500">{t('products.base')}</dt><dd className="font-medium text-slate-800">{specs.base}</dd></div>
          </dl>
        </div>
      </div>
    </Modal>
  )
}
