import React from 'react';

// Import images
import aboutImage from '/public/images/about-1.png';
import aboutBG from '/public/images/about-bg-1.png';
import aboutCounter from '/public/images/ab-counter.png';
import bulbIcon from '/public/images/tubelight.png';
import starIcon from '/public/images/star.png';
import frame from '/public/images/frame.png';

const AboutUs = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16 relative overflow-hidden">
      
      {/* Floating decorative icons - Responsive positioning */}
      <div className="absolute top-20 sm:top-40 left-10 sm:left-32 lg:left-48 animate-pulse hidden sm:block">
        <img src={bulbIcon} alt="bulb" className="w-16 sm:w-20 lg:w-24 opacity-40 sm:opacity-50" />
      </div>
      
      <div className="absolute bottom-10 sm:bottom-20 right-5 sm:right-12 animate-pulse">
        <img src={frame} alt="frame" className="w-10 sm:w-14 h-14 sm:h-20 opacity-40 sm:opacity-50" />
      </div>
      
      <div className="absolute top-20 sm:top-40 right-5 sm:right-20 animate-spin-slow hidden md:block">
        <img src={starIcon} alt="star" className="w-8 sm:w-12 opacity-30 sm:opacity-40" />
      </div>
      
      <div className="absolute bottom-20 sm:bottom-40 left-5 sm:left-20 animate-float hidden sm:block">
        <img src={bulbIcon} alt="bulb" className="w-10 sm:w-14 opacity-30 sm:opacity-40" />
      </div>

      {/* Main flex container - Responsive */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 items-center relative z-10 mt-8 sm:mt-12">
        
        {/* Left side image - Responsive */}
        <div className="lg:w-1/2 w-full relative p-3 sm:p-5">
          {/* Background Image */}
          <img 
            src={aboutBG} 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-contain sm:object-fill -z-10 pt-20 sm:pt-40 opacity-50 sm:opacity-100"
          />
          
          {/* Main Image */}
          <img 
            src={aboutImage} 
            alt="Florawings School" 
            className="w-full h-auto rounded-lg object-cover relative z-10 shadow-lg"
          />
          
          {/* Experience badge - Responsive positioning */}
          <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:bottom-4 md:right-4 z-20 animate-float-side">
            <div className="relative">
              <img 
                src={aboutCounter} 
                alt="Experience" 
                className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 lg:w-52 object-contain"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-none">10+</span>
                <span className="text-[10px] sm:text-xs md:text-sm lg:text-base font-medium mt-0.5 sm:mt-1 text-center px-1">
                  Years Experience
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right content - Responsive */}
        <div className="lg:w-1/2 w-full space-y-4 sm:space-y-5 md:space-y-6">
          
          {/* Badge */}
          <span className="inline-block text-xs sm:text-sm font-semibold text-white tracking-wider bg-[#6754E9] px-3 sm:px-4 py-1 sm:py-1.5 rounded-full">
            About Florawings
          </span>
          
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Nurturing Young Minds with Care, Learning & Discipline
          </h1>
          
          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
            Florawings Pre-Primary School focuses on early childhood development through Montessori,
            play-way learning, hands-on activities and child-centered education. We aim to build strong
            academic foundations, confidence, creativity, and discipline from kindergarten to primary level.
          </p>
          
          {/* School strengths grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-y-6 md:gap-x-10 pt-2 sm:pt-4">
            {[
              "Montessori & Play-Way Learning",
              "Child Safety & Discipline",
              "Hands-on Activity Based Education",
              "Creative & Caring Environment"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 sm:gap-3">
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#6C63FF] flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 text-sm sm:text-base md:text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <a 
            href="#" 
            className="inline-flex items-center gap-1 sm:gap-2 text-sm sm:text-base md:text-lg font-semibold text-white bg-[#F15F25] px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#d44e1e] mt-2 sm:mt-4"
          >
            Online Admission 
            <span className="text-lg sm:text-xl">→</span>
          </a>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }

        @keyframes float {
          0%,100%{transform:translateY(0)}
          50%{transform:translateY(-15px) translateX(5px)}
        }
        .animate-float { animation: float 5s ease-in-out infinite; }

        @keyframes float-side {
          0%{transform:translateX(-8px)}
          50%{transform:translateX(8px)}
          100%{transform:translateX(-8px)}
        }
        .animate-float-side { animation: float-side 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default AboutUs;