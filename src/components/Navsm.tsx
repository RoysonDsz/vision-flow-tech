import { Home, Info, Briefcase, Mail } from "lucide-react";
import {useState } from "react";
import logo from "../assets/logo.png";

function Navsm() {
  const [active, setActive] = useState("home");

  const Nav = [
    { id: "home", text: "Home", icon: Home },
    { id: "about", text: "About", icon: Info },
    { id: "services", text: "Services", icon: Briefcase },
    { id: "contact", text: "Contact", icon: Mail }
  ];

  const handleScroll = (id: string | number) => {
    setActive(String(id));
    const section = document.getElementById(String(id));
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    } else if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-black shadow-xl p-2 flex justify-around items-center z-20">
      {Nav.map(({ id, text, icon: Icon }) => (
        <button
          key={id}
          className={`flex flex-col items-center text-sm p-2 transition-all duration-200 ${
            active === id ? "text-[rgba(13,141,215,0.8)]" : "text-gray-600"
          }`}
          onClick={() => handleScroll(id)}
        >
          <Icon size={24} />
          <span>{text}</span>
        </button>
      ))}
    </div>
  );
}

export default Navsm;
