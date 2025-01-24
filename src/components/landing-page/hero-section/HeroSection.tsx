import { Link } from "react-router-dom";
import { JoinUs } from "../../navigation/navbar/Navbar";
import { ArrowRight, Community } from "../../../assets/svg";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <main className=" bg-[url('/git-image-bg.png')] bg-contain bg-no-repeat bg-right bg-gray-900">
      <div className="max-w-[1024px] mx-auto px-4 py-20">
        <div className="mb-6 flex items-center bg-gray-200 w-fit px-3 py-1 rounded-2xl text-sm hover:bg-gray-300 cursor-pointer">
          <Link to="/dashboard">
            <p>Join the NICUB Community. Check it out</p>
          </Link>
          <ArrowRight />
        </div>
        <div className="mb-6 text-5xl font-semibold h-[90px] text-[#01A7E1]">
          Discover{" "}
          <span className="text-[#D9432C]">
            <Typewriter
              words={[
                "the future of open source",
                "the potential of community",
                "a world of collaboration",
              ]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </span>
        </div>
        <p className="mb-6 text-gray-300 max-w-[450px] text-xl">
          NICUB is an open-source community dedicated to empowering beginners
          and developers by equipping them with the skills they need to thrive
          in the tech industry.
        </p>
        <div className="mb-6">
          <JoinUs classname="block" text="Join Us" />
        </div>
        <div className="flex items-center gap-x-2 text-gray-300">
          <Community className="text-[#01A7E1]" />
          <p>10,000+ contributors worldwide making an impact</p>
        </div>

        {/* <div className="border-[9px] border-gray-300 rounded-xl">
        <img src="./hero.gif" className="h-full w-full " alt="" />
      </div> */}
      </div>
    </main>
  );
};

export default HeroSection;
