import { Link } from "react-router-dom";
import { navItems } from "../navItems";
import SubNav from "./SubNav";
import { ArrowRight } from "../../../assets/svg";
import { NavLink } from "react-router-dom";

interface ArrowRightProps {
  classname?: string;
  text: string;
}
const Navbar = () => {
  const { resources, community } = navItems[0];
  const hoverStyles =
    "hover:bg-gray-100 rounded-2xl py-1 sm:px-4  transition duration-100 cursor-pointer";
  return (
    <section className="bg-white fixed top-0 w-full border-b z-30">
      <nav className="flex justify-between items-center gap-0 px-8 max-w-[1280px] mx-auto py-4">
        <Link to="/">
          <img src="/logo.jpeg" alt="logo" className="w-[100px] h-[80px]" />
        </Link>
        <div className="flex items-center gap-1">
         <NavLink to="/">
            <p className={hoverStyles}>Home</p>
          </NavLink>
          <NavLink to="/about">
            <p className={hoverStyles}>About Us</p>
          </NavLink>
          <div className="relative group">
            <NavLink to="/resources">
              <p className={hoverStyles}>Resources</p>
            </NavLink>
            <SubNav items={resources} />
          </div>
          <NavLink to="/projects">
            <p className={hoverStyles}>Projects</p>
          </NavLink>
          <div className="relative group">
              <p className={hoverStyles}>Community</p>
            <SubNav items={community} />
          </div>
          <NavLink to="/events">
            <p className={hoverStyles}>Events</p>
          </NavLink>
          <JoinUs classname="hidden" text="Contact Us" />
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
export const JoinUs = ({ classname, text }: ArrowRightProps) => {
  return (
    <div className="w-fit bg-[#D9432C] text-white rounded-2xl py-1 px-4 cursor-pointer hover:bg-[#EE624D] transition duration-300 flex items-center gap-2">
      <p>{text}</p>
      <ArrowRight className={classname} />
    </div>
  );
};
