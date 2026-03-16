'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { getFeaturedProduct } from '../../data/paintProducts'
import { Droplets, Shield, Factory } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'

const featured = getFeaturedProduct()

const HERO_BG = 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1920&q=85'
const HERO_IMAGES = [
  'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80',
  'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80',
  'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80',
  'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400&q=80',
]

export default function PaintHero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[72vh] sm:min-h-[75vh] flex items-center overflow-hidden">
      {/* Full-bleed background image */}
      <div className="absolute inset-0">
        <Image
          src={HERO_BG}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/75" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-teal-900/20" />
      </div>
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-teal-900/10" />

      {/* Decorative images - scattered */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[12%] right-[8%] w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden border border-slate-600/50 shadow-2xl opacity-80">
          <Image src={HERO_IMAGES[0]} alt="" fill className="object-cover" sizes="160px" />
        </div>
        <div className="absolute bottom-[20%] right-[4%] w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-slate-600/50 shadow-xl opacity-70">
          <Image src={HERO_IMAGES[1]} alt="" fill className="object-cover" sizes="112px" />
        </div>
        <div className="absolute top-[30%] left-[2%] w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden border border-teal-500/30 shadow-xl opacity-60">
          <Image src={HERO_IMAGES[2]} alt="" fill className="object-cover" sizes="96px" />
        </div>
        <div className="absolute bottom-[30%] left-[10%] w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-slate-600/50 shadow-xl opacity-75">
          <Image src={HERO_IMAGES[3]} alt="" fill className="object-cover" sizes="128px" />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-teal-400 font-semibold text-sm uppercase tracking-wider mb-3"
            >
              {t('hero.badge')}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4"
            >
              {t('hero.title')}{' '}
              <span className="text-teal-400">{t('hero.titleHighlight')}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-slate-400 text-base sm:text-lg max-w-lg mb-6"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.22 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/#products"
                className="inline-flex items-center gap-2 px-5 py-3 bg-teal-500 hover:bg-teal-400 text-slate-900 font-semibold rounded-xl transition-all shadow-lg shadow-teal-500/25 hover:shadow-teal-400/30 no-underline"
              >
                <Droplets className="w-5 h-5" />
                {t('hero.viewProducts')}
              </Link>
              <a
                href="https://wa.me/9230999670475"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-xl border border-slate-600 transition-colors no-underline hover:no-underline"
              >
                {t('hero.getQuote')}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="mt-8 flex flex-wrap gap-6 text-slate-500 text-sm"
            >
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-teal-500/90" />
                {t('hero.corrosionProtection')}
              </span>
              <span className="flex items-center gap-2">
                <Factory className="w-4 h-4 text-teal-500/90" />
                {t('hero.industryReady')}
              </span>
            </motion.div>
          </div>

          {/* Featured product + main image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative z-10 flex flex-col gap-4"
          >
            <div className="relative rounded-2xl overflow-hidden border border-slate-600/50 shadow-2xl aspect-[4/3] max-h-[280px] sm:max-h-[320px]">
              <Image
                src={HERO_IMAGES[0]}
                alt="Industrial coatings"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-teal-400 text-xs font-semibold uppercase tracking-wider">{t('hero.featured')}</p>
                <h2 className="text-xl sm:text-2xl font-bold text-white">{featured.name}</h2>
                <p className="text-slate-300 text-sm">{featured.tagline}</p>
              </div>
            </div>
            <div className="rounded-xl bg-slate-800/60 border border-slate-700/60 p-4 sm:p-5 flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-500/20 text-teal-400 font-medium text-sm">
                <Droplets className="w-4 h-4" />
                {featured.size}
              </div>
              <p className="text-slate-400 text-sm flex-1 line-clamp-1">{featured.shortDescription}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
