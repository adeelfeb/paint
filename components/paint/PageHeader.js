import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function PageHeader({ title, description }) {
  return (
    <section className="border-b border-brand-100 bg-gradient-to-br from-brand-50 via-white to-brand-50/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-brand-700 hover:text-brand-900 no-underline mb-4"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-brand-900 tracking-tight">{title}</h1>
        {description ? <p className="mt-3 text-slate-600 max-w-2xl leading-relaxed">{description}</p> : null}
      </div>
    </section>
  )
}
