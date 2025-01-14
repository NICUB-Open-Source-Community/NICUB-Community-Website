import { LinkedIn, GitHub, Instagram } from "../../../assets/svg";
import { navItems } from "../navItems";
const Footer = () => {
  const { resourcesFooter, companyFooter } = navItems[0];
  return (
    <footer className="bg-[#F7F6F6] grid grid-cols-2 items-center  text-hite rounded-xl px-4 py-8 text-gray-700">
      <section>
        <img
          src="./bg-remove-logo.png"
          className="w-[70px] h-[70px] mb-4"
          alt="Logo"
        />
        <p className="max-w-[350px]">
          Our beautiful designs open the door to a realm of limitless
          possibilities, where imagination knows no bounds
        </p>
      </section>
      <section className="grid grid-cols-3">
        <div>
          <h2 className="font-medium mb-4">Resources</h2>
          <div className="cursor-pointer">
            {resourcesFooter.map((resource, idx) => {
              return <p key={idx} className="hover:text-gray-900">{resource.texts}</p>;
            })}
          </div>
        </div>
        <div>
          <h2 className="font-medium mb-4">Industry</h2>
          <div className="cursor-pointer">
            {companyFooter.map((company, idx) => {
              return <p key={idx} className="hover:text-gray-900">{company.texts}</p>;
            })}
          </div>
        </div>
        <div>
          <h2 className="font-medium mb-4">Get in touch</h2>
          <p className="mb-2">
            <a href="mailto:nicubhub@gmail.com" className="hover:text-gray-900">nicubhub@gmail.com</a>
          </p>
          <div className="text-[#D9432C]  flex items-center gap-x-3">
            <LinkedIn className="hover:text-gray-400" />
            <a href="https://github.com/NICUB-Open-Source-Community" target="_blank">
              <GitHub className="hover:text-gray-400" />
            </a>
            <Instagram className="hover:text-gray-400" />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
