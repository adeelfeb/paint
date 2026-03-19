import PageLayout from '../../components/paint/PageLayout'
import PageHeader from '../../components/paint/PageHeader'
import SectionStandards from '../../components/paint/SectionStandards'

export const metadata = {
  title: 'Standards & QC | MOHMMED AL HJOUJ FOR INVESTMENT SPC',
  description: 'Technical standards and quality control procedures for coating applications.',
}

export default function StandardsPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Standards & Quality Control"
        description="Review recognized standards and inspection procedures that support consistent coating quality."
      />
      <SectionStandards />
    </PageLayout>
  )
}
