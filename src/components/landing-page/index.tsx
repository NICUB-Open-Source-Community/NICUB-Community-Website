import AboutLayout from "./about/About"
import Contribute from "./contribute/Contribute"
import HeroSection from "./hero-section/HeroSection"
import Projects from "./projects/Projects"

const LandingPageLayout = () => {
  return (
    <div>
      <HeroSection />
      <AboutLayout />
      <Projects />
      <Contribute />
    </div>
  )
}

export default LandingPageLayout
