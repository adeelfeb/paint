import ProductDetailClient from './ProductDetailClient'
import PageLayout from '../../../components/paint/PageLayout'

export const metadata = {
  title: 'Product Details | MOHMMED AL HJOUJ FOR INVESTMENT SPC',
  description: 'Industrial coatings, epoxy systems, and corrosion protection products.',
}

export default function ProductDetailPage() {
  return (
    <PageLayout>
      <ProductDetailClient />
    </PageLayout>
  )
}
