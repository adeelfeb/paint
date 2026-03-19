import { DM_Sans } from 'next/font/google'
import '../styles/globals.css'
import { PaintProviders } from '../components/paint/Providers'

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'MOHMMED AL HJOUJ FOR INVESTMENT SPC | Oil & Gas Capability Profile',
  description: 'Industrial coatings, corrosion protection, and epoxy systems. Serving Oil & Gas, petrochemical, mining, defense, and infrastructure in Oman and the region.',
  keywords: 'industrial coatings, corrosion protection, epoxy systems, oil and gas, Oman, UNICHEM, MOHMMED AL HJOUJ',
  icons: {
    icon: '/brand-logo.svg',
    apple: '/brand-logo.svg',
  },
  openGraph: {
    title: 'MOHMMED AL HJOUJ FOR INVESTMENT SPC | Oil & Gas Capability Profile',
    description: 'Industrial coatings, corrosion protection, and epoxy systems. Sultanate of Oman.',
    siteName: 'MOHMMED AL HJOUJ FOR INVESTMENT SPC',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className={`${dmSans.className} antialiased bg-slate-50 text-slate-800`}>
        <PaintProviders>{children}</PaintProviders>
      </body>
    </html>
  )
}

