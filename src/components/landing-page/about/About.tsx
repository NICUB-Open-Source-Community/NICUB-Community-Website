import { aboutCards } from "./aboutUs";

const About = () => {
  return (
    <div className="py-20 max-w-[1024px] mx-auto border-b px-4">
      <div className="flex flex-col items-center gap-3 mb-10">
        <h1 className="text-4xl font-medium text-[#081A26]">What we do</h1>
        <p className="text-xl text-gray-600">Join hands to build together</p>
      </div>
      <main className="relative pt-20">
        <div className="absolute top-[20%]">
          <h2 className="text-[#D9432C] text-5xl font-medium mb-4">
              NICUB AT A GLANCE
          </h2>
          <p className="text-lg max-w-[400px] text-gray-600">
            NICUB drives open source innovation, enabling impactful
            collaborations and fostering a thriving global community of
            contributors.
          </p>
        </div>
        <div className="flex items-end flex-col gap-6 h-[45rem] scroll-bar">
          {aboutCards.map((aboutCard, index) => (
            <div key={index}>
              <img
                src={aboutCard.img}
                className="w-[500px] h-[250px] rounded-lg"
                alt="aboutimg"
              />
              <div className="flex items-center gap-4 my-4">
                <h1 className="text-3xl font-medium text-[#01A7E1]">
                  {aboutCard.heading}
                </h1>
                <p className="text-gray-600 text-lg">{aboutCard.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default About;