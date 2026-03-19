/**
 * Paint products data – Industrial Coatings • Corrosion Protection • Epoxy Systems
 * Primary images: `public/products/hpc/` (named SKU-style renders).
 * Gallery: mix of `hpc/` ChatGPT renders + `uni/` photos for detail pages.
 */

import { PAINT_BOX_IMAGES } from './paintImages'
import { publicProductPath as pp } from './publicProductImages'

// Section order: 1ml, 3ml, 4ml, 5ml, 6ml (then 10ml, 15ml in larger section)
export const PRODUCT_SIZES = ['1ml', '3ml', '4ml', '5ml', '6ml']

export const PAINT_PRODUCTS = [
  {
    id: '1ml',
    name: 'Epoxy Coating 1 ML',
    size: '1 ML',
    image: pp('hpc/THINNER SPECIAL.png'),
    gallery: [
      pp('hpc/ChatGPT Image Jan 18, 2026, 02_15_22 PM.png'),
      pp('uni/WhatsApp Image 2026-01-18 at 3.42.52 AM.jpeg'),
      pp('WhatsApp Image 2026-01-18 at 2.36.01 AM.jpeg'),
    ],
    tagline: 'Ultra-precision sample format',
    shortDescription: '1 ml epoxy for samples and micro touch-ups. Ideal for testing and precision applications.',
    fullDescription: 'Our 1 ML epoxy coating is designed for ultra-precision work, sample testing, and micro touch-ups. Korean and American base technologies ensure consistent quality for R&D and small-scale industrial use.',
    applications: ['Sample testing', 'Color matching', 'Micro touch-ups', 'R&D and laboratory', 'Precision electronics'],
    industries: ['Electronics', 'Manufacturing', 'R&D', 'Laboratory'],
    specs: { coverage: '~0.2 m² per unit', dryTime: '3–5 hours', recoatWindow: '12–24 hours', base: 'Epoxy (Korean & American base)' },
    featured: false,
  },
  {
    id: '3ml',
    name: 'Epoxy Coating 3 ML',
    size: '3 ML',
    image: pp('hpc/BASE COAT READY MIX.png'),
    gallery: [
      pp('hpc/ChatGPT Image Jan 18, 2026, 01_26_49 PM.png'),
      pp('hpc/2K PRIMER+HARDENER.png'),
      pp('uni/WhatsApp Image 2026-01-18 at 3.42.55 AM.jpeg'),
    ],
    tagline: 'Most popular for precision applications',
    shortDescription: 'Industrial-grade epoxy in 3 ml format. Ideal for touch-ups, samples, and small-area corrosion protection.',
    fullDescription: 'Our 3 ML epoxy coating is the go-to choice for precision work and small-scale industrial applications. Formulated with Korean and American base technologies, it delivers excellent adhesion, chemical resistance, and durability. Perfect for touch-ups, sample testing, and confined spaces.',
    applications: [
      'Touch-up and repair work',
      'Sample testing and color matching',
      'Small industrial components',
      'Laboratory and R&D use',
      'Precision coating in electronics',
    ],
    industries: ['Manufacturing', 'Electronics', 'Marine', 'Oil & Gas', 'Infrastructure'],
    specs: {
      coverage: '~0.5 m² per unit',
      dryTime: '4–6 hours',
      recoatWindow: '12–24 hours',
      base: 'Epoxy (Korean & American base)',
    },
    featured: true,
  },
  {
    id: '5ml',
    name: 'Industrial Epoxy 5 ML',
    size: '5 ML',
    image: pp('hpc/clear+hardener ms.png'),
    gallery: [
      pp('hpc/CLEAR + HARDENER MS 1L.png'),
      pp('hpc/ChatGPT Image Jan 18, 2026, 02_20_57 PM.png'),
      pp('uni/WhatsApp Image 2026-01-18 at 3.42.53 AM.jpeg'),
    ],
    tagline: 'Versatile mid-size format',
    shortDescription: '5 ml epoxy for medium coverage. Suits workshops, maintenance teams, and spot corrosion protection.',
    fullDescription: 'The 5 ML format bridges sample size and project-scale use. Same premium epoxy formulation with Korean and American base, designed for workshops, maintenance teams, and spot corrosion protection across industries.',
    applications: [
      'Workshop and maintenance use',
      'Spot corrosion protection',
      'Joint and seam sealing',
      'Patch repairs',
      'Equipment coating',
    ],
    industries: ['Automotive', 'Construction', 'Marine', 'Mining', 'Water treatment'],
    specs: {
      coverage: '~0.8 m² per unit',
      dryTime: '4–6 hours',
      recoatWindow: '12–24 hours',
      base: 'Epoxy (Korean & American base)',
    },
    featured: false,
  },
  {
    id: '4ml',
    name: 'Epoxy Coating 4 ML',
    size: '4 ML',
    image: pp('hpc/2k acrilic.png'),
    gallery: [
      pp('hpc/ChatGPT Image Jan 18, 2026, 01_52_55 PM.png'),
      pp('WhatsApp Image 2026-01-18 at 2.36.03 AM (1).jpeg'),
      pp('uni/WhatsApp Image 2026-01-18 at 3.42.54 AM (1).jpeg'),
    ],
    tagline: 'Compact format for spot repairs',
    shortDescription: '4 ml epoxy for spot repairs and small patches. Balanced coverage and ease of use.',
    fullDescription: 'The 4 ML epoxy coating offers a compact format ideal for spot repairs and small patches. Same premium Korean and American base formulation with balanced coverage for maintenance and industrial use.',
    applications: ['Spot repairs', 'Small patches', 'Joint sealing', 'Equipment touch-ups', 'Sample batches'],
    industries: ['Automotive', 'Manufacturing', 'Maintenance', 'Marine'],
    specs: { coverage: '~0.6 m² per unit', dryTime: '4–6 hours', recoatWindow: '12–24 hours', base: 'Epoxy (Korean & American base)' },
    featured: false,
  },
  {
    id: '6ml',
    name: 'Heavy-Duty Epoxy 6 ML',
    size: '6 ML',
    image: pp('hpc/CLEAR HS 5 L.png'),
    gallery: [
      pp('hpc/clear+hardener HS.png'),
      pp('hpc/ChatGPT Image Jan 18, 2026, 02_21_41 PM.png'),
      pp('uni/WhatsApp Image 2026-01-18 at 3.42.56 AM (1).jpeg'),
    ],
    tagline: 'Extended coverage, same quality',
    shortDescription: '6 ml heavy-duty epoxy for larger patches and industrial surfaces. High build, long-lasting protection.',
    fullDescription: 'Our 6 ML heavy-duty epoxy offers extended coverage without compromising on quality. Built for larger patches, industrial surfaces, and environments where corrosion and chemical exposure are high. Arabic-market focused with globally trusted Korean and American base technology.',
    applications: [
      'Larger patch repairs',
      'Industrial floor touch-ups',
      'Tank and vessel lining repair',
      'Pipe coating',
      'Structural steel protection',
    ],
    industries: ['Oil & Gas', 'Chemical', 'Marine', 'Infrastructure', 'Power'],
    specs: {
      coverage: '~1 m² per unit',
      dryTime: '5–7 hours',
      recoatWindow: '12–24 hours',
      base: 'Epoxy (Korean & American base)',
    },
    featured: false,
  },
  {
    id: '10ml',
    name: 'Epoxy System 10 ML',
    size: '10 ML',
    image: pp('hpc/2K PRIMER+HARDENER.png'),
    gallery: [
      pp('hpc/ChatGPT Image Jan 18, 2026, 01_47_33 PM.png'),
      pp('hpc/BASE COAT READY MIX.png'),
      pp('WhatsApp Image 2026-02-26 at 10.01.59 AM.jpeg'),
    ],
    tagline: 'Project-ready volume',
    shortDescription: '10 ml epoxy for project-scale jobs. Single-component convenience with professional performance.',
    fullDescription: 'The 10 ML epoxy system is tailored for project-scale jobs where consistency and ease of use matter. Single-component convenience with professional-grade adhesion and corrosion protection. Serves Arabic-region industries with internationally sourced base technology.',
    applications: [
      'Project-scale coating',
      'Tank interiors',
      'Concrete protection',
      'Metal substrate priming',
      'Industrial equipment',
    ],
    industries: ['Construction', 'Water & Wastewater', 'Food & Beverage', 'Pharma', 'Marine'],
    specs: {
      coverage: '~1.5 m² per unit',
      dryTime: '5–7 hours',
      recoatWindow: '12–24 hours',
      base: 'Epoxy (Korean & American base)',
    },
    featured: false,
  },
  {
    id: '15ml',
    name: 'Corrosion Protection 15 ML',
    size: '15 ML',
    image: pp('hpc/clear+hardener UHS.png'),
    gallery: [
      pp('hpc/ChatGPT Image Jan 18, 2026, 05_39_14 AM.png'),
      pp('hpc/clear+hardener HS.png'),
      pp('uni/WhatsApp Image 2026-01-18 at 3.42.53 AM (3).jpeg'),
    ],
    tagline: 'Maximum durability in compact format',
    shortDescription: '15 ml corrosion-resistant coating for demanding environments. High film build, long service life.',
    fullDescription: 'Our 15 ML corrosion protection coating delivers maximum durability in a compact format. Engineered for demanding environments—offshore, chemical plants, and heavy industry. Arabic-based startup quality with Korean and American base formulations.',
    applications: [
      'Offshore and marine',
      'Chemical plant equipment',
      'Bridges and steel structures',
      'Underground pipelines',
      'High-abrasion areas',
    ],
    industries: ['Oil & Gas', 'Marine', 'Mining', 'Infrastructure', 'Defense'],
    specs: {
      coverage: '~2 m² per unit',
      dryTime: '6–8 hours',
      recoatWindow: '24 hours',
      base: 'Epoxy (Korean & American base)',
    },
    featured: false,
  },
]

/** Fallback when a local path is missing at runtime (e.g. typo). */
export function getProductImage(product) {
  if (product?.image) return product.image
  return PAINT_BOX_IMAGES[0]
}

/** Unique ordered list: hero + gallery (for detail / lightbox). */
export function getProductImageGallery(product) {
  if (!product) return []
  const raw = [product.image, ...(product.gallery || [])].filter(Boolean)
  return [...new Set(raw)]
}

export function getFeaturedProduct() {
  return PAINT_PRODUCTS.find((p) => p.featured) || PAINT_PRODUCTS[0]
}

export function getProductById(id) {
  return PAINT_PRODUCTS.find((p) => p.id === id) || null
}
