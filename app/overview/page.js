import PageLayout from '../../components/paint/PageLayout'
import PageHeader from '../../components/paint/PageHeader'
import SectionOverview from '../../components/paint/SectionOverview'

export const metadata = {
  title: 'Overview | MOHAMMAD ALHJOUJ FOR INVESTMENT SPC',
  description:
    'Executive summary: protective coatings, waterproofing, construction chemicals, and HPC & UNICHEM representation in Oman.',
}

export default function OverviewPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Company Overview"
        description="Background, sectors served, Vision 2040 alignment, and technical positioning across coatings, waterproofing, and construction chemicals."
      />
      <SectionOverview />
    </PageLayout>
  )
}
