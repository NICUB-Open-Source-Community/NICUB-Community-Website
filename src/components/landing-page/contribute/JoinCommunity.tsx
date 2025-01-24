import { Books } from "../../../assets/svg";
import { JoinUs } from "../../navigation/navbar/Navbar";

const JoinCommunity = () => {
  return (
    <div className="max-w-[1024px] mx-auto p-4 py-8 bg-[url('/bg-section-1.webp')] rounded-xl">
      <div className="px-10 w-full flex justify-between items-center ">
        <div className="flex items-center gap-6 ">
          <div className="bg-[#28B79A] text-white rounded-full p-5">
            <Books className="text-8xl"/>
          </div>
          <div className="font-semibold">
            <p className="text-gray-400 text-sm tracking-wider">
              JOIN THE COMMUNITY
            </p>
            <p className="text-5xl text-white max-[1248px]:text-4xl">
              Become a Contributor
            </p>
          </div>
        </div>
        <div>
          <JoinUs text="Get Started" />
        </div>
      </div>
    </div>
  );
};

export default JoinCommunity;
