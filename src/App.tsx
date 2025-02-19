
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Interns from "./Pages/Interns";
import Footer from "./components/Footer";
import CustomCursor from "./components/customCursor";
import LoadingScreen from "./components/LoadingScreen";

import ContactForm from "./components/ContactForm";
import PrivacyPolicy from "./components/Privacypolicy";
import Services from "./components/Services";
import About from "./components/About";
import Footersm from "./components/Footersm";
import "./App.css";



export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-black text-white min-h-screen ">
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
         <CustomCursor />
         
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              
              <Route path="/contact" element={<ContactForm />} />
              <Route path="/services" element={<Services />} />
              <Route path="/our-team" element={<Interns />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>

  
          
          <Footersm/>
          <Footer/>
          
        </>
      )}
    </div>
  );
}
