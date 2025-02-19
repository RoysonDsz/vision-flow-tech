import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';
import logo from "../assets/logo.png";


const Navbar = () => {
    const Nav = [
        { id: 1, text: "Home", slug: "home" },
        { id: 2, text: "About", slug: "about" },
        { id: 3, text: "Services", slug: "services" },
        { id: 4, text: "Contact", slug: "contact" }
    ];
    
    return (
        <nav className="hidden md:flex fixed top-0 left-0 w-full justify-between items-center backdrop-blur-lg bg-transparent p-0 z-20">
  {/* Logo Section */}
  <a href="/" className="flex items-center">
    <img src={logo} alt="Logo" className="h-18 w-auto pt-1 ml-10" />
  </a>

  {/* Centered Navigation Links */}
  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-12">
    {Nav.map((item) => (
      <ul className="hidden md:block" key={item.id}>
        <ScrollLink 
          to={item.slug} 
          smooth={true} 
          duration={500} 
          offset={-50} // Adjust if needed
        >
          <li className=" py-1 px-4 text-[24px] rounded-md border text-white cursor-pointer transition duration-300 ease-in-out hover:shadow-xl hover:shadow-[rgba(9,184,220,0.8)] hover:rounded-full">
            {item.text}
          </li>
        </ScrollLink>
      </ul>
    ))}
  </div>
            {/* Social Media Icons at the Right End */}
            <div className="flex flex-col space-y-6 fixed top-1/2 right-4 transform -translate-y-center pt-20">
                <a href="https://api.whatsapp.com/send?phone=+919731070591&text=Hello!%20I%20need%20assistance%20regarding%20Vision%20Flow%20Technologies.%20Could%20you%20provide%20more%20info?" target="_blank" rel="noopener noreferrer" className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 hover:bg-green-600 transition-transform">
                    <FaWhatsapp size={20} />
                </a>
                <a href="https://www.facebook.com/share/19uRtcgXX8/" target="_blank" rel="noopener noreferrer" className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 hover:bg-blue-600 transition-transform">
                    <FaFacebookF size={20} />
                </a>
                <a href="https://x.com/visionflowtech" target="_blank" rel="noopener noreferrer" className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 transition-transform hover:border-2 hover:border-white">
                    <img src="/src/assets/X.png" alt="X logo" className="h-[20px] w-[20px]" />
                </a>
                <a href="https://www.instagram.com/vision_flow_technologies_?utm_source=qr&igsh=MXJmNzlmY2ZyeHpx" target="_blank" rel="noopener noreferrer" className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 hover:bg-gradient-to-bl hover:from-purple-500 hover:via-red-500 hover:to-yellow-500 transition-transform">
                    <FaInstagram size={20} />
                </a>
                <a href="https://www.linkedin.com/company/vision-flow-technologies" target="_blank" rel="noopener noreferrer" className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 hover:bg-blue-500 transition-transform">
                    <FaLinkedinIn size={20} />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
