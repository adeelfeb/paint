import PageLayout from '../../components/paint/PageLayout'
import PageHeader from '../../components/paint/PageHeader'
import SectionCapabilities from '../../components/paint/SectionCapabilities'

export const metadata = {
  title: 'Capabilities | MOHMMED AL HJOUJ FOR INVESTMENT SPC',
  description: 'Oil and gas technical capabilities for upstream and industrial facilities.',
}

export default function CapabilitiesPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Technical Capabilities"
        description="Explore upstream, refinery, and industrial protection capabilities for demanding environments."
      />
      <SectionCapabilities />
    </PageLayout>
  )
}
