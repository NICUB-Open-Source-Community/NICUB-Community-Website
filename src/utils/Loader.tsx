import { useState, useEffect } from "react";
const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src="./logo_v2.jpeg" className="animate-bounce rounded-xl" width="256px" alt="LOGO" />
    </div>
  );
};
export default Loader;

export const LoaderFunc = () => {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoader(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  return { loader, setLoader };
};
