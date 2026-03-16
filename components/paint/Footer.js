'use client'

import Link from 'next/link'

export default function PaintFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white border-t border-slate-800">
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4 text-amber-400">Paint Pro</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Arabic-based startup providing industrial coatings, corrosion protection, and epoxy systems. 
                Korean & American base formulations for industries across the region.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-200">Quick Links</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
                <li><Link href="/#products" className="hover:text-amber-400 transition-colors">Products</Link></li>
                <li><Link href="/contact" className="hover:text-amber-400 transition-colors">Contact</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-slate-200">Account</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li><Link href="/login" className="hover:text-amber-400 transition-colors">Login</Link></li>
                <li><Link href="/signup" className="hover:text-amber-400 transition-colors">Sign Up</Link></li>
                <li><Link href="/dashboard" className="hover:text-amber-400 transition-colors">Dashboard</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-500 text-sm">
          <p>© {year} Paint Pro. Industrial Coatings • Corrosion Protection • Epoxy Systems. All rights reserved.</p>
        </div>
      </section>
    </footer>
  )
}
