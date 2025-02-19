import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const VisionMission: React.FC = () => {
  const [hoverKey, setHoverKey] = useState(0);
  const sparkControls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const triggerSparkAnimation = () => {
    sparkControls.start({
      y: [0, 600],
      transition: { duration: 1.5, ease: "easeInOut" },
    });
  };

  useEffect(() => {
    if (isInView) {
      triggerSparkAnimation();
    }
  }, [isInView, hoverKey]);

  return (
    <div className="w-full min-h-full bg-black text-white relative  md:top-0">
            <h2 className="hidden md:block text-6xl md:text-9xl text-white font-bold text-center mb-0 opacity-70" >
        About Us
      </h2>
      {/* Laptop View */}
      <div
        ref={sectionRef}
        className="hidden md:flex relative w-full min-h-[80vh] items-center justify-center overflow-hidden"
        onMouseEnter={() => setHoverKey((prev) => prev + 1)}
      >
        {/* Static Slanted Line */}
        <div className="absolute w-full h-full flex items-center justify-center">
          <div
            className="w-1 h-6/7 transform rotate-24 relative overflow-hidden"
            style={{
              background: "linear-gradient(180deg, rgba(0, 128, 198, 0.8), rgba(255, 255, 255, 0.5))",
              boxShadow: "0 0 12px rgba(0, 128, 198, 0.8)",
            }}
          >
        <motion.div
          className="absolute w-2 h-1 bg-white rounded-full shadow-[0_0_20px_10px_rgba(255,255,255,0.9)] left-1/2 -translate-x-1/2"
          animate={sparkControls}
        />

          </div>
        </div>

        {/* Vision Section */}
        <motion.div
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={isInView ? { opacity: 1, x: -200, y: -100 } : {}}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute text-center left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-center max-w-md">
            <motion.h1
              initial={{  x: 0 }}
              animate={isInView ? {  x: -100 } : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-6xl font-bold mb-4 opacity-70 text-white"
            >
              VISION
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 0 }}
              animate={isInView ? { opacity: 1, x: -100 } : {}}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-2xl"
            >
              To empower businesses with smooth, modern, and innovative technology solutions that drive efficiency, growth, and success.
            </motion.p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, x: 0, y: 0 }}
          animate={isInView ? { opacity: 1, x: 200, y: 100 } : {}}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute text-center left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center text-center max-w-md">
            <motion.h1
              initial={{  x: 0 }}
              animate={isInView ? {  x: 100 } : {}}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="text-6xl font-bold mb-4 opacity-70 text-white"
            >
              MISSION
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 0 }}
              animate={isInView ? { opacity: 1, x: 100 } : {}}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-2xl"
            >
              To deliver exceptional digital services that transform ideas into impactful solutions, ensuring success for businesses in the digital age.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Mobile View with Emerging Text Animation */}

      

<div className="md:hidden flex flex-col items-center justify-center m-h-full p-10" id="about">
  <h2 className="text-6xl pb-10 md:text-9xl text-white font-bold text-center opacity-70">
    About Us
  </h2>
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="text-center max-w-xs mb-4"
  >
    <h1 className="text-4xl font-bold mb-2 opacity-36">VISION</h1>
    <p className="text-xl">
      To empower businesses with smooth, modern, and innovative technology solutions that drive efficiency, growth, and success.
    </p>
  </motion.div>

  {/* Horizontal Line with Sparkle */}
  <div className="relative w-70 h-0.5 bg-[rgba(13,141,215,0.8)] my-3 overflow-hidden">
    <motion.div
      className="absolute w-2 h-1 bg-white rounded-full shadow-[0_0_20px_10px_rgba(255,255,255,0.9)]"
      animate={{ left: ["-100%", "100%"] }}  // Animate from left to right
      transition={{
        duration: 3., // Same duration as the previous spark animation
        ease: "easeOut",
        repeat: Infinity,  // Repeat indefinitely
        repeatType: "loop",
      }}
      viewport={{ once: true }}
    />
  </div>

  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    className="text-center max-w-xs"
  >
    <h1 className="text-4xl font-bold mt-3 mb-2 opacity-36">MISSION</h1>
    <p className="text-xl">
      To deliver exceptional digital services that transform ideas into impactful solutions, ensuring success for businesses in the digital age.
    </p>
  </motion.div>
</div>
      
    </div>
  );
};

export default VisionMission;