import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handlebook = () => {
    navigate("/admission");
  };

  // Image URLs
  const imageUrl = "/images/hero1.png";
  const kalagiImageUrl = "/images/text.png";

  return (
    <div className="min-h-screen bg-[#F7FAE2] overflow-hidden exo relative">
      
      {/* Background decorative elements - Responsive */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating circles - hidden on mobile, visible on larger screens */}
        <div className="hidden sm:block absolute top-20 left-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-yellow-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="hidden md:block absolute bottom-20 right-10 w-40 md:w-56 lg:w-80 h-40 md:h-56 lg:h-80 bg-orange-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="hidden lg:block absolute top-1/2 left-1/3 w-48 lg:w-64 xl:w-96 h-48 lg:h-64 xl:h-96 bg-amber-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Grid pattern - subtle */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #F15F25 1px, transparent 0)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Main container - responsive padding */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 min-h-screen flex items-center relative z-10">
        
        {/* Flex container: column on mobile, row on larger screens */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full py-8 sm:py-10 md:py-0" id="home">
          
          {/* LEFT SECTION: Full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] text-center md:text-left space-y-4 sm:space-y-5 md:space-y-6">
            
            {/* Heading with responsive text sizes */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight exo">
              <span className="text-gray-800">A Happy Place</span>
              <br className="hidden xs:block" />
              <span className="text-gray-800">to Grow, Play</span>
              <br className="hidden xs:block" />
              <span className="text-gray-800">And Learn</span>
            </h1>

            {/* Description - responsive text */}
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto md:mx-0 px-2 sm:px-4 md:px-0">
              Kindergarten is an early childhood educational environment where
              most young children begin their journey of learning, growth, 
              and discovery in a nurturing atmosphere.
            </p>

            {/* Button with responsive sizing */}
            <div className="flex justify-center md:justify-start pt-2 sm:pt-4">
              <button 
                onClick={handlebook} 
                className="group relative px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-[#F15F25] text-white font-semibold rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 ease-in-out text-sm sm:text-base md:text-lg"
              >
                <span className="relative z-10">Get Admission Now →</span>
                {/* Button shine effect - hidden on mobile */}
                <span className="absolute inset-0 bg-white/20 rounded-lg sm:rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"></span>
              </button>
            </div>

            {/* Trust badges - Optional addition for credibility */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 pt-4 sm:pt-6">
              <div className="flex items-center gap-1">
                <span className="text-yellow-500 text-sm sm:text-base">★★★★★</span>
                <span className="text-xs sm:text-sm text-gray-500">(500+ reviews)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <span className="text-xs sm:text-sm text-gray-500">Trusted by 1000+ parents</span>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION: Full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] flex justify-center md:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
              
              {/* Main image with responsive sizing */}
              <div className="relative group">
                <img
                  src={imageUrl}
                  alt="Happy children learning and playing at kindergarten"
                  className="relative z-10 w-full h-auto rounded-2xl sm:rounded-3xl object-cover shadow-xl sm:shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Image overlay gradient - hidden on mobile */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block"></div>
              </div>
              
              {/* Decorative element - responsive positioning and sizing */}
              <img
                src={kalagiImageUrl}
                alt="Decorative element"
                className="absolute -bottom-2 sm:-bottom-4 left-0 sm:left-2 lg:left-4 z-20 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 object-contain animate-bounce-slow"
              />
              
              {/* Floating badge - visible on larger screens */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 md:top-4 md:right-4 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg hidden sm:flex items-center gap-2 animate-float">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs sm:text-sm font-medium text-gray-700">Enrolling Now</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animation keyframes */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translate(0, 0) translateY(0);
          }
          50% {
            transform: translate(5px, -15px) translateY(0);
          }
        }
        
        @keyframes shine {
          0% { left: -100%; }
          20% { left: 100%; }
          100% { left: 100%; }
        }
        
        .animate-blob {
          animation: blob 10s infinite;
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
        
        .animate-shine {
          animation: shine 3s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Extra small devices */
        @media (max-width: 480px) {
          .animate-bounce-slow {
            animation-duration: 5s;
          }
        }
        
        /* Responsive animations for better performance */
        @media (prefers-reduced-motion: reduce) {
          .animate-blob,
          .animate-float,
          .animate-bounce-slow {
            animation: none;
          }
        }
        
        /* Custom breakpoint for xs devices */
        @media (min-width: 480px) {
          .xs\\:block {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;