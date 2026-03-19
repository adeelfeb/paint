'use client'

import Link from 'next/link'
import { ArrowRight, Building2, CheckCircle2, Factory, PhoneCall, ShieldCheck } from 'lucide-react'
import PaintNavbar from './Navbar'
import PaintHero from './PaintHero'
import PaintFooter from './Footer'
import ProductShowcaseSection from './ProductShowcaseSection'

const PAGE_LINKS = [
  {
    href: '/overview',
    title: 'Company Overview',
    description: 'Background, sectors served, and technical positioning.',
    icon: Building2,
  },
  {
    href: '/capabilities',
    title: 'Technical Capabilities',
    description: 'Upstream, refinery, and industrial coating capabilities.',
    icon: Factory,
  },
  {
    href: '/standards',
    title: 'Standards & Quality',
    description: 'SSPC, NACE, ISO practices and QA/QC procedures.',
    icon: ShieldCheck,
  },
  {
    href: '/experience',
    title: 'Project Experience',
    description: 'Representative project and client experience.',
    icon: CheckCircle2,
  },
  {
    href: '/products',
    title: 'Products',
    description: 'Browse product range and open detailed product pages.',
    icon: ArrowRight,
  },
  {
    href: '/company-contact',
    title: 'Contact & Quote',
    description: 'Send requirements and request a quotation.',
    icon: PhoneCall,
  },
]

export default function HomeContent() {
  return (
    <>
      <PaintNavbar />
      <main className="min-h-screen bg-gradient-to-b from-brand-50/40 via-white to-brand-50/30 pt-2">
        <PaintHero />
        <ProductShowcaseSection />

        <section className="py-16 sm:py-20 bg-white border-y border-brand-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600 mb-2">Site map</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-900">Explore by page</h2>
              <p className="text-slate-600 mt-2 max-w-2xl mx-auto">
                Each section has its own page for clearer navigation and focused reading.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {PAGE_LINKS.map((item) => {
                const Icon = item.icon

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-2xl bg-gradient-to-br from-white to-brand-50/50 border border-brand-100 p-5 no-underline hover:border-brand-300 hover:shadow-lg hover:shadow-brand-900/5 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-brand-100 text-brand-800 flex items-center justify-center mb-4 group-hover:bg-brand-700 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-brand-900">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.description}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-700 group-hover:text-brand-900">
                      Open page
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      </main>
      <PaintFooter />
    </>
  )
}
