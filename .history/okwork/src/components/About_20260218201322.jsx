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
    <div className="max-w-7xl   py-5 md:py-16 relative">

      {/* Floating decorative icons */}
      <div className="absolute top-40 left-100 animate-pulse">
        <img src={bulbIcon} alt="bulb" className="w-24 h-24 opacity-50" />
      </div>
      <div className="absolute bottom-20 right-12 animate-pulse">
        <img src={frame} alt="star" className="w-14 h-20 opacity-50" />
      </div>
      <div className="absolute top-40 right-20 animate-spin-slow">
        <img src={starIcon} alt="star" className="w-12 h-12 opacity-40" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float">
        <img src={bulbIcon} alt="bulb" className="w-14 h-14 opacity-40" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center relative z-10 m-12">
        
        {/* Left side image */}
        <div className="lg:w-1/2 w-full relative ">
          <img 
            src={aboutBG} 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-fill -z-10 pt-40"
          />
          
          <img 
            src={aboutImage} 
            alt="Florawings School" 
            className="w-full h-auto rounded-lg object-cover relative z-10"
          />
          
          {/* Experience badge */}
          <div className="absolute -bottom-6 -right-6 md:bottom-4 md:right-4 z-20 animate-float-side">
            <div className="relative">
              <img 
                src={aboutCounter} 
                alt="Experience" 
                className="w-28 h-28 md:w-52 md:h-52 object-contain"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <span className="text-4xl md:text-5xl font-bold leading-none">10+</span>
                <span className="text-sm md:text-base font-medium mt-1">Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right content */}
        <div className="lg:w-1/2 w-full space-y- exo">

          <span className="text-sm font-semibold text-white tracking-wider bg-[#6754E9] px-4 py-1.5 rounded-full ">
            About Florawings
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mt-5">
            Nurturing Young Minds with Care, Learning & Discipline
          </h1>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Florawings Pre-Primary School focuses on early childhood development through Montessori,
            play-way learning, hands-on activities and child-centered education. We aim to build strong
            academic foundations, confidence, creativity, and discipline from kindergarten to primary level.
          </p>

          {/* School strengths */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-10 pt-4">
            {[
              "Montessori & Play-Way Learning",
              "Child Safety & Discipline",
              "Hands-on Activity Based Education",
              "Creative & Caring Environment"
            ].map((item,i)=>(
              <div key={i} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-[#6C63FF] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700 text-lg font-medium">{item}</span>
              </div>
            ))}
          </div>

          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-lg font-semibold text-white bg-[#F15F25] px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Online Admission →
          </a>
        </div>
      </div>

      {/* PROGRAM SECTION */}
     

      {/* animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 8s linear infinite; }

        @keyframes float {
          0%,100%{transform:translateY(0)}50%{transform:translateY(-20px)}
        }
        .animate-float { animation: float 5s ease-in-out infinite; }

        @keyframes float-side {
          0%{transform:translateX(-10px)}50%{transform:translateX(10px)}100%{transform:translateX(-10px)}
        }
        .animate-float-side { animation: float-side 4s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default AboutUs;