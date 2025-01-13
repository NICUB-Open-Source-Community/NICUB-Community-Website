const Footer = () => {
  return (
    <div className="bg-[#211D1D] grid grid-cols-4 grid-row-1 gap-3 text-white">
      <div>
        <img src="./logo.jpeg" alt="Logo" />
        <p>
          Our beautiful designs open the door to a realm of limitless
          possibilities, where imagination knows no bounds
        </p>
      </div>
      <div>
        <h2>Resources</h2>
        <div>
          <p>Projects</p>
          <p>FAQs</p>
          <p>Community</p>
        </div>
      </div>
      <div>
        <h2>Company</h2>
        <div>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
          <p>Contact</p>
        </div>
      </div>
      <div>
        <h2></h2>
      </div>
    </div>
  );
};

export default Footer;
