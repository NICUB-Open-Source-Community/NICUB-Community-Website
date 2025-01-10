import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landing-page/LandingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
        {
            index: true,
            element: <LandingPage />
        }
    ]
  },
  
]);
