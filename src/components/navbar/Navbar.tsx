import { Link } from "react-router-dom";

const buttonStyles = "bg-[#312D2D] text-white rounded-2xl py-1 px-4";
const hoverStyles = "hover:bg-gray-200 rounded-2xl py-1 sm:px-4";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center gap-0">
      <Link to="/">
        <img src="/logo.jpeg" alt="logo" className="w-[100px] h-[80px]"/>
      </Link>
      <div className="flex items-center gap-3">
        <button className={hoverStyles}>
          <a href="#feature">Features</a>
        </button>
        {/* <Link to="/dashboard"> */}
          <JoinUs />
        {/* </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;

export const JoinUs = () => {
  return <button className={buttonStyles}>Join Us</button>;
};
