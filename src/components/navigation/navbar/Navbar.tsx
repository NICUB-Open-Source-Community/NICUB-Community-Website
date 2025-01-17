import { Link } from "react-router-dom";
import { navItems } from "../navItems";
import SubNav from "./SubNav";
import { ArrowRight } from "../../../assets/svg";

interface ArrowRightProps {
  classname: string;
}
const Navbar = () => {
  const { resources, community } = navItems[0];
  const hoverStyles =
    "hover:bg-gray-100 rounded-2xl py-1 sm:px-4  transition duration-100 cursor-pointer";
  return (
    <nav className="flex justify-between items-center gap-0 px-4 max-w-[1024px] mx-auto py-4">
      <Link to="/"> 
        <img src="/logo.jpeg" alt="logo" className="w-[100px] h-[80px]" />
      </Link>
      <div className="flex items-center gap-1">
        <p className={hoverStyles}>About Us</p>
        <div className="relative group">
          <p className={hoverStyles}>Community</p>
          <SubNav items={community} />
        </div>
        <div className="relative group">
          <p className={hoverStyles}>Resources</p>
          <SubNav items={resources} />
        </div>
        <p className={hoverStyles}>Sponsor</p>
        <JoinUs classname="hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
export const JoinUs = ({ classname }: ArrowRightProps) => {
  return (
    <div className="w-fit bg-[#D9432C] text-white rounded-2xl py-1 px-4 cursor-pointer hover:bg-[#EE624D] transition duration-300 flex items-center gap-2">
      <p> Join Us</p>
      <ArrowRight className={classname} />
    </div>
  );
};
