import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col items-center px-6 py-10">
      
      {/* Logo & Company Name */}
      <div className="flex items-center space-x-4 mb-8">
        <img src={logo} alt="Vision Flow Logo" className="h-20 w-20" />
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-[rgba(13,141,215,0.8)] text-transparent bg-clip-text">Vision Flow Technologies</h1>
      </div>

      <div className="max-w-4xl bg-black p-10 rounded-2xl shadow-[0_0_30px_rgba(13,141,215,0.8)]">
        <h1 className="text-4xl font-bold text-center text-white-400 mb-6">Privacy Policy</h1>
        <p className="text-gray-400 text-center mb-4">
          Last Updated: <strong>February 16, 2025</strong>
        </p>

        <p className="text-gray-300 mb-6 leading-relaxed">
          At <strong>Vision Flow Technologies</strong>, we are committed to protecting your privacy. 
          This Privacy Policy explains how we collect, use, and protect your personal information 
          when you use our website and services.
        </p>

        {/* Sections */}
        <div className="space-y-8">
          <Section title="1. Information We Collect">
            <p>
              We may collect personal details such as your name, email, and phone number when you voluntarily provide them. Additionally, we gather technical data, including your IP address, browser type, and device details, to enhance our website's performance. We also monitor website usage to analyze trends and improve user experience.
            </p>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>
              The information we collect helps us enhance your browsing experience, improve our website’s functionality, and respond to inquiries. We may also use this data to analyze website traffic, monitor user interactions, and ensure security measures are in place.
            </p>
          </Section>

          <Section title="3. Cookies & Tracking Technologies">
            <p>
              We use cookies and tracking technologies to personalize your experience and improve website performance. If you prefer, you can disable cookies in your browser settings; however, this may impact certain functionalities of the website.
            </p>
          </Section>

          <Section title="4. Data Protection & Security">
            <p>
              We implement security measures to safeguard your personal information from unauthorized access and misuse. While we strive to protect your data, no online platform can guarantee absolute security.
            </p>
          </Section>

          <Section title="5. Third-Party Links & Services">
            <p>
              Our website may contain links to third-party sites for your convenience. However, we are not responsible for the privacy practices of these external websites. We encourage you to review their policies before providing any personal information.
            </p>
          </Section>

          <Section title="6. Your Rights & Choices">
            <p>
              You have the right to access, update, or request deletion of your personal information. If you wish to opt out of certain data collection practices, please contact us. We respect your privacy choices and will process your requests accordingly.
            </p>
          </Section>

          <Section title="7. Data Retention">
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy. This includes complying with legal obligations, resolving disputes, and enforcing our agreements.
            </p>
          </Section>

          <Section title="8. Changes to This Privacy Policy">
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We encourage you to review this page regularly to stay informed about how we protect your data.
            </p>
          </Section>

         
        </div>

        {/* Back to Home Button */}
        <div className="mt-10 flex justify-center">
          <Link to="/" className="px-6 py-3 shadow-md bg-[rgba(13,141,215,0.8)] text-white text-2xl rounded-2xl hover:bg-[rgba(13,141,215,0.8)] focus:ring-2 focus:ring-blue-500 transition">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

// Reusable Section Component
interface SectionProps {
    title: string;
    children: React.ReactNode;
  }
  
  // Reusable Section Component
  const Section: React.FC<SectionProps> = ({ title, children }) => (
    <div>
      <h2 className="text-2xl font-semibold text-white-400 mb-2">{title}</h2>
      <div className="text-gray-300 leading-relaxed">{children}</div>
    </div>
  );

export default PrivacyPolicy;
