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
    <footer className="md:hidden bg-black text-white text-center w-full">
      {/* Animated Word Section */}
      <div className="flex flex-wrap justify-center gap-2 text-lg md:text-xl font-medium py-6">
        {currentWords.map((word, i) => (
          <span
            key={i}
            className={`bg-black px-3 py-1 md:px-4 md:py-2 ${i % 2 === 0 ? "rounded-md" : "rounded-full"} shadow-[0_0_10px_rgba(13,141,215,0.8)]`}
          >
            {word}
          </span>
        ))}
      </div>

      {/* Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-6 mb-10 border-t border-white bg-gray-900 text-sm md:text-base space-y-6 md:space-y-0">
        
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <div className="flex flex-col md:flex-row items-center md:space-x-3">
            <img src={logo} alt="Logo" className="h-16 w-16 md:h-20 md:w-20" />
            <span className="text-2xl md:text-4xl font-semibold bg-gradient-to-r from-white to-[rgba(13,141,215,0.8)] text-transparent bg-clip-text">
              Vision Flow Technologies
            </span>
          </div>
          <p className="text-sm md:text-lg text-gray-300 max-w-sm">
            A forward-thinking technology company dedicated to helping businesses grow through innovative digital solutions.
          </p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col space-y-5 w-full md:w-auto text-center md:text-left">
          {/* Address Section */}
              <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4">
      <FaMapMarkerAlt className="text-[rgba(13,141,215,0.8)] h-6 w-6 " />
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
          <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4 mr-2">
            <FaEnvelope className="text-[rgba(13,141,215,0.8)] h-6 w-6" />
            <a href="mailto:visionflowtech.com" className="hover:underline">
              visionflowtech.com
            </a>
          </div>

          {/* Phone Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start space-x-0 md:space-x-4">
            <FaPhone className="text-[rgba(13,141,215,0.8)] h-6 w-6  scale-x-[-1]" />
            <a href="tel:+919731070591" className="hover:underline">
              +91 9731070591
            </a>
          </div>
                {/* Copyright and Policy */}
      <div className="flex flex-col text-white md:flex-row justify-center items-center text-center w-full py-4 space-y-2 md:space-y-0 md:space-x-2 text-xs md:text-sm border-t-1 border-white">
        <span>©2025 Vision Flow Technologies All Rights Reserved</span>
        <span className="hidden md:inline">|</span>
        <a href="/privacy" className="hover:underline">
          Privacy Policy
        </a>
        <span className="hidden md:inline">|</span>
      </div>
        </div>
      </div>


    </footer>
  );
}
