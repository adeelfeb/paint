'use client'

import { useEffect, useMemo, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowLeft, Droplets, Palette } from 'lucide-react'
import { useLanguage } from '../../../context/LanguageContext'
import { getProductContent } from '../../../lib/productTranslations'
import {
  getProductById,
  PRODUCT_SIZES,
  getProductImageGallery,
} from '../../../data/paintProducts'
import { PAINT_BOX_IMAGES } from '../../../data/paintImages'

const CATEGORY_IDS = ['all', ...PRODUCT_SIZES, '10ml', '15ml']

export default function ProductDetailClient() {
  const params = useParams()
  const id = typeof params?.id === 'string' ? params.id : null
  const { t, locale } = useLanguage()
  const [selectedImage, setSelectedImage] = useState(0)

  const product = id ? getProductById(id) : null

  const galleryImages = useMemo(() => {
    if (!product) return []
    const list = getProductImageGallery(product)
    return list.length ? list : [PAINT_BOX_IMAGES[0]]
  }, [product])

  useEffect(() => {
    setSelectedImage(0)
  }, [product?.id])

  if (!product) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-slate-600 mb-4">Product not found.</p>
          <Link href="/products" className="text-slate-800 font-medium no-underline hover:underline">
            ← Back to products
          </Link>
        </div>
      </div>
    )
  }

  const content = getProductContent(product.id, locale)
  const name = content?.name ?? product.name
  const tagline = content?.tagline ?? product.tagline
  const fullDescription = content?.fullDescription ?? product.fullDescription
  const applications = content?.applications ?? product.applications ?? []
  const industries = content?.industries ?? product.industries ?? []
  const specs = content?.specs ?? product.specs ?? {}

  const activeSrc = galleryImages[Math.min(selectedImage, galleryImages.length - 1)] ?? galleryImages[0]

  const getCategoryLabel = (catId) => {
    if (catId === 'all') return t('allCategories')
    const p = getProductById(catId)
    return p ? p.size : catId
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6 no-underline text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to products
          </Link>
          <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">
            Categories
          </p>
          <div className="flex flex-wrap gap-2">
            {CATEGORY_IDS.map((catId) => (
              <Link
                key={catId}
                href={catId === 'all' ? '/products' : `/products/${catId}`}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium no-underline transition-colors ${
                  catId === product.id
                    ? 'bg-slate-800 text-white'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {getCategoryLabel(catId)}
              </Link>
            ))}
          </div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="flex flex-col bg-slate-100 border-b md:border-b-0 md:border-r border-slate-200">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[320px] w-full">
                <Image
                  key={activeSrc}
                  src={activeSrc}
                  alt={name}
                  fill
                  className="object-contain bg-slate-50"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <span className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-slate-800/90 text-white text-sm font-semibold">
                  {product.size}
                </span>
              </div>
              {galleryImages.length > 1 ? (
                <div className="p-3 border-t border-slate-200 bg-white">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                    Product images
                  </p>
                  <div className="flex gap-2 overflow-x-auto pb-1">
                    {galleryImages.map((src, i) => (
                      <button
                        key={`${src}-${i}`}
                        type="button"
                        onClick={() => setSelectedImage(i)}
                        className={`relative shrink-0 w-20 h-16 sm:w-24 sm:h-[4.5rem] rounded-lg overflow-hidden border-2 transition-colors ${
                          selectedImage === i
                            ? 'border-brand-600 ring-2 ring-brand-200'
                            : 'border-slate-200 hover:border-slate-300 opacity-90 hover:opacity-100'
                        }`}
                        aria-label={`View image ${i + 1}`}
                      >
                        <Image src={src} alt="" fill className="object-cover" sizes="96px" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-slate-500 font-semibold text-sm uppercase tracking-wider mb-2">
                <Droplets className="w-4 h-4" />
                {product.size}
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                {name}
              </h1>
              <p className="text-slate-600 mb-4">{tagline}</p>
              <p className="text-slate-700 leading-relaxed">{fullDescription}</p>
            </div>
          </div>

          <div className="p-6 sm:p-8 border-t border-slate-200 space-y-8">
            <div>
              <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                {t('products.applications')}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 text-sm">
                {applications.map((app, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                    {app}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-3">
                {t('products.industries')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {industries.map((ind, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-sm font-medium"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl bg-slate-50 border border-slate-200 p-5">
              <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                {t('products.specifications')}
              </h2>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div><dt className="text-slate-500">{t('products.coverage')}</dt><dd className="font-medium text-slate-800">{specs.coverage}</dd></div>
                <div><dt className="text-slate-500">{t('products.dryTime')}</dt><dd className="font-medium text-slate-800">{specs.dryTime}</dd></div>
                <div><dt className="text-slate-500">{t('products.recoatWindow')}</dt><dd className="font-medium text-slate-800">{specs.recoatWindow}</dd></div>
                <div><dt className="text-slate-500">{t('products.base')}</dt><dd className="font-medium text-slate-800">{specs.base}</dd></div>
              </dl>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/company-contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl no-underline"
              >
                {t('contact.getQuoteTitle')}
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium rounded-xl no-underline border border-slate-200"
              >
                <Palette className="w-4 h-4" />
                {t('colorFinder')}
              </Link>
            </div>
          </div>
        </motion.article>
      </div>
    </div>
  )
}
