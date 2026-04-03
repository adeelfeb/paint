'use client'

import PaintNavbar from './Navbar'
import PaintFooter from './Footer'

export default function PageLayout({ children }) {
  return (
    <>
      <PaintNavbar />
      <main className="pt-24 min-h-screen bg-gradient-to-b from-[#f0f7f4] via-white to-[#f0f7f4]">{children}</main>
      <PaintFooter />
    </>
  )
}
