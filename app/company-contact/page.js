import PageLayout from '../../components/paint/PageLayout'
import PageHeader from '../../components/paint/PageHeader'
import SectionContact from '../../components/paint/SectionContact'

export const metadata = {
  title: 'Contact & Quote | MOHMMED AL HJOUJ FOR INVESTMENT SPC',
  description: 'Contact information and quote request form for industrial coating projects.',
}

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Contact & Quotations"
        description="Share your requirements and our team will respond with coating recommendations and a quote."
      />
      <SectionContact />
    </PageLayout>
  )
}
