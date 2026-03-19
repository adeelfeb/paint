import PageLayout from '../../components/paint/PageLayout'
import PageHeader from '../../components/paint/PageHeader'
import SectionExperience from '../../components/paint/SectionExperience'

export const metadata = {
  title: 'Experience | MOHMMED AL HJOUJ FOR INVESTMENT SPC',
  description: 'Industrial project and defense coating experience in demanding sectors.',
}

export default function ExperiencePage() {
  return (
    <PageLayout>
      <PageHeader
        title="Project Experience"
        description="See representative industrial and defense coating experience across regional clients."
      />
      <SectionExperience />
    </PageLayout>
  )
}
