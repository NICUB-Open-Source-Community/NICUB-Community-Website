import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landing-page/LandingPage";
import NavbarLayout from "../components/navigation";
import AboutUs from "../pages/About-page/AboutR";
import Resources from "../pages/Resources-page/Resources";
import Projects from "../pages/Projects-pages/projects";
import Community from "../pages/Community-page/Community";
import Events from "../pages/Event-pages/Events";
import ContactUs from "../pages/ContactUs-page/ContactUs";

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
        element: <AboutUs />,
      },
      {
        path: "resources",
        element: <Resources />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      
    ],
  },
]);
