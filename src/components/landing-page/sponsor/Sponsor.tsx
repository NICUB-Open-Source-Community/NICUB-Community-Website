import { motion } from "framer-motion";
import { SponsorItems } from "./SponsorItems";
const Sponsor = () => {
  return (
    <div className="py-20">
      <div className="overflow-hidden relative w-full bggray-100 py-20">
        <motion.div
          className="flex gap-16 w-max"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 2, 
            repeat: Infinity,
          }}
        >
          {[...SponsorItems, ...SponsorItems].map((img, index) => (
            <img key={index} src={img} alt="sponsor" className="h-16 w-auto" />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Sponsor;
