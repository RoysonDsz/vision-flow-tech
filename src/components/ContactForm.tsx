import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mwpvwgye"); // Replace with your Formspree ID
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    company: "",
    message: ""
  });

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await handleSubmit(event);
    if (!state.submitting && !state.errors) {
      alert("Form submitted successfully!");
      setFormData({ name: "", mobile: "", email: "", company: "", message: "" });
    }
  };



  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center md:bg-black overflow-hidden px-4 sm:px-2 md:px-8" id="contact">
      
      {/* Centered Heading */}
      <div className="w-full flex justify-center">
        <h2 className="text-6xl mt-10 md:text-9xl md:mt-0 text-white font-bold text-center opacity-70">
          Get In Touch
        </h2>
      </div>

      {/* Contact Form Container */}
      <div className="relative md:bg-black/20 rounded-lg shadow-[0_0_20px_rgba(13,141,215,0.8)] md:bg-opacity-20 backdrop-blur-md flex flex-col sm:flex-row w-full max-w-4xl p-2 sm:p-6 md:p-8 lg:p-10 xl:p-12 mt-[40px] mb-[60px]">
        
        {/* Form Section */}
        <div className="flex-1 p-4 sm:p-6 md:p-6 lg:p-8 xl:p-3">
          <form onSubmit={handleFormSubmit} className="space-y-3">
            
            <div>
              <label className="block text-xl font-large text-white">Enter your name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
                className="mt-1 w-full px-5 py-3 md:bg-gray-800 text-white border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Enter your name" 
                required 
              />
            </div>

            <div>
              <label className="block text-xl font-medium text-white">Enter your mobile number</label>
              <div className="flex">
              <select className="w-[72px] mr-1 border border-r-0 border-gray-600 md:bg-gray-700 text-white rounded-l-md bg-black focus:outline-none">
              <option value="+91">🇮🇳 +91 (India)</option>
              <option value="+1">🇺🇸 +1 (USA)</option>
              <option value="+44">🇬🇧 +44 (UK)</option>
              <option value="+61">🇦🇺 +61 (Australia)</option>
              <option value="+81">🇯🇵 +81 (Japan)</option>
              <option value="+49">🇩🇪 +49 (Germany)</option>
              <option value="+33">🇫🇷 +33 (France)</option>
              <option value="+971">🇦🇪 +971 (UAE)</option>
              <option value="+966">🇸🇦 +966 (Saudi Arabia)</option>
              <option value="+20">🇪🇬 +20 (Egypt)</option>
              <option value="+27">🇿🇦 +27 (South Africa)</option>
              <option value="+62">🇮🇩 +62 (Indonesia)</option>
              <option value="+234">🇳🇬 +234 (Nigeria)</option>
              <option value="+92">🇵🇰 +92 (Pakistan)</option>
              <option value="+90">🇹🇷 +90 (Turkey)</option>
              <option value="+63">🇵🇭 +63 (Philippines)</option>
              <option value="+31">🇳🇱 +31 (Netherlands)</option>
              <option value="+46">🇸🇪 +46 (Sweden)</option>
              <option value="+41">🇨🇭 +41 (Switzerland)</option>
              <option value="+351">🇵🇹 +351 (Portugal)</option>
              <option value="+32">🇧🇪 +32 (Belgium)</option>
              <option value="+47">🇳🇴 +47 (Norway)</option>
              <option value="+48">🇵🇱 +48 (Poland)</option>
              <option value="+64">🇳🇿 +64 (New Zealand)</option>
              <option value="+52">🇲🇽 +52 (Mexico)</option>
              <option value="+66">🇹🇭 +66 (Thailand)</option>
              <option value="+886">🇹🇼 +886 (Taiwan)</option>
              <option value="+380">🇺🇦 +380 (Ukraine)</option>
              <option value="+65">🇸🇬 +65 (Singapore)</option>
              <option value="+45">🇩🇰 +45 (Denmark)</option>
              <option value="+7">🇷🇺 +7 (Russia)</option>
              <option value="+82">🇰🇷 +82 (South Korea)</option>
              <option value="+86">🇨🇳 +86 (China)</option>
              <option value="+55">🇧🇷 +55 (Brazil)</option>
              <option value="+39">🇮🇹 +39 (Italy)</option>
              <option value="+34">🇪🇸 +34 (Spain)</option>
            </select>
                <input 
                  type="text" 
                  name="mobile"
                  value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })} 
                  className="mt-1 w-full px-5 py-3 md:bg-gray-800 text-white border border-gray-600 rounded-r-md shadow-sm focus:ring-blue-400 focus:border-blue-500" 
                  placeholder="Enter your mobile number" 
                  required 
                />
              </div>
            </div>

            <div>
              <label className="block text-xl font-medium text-white">Enter your email address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
                className="mt-1 w-full px-5 py-3 md:bg-gray-800 text-white border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Enter your email address" 
                required 
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>

            <div>
              <label className="block text-xl font-medium text-white">Company Name</label>
              <input 
                type="text" 
                name="company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })} 
                className="mt-1 w-full px-5 py-3 md:bg-gray-800 text-white border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Company Name" 
              />
            </div>

            <div>
              <label className="block text-xl font-medium text-white">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
                className="mt-1 w-full px-5 py-2 md:bg-gray-800 text-white border border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Enter your message" 
              />
            </div>

            <div>
              <button 
                type="submit" 
                disabled={state.submitting} 
                className="mt-3 w-full px-5 py-3 bg-[rgba(13,141,215,0.8)] text-white text-xl rounded-lg hover:bg-[rgba(13,141,215,0.8)] focus:ring-2 focus:ring-blue-500"
              >
                {state.submitting ? "Submitting..." : "Submit"}
              </button>
            </div>

          </form>
        </div>

        {/* Image Section */}
        <div className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex items-center justify-center">
          <img 
            src="/src/assets/Contactus-amico.png"
            alt="Contact Illustration" 
            className="hidden md:block md:rounded-lg shadow-md w-[500px] h-[480px]" 
          />
        </div>

      </div>
    </div>
  );
};

export default ContactForm;