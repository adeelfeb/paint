import { Poppins } from 'next/font/google'
import '../styles/globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: 'Paint Pro | Industrial Coatings • Corrosion Protection • Epoxy Systems',
  description: 'Arabic-based startup providing industrial paints and epoxy systems in 3 ML, 5 ML, 6 ML and more. Korean & American base. Quality coatings for industries.',
  keywords: 'industrial coatings, corrosion protection, epoxy systems, paint, Arabic, industrial paint, 3ML, 5ML, 6ML',
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    title: 'Paint Pro | Industrial Coatings • Corrosion Protection • Epoxy Systems',
    description: 'Arabic-based startup providing industrial paints and epoxy systems. Korean & American base formulations for industries.',
    siteName: 'Paint Pro',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={`${poppins.className} antialiased bg-slate-900 text-slate-100`}>
        {children}
      </body>
    </html>
  )
}

