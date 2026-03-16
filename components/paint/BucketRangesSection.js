'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useLanguage } from '../../context/LanguageContext'
import { PAINT_BOX_IMAGES } from '../../data/paintImages'

const BUCKET_IMAGES = [
  PAINT_BOX_IMAGES[2],
  PAINT_BOX_IMAGES[0],
  PAINT_BOX_IMAGES[5],
]

export default function BucketRangesSection() {
  const { t } = useLanguage()

  const ranges = [
    { key: 'small', image: BUCKET_IMAGES[0] },
    { key: 'medium', image: BUCKET_IMAGES[1] },
    { key: 'large', image: BUCKET_IMAGES[2] },
  ]

  return (
    <section id="bucket-ranges" className="py-16 sm:py-24 bg-slate-800/50 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {t('buckets.sectionTitle')}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {t('buckets.sectionSubtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ranges.map((range, idx) => (
            <motion.article
              key={range.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="rounded-2xl overflow-hidden bg-slate-800/60 border border-slate-700/60 hover:border-teal-500/40 transition-colors"
            >
              <div className="relative aspect-[4/3] bg-slate-700/50">
                <Image
                  src={range.image}
                  alt={t(`buckets.${range.key}`)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
                  {t(`buckets.${range.key}`)}
                </h3>
              </div>
              <p className="p-4 text-slate-400 text-sm leading-relaxed">
                {t(`buckets.${range.key}Desc`)}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
