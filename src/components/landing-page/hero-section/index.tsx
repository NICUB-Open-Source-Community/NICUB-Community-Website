import { Link } from "react-router-dom";
import { JoinUs } from "../../navigation/navbar";
import { ArrowRight, Community } from "../../../assets/svg";

const HeroSection = () => {
  return (
    <main className="py-20 sm:pb-52 grid grid-cols-2 items-center">
      <div>
        <div className="mb-6 flex items-center bg-gray-200 w-fit px-3 py-1 rounded-2xl text-sm hover:bg-gray-300 cursor-pointer">
          <Link to="/dashboard">
            <p>
              Introducing noter's seamless transcription experience. Check it
              out
            </p>
          </Link>
          <ArrowRight />
        </div>
        <h1 className="mb-6 text-5xl font-semibold">
          Unlock the power of voice-to-text
        </h1>
        <p className="mb-6 text-gray-600 max-w-[450px] font-medium text-xl">
          noter is an AI powered ultimate tool for transforming speech into
          text. Record, transcribe, download, and more
        </p>
        <div className="mb-6">
          <JoinUs classname="block" />
        </div>
        <div className="flex items-center gap-x-2">
          <Community className="text-[#D9432C]" />
          <p>$ 32.84 billion of liquidity currently supplied in Aave</p>
        </div>
      </div>
      <div className="border-[9px] border-gray-300 rounded-xl">
        <img src="./hero.gif" className="h-full w-full " alt="" />
      </div>
    </main>
  );
};

export default HeroSection;
