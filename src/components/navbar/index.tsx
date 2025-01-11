import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

const NavbarLayout = () => {
  return (
    <div className="max-w-[1024px] mx-auto py-8 px-4 lg:px-0">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default NavbarLayout
