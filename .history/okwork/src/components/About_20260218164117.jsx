import React from 'react';

// Import images at the top for easy path management


const About = () => {
  const imageUrl =
    "/images/hero1.png";const imageUrl =
    "/images/hero1.png";
    const imageUrl =
    "/images/hero1.png";
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative">
      {/* Animated elements - increased size */}
      <div className="absolute top-20 left-1/4 animate-bounce">
        <img src={bulbIcon} alt="bulb" className="w-16 h-16 opacity-50" />
      </div>
      <div className="absolute bottom-20 right-1/4 animate-pulse">
        <img src={starIcon} alt="star" className="w-14 h-14 opacity-50" />
      </div>
      <div className="absolute top-40 right-20 animate-spin-slow">
        <img src={starIcon} alt="star" className="w-12 h-12 opacity-40" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float">
        <img src={bulbIcon} alt="bulb" className="w-14 h-14 opacity-40" />
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center relative z-10">
        {/* Left side - Image */}
        <div className="lg:w-1/2 w-full">
          <img 
            src={aboutImage} 
            alt="About Us" 
            className="w-full h-auto rounded-lg object-cover "
          />
        </div>

        {/* Right side - Content */}
        <div className="lg:w-1/2 w-full space-y-6">
          {/* About Us Label with decorative line */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-blue-600 tracking-wider bg-blue-50 px-4 py-1.5 rounded-full">
              About Us
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-200 to-transparent"></div>
          </div>

          {/* Main Heading */}
          <h1 className="font-helvetica text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Safe, Fun & <span className="text-blue-600">Educational</span> –<br />
            Just What Your Child Needs
          </h1>

          {/* Description with quote icon */}
          <div className="relative">
            <svg className="absolute -top-4 -left-2 w-8 h-8 text-blue-200 opacity-50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed pl-4">
              Dolor sit amet, consectetur adipiscing elit. Nibh ullamcorper felis arcu elementum. 
              Viverra lectus nullam sagittis nunc imperdiet leo felis. Ultrices mauris vitae cum 
              bibendum Dolor sit amet, consectetur adipiscing elit. Dolor sit amet, consectetur 
              adipiscing elit.
            </p>
          </div>

          {/* Stats and Features - Improved UI */}
          <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex flex-wrap items-start gap-8">
              {/* Left side - 38+ Experience with improved styling */}
              <div className="flex-shrink-0 text-center">
                <div className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  38+
                </div>
                <div className="text-gray-600 mt-1 font-medium flex items-center gap-1">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Years of Experience
                </div>
              </div>

              {/* Right side - Features list with improved styling */}
              <div className="space-y-4 flex-1">
                {/* Learning & Fun */}
                <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <img src={learningIcon} alt="Learning icon" className="w-4 h-4 object-contain" />
                  </div>
                  <span className="text-gray-700 text-lg font-medium">Learning & Fun</span>
                </div>

                {/* Healthy Meals */}
                <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <img src={mealsIcon} alt="Meals icon" className="w-4 h-4 object-contain" />
                  </div>
                  <span className="text-gray-700 text-lg font-medium">Healthy Meals</span>
                </div>

                {/* Children Safety */}
                <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors">
                    <img src={safetyIcon} alt="Safety icon" className="w-4 h-4 object-contain" />
                  </div>
                  <span className="text-gray-700 text-lg font-medium">Children Safety</span>
                </div>

                {/* Cute Environment */}
                <div className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <img src={environmentIcon} alt="Environment icon" className="w-4 h-4 object-contain" />
                  </div>
                  <span className="text-gray-700 text-lg font-medium">Cute Environment</span>
                </div>
              </div>
            </div>
          </div>

          {/* Online Admission Link with improved styling */}
          <div className="pt-4">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              Online Admission
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Add custom animations to your global CSS */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default About;