import HomeContent from '../components/paint/HomeContent'

export const metadata = {
  title: 'MOHMMED AL HJOUJ FOR INVESTMENT SPC | Oil & Gas Capability Profile',
  description: 'Industrial coatings, corrosion protection, and epoxy systems. Serving Oil & Gas, petrochemical, mining, defense, and infrastructure in Oman and the region.',
  keywords: 'industrial coatings, corrosion protection, epoxy systems, oil and gas, Oman, UNICHEM, MOHMMED AL HJOUJ',
  openGraph: {
    title: 'MOHMMED AL HJOUJ FOR INVESTMENT SPC | Oil & Gas Capability Profile',
    description: 'Industrial coatings, corrosion protection, and epoxy systems. Sultanate of Oman.',
    siteName: 'MOHMMED AL HJOUJ FOR INVESTMENT SPC',
    type: 'website',
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HomeContent />
    </main>
  )
}
