import { ArrowRight } from "../../../assets/svg";

interface ContributeProps {
  heading: string;
  description: string;
  // step: number;
  linkText: string
}
const ContributeCard = ({
  heading,
  description,
  // step,
  linkText,
}: ContributeProps) => {
  return (
      <div className="flex flex-col items-center text-center gap-4 group">
        {/* <p className="bg-[#3DBCE5] text-white p-1 px-2 text-xs rounded-xl group-hover:bg-[#01A7E1]">
          STEP {step}
        </p> */}
        <p className="font-medium text-xl">{heading}</p>
        <p className="max-w-[280px] text-gray-600">{description}</p>
        <div className="flex items-center bg-[#D9432C] hover:bg-[#EE624D] text-white rounded-2xl py-1 px-4">
          <a href="" className="text-sm">
            {linkText}
          </a>
          <ArrowRight />
        </div>
      </div>
  );
};

export default ContributeCard;
