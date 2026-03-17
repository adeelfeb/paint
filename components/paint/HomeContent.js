'use client'

import PaintNavbar from './Navbar'
import PaintHero from './PaintHero'
import SectionOverview from './SectionOverview'
import SectionCapabilities from './SectionCapabilities'
import SectionStandards from './SectionStandards'
import SectionExperience from './SectionExperience'
import SectionProducts from './SectionProducts'
import SectionContact from './SectionContact'
import PaintFooter from './Footer'

export default function HomeContent() {
  return (
    <>
      <PaintNavbar />
      <PaintHero />
      <SectionOverview />
      <SectionCapabilities />
      <SectionStandards />
      <SectionExperience />
      <SectionProducts />
      <SectionContact />
      <PaintFooter />
    </>
  )
}
