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
  title: 'MOHAMMAD ALHJOUJ FOR INVESTMENT SPC | Industrial Solutions & Capability Profile',
  description:
    'Industrial coatings, waterproofing, construction chemicals, and technical solutions. Authorized HPC & UNICHEM representation. Partnering with Oman Vision 2040. Muscat, Oman.',
  keywords:
    'industrial coatings, waterproofing, construction chemicals, UNICHEM, HPC, Oman, Oman Vision 2040, MOHAMMAD ALHJOUJ, JSRS',
  icons: {
    icon: '/brand-logo.svg',
    apple: '/brand-logo.svg',
  },
  openGraph: {
    title: 'MOHAMMAD ALHJOUJ FOR INVESTMENT SPC | Industrial Solutions & Capability Profile',
    description:
      'Industrial coatings, waterproofing, construction chemicals, and technical solutions. Sultanate of Oman.',
    siteName: 'MOHAMMAD ALHJOUJ FOR INVESTMENT SPC',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={dmSans.variable}>
      <body className={`${dmSans.className} antialiased bg-[#f0f7f4] text-slate-800`}>
        <PaintProviders>{children}</PaintProviders>
      </body>
    </html>
  )
}

