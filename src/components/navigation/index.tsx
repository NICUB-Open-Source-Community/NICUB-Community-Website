import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";

const NavbarLayout = () => {
  return (
    <div className="px-4 lg:px-0">
      <div className="">
        <Navbar />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default NavbarLayout;
