import { Link } from "react-router-dom";

interface Resource {
  icon: React.ComponentType;
  heading: string;
  texts: string;
  link: string;
}
interface SubItemProps {
  items: Resource[];
}
const SubNav = ({ items }: SubItemProps) => {
  // const scrollToSection = (id: string) => {
  //   if (id == "projects") {
  //     const element = document.getElementById(id);
  //     if (element) element.scrollIntoView({ behavior: "smooth" });
  //   }
  // };
  return (
    <div className="bg-white absolute shadow-md p-3 w-[300px] rounded-lg invisible transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-hover:visible">
      {items.map((item, idx) => {
        return (
          <Link to={item.link}>
            <div
              // onClick={() => scrollToSection(item.link)}
              className="flex items-center gap-2 hover:bg-gray-100 hover:duration-200 hover:transition p-3 rounded-lg cursor-pointer"
              key={idx}
            >
              <div className=" border-[1.5px] p-1 rounded-md text-3xl">
                <item.icon />
              </div>
              <div className="leading-[1.3]">
                <h3>{item.heading}</h3>
                <p className="text-gray-500">{item.texts}</p>
              </div>
            </div>
          </Link>
          // </a>
        );
      })}
    </div>
  );
};

export default SubNav;
