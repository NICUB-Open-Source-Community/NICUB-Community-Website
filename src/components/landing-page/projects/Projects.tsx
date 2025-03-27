import { JoinUs } from "../../navigation/navbar/Navbar";
import { ProjectItems } from "./project";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <main
      id="projects"

      className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 place-items-center py-20 mt-20 max-w-[1280px] mx-auto border-b bg-[#F5F8FE] px-6 grid grid-cols-2 gap-3 rounded-xl"

      // className="py-20 mt-20 max-w-[1024px] mx-auto border-b bg-[#F5F8FE] px-6 grid grid-cols-2 gap-3 rounded-xl"
>
    
      <div className="flex flex-col gap-3">
        <h1 className="text-[#01A7E1] font-medium text-2xl mb-4">Projects</h1>
        <p className="font-medium text-2xl max-w-[300px]">
          Driving Innovation, One Solution at a Time
        </p>
        <p className="text-gray-600 mb-4 max-w-[400px]">
          Whether you're starting fresh or revamping an existing project, our
          tools streamline the process, empowering creativity and
          collaboration.s.
        </p>
        <Link to="https://github.com/orgs/NICUB-Open-Source-Community/repositories">
          <JoinUs text="Discover More" />
        </Link>
      </div>
      <div className="flex flex-col gap-3">
        {ProjectItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center p-4 pr-8 gap-3 rounded-lg ${
              idx % 2 !== 0 ? "bg-gray-800" : "bg-white"
            }`}
          >
            <item.icon className="text-[#D9432C] text-4xl" />
            <div className="w-full">
              <div className="flex gap-20 items-center justify-between">
                <h1 className="text-xl text-[#01A7E1] font-medium">
                  {item.heading}
                </h1>
                <p
                  className={`before:content-[''] before:w-[6px] before:h-[6px] before:absolute before:top-[8px] before:left-[-15px] before:rounded-full relative before:bg-[#D9432C]  text-sm ${
                    idx % 2 !== 0 ? "text-gray-300" : "text-gray-800"
                  }`}
                >
                  {item.languages}
                </p>
              </div>
              <p
                className={`${
                  idx % 2 !== 0 ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Projects;
