import React, { useEffect } from 'react';

const DirectorMessage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/30 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center exo">
      
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Letter Card */}
      <div className="relative max-w-4xl w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-blue-100/50 transform hover:scale-[1.01] transition-all duration-500">
        
        {/* Decorative Header with Pattern */}
        <div className="relative h-3 bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400">
          <div className="absolute inset-0 bg-white/20" style={{ backgroundImage: 'radial-gradient(circle at 10px 10px, rgba(255,255,255,0.2) 2px, transparent 2px)', backgroundSize: '20px 20px' }}></div>
        </div>
        
        {/* Content Container */}
        <div className="px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-14">
          
          {/* Header with Decorative Elements */}
          <div className="text-center mb-8 sm:mb-10 relative">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <span className="w-12 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent"></span>
              <svg className="w-6 h-6 text-indigo-500 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="w-12 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-stone-700 tracking-wide">
              From the Desk of the
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2 mb-4">
              Director
            </h2>
            
            {/* Decorative Element */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                <span className="w-6 h-6 rounded-full bg-sky-300"></span>
              </div>
              <p className="text-xl sm:text-2xl md:text-3xl font-serif italic text-stone-600">
                Flora Wings Preschool
              </p>
              <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                <span className="w-6 h-6 rounded-full bg-indigo-300"></span>
              </div>
            </div>
            
            <div className="w-24 h-1 bg-gradient-to-r from-sky-300 via-indigo-300 to-purple-300 mx-auto rounded-full"></div>
          </div>

          {/* Two Images Section */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=400&fit=crop" 
                alt="Children learning and playing"
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 px-2 py-1 rounded-lg backdrop-blur-sm">
                Joyful Learning
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop" 
                alt="Children in classroom"
                className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 px-2 py-1 rounded-lg backdrop-blur-sm">
                Nurturing Environment
              </div>
            </div>
          </div>

          {/* Salutation with Icon */}
          <div className="mb-6 flex items-center gap-2">
            <svg className="w-6 h-6 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <p className="text-xl text-stone-600 font-medium">Dear Parents,</p>
          </div>

          {/* Message Body with Floating Elements */}
          <div className="relative space-y-5 text-stone-700 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-12">
            {/* Floating Quote Mark */}
            <div className="absolute -top-4 -left-4 text-6xl text-sky-200 font-serif opacity-50">"</div>
            
            <p className="relative pl-4 sm:pl-6 first-letter:text-3xl sm:first-letter:text-4xl first-letter:font-serif first-letter:text-indigo-600 first-letter:mr-2 first-letter:float-left">
              It gives me immense pleasure to welcome you to Flora Wings Preschool, a place 
              where young minds begin their beautiful journey of learning and discovery. 
              Early childhood is the most important phase of a child's life, as it lays the 
              foundation for their future growth, personality, and confidence.
            </p>

            <p className="pl-4 sm:pl-6 border-l-4 border-sky-200 italic text-stone-600 py-1">
              At Flora Wings Preschool, we believe that every child is unique and full of 
              potential. Our aim is to provide a safe, loving, and stimulating environment 
              where children feel happy, secure, and encouraged to explore.
            </p>

            <p className="pl-4 sm:pl-6">
              Our dedicated team of teachers works with passion and care to ensure that each 
              child develops confidence, independence, and a love for learning. We strongly 
              believe in building a partnership with parents, as together we can provide the 
              best support for our children's growth and success.
            </p>

            <p className="pl-4 sm:pl-6">
              We are committed to creating a strong foundation that will help every child 
              grow into a confident, responsible, and happy individual.
            </p>

            <p className="pl-4 sm:pl-6 font-medium bg-gradient-to-r from-sky-50 to-transparent p-3 sm:p-4 rounded-r-xl text-indigo-800">
              Thank you for trusting Flora Wings Preschool. We look forward to being a part 
              of your child's bright future.
            </p>
          </div>

          {/* Signature & Address Section with Enhanced Design */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t-2 border-dashed border-sky-200 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            
            {/* Left side - Signature with Photo Frame Effect */}
            <div className="relative flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-sky-200 to-indigo-200 flex items-center justify-center border-4 border-white shadow-xl">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div>
                <p className="text-base sm:text-lg text-stone-600 font-light">Warm Regards,</p>
                <p className="text-xl sm:text-2xl font-bold text-stone-800 mt-1 font-serif">
                  Director
                </p>
                <p className="text-base sm:text-lg text-indigo-700 font-medium mt-1">
                  Flora Wings Preschool
                </p>
              </div>
            </div>

            {/* Right side - Address with Map Style */}
            <div className="group relative bg-gradient-to-br from-sky-50 to-white p-4 sm:p-5 rounded-2xl border-2 border-indigo-400/30 max-w-sm hover:shadow-xl transition-all duration-300">
              {/* Mini Map Decorations */}
              <div className="absolute top-2 right-2 flex gap-1">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse animation-delay-200"></span>
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse animation-delay-400"></span>
              </div>
              
              <p className="text-stone-600 text-xs sm:text-sm flex items-start gap-3">
                <svg className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="flex-1">
                  <span className="font-semibold block text-sm sm:text-base">Shiv Vihar Metro Station,</span>
                  <span className="text-stone-500 text-xs sm:text-sm">Jawahar Nagar, Loni, Ghaziabad</span>
                </span>
              </p>
              
              {/* Location Badge */}
              <div className="mt-3 flex items-center gap-2 text-xs text-indigo-600">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                <span>Corporate Office</span>
              </div>
            </div>
          </div>

          {/* Footer flourish with Icons */}
          <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-stone-400 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span className="w-8 sm:w-12 h-px bg-gradient-to-l from-sky-300 to-transparent"></span>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
              <span className="text-indigo-600 font-medium">where learning begins with love</span>
              <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <span className="w-8 sm:w-12 h-px bg-gradient-to-r from-sky-300 to-transparent"></span>
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

export default DirectorMessage;