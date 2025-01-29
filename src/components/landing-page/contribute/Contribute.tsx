import { ArrowRight } from "../../../assets/svg";
import ContributeCard from "./ContributeCard"

const Contribute = () => {
  return (
    <div className="px4 py-20 max-w-[1024px] mx-auto">
      <div className="flex flex-col items-center gap-3 mb-10">
        <h1 className="text-4xl font-medium text-[#081A26]">
          Make Contribution
        </h1>
        <p className="text-xl text-gray-600">Join hands to build together</p>
      </div>
      <main className="grid grid-cols-3 relative gap-4 bg-[#F5F8FE] px-2 py-10 rounded-xl">
        <ContributeCard
          heading="Beginner Tutorials"
          description="Start your journey with beginner-friendly guides. Learn the fundamentals and build confidence step by step"
          linkText="Start Exploring"
        />
        <ContributeCard
          heading="Open Source Resource"
          description="Explore valuable tools, frameworks, and documentation to support your contributions and development process"
          linkText="View Issues"
        />
        <ContributeCard
          heading="Project Based Learning"
          description="Gain hands-on experience by working on real-world projects. Build, collaborate, and grow your skills"
          linkText="Contribute Now"
        />
        {/* <p className="absolute p-3 rounded-full w-fit bg-gray-500 top-[50%] left-[30%]">
          <ArrowRight className="text-white" />
        </p> */}
        <RightArrow position="top-[50%] left-[31%]"/>
        <RightArrow position="top-[50%] left-[65%]"/>
      </main>
    </div>
  );
};

export default Contribute;
export const RightArrow = ({position}:{position:string}) => {
  return (
    <p className={`absolute p-2 rounded-full w-fit bg-[#3DBCE5] ${position}`}>
      <ArrowRight className="text-white" />
    </p>
  );
};