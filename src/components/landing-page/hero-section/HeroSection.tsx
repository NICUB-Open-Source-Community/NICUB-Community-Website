import { Link } from "react-router-dom";
import { JoinUs } from "../../navigation/navbar/Navbar";
import { ArrowRight, Community } from "../../../assets/svg";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <main className="py-20 sm:pb-52 grid grid-cols-2 items-center px-4">
      <div>
        <div className="mb-6 flex items-center bg-gray-200 w-fit px-3 py-1 rounded-2xl text-sm hover:bg-gray-300 cursor-pointer">
          <Link to="/dashboard">
            <p>Join the NICUB Community. Check it out</p>
          </Link>
          <ArrowRight />
        </div>
        <div className="mb-6 text-5xl font-semibold h-[100px]">
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
        <p className="mb-6 text-gray-500 max-w-[450px] text-xl">
          NICUB is your gateway to impactful open-source collaboration.
          Contribute, connect, and grow with a thriving global community
        </p>
        <div className="mb-6">
          <JoinUs classname="block" />
        </div>
        <div className="flex items-center gap-x-2 text-gray-700">
          <Community className="text-[#D9432C]" />
          <p>10,000+ contributors worldwide making an impact</p>
        </div>
      </div>
      <div className="border-[9px] border-gray-300 rounded-xl">
        <img src="./hero.gif" className="h-full w-full " alt="" />
      </div>
    </main>
  );
};

export default HeroSection;
