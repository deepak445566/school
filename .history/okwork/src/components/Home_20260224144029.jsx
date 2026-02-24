import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
const navigate = useNavigate();

  const handlebook=()=>{
    navigate("/admission")
  }

  // WhatsApp button click handler
  const handleWhatsApp = () => {
    // Replace with your actual WhatsApp number
    const phoneNumber = "919876543210"; // Format: country code + number without +
    const message = "Hello! I'm interested in admission for my child at Flora Wings Preschool.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Image URL - using a high-quality free image
  const imageUrl = "/images/hero1.png";
  const kalagiImageUrl = "/images/text.png"; 
  
  return (
    <div className="min-h-screen bg-[#F7FAE2] overflow-hidden exo relative ">
      
      {/* Fixed WhatsApp Button */}
      <div className="fixed bottom-6 right-4 md:bottom-8 md:right-6 z-50 group">
        {/* Tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-800 text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Chat with us
          <span className="absolute top-1/2 -right-1 transform -translate-y-1/2 border-4 border-transparent border-l-gray-800"></span>
        </span>
        
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsApp}
          className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce-slow"
        >
          {/* Inner glow effect */}
          <div className="absolute inset-0 bg-white/20 rounded-full animate-ping-slow opacity-75"></div>
          
          {/* WhatsApp Icon */}
          <svg 
            className="w-13 h-13 md:w-18 md:h-18 text-white relative z-10" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.087-.177.181-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.043.072.043.419-.101.824z"/>
          </svg>
          
          {/* Notification dot */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>
        
        {/* Floating text */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-green-500 text-white text-xs py-1 px-3 rounded-full whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
          Quick Support
        </div>
      </div>

      {/* Main container - centered with responsive padding */}
      <div className="container mx-auto px-6 md:px-12 lg:px-10 min-h-screen flex items-center relative z-10">
        
        {/* Flex container: column on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-5 w-full" id="home">
          
          {/* LEFT SECTION: 40% width */}
          <div className="w-full md:w-[45%] text-center md:text-left space-y-6 md:space-y-6">
            {/* Heading with gradient effect */}
            <h1 className="text-4xl text-gray-800 md:text-5xl lg:text-6xl font-bold leading-tight exo">
             A Happy Place to
              <br />
              <span className="text-gray-800">to Grow, Play And </span>
              <br />
              <span className="text-gray-800">   Learn</span>
            </h1>

            {/* Paragraph description */}
            <p className="text-lg md:text-lg text-gray-600 max-w-2xl mx-auto md:mx-0">
           Kindergarten is an early childhood educational environment where
most young for your children life.
            </p>

            {/* Button with hover effects */}
            <div className="flex justify-center md:justify-start">
              <button onClick={handlebook} className="group relative px-8 py-4 bg-[#F15F25] text-white font-semibold rounded-xl hover:shadow-xl hover:transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
                <span className="relative z-10">Get Admission</span>
              </button>
            </div>
          </div>

          {/* RIGHT SECTION: 60% width */}
          <div className="w-full md:w-[55%] flex justify-center md:justify-end">
            <div className="relative w-full max-w-md lg:max-w-xl ">
              {/* Main image */}
              <img
                src={imageUrl}
                alt="Team collaboration in modern workspace"
                className="relative z-10 w-full h-auto rounded-2xl object-cover "
              />
               <img
                src={kalagiImageUrl}
                alt="Decorative element"
                className="absolute bottom-0 left-7 lg:left-0 z-20 w-24 h-24 md:w-52 md:h-52 object-contain -translate-x-4 -translate-y-4 animate-bounce-slow"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animation keyframes */}
       <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translate(-1rem, -1rem) translateY(0);
          }
          50% {
            transform: translate(-1rem, -1rem) translateY(-20px);
          }
        }
        
        @keyframes ping-slow {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Home;