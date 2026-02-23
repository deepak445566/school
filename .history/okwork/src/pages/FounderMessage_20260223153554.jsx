import React, { useEffect } from 'react';

const FounderMessage = () => {


  useEffect(())
  return (
    <div className="min-h-screen bg-amber-50/30 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      {/* Main Letter Card */}
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-amber-100">
        
        {/* Decorative Header Accent */}
        <div className="h-2 bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-500"></div>
        
        {/* Content Container */}
        <div className="px-8 py-10 md:px-12 md:py-14">
          
          {/* Letterhead / Title */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-light text-stone-700 tracking-wide">
              From the Desk of the
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-700 mt-2 mb-4">
              Founder & Franchisor
            </h2>
            <div className="w-24 h-1 bg-amber-300 mx-auto rounded-full"></div>
            <p className="text-2xl md:text-3xl font-medium text-stone-600 mt-4 italic">
              Flora Wings Preschool
            </p>
          </div>

          {/* Message Body */}
          <div className="space-y-5 text-stone-700 text-base md:text-lg leading-relaxed">
            
            <p className="first-letter:text-4xl first-letter:font-serif first-letter:text-emerald-600 first-letter:mr-1 first-letter:float-left">
              At Flora Wings Preschool, our journey began with a simple yet powerful vision—
              to create a nurturing environment where every child feels valued, inspired, and 
              confident to explore their potential. We believe that the early years of education 
              lay the foundation for lifelong learning, character building, and emotional growth.
            </p>

            <p>
              As the Founder and Franchisor, my mission is not only to provide quality 
              preschool education but also to empower aspiring entrepreneurs, especially women, 
              who wish to build a meaningful and successful career in the education sector. 
              Through our franchise program, we offer complete support including curriculum, 
              teacher training, operational guidance, branding, and continuous mentorship.
            </p>

            <p>
              Our goal is to expand a trusted network of Flora Wings Preschool centers that 
              maintain excellence, consistency, and care in early childhood education. We are 
              committed to helping our franchise partners grow with confidence while making a 
              positive impact in their communities.
            </p>

            <p className="font-medium italic text-emerald-800">
              Together, we are not just building preschools—we are shaping futures, nurturing 
              dreams, and creating a brighter tomorrow for every child.
            </p>
          </div>

          {/* Signature & Address Section */}
          <div className="mt-12 pt-6 border-t border-amber-200 flex flex-col sm:flex-row sm:items-end sm:justify-between">
            
            {/* Left side - Signature */}
            <div className="mb-6 sm:mb-0">
              <p className="text-xl text-stone-600 font-light">Warm Regards,</p>
              <p className="text-2xl font-bold text-stone-800 mt-2 font-serif">
                Founder & Franchisor
              </p>
              <p className="text-xl text-emerald-700 font-medium mt-1">
                Flora Wings Preschool
              </p>
            </div>

            {/* Right side - Address */}
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-emerald-400 max-w-sm">
              <p className="text-stone-600 text-sm flex items-start gap-2">
                <svg className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  <span className="font-semibold">Shiv Vihar Metro Station,</span><br />
                  Jawahar Nagar, Loni, Ghaziabad
                </span>
              </p>
            </div>
          </div>

          {/* Footer flourish */}
          <div className="mt-8 text-center text-xs text-stone-400 flex justify-center items-center gap-2">
            <span className="w-8 h-px bg-amber-300"></span>
            <span>nurturing dreams · shaping futures</span>
            <span className="w-8 h-px bg-amber-300"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderMessage;