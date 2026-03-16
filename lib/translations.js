/**
 * Translations for Paint Pro – Arabic & English
 * Arabic-based industrial coatings company
 */

export const translations = {
  en: {
    // Nav
    nav: {
      home: 'Home',
      products: 'Products',
      contact: 'Contact',
    },
    // Hero
    hero: {
      badge: 'Industrial Paints • Arabic-Based Startup',
      title: 'Coatings &',
      titleHighlight: 'Corrosion Protection',
      subtitle: 'Epoxy systems in 3 ML, 5 ML, 6 ML and more. Korean & American base. Quality you can quote.',
      viewProducts: 'View Products',
      getQuote: 'Get a Quote',
      corrosionProtection: 'Corrosion protection',
      industryReady: 'Industry-ready',
      featured: 'Featured',
    },
    // Products
    products: {
      sectionTitle: 'Our Products',
      sectionSubtitle: 'Industrial coatings in multiple sizes — 3 ML, 5 ML, 6 ML and more. Click any card for full details.',
      viewDetails: 'View details',
    },
    // Contact / Quote
    contact: {
      getQuoteTitle: 'Get a Quote',
      getQuoteSubtitle: 'Need industrial coatings or corrosion protection? Tell us your requirements and we\'ll get back to you.',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your.email@example.com',
      sendMessage: 'Send Message',
      sending: 'Sending…',
    },
    // Footer
    footer: {
      tagline: 'Arabic-based startup providing industrial coatings, corrosion protection, and epoxy systems. Korean & American base formulations for industries across the region.',
      quickLinks: 'Quick Links',
      contact: 'Contact',
      getQuote: 'Get a Quote',
      privacyPolicy: 'Privacy Policy',
      whatsapp: 'WhatsApp',
      copyright: 'Paint Pro. Industrial Coatings • Corrosion Protection • Epoxy Systems. All rights reserved.',
    },
  },
  ar: {
    nav: {
      home: 'الرئيسية',
      products: 'المنتجات',
      contact: 'اتصل بنا',
    },
    hero: {
      badge: 'دهانات صناعية • شركة عربية',
      title: 'الطلاءات و',
      titleHighlight: 'الحماية من التآكل',
      subtitle: 'أنظمة إيبوكسي 3 مل، 5 مل، 6 مل والمزيد. قاعدة كورية وأمريكية. جودة يمكنك الاستفسار عنها.',
      viewProducts: 'عرض المنتجات',
      getQuote: 'احصل على عرض سعر',
      corrosionProtection: 'الحماية من التآكل',
      industryReady: 'جاهز للصناعة',
      featured: 'مميز',
    },
    products: {
      sectionTitle: 'منتجاتنا',
      sectionSubtitle: 'طلاءات صناعية بأحجام متعددة — 3 مل، 5 مل، 6 مل والمزيد. انقر على أي بطاقة للتفاصيل.',
      viewDetails: 'عرض التفاصيل',
    },
    contact: {
      getQuoteTitle: 'احصل على عرض سعر',
      getQuoteSubtitle: 'تحتاج طلاءات صناعية أو حماية من التآكل؟ أخبرنا بمتطلباتك وسنرد عليك.',
      name: 'الاسم',
      namePlaceholder: 'اسمك',
      email: 'البريد الإلكتروني',
      emailPlaceholder: 'your.email@example.com',
      sendMessage: 'إرسال الرسالة',
      sending: 'جاري الإرسال…',
    },
    footer: {
      tagline: 'شركة عربية ناشئة تقدم الطلاءات الصناعية وحماية التآكل وأنظمة الإيبوكسي. تركيبات ذات قاعدة كورية وأمريكية لصناعات المنطقة.',
      quickLinks: 'روابط سريعة',
      contact: 'اتصل',
      getQuote: 'احصل على عرض سعر',
      privacyPolicy: 'سياسة الخصوصية',
      whatsapp: 'واتساب',
      copyright: 'Paint Pro. الطلاءات الصناعية • الحماية من التآكل • أنظمة الإيبوكسي. جميع الحقوق محفوظة.',
    },
  },
}

export const rtlLocales = ['ar']

export function isRtl(locale) {
  return rtlLocales.includes(locale)
}
