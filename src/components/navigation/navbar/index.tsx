import { Link } from "react-router-dom";
import { navItems } from "./navItems";
// import { useAppState } from "../../../utils/AppContext";
import SubNav from "./SubNav";

const Navbar = () => {
  // const { navItems } = useAppState();
  const { resources, community } = navItems[0];
  const buttonStyles =
    "bg-[#EE624D] text-white rounded-2xl py-1 px-4 cursor-pointer ";
  const hoverStyles =
    "hover:bg-gray-100 rounded-2xl py-1 sm:px-4  transition duration-100 cursor-pointer";
  return (
    <nav className="flex justify-between items-center gap-0">
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
        <p className={buttonStyles}>Join Us</p>
      </div>
    </nav>
  );
};

export default Navbar;
