import { ArrowRight } from "../../../assets/svg";
import ContributeCard from "./ContributeCard"

const Contribute = () => {
  return (

    <div className="px-8 py-20 max-w-[1280px] mx-auto">

  {/* </div>  <div className="px4 py-20 max-w-[1024px] mx-auto">  */}

      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:p-4 ">

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