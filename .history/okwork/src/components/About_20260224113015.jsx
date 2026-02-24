import React from 'react';

// Import images
import aboutImage from '/public/images/about-1.png';
import aboutBG from '/public/images/about-bg-1.png';
import aboutCounter from '/public/images/ab-counter.png';
import bulbIcon from '/public/images/tubelight.png';
import starIcon from '/public/images/star.png';
import frame from '/public/images/frame.png';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate();

  const handlebook = () => {
    navigate("/admission");
  };

  const strengths = [
    "Montessori & Play-Way Learning",
    "Child Safety & Discipline",
    "Hands-on Activity Based Education",
    "Creative & Caring Environment"
  ];

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16 overflow-hidden" id="about">
      
      {/* Floating decorative icons - Responsive positioning and visibility */}
      <div className="absolute top-20 sm:top-40 left-10 sm:left-40 lg:left-60 xl:left-100 animate-pulse hidden sm:block">
        <img src={bulbIcon} alt="bulb" className="w-12 sm:w-16 lg:w-20 xl:w-24 h-auto opacity-30 sm:opacity-40 lg:opacity-50" />
      </div>
      
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-8 lg:right-12 animate-pulse hidden md:block">
        <img src={frame} alt="frame" className="w-10 sm:w-12 lg:w-14 xl:w-16 h-auto opacity-30 lg:opacity-50" />
      </div>
      
      <div className="absolute top-20 sm:top-40 right-4 sm:right-10 lg:right-20 animate-spin-slow hidden lg:block">
        <img src={starIcon} alt="star" className="w-6 sm:w-8 lg:w-10 xl:w-12 h-auto opacity-30 lg:opacity-40" />
      </div>
      
      <div className="absolute bottom-20 sm:bottom-40 left-4 sm:left-10 lg:left-20 animate-float hidden md:block">
        <img src={bulbIcon} alt="bulb" className="w-8 sm:w-10 lg:w-12 xl:w-14 h-auto opacity-30 lg:opacity-40" />
      </div>

      {/* Main Content Container */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center relative z-10">
        
        {/* Left side image - Responsive */}
        <div className="lg:w-1/2 w-full relative">
          {/* Background Image */}
          <img 
            src={aboutBG} 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-contain sm:object-fill -z-10 opacity-50 sm:opacity-100"
            style={{ transform: 'scale(0.9) sm:scale-100' }}
          />
          
          {/* Main Image */}
          <img 
            src={aboutImage} 
            alt="Florawings School" 
            className="w-full h-auto rounded-lg sm:rounded-xl lg:rounded-2xl object-cover relative z-10 shadow-lg sm:shadow-xl"
          />
          
          {/* Experience badge - Responsive positioning and sizing */}
          <div className="absolute -bottom-4 sm:-bottom-6 lg:-bottom-4 xl:-bottom-6 -right-2 sm:-right-4 lg:right-2 xl:right-4 z-20 animate-float-side">
            <div className="relative">
              <img 
                src={aboutCounter} 
                alt="Experience" 
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 object-contain"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-none">10+</span>
                <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-medium mt-0.5 sm:mt-1 text-center px-1">
                  Years<br className="block sm:hidden" /> Experience
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right content - Responsive */}
        <div className="lg:w-1/2 w-full space-y-4 sm:space-y-5 md:space-y-6 exo mt-6 sm:mt-8 lg:mt-0">
          
          {/* Badge */}
          <span className="text-[10px] sm:text-xs md:text-sm font-semibold text-white tracking-wider bg-[#6754E9] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full inline-block">
            About Florawings
          </span>

          {/* Heading - Responsive text sizes */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-gray-900 leading-tight mt-2 sm:mt-3 md:mt-4 lg:mt-5">
            Nurturing Young Minds with <br className="hidden sm:block" />Care, Learning & Discipline
          </h1>

          {/* Description - Responsive text */}
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Florawings Pre-Primary School focuses on early childhood development through Montessori,
            play-way learning, hands-on activities and child-centered education. We aim to build strong
            academic foundations, confidence, creativity, and discipline from kindergarten to primary level.
          </p>

          {/* School strengths - Responsive grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-5 md:gap-y-6 gap-x-4 sm:gap-x-6 md:gap-x-8 lg:gap-x-10 pt-2 sm:pt-3 md:pt-4">
            {strengths.map((item, i) => (
              <div key={i} className="flex items-center gap-2 sm:gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-[#6C63FF] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>

          {/* CTA Button - Responsive */}
          <div className="pt-2 sm:pt-3 md:pt-4">
            <button 
              onClick={handlebook}
              className="inline-flex items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg font-semibold text-white bg-[#F15F25] px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform"
            >
              Online Admission 
              <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Responsive animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { 
          animation: spin-slow 8s linear infinite; 
        }

        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-float { 
          animation: float 5s ease-in-out infinite; 
        }

        @keyframes float-side {
          0% { transform: translateX(-8px); }
          50% { transform: translateX(8px); }
          100% { transform: translateX(-8px); }
        }
        .animate-float-side { 
          animation: float-side 4s ease-in-out infinite; 
        }

        /* Responsive animations - slower on mobile */
        @media (max-width: 640px) {
          .animate-spin-slow { animation-duration: 12s; }
          .animate-float { animation-duration: 7s; }
          .animate-float-side { animation-duration: 6s; }
        }

        /* Touch device optimizations */
        @media (hover: none) and (pointer: coarse) {
          .hover\\:scale-105:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;