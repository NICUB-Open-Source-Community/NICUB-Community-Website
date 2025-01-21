import AboutLayout from "./about/About"
import Contribute from "./contribute/Contribute"
import HeroSection from "./hero-section/HeroSection"

const LandingPageLayout = () => {
  return (
    <div>
      <HeroSection />
      <AboutLayout />
      <Contribute />
    </div>
  )
}

export default LandingPageLayout
