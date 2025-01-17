import { Outlet } from "react-router-dom"
import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer"

const NavbarLayout = () => {
  return (
    <div className="max-w-[1024px mxauto px-4 lg:px-0">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default NavbarLayout
