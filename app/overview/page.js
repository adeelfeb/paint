import PageLayout from '../../components/paint/PageLayout'
import PageHeader from '../../components/paint/PageHeader'
import SectionOverview from '../../components/paint/SectionOverview'

export const metadata = {
  title: 'Overview | MOHMMED AL HJOUJ FOR INVESTMENT SPC',
  description: 'Company overview and industrial coating profile.',
}

export default function OverviewPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Company Overview"
        description="Learn about our industrial coating background, sectors, and long-term asset protection expertise."
      />
      <SectionOverview />
    </PageLayout>
  )
}
