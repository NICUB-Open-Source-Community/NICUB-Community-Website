// import { ArrowRight } from "../../../assets/svg";
import ContributeCard from "./ContributeCard";

const Contribute = () => {
  return (
    <div className="px-4">
      <div className="flex flex-col items-center gap-3 mb-10">
        <h1 className="text-4xl font-medium text-[#D9432C]">
          Make Contribution
        </h1>
        <p className="text-xl text-gray-600">Join hands to build together</p>
      </div>
      <main className="grid grid-cols-3 relative gap-3">
        <ContributeCard
          heading="Explore Projects"
          description="Discover projects that align with your interests and skills. Browse through our repositories"
          step={1}
          linkText="Start Exploring"
        />
        <ContributeCard
          heading="Pick an Issue"
          description="Choose a task or issue marked for contributors. Focus on “good first issues” to get started easily"
          step={2}
          linkText="View Issues"
        />
        <ContributeCard
          heading="Submit a Pull Request"
          description="Make your contribution by submitting a pull request. Share your improvements or solutions for review"
          step={3}
          linkText="Contribute Now"
        />
        {/* <p className="absolute p-3 rounded-full w-fit bg-gray-500 top-[50%] left-[20rem]">
          <ArrowRight className="text-white" />
        </p> */}
      </main>
    </div>
  );
};

export default Contribute;
