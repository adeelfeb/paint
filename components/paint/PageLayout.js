'use client'

import PaintNavbar from './Navbar'
import PaintFooter from './Footer'

export default function PageLayout({ children }) {
  return (
    <>
      <PaintNavbar />
      <main className="pt-24 min-h-screen bg-white">{children}</main>
      <PaintFooter />
    </>
  )
}
