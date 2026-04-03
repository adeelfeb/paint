/**
 * Site copy (English only)
 */

export const siteCopy = {
  nav: {
    home: 'Home',
    products: 'Products',
    contact: 'Contact',
    overview: 'Overview',
    capabilities: 'Capabilities',
    standards: 'Standards & QC',
    experience: 'Experience',
    downloadPdf: 'Download PDF',
  },
  learnMore: 'Learn More',
  viewMore: 'View more',
  colorFinder: 'Color finder',
  allCategories: 'All',
  hero: {
    badge: 'Oman • Industrial solutions • Vision 2040',
    title: 'Coatings &',
    titleHighlight: 'Corrosion Protection',
    subtitle:
      'Protective coatings, waterproofing, and construction chemicals—HPC & UNICHEM. Specifications, TDS/SDS, and technical support.',
    viewProducts: 'View Products',
    getQuote: 'Get a Quote',
    corrosionProtection: 'Corrosion protection',
    industryReady: 'Industry-ready',
    featured: 'Featured',
  },
  products: {
    sectionTitle: 'Our Products',
    sectionSubtitle:
      'Industrial coatings in multiple sizes — 1 ML, 3 ML, 4 ML, 5 ML, 6 ML and more. Click any card for full details.',
    viewDetails: 'View details',
    applications: 'Applications',
    industries: 'Industries',
    specifications: 'Specifications',
    coverage: 'Coverage',
    dryTime: 'Dry time',
    recoatWindow: 'Recoat window',
    base: 'Base',
    sectionSize: '{{size}} ML',
    prev: 'Previous',
    next: 'Next',
    industrialGrade: 'Industrial grade',
    variantPartOf: 'Part of the {{size}} ML industrial range.',
    viewFullDetails: 'View full product',
  },
  buckets: {
    sectionTitle: 'Paint Bucket Ranges',
    sectionSubtitle: 'We offer industrial paint in multiple bucket sizes for every project scale.',
    small: 'Small Buckets',
    smallDesc: 'Ideal for touch-ups, samples, and small projects.',
    medium: 'Medium Buckets',
    mediumDesc: 'For workshops, maintenance, and medium-area coating.',
    large: 'Large Buckets',
    largeDesc: 'Project-scale and industrial volume.',
  },
  contact: {
    getQuoteTitle: 'Get a Quote',
    getQuoteSubtitle:
      'Need coatings, waterproofing, or construction chemicals? Tell us your requirements and we will get back to you.',
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    emailPlaceholder: 'your.email@example.com',
    sendMessage: 'Send Message',
    sending: 'Sending…',
  },
  footer: {
    tagline:
      'MOHAMMAD ALHJOUJ FOR INVESTMENT SPC—industrial coatings, waterproofing, construction chemicals & technical solutions. Partnering with Oman Vision 2040.',
    quickLinks: 'Quick Links',
    contact: 'Contact',
    getQuote: 'Get a Quote',
    privacyPolicy: 'Privacy Policy',
    whatsapp: 'WhatsApp',
    copyright:
      'MOHAMMAD ALHJOUJ FOR INVESTMENT SPC. Industrial coatings • Waterproofing • Construction chemicals. All rights reserved.',
  },
}

/**
 * @param {string} key - Dot path, e.g. `nav.home` or `products.sectionSize`
 * @param {Record<string, string>} [vars] - Replace `{{name}}` in string
 */
export function t(key, vars = {}) {
  const keys = key.split('.')
  let obj = siteCopy
  for (const k of keys) {
    obj = obj?.[k]
  }
  let str = typeof obj === 'string' ? obj : (obj ?? key)
  Object.keys(vars).forEach((v) => {
    str = str.replace(new RegExp(`{{${v}}}`, 'g'), vars[v])
  })
  return str
}
