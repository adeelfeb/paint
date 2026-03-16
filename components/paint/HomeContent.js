'use client'

import { useState } from 'react'
import PaintNavbar from './Navbar'
import PaintHero from './PaintHero'
import HeroProductsCarousel from './HeroProductsCarousel'
import ProductsBySizeSection from './ProductsBySizeSection'
import ContactSection from './ContactSection'
import BucketRangesSection from './BucketRangesSection'
import PaintFooter from './Footer'
import ProductModal from './ProductModal'

export default function HomeContent() {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  const openProductModal = (product) => {
    setSelectedProduct(product)
    setModalOpen(true)
  }
  const closeProductModal = () => {
    setModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <>
      <PaintNavbar />
      <PaintHero />
      <HeroProductsCarousel onProductClick={openProductModal} />
      <ProductsBySizeSection onProductClick={openProductModal} />
      <ContactSection />
      <BucketRangesSection />
      <PaintFooter />

      <ProductModal
        product={selectedProduct}
        isOpen={modalOpen}
        onClose={closeProductModal}
      />
    </>
  )
}
