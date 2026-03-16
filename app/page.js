import PaintNavbar from '../components/paint/Navbar'
import PaintHero from '../components/paint/PaintHero'
import ProductCarousel from '../components/paint/ProductCarousel'
import ContactSection from '../components/paint/ContactSection'
import PaintFooter from '../components/paint/Footer'

export const metadata = {
  title: 'Paint Pro | Industrial Coatings • Corrosion Protection • Epoxy Systems',
  description: 'Arabic-based startup providing industrial paints and epoxy systems in 3 ML, 5 ML, 6 ML and more. Korean & American base. Quality coatings for industries.',
  keywords: 'industrial coatings, corrosion protection, epoxy systems, paint, Arabic, industrial paint, 3ML, 5ML, 6ML',
  openGraph: {
    title: 'Paint Pro | Industrial Coatings • Corrosion Protection • Epoxy Systems',
    description: 'Arabic-based startup providing industrial paints and epoxy systems. Korean & American base formulations for industries.',
    siteName: 'Paint Pro',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900">
      <PaintNavbar />
      <PaintHero />
      <ProductCarousel />
      <ContactSection />
      <PaintFooter />
    </main>
  )
}
