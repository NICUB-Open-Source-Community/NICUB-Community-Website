import { projects } from "./project"

const Projects = () => {
  return (
    <div  className="flex flex-col justify-center items-center justify-items-center p-[40px]">
    <h1 className="text-bold text-[40px] font-extrabold">Projects</h1>
    <div className="grid grid-cols-3 py-[20px] gap-[30px]">
      { projects.map((project) => {
        return (
              <div className="border-4 rounded-xl">
                <img src={project.photo} alt="team" className="rounded-t-lg object-contain w-[100%]"/>
                <div className="py-[30px] px-[15px]">
                      <h1 className="text-bold text-[20px]">{project.name}</h1>
                      <p className="text-gray-700">{project.description}</p>
                </div>
              </div>
        )
      })}
    </div>
    
  </div>
  )
}

export default Projects
