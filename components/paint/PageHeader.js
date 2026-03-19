import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function PageHeader({ title, description }) {
  return (
    <section className="border-b border-slate-200 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 no-underline mb-4"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Back to home
        </Link>
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">{title}</h1>
        {description ? <p className="mt-3 text-slate-600 max-w-2xl">{description}</p> : null}
      </div>
    </section>
  )
}
