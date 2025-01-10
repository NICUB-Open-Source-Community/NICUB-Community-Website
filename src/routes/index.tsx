import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/landing-page/LandingPage";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            index: true,
            element: <LandingPage />
        }
    ]
  },
  
]);
