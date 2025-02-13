import { JoinUs } from "../../navigation/navbar/Navbar";
import { Join } from "../../../assets/svg";
import { JoinCommunityProps } from "../../../types";

const JoinCommunityCard = ({
  text,
  heading,
  buttonText,
  bgColor,
  textColor,
}: JoinCommunityProps) => {
  return (
    <div
      className="max-w-[1280px] mx-auto p-8 mx-8 rounded-xl bg-gradient-to-l from-[#3DBCE5] to-[#1F2937]"
      style={{ background: bgColor }}
    >
      <div className="px-10 w-full flex justify-between items-center ">
        <div className="flex items-center gap-6 ">
          <div className="bg-[#3DBCE5] text-white rounded-full p-5">
            <Join className="text-8xl" />
          </div>
          {/* <img src="./logo.jpeg" alt="" className="rounded-full w-40"/> */}
          <div className="font-semibold">
            <p className="text-gray-300 font-semibold text-sm tracking-wider">
              {/* JOIN THE COMMUNITY */}
              {text}
            </p>
            <p
              className="text-5xl max-[1248px]:text-4xl"
              style={{ color: textColor }}
            >
              {/* Become a Contributor */}
              {heading}
            </p>
          </div>
        </div>
        <div>
          <JoinUs text={buttonText} />
        </div>
      </div>
    </div>
  );
};

export default JoinCommunityCard;
