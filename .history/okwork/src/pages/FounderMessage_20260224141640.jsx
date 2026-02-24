import React, { useEffect } from 'react';

const FounderMessage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const coreValues = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Quality Education",
      description: "Research-backed curriculum fostering holistic development in early years"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: "Franchise Support",
      description: "End-to-end mentorship and operational guidance for partners"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Community Impact",
      description: "Building brighter futures through compassionate education"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Letter Card */}
      <div className="relative max-w-4xl w-full bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-amber-100/50 transform  transition-all duration-500">
        
        {/* Decorative Header with Pattern */}
        <div className="relative h-3 bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-500">
          
        </div>
        
        {/* Content Container */}
        <div className="px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-14">
          


          
          {/* Pinterest-style Header with Icons */}
          <div className="text-center mb-8 sm:mb-12 relative">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <span className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></span>
              <svg className="w-6 h-6 text-emerald-600 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></span>
            </div>
            




            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-stone-700 tracking-wide">
              From the Desk of the
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mt-2 mb-4">
              Founder & Franchisor
            </h2>
            
            {/* Decorative Element */}
           
            
            <div className="w-24 h-1 bg-gradient-to-r from-amber-300 via-emerald-300 to-teal-300 mx-auto rounded-full"></div>
          </div>

 <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-1/2">
              <img 
                src="/images/lo13.jpg" 
                alt="Preschool children learning"
                className="w-full h-48 sm:h-56 object-cover transition-transform duration-500"
              />
             
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-1/2">
              <img 
                src="/images/lo10.jpg" 
                alt="Children playing and learning"
                className="w-full h-48 sm:h-56 object-cover transition-transform duration-500"
              />
             
            </div>
          </div>



          {/* Message Body with Floating Elements */}
          <div className="relative space-y-4 sm:space-y-5 text-stone-700 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-12">
            {/* Floating Quote Mark */}
            <div className="absolute -top-4 -left-4 text-6xl text-amber-200 font-serif opacity-50">"</div>
            
            <p className="relative pl-4 sm:pl-6 first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-serif first-letter:text-emerald-600 first-letter:mr-2 first-letter:float-left">
              At Flora Wings Preschool, our journey began with a simple yet powerful vision—
              to create a nurturing environment where every child feels valued, inspired, and 
              confident to explore their potential. We believe that the early years of education 
              lay the foundation for lifelong learning, character building, and emotional growth.
            </p>

            <p className="pl-4 sm:pl-6 border-l-2 border-amber-200 italic text-stone-600">
              As the Founder and Franchisor, my mission is not only to provide quality 
              preschool education but also to empower aspiring entrepreneurs, especially women, 
              who wish to build a meaningful and successful career in the education sector. 
            </p>

            <p className="pl-4 sm:pl-6">
              Through our franchise program, we offer complete support including curriculum, 
              teacher training, operational guidance, branding, and continuous mentorship.
            </p>

            <p className="pl-4 sm:pl-6 font-medium bg-gradient-to-r from-emerald-50 to-transparent p-3 sm:p-4 rounded-r-xl text-emerald-800">
              Together, we are not just building preschools—we are shaping futures, nurturing 
              dreams, and creating a brighter tomorrow for every child.
            </p>
          </div>

          {/* Pinterest-style 3-Point Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 my-8 sm:my-12">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="group relative bg-gradient-to-br from-white to-amber-50/30 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-amber-100/50"
              >
                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-emerald-400/20 to-transparent rounded-tr-2xl"></div>
                
                <div className="relative">
                  {/* Icon Circle */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-amber-100 to-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-emerald-600 group-hover:text-emerald-700">
                      {value.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg sm:text-xl font-bold text-stone-800 mb-2 group-hover:text-emerald-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {value.description}
                  </p>
                  
                  {/* Hover Effect Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-emerald-400 group-hover:w-full transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Signature & Address Section with Enhanced Design */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t-2 border-dashed border-amber-200 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            
            {/* Left side - Signature with Photo Frame Effect */}
            <div className="relative flex items-center gap-4">
              <div className="w-16 h-16 sm:w-25 sm:h-25 rounded-full bg-gradient-to-br from-amber-200 to-emerald-200 flex items-center justify-center border-4 border-white shadow-xl">
               <img src="/images/ma2.jpg" className='rounded-full h-full w-full'/>
              </div>
              <div>
                <p className="text-base sm:text-lg text-stone-600 font-light">Warm Regards,</p>
                <p className="text-xl sm:text-2xl font-bold text-stone-800 mt-1 font-serif">
                  Founder & Franchisor
                </p>
                <p className="text-base sm:text-lg text-emerald-700 font-medium mt-1">
                  Flora Wings Preschool
                </p>
              </div>
            </div>

            {/* Right side - Address with Map Style */}
            <div className="group relative bg-gradient-to-br from-amber-50 to-white p-4 sm:p-5 rounded-2xl border-2 border-emerald-400/30 max-w-sm hover:shadow-xl transition-all duration-300">
              {/* Mini Map Decorations */}
              <div className="absolute top-2 right-2 flex gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse animation-delay-200"></span>
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse animation-delay-400"></span>
              </div>
              
              <p className="text-stone-600 text-xs sm:text-sm flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="flex-1">
                  <span className="font-semibold block text-sm sm:text-base">Shiv Vihar Metro Station,</span>
                  <span className="text-stone-500 text-xs sm:text-sm">Jawahar Nagar, Loni, Ghaziabad</span>
                </span>
              </p>
              
              {/* Location Badge */}
              <div className="mt-3 flex items-center gap-2 text-xs text-emerald-600">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>Corporate Office</span>
              </div>
            </div>
          </div>

          {/* Footer flourish with Icons */}
          <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-stone-400 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-amber-300 to-transparent"></span>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span className="text-amber-600 font-medium">nurturing dreams</span>
              <span className="text-emerald-400">·</span>
              <span className="text-emerald-600 font-medium">shaping futures</span>
              <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-amber-300 to-transparent"></span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default FounderMessage;