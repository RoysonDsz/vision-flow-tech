import { motion } from "framer-motion";

import '../App.css'


const PartnersMarquee = () => {
   const Logo=[
    {id:1,name:"/src/assets/infinite logo slider/Logo1.png"},
    {id:2,name:"/src/assets/infinite logo slider/Logo 2.png"},
    {id:3,name:"/src/assets/infinite logo slider/Logo 3.png"},
    {id:4,name:"/src/assets/infinite logo slider/Logo 4.png"},
    {id:5,name:"/src/assets/infinite logo slider/Logo 5.png"},
    {id:6,name:"/src/assets/infinite logo slider/Logo 6.png"}
  ]
  return (
    <div className="md:block overflow-hidden whitespace-nowrap w-full bg-black h-75">
      <motion.div
        className="flex gap-8 mt-[10px] space-x-[10px]"
        animate={{ x: [0,"-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
       
      >
        {Logo.map((items) => (
          <div
            key={items.id}
            className="flex-none p-4 bg-black rounded-lg shadow-[-10px_10px_10px_rgba(13,141,215,0.8)] w-40 h-20 flex items-center justify-center z-8"
          >
            <img src={items.name} alt="${items.id}" className="text-lg font-bold" />
          </div>
        ))}
        {Logo.map((items) => (
          <div
            key={items.id}
            className="flex-none p-4 bg-black rounded-lg shadow-[-10px_10px_10px_rgba(13,141,215,0.8)] w-40 h-20 flex items-center justify-center z-8"
          >
            <img src={items.name} alt="${items.id}" className="text-lg font-bold" />
          </div>
        ))}
        {Logo.map((items) => (
          <div
            key={items.id}
            className="flex-none p-4 bg-black rounded-lg shadow-[-10px_10px_10px_rgba(13,141,215,0.8)] w-40 h-20 flex items-center justify-center z-8"
          >
            <img src={items.name} alt="${items.id}" className="text-lg font-bold" />
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex gap-8 mt-[30px] space-x-[10px]"
        animate={{ x: ["-100%",0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
       
      >
        {Logo.map((items) => (
          <div
            key={items.id}
            className="flex-none p-4 bg-black rounded-lg shadow-[-10px_10px_10px_rgba(13,141,215,0.8)] w-40 h-20 flex items-center justify-center z-8"
          >
            <img src={items.name} alt="${items.id}" className="text-lg font-bold" />
          </div>
        ))}
        {Logo.map((items) => (
          <div
            key={items.id}
            className="flex-none p-4 bg-black rounded-lg shadow-[-10px_10px_10px_rgba(13,141,215,0.8)] w-40 h-20 flex items-center justify-center z-8"
          >
            <img src={items.name} alt="${items.id}" className="text-lg font-bold" />
          </div>
        ))}
        {Logo.map((items) => (
          <div
            key={items.id}
            className="flex-none p-4 bg-black rounded-lg shadow-[-10px_10px_10px_rgba(13,141,215,0.8)] w-40 h-20 flex items-center justify-center z-8"
          >
            <img src={items.name} alt="${items.id}" className="text-lg font-bold" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default PartnersMarquee;
