import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import Loader, { LoaderFunc } from "./utils/Loader";

function App() {
  const { loader } = LoaderFunc();
  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div className="tracking-tight w-full">
          <RouterProvider router={router} />
        </div>
      )}
    </>
  );
}

export default App;
