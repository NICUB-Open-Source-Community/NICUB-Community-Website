import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landing-page/LandingPage";
import NavbarLayout from "../components/navigation";
import About from "../pages/about/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavbarLayout />,
    children: [
      {
        index: true,
        element: <LandingPage/>,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
