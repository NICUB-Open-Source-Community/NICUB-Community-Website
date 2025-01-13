import { Link } from "react-router-dom";
// import { JoinUs } from "../../navbar/Navbar";

const HeroSection = () => {
  return (
    <main className="py-20 sm:pb-52 bg-[url('/hero-bg.png')] bg-cover">
      <div className="mb-6 flex items-center bg-gray-200 w-fit px-3 py-1 rounded-2xl text-sm hover:bg-gray-300 cursor-pointer">
        <Link to="/dashboard">
          <p>
            Introducing noter's seamless transcription experience. Check it
            out
          </p>
        </Link> 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            className="text-gray-400"
            fill="currentColor"
            d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z"
          />
        </svg>
      </div>
      <h1 className="mb-6 text-5xl font-semibold">
        Unlock the power of voice-to-text
      </h1>
      <p className="mb-6 text-gray-600 max-w-[500px] font-medium text-xl">
        noter is an AI powered ultimate tool for transforming speech into text. Record,
        transcribe, download, and more
      </p>
      {/* <Link to="/dashboard"> */}
        {/* <JoinUs /> */}
      {/* </Link> */}
    </main>
  );
};

export default HeroSection;