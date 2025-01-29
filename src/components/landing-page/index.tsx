// import AboutLayout from "./about/About"
import Contribute from "./contribute/Contribute"
import JoinCommunity from "./contribute/JoinCommunity"
import Faq from "./faq/Faq"
import HeroSection from "./hero-section/HeroSection"
import Projects from "./projects/Projects"

const LandingPageLayout = () => {
  return (
    <div>
      <HeroSection />
      {/* <AboutLayout /> */}
      <Projects />
      <Contribute />
      <JoinCommunity />
      <Faq />
    </div>
  )
}

export default LandingPageLayout
