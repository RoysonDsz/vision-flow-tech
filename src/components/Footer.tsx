import { useState, useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function Footer() {
  const wordSets = [
    ["The", "Unmistakably", "Original®", "Design", "Studio"],
    ["A", "Creatively", "Unique", "Visual", "Experience"],
    ["The", "Innovative", "Authentic", "Creative", "Space"],
    ["Your", "Go-To", "Branding", "Solution", "Hub"],
  ];

  const [currentWords, setCurrentWords] = useState(wordSets[0]);
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % wordSets.length;
      setCurrentWords(wordSets[index]);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    
    <footer className="hidden md:block bg-black text-white pt-5 text-center w-full ">
      <div className="flex flex-wrap justify-center gap-2 text-xl font-medium pb-10">
        {currentWords.map((word, i) => (
          <span
            key={i}
            className={`bg-black px-4 py-2 ${i % 2 === 0 ? "rounded-md" : "rounded-full"} shadow-[0_0_10px_rgba(9,184,220,0.8)]`}
          >
            {word}
          </span>
        ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center p-8 text-sm text-white w-full border-t-2 border-gray-300 bg-gray-900" style={{ height: '350px' }}>
      {/* Logo and Description */}
            <div className="flex flex-col items-center md:items-start w-full md:w-auto text-center ml-25 md:text-left space-y-4">
        <div className="flex items-center space-x-0">
          <img src={logo} alt="Logo" className="h-20 w-20" />
          <span className="text-4xl font-semibold bg-gradient-to-r from-white to-[rgba(9,184,220,0.8)] text-transparent bg-clip-text">
            Vision Flow Technologies
          </span>
        </div>
        <p className="text-xl max-w-100 ml-20 text-gray-300">
          A forward-thinking technology company dedicated to helping businesses grow through innovative digital solutions.
        </p>
      </div>


      {/* Contact Information */}
          <div className="flex flex-col space-y-7 w-full md:w-auto text-left pt-4 mr-30 pb-4">
            {/* Address Section */}
            <div className="flex flex-col md:flex-row items-center text-xl md:items-start space-x-2 md:space-x-6">
      <FaMapMarkerAlt className="text-[rgba(9,184,220,0.8)] h-7 w-7 mt-2" />
      <a
        href="https://maps.app.goo.gl/GMpdEncBdsbMQa9z5"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        <p>#5-148 B09, Navabharath Trade Center</p>
        <p>Moodbidri, Karnataka, India - 574227</p>
      </a>
    </div>

        
        {/* Email Section */}
        <div className="flex items-start space-x-7">
          <FaEnvelope className="text-[rgba(9,184,220,0.8)] mt-1 h-6 w-6" />
          <a href="mailto:visionflowtech.com" className="hover:underline text-xl">
            visionflowtech.com
          </a>
        </div>

        {/* Phone Section */}
        <div className="flex items-start space-x-7">
          <FaPhone className="text-[rgba(9,184,220,0.8)] mt-2 h-6 w-6  scale-x-[-1]" />
          <a href="tel:+919731070591" className="hover:underline text-xl">
            +91 9731070591
          </a>
        </div>
      </div>
      
    </div>
         {/* Copyright and Policy */}
         <div className="flex flex-col md:flex-row justify-center items-center text-center w-full mb-2 bg-gray-900 space-x-2">
        <span>©2025 Vision Flow Technologies All Rights Reserved</span>
        <span className="hidden md:inline">|</span>
        <br className="md:hidden" />
        <a href="/privacy" className="hover:underline">
          Privacy Policy
        </a>
      </div>

    </footer>
  );
}
