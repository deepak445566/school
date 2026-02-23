import React, { useEffect } from 'react';

const DirectorMessage = () => {
  useEffect(()=>{
      scrollTo(0,0)
    })
  return (
    <div className="min-h-screen bg-blue-50/30 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center exo">
      {/* Main Letter Card */}
      <div className="max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-blue-100">
        
        {/* Decorative Header Accent */}
        <div className="h-2 bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400"></div>
        
        {/* Content Container */}
        <div className="px-8 py-10 md:px-12 md:py-14">
          
          {/* Letterhead / Title */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-light text-stone-700 tracking-wide">
              From the Desk of the
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-indigo-700 mt-2 mb-4">
              Director
            </h2>
            <div className="w-24 h-1 bg-sky-300 mx-auto rounded-full"></div>
            <p className="text-2xl md:text-3xl font-medium text-stone-600 mt-4 italic">
              Flora Wings Preschool
            </p>
          </div>

          {/* Salutation */}
          <div className="mb-6">
            <p className="text-xl text-stone-600 font-medium">Dear Parents,</p>
          </div>

          {/* Message Body */}
          <div className="space-y-5 text-stone-700 text-base md:text-lg leading-relaxed">
            
            <p className="first-letter:text-4xl first-letter:font-serif first-letter:text-indigo-600 first-letter:mr-1 first-letter:float-left">
              It gives me immense pleasure to welcome you to Flora Wings Preschool, a place 
              where young minds begin their beautiful journey of learning and discovery. 
              Early childhood is the most important phase of a child's life, as it lays the 
              foundation for their future growth, personality, and confidence.
            </p>

            <p>
              At Flora Wings Preschool, we believe that every child is unique and full of 
              potential. Our aim is to provide a safe, loving, and stimulating environment 
              where children feel happy, secure, and encouraged to explore. We focus on 
              nurturing their intellectual, emotional, social, and creative development 
              through play-based and activity-based learning.
            </p>

            <p>
              Our dedicated team of teachers works with passion and care to ensure that each 
              child develops confidence, independence, and a love for learning. We strongly 
              believe in building a partnership with parents, as together we can provide the 
              best support for our children's growth and success.
            </p>

            <p>
              We are committed to creating a strong foundation that will help every child 
              grow into a confident, responsible, and happy individual.
            </p>

            <p className="font-medium italic text-indigo-700">
              Thank you for trusting Flora Wings Preschool. We look forward to being a part 
              of your child's bright future.
            </p>
          </div>

          {/* Signature & Address Section */}
          <div className="mt-12 pt-6 border-t border-blue-200 flex flex-col sm:flex-row sm:items-end sm:justify-between">
            
            {/* Left side - Signature */}
            <div className="mb-6 sm:mb-0">
              <p className="text-xl text-stone-600 font-light">Warm Regards,</p>
              <p className="text-2xl font-bold text-stone-800 mt-2 font-serif">
                Director
              </p>
              <p className="text-xl text-indigo-700 font-medium mt-1">
                Flora Wings Preschool
              </p>
            </div>

            {/* Right side - Address */}
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-indigo-400 max-w-sm">
              <p className="text-stone-600 text-sm flex items-start gap-2">
                <svg className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>
                  <span className="font-semibold">Shiv Vihar,</span><br />
                  Loni, Ghaziabad
                </span>
              </p>
            </div>
          </div>

          {/* Footer flourish */}
          <div className="mt-8 text-center text-xs text-stone-400 flex justify-center items-center gap-2">
            <span className="w-8 h-px bg-sky-300"></span>
            <span>where learning begins with love</span>
            <span className="w-8 h-px bg-sky-300"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorMessage;