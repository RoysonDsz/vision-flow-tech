import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ImageTextTransition.css";
import Team from "../assets/Team.jpg";
import end2end from "../assets/end2end.jpg";
import Innov from "../assets/Inov.jpg";
import Quality from "../assets/Quality.jpg";

// Image & Text Data
const content = [
  {
    image: Team,
    title: "Professional Team",
    description:
      "Our team consists of experienced professionals who collaborate seamlessly to deliver outstanding results. With expertise across multiple domains, we ensure efficient and effective solutions tailored to your needs.",
  },
  {
    image: Innov,
    title: "Innovative Solutions",
    description:
      "We leverage the latest technology and creative thinking to develop cutting-edge, customized solutions. Our forward-thinking approach helps businesses stay ahead in a rapidly evolving digital landscape.",
  },
  {
    image: Quality,
    title: "Commitment to Quality",
    description:
      "Quality is at the core of everything we do, ensuring that our products and services meet the highest standards. We conduct rigorous testing and continuous improvements to deliver excellence.",
  },
  {
    image: end2end,
    title: "End-to-End Support",
    description:
      "From initial consultation to post-launch assistance, our dedicated support team is with you every step of the way. We provide seamless solutions to ensure your business runs smoothly.",
  },
];

// Animation Variants
const textVariants = {
  hidden: { opacity: 0, x: -50, scale: 0.9 },
  visible: { opacity: 1, x: 0, scale: 1, transition: { duration: 1.5, ease: "easeInOut" } },
  exit: { opacity: 0, x: -50, scale: 0.9, transition: { duration: 1 } }
};

const imageVariants = {
  hidden: { opacity: 0, x: 50, rotate: -10 },
  visible: { opacity: 1, x: 0, rotate: 0, transition: { duration: 1.5, ease: "easeInOut" } },
  exit: { opacity: 0, x: 50, rotate: 10, transition: { duration: 1 } }
};

const ImageTextTransition: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto overflow-hidden px-2 pt-10 md:pt-0 md:py-10  md:mt-10"> {/* Reduced horizontal padding */}
      {/* Section Title */}
      <h2 className="text-5xl lg:text-9xl text-white font-bold text-center opacity-70 mb-15 md:mb-20">
        Why Choose Us?
      </h2>

      {/* Content Wrapper */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10"> {/* Reduced gap */}
        {/* Text Section */}
        <div className="text-center w-full md:w-[50%] h-full "> {/* Slightly narrower */}
          <AnimatePresence mode="wait">
            <motion.div
              key={content[index].title}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={textVariants}
            >
              <h2 className="text-4xl text-white-500 sm:text-white-300 md:text-5xl font-semibold">{content[index].title}</h2>
              <p className="text-xl text-gray-200 mt-4">{content[index].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image Section */}
        <div className="w-[98%] max-w-sm h-[400px] shadow-lg rounded-3xl overflow-hidden">
        <AnimatePresence mode="wait">
        <motion.img
          key={content[index].image}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={imageVariants}
          src={content[index].image}
          alt="Transitioning"
          className="w-full h-full object-cover rounded-lg"
        />
      </AnimatePresence>
    </div>

      </div>
    </div>
  );
};

export default ImageTextTransition;