import PageLayout from '../../components/paint/PageLayout'
import PageHeader from '../../components/paint/PageHeader'
import SectionProducts from '../../components/paint/SectionProducts'

export const metadata = {
  title: 'Products | MOHMMED AL HJOUJ FOR INVESTMENT SPC',
  description: 'Browse industrial coating products and open full product details.',
}

export default function ProductsPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Our Products"
        description="Browse the complete product range and open each product page for specifications and use cases."
      />
      <SectionProducts />
    </PageLayout>
  )
}
