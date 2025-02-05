import AboutLayout from "./about/About"
import Contribute from "./contribute/Contribute"
import JoinCommunity from "./contribute/JoinCommunity"
import Sponsor from "./contribute/Sponsor"
import HeroSection from "./hero-section/HeroSection"
import Projects from "./projects/Projects"

const LandingPageLayout = () => {
  return (
    <div>
      <HeroSection />
      <AboutLayout />
      <Projects />
      <Contribute />
      <JoinCommunity />
      <Sponsor />
    </div>
  )
}

export default LandingPageLayout
