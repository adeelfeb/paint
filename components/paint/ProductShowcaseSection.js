'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Clock3, Droplets } from 'lucide-react'
import Modal from '../Modal'
import { PAINT_PRODUCTS, getProductImageGallery } from '../../data/paintProducts'
import { PAINT_BOX_IMAGES } from '../../data/paintImages'
import { getProductContent } from '../../lib/productTranslations'
import { useLanguage } from '../../context/LanguageContext'

const PRODUCT_YEAR_DETAILS = {
  '1ml': { label: 'Since 2021', detail: 'Developed for sample-led applications and precision testing.' },
  '3ml': { label: 'Since 2020', detail: 'Established product for frequent touch-ups and compact jobs.' },
  '4ml': { label: 'Since 2021', detail: 'Focused on balanced coverage for spot repair workflows.' },
  '5ml': { label: 'Since 2019', detail: 'Widely used format for maintenance and workshop teams.' },
  '6ml': { label: 'Since 2018', detail: 'Selected for heavier-duty patching and extended coverage.' },
  '10ml': { label: 'Since 2017', detail: 'Project-ready option for broader industrial deployment.' },
  '15ml': { label: 'Since 2016', detail: 'Built for demanding corrosion-heavy operating environments.' },
}

function getYearsInfo(product) {
  if (product?.yearsInfo) return product.yearsInfo
  return PRODUCT_YEAR_DETAILS[product?.id] || { label: 'Since 2020', detail: 'Continuously improved for industrial use.' }
}

export default function ProductShowcaseSection({
  title = 'Featured Products',
  subtitle = 'Explore key coating products with quick details. Open any card to view more information without leaving the page.',
  products = PAINT_PRODUCTS.slice(0, 6),
}) {
  const { locale } = useLanguage()
  const [activeProduct, setActiveProduct] = useState(null)

  const visibleProducts = useMemo(() => products.filter(Boolean), [products])

  return (
    <section className="py-16 sm:py-20 border-b border-brand-100 bg-gradient-to-b from-white to-brand-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-wider text-brand-600 font-semibold">Products</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-brand-900 mt-1">{title}</h2>
            <p className="text-slate-600 mt-2 max-w-2xl">{subtitle}</p>
          </div>
          <Link
            href="/products"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-brand-800 hover:text-brand-900 no-underline"
          >
            View all products
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleProducts.map((product) => {
            const content = getProductContent(product.id, locale)
            const name = content?.name ?? product.name
            const shortDescription = content?.shortDescription ?? product.shortDescription
            const image = product.image || PAINT_BOX_IMAGES[0]
            const years = getYearsInfo(product)

            return (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-brand-100 bg-white overflow-hidden shadow-sm hover:shadow-lg hover:border-brand-200 hover:shadow-brand-900/5 transition-all"
              >
                <div className="relative aspect-[4/3] bg-brand-50">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-brand-900/92 text-white text-xs font-semibold inline-flex items-center gap-1.5">
                    <Droplets className="w-3.5 h-3.5" />
                    {product.size}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-brand-900 line-clamp-2">{name}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed line-clamp-2">{shortDescription}</p>
                  <div className="mt-3 text-xs font-medium text-slate-500 inline-flex items-center gap-1.5">
                    <Clock3 className="w-3.5 h-3.5" />
                    {years.label}
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveProduct(product)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-800 text-white text-sm font-semibold hover:bg-brand-900 transition-colors"
                    >
                      View more
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <Link
                      href={`/products/${product.id}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-50 border border-brand-200 text-brand-900 text-sm font-semibold hover:bg-brand-100 no-underline transition-colors"
                    >
                      Full page
                    </Link>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </div>

        <Link
          href="/products"
          className="sm:hidden mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-800 hover:text-brand-900 no-underline"
        >
          View all products
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <ProductQuickViewModal
        product={activeProduct}
        isOpen={Boolean(activeProduct)}
        onClose={() => setActiveProduct(null)}
      />
    </section>
  )
}

function ProductQuickViewModal({ product, isOpen, onClose }) {
  const { locale } = useLanguage()
  if (!product) return null

  const content = getProductContent(product.id, locale)
  const name = content?.name ?? product.name
  const fullDescription = content?.fullDescription ?? product.fullDescription
  const years = getYearsInfo(product)
  const gallery = getProductImageGallery(product)
  const previewSrc = gallery[0] || product.image || PAINT_BOX_IMAGES[0]

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={name}
      showCloseButton={true}
      size="lg"
      closeOnOverlayClick={true}
      closeOnEscape={true}
    >
      <div className="space-y-5">
        <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
          <Image src={previewSrc} alt="" fill className="object-contain" sizes="(max-width: 768px) 100vw, 800px" />
        </div>
        <div className="rounded-xl border border-brand-100 bg-brand-50 p-4">
          <p className="text-xs uppercase tracking-wider text-brand-600 font-semibold mb-1">Product history</p>
          <p className="text-sm font-semibold text-brand-900">{years.label}</p>
          <p className="text-sm text-slate-600 mt-1">{years.detail}</p>
        </div>

        <p className="text-slate-700 leading-relaxed">{fullDescription}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          <span className="px-2.5 py-1 rounded-lg bg-brand-100 text-xs font-semibold text-brand-800">Size: {product.size}</span>
          {product.tagline ? (
            <span className="px-2.5 py-1 rounded-lg bg-brand-100 text-xs font-semibold text-brand-800">{product.tagline}</span>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href={`/products/${product.id}`}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-brand-800 text-white text-sm font-semibold no-underline hover:bg-brand-900 transition-colors"
            onClick={onClose}
          >
            Open full details
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center px-4 py-2.5 rounded-xl bg-white border border-brand-200 text-brand-800 text-sm font-semibold hover:bg-brand-50 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  )
}
