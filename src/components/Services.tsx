import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import '../index.css'

const cards = [
  {
    title: "Web Development",
    description: "Building responsive, fast, and user-friendly websites with modern designs.",
    image: "/src/assets/Wbdev.jpg",
  },
  {
    title: "UI/UX Website Designs",
    description: "Enhance user experiences with elegant and intuitive designs.",
    image: "/src/assets/UIUXf.jpg",
  },
  {
    title: "E-Commerce Solutions",
    description: "Boost your business with scalable online store solutions.",
    image: "/src/assets/Ecom.jpg",
  },
  {
    title: "Graphic Design",
    description: "Designing eye-catching visuals, logos, and branding materials to enhance your business identity.",
    image: "/src/assets/GraphicDesign.jpg",
  },
  {
    title: "Social Media Management",
    description: "Manage and grow your social media presence effortlessly.",
    image: "/src/assets/SM.jpg",
  },
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="w-full max-h-screen  flex flex-col items-center text-center " id='services'>
      <h2 className="text-6xl md:text-9xl text-white font-bold text-center opacity-70 pt-10 pb-4 md:pt-0 " >
        Our Services
      </h2>

      {!isMobile ? (
        <div className="max-w-[90%] mx-auto px-4 py-20 mb-20 flex justify-center mt-0 items-center gap-6 overflow-hidden flex-nowrap">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className={`relative shadow-xl cursor-pointer transition-all duration-300 ease-in-out 
                          rounded-2xl overflow-hidden text-center
                          ${expandedIndex === index ? "z-10" : "z-0"}`}
              initial={{ width: 220, height: 320 }}
              animate={
                expandedIndex === index
                  ? { width: 320, height: 390 }
                  : { width: 220, height: 320 }
              }
              transition={{ duration: 0.25, ease: "easeInOut" }}
              onMouseEnter={() => setExpandedIndex(index)}
              onMouseLeave={() => setExpandedIndex(null)}
            >

              <motion.img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
              />

              {expandedIndex === index && (
                <motion.div
                  className="absolute bottom-0 left-0 w-full p-4 text-white rounded-2xl z-10 bg-gradient-to-t from-black/60 to-transparent"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.1, ease: "easeOut" }}
                >
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="text-sm mt-2">{card.description}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      ) : (
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            renderBullet: (_index, className) => `
              <span class="${className}" style="
                background-color: grey; 
                opacity: 1; 
                width: 10px; 
                height: 10px; 
                margin: 0 5px; 
                border-radius: 50%;
                transition: background-color 0.3s ease-in-out;">
              </span>`,
          }}
          onSlideChange={(swiper) => {
            document.querySelectorAll(".swiper-pagination-bullet").forEach((dot, i) => {
              (dot as HTMLElement).style.backgroundColor = i === swiper.activeIndex ? "rgba(13,141,215,0.8)" : "rgba(211,211,211,0.1)";
            });
          }}
          spaceBetween={20}
          slidesPerView={1}
          className="w-full flex justify-center items-center mt-6"
          style={{ paddingBottom: "50px" }}
        >
          {cards.map((card, index) => (
          <SwiperSlide key={index} className="flex justify-center">
          <div className="relative w-[95%] max-w-md shadow-lg overflow-hidden rounded-2xl mx-auto text-center">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-[400px] object-cover"
            />
            
            <div className="absolute bottom-0 left-0 w-full p-4 bg-black bg-opacity-70 text-white backdrop-blur-md">
              <h3 className="text-2xl font-semibold">{card.title}</h3>
              <p className="text-xl mt-2">{card.description}</p>
            </div>
          </div>
        </SwiperSlide>

          ))}
        </Swiper>
      )}
    </section>
  );
}

