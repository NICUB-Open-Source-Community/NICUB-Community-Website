import { Link } from "react-router-dom";
import { navItems } from "../navItems";
import SubNav from "./SubNav";
import { ArrowRight } from "../../../assets/svg";
import { NavLink } from "react-router-dom";

interface ArrowRightProps {
  classname: string;
}
const Navbar = () => {
  const { resources, community } = navItems[0];
  const hoverStyles =
    "hover:bg-gray-100 rounded-2xl py-1 sm:px-4  transition duration-100 cursor-pointer";
  return (
    <nav className="flex justify-between items-center gap-0 px-[50px] mx-auto py-4 shadow-lg ">
      <Link to="/"> 
        <img src="/logo.jpeg" alt="logo" className="w-[100px] h-[70px]" />
      </Link>
      <div className="flex items-center gap-1">
       <NavLink to="/about"><p className={hoverStyles}>About Us</p></NavLink>
       <div className="relative group">
          <NavLink to="/resources"><p className={hoverStyles}>Resources</p></NavLink>
          <SubNav items={resources} />
        </div>
        <NavLink to="/projects"><p className={hoverStyles}>Projects</p></NavLink>
        <div className="relative group">
          <NavLink to="/community"><p className={hoverStyles}>Community</p></NavLink>
          <SubNav items={community} />
        </div>
        <NavLink to="/events"><p className={hoverStyles}>Events</p></NavLink>
        <JoinUs classname="hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
export const JoinUs = ({ classname }: ArrowRightProps) => {
  return (
    <NavLink to="/contact-us">
          <div className="w-fit bg-[#D9432C] text-white rounded-2xl py-1 px-4 cursor-pointer hover:bg-[#EE624D] transition duration-300 flex items-center gap-2">
                  <p> Contact Us</p>
                  <ArrowRight className={classname} />
           </div>
    </NavLink>

  );
};
