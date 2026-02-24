import React, { useEffect, useRef } from 'react';

const DirectorMessage = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Parallax effect on scroll - disable on mobile for better performance
    const handleScroll = () => {
      if (window.innerWidth > 768 && cardRef.current) {
        const scrolled = window.scrollY;
        cardRef.current.style.transform = `translateY(${scrolled * 0.03}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const philosophyPoints = [
    {
      icon: "🌱",
      title: "Nurturing Roots",
      desc: "Building strong foundations through love and care"
    },
    {
      icon: "🦋",
      title: "Holistic Growth",
      desc: "Developing mind, body, and spirit in harmony"
    },
    {
      icon: "🤝",
      title: "Parent Partnership",
      desc: "Working together for every child's success"
    }
  ];

  return (
    <div ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/30 py-6 sm:py-8 md:py-12 lg:py-16 px-3 sm:px-4 md:px-6 lg:px-8 overflow-hidden">
      
      {/* Animated Background Pattern - Reduced opacity on mobile */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes - Hidden on very small devices */}
        <div className="hidden sm:block absolute top-20 left-10 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-10 md:opacity-20 animate-float"></div>
        <div className="hidden md:block absolute bottom-20 right-10 w-48 md:w-80 h-48 md:h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-10 md:opacity-20 animate-float animation-delay-2000"></div>
        <div className="hidden lg:block absolute top-1/2 left-1/3 w-64 lg:w-96 h-64 lg:h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl lg:blur-3xl opacity-10 lg:opacity-20 animate-float animation-delay-4000"></div>
        
        {/* Grid Pattern - Subtle on mobile */}
        <div className="absolute inset-0 opacity-30 md:opacity-100" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(79, 70, 229, 0.05) 1px, transparent 0)`,
          backgroundSize: '20px 20px md:40px 40px'
        }}></div>
      </div>

      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto">
        
        {/* Decorative Header Banner - Smaller on mobile */}
        <div className="absolute -top-4 md:-top-6 left-1/2 transform -translate-x-1/2 w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 rounded-full blur-2xl md:blur-3xl opacity-20 md:opacity-30 animate-pulse"></div>
        
        {/* Main Card with Parallax */}
        <div 
          ref={cardRef}
          className="relative bg-white/95 md:bg-white/90 backdrop-blur-sm md:backdrop-blur-md rounded-3xl md:rounded-[4rem] shadow-xl md:shadow-2xl overflow-hidden border border-white/20 transform transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(79,70,229,0.2)] md:hover:shadow-[0_20px_80px_-15px_rgba(79,70,229,0.3)]"
        >
          
          {/* Gradient Ornament - Subtle on mobile */}
          <div className="absolute top-0 left-0 w-full h-24 md:h-64 bg-gradient-to-b from-indigo-500/5 md:from-indigo-500/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-24 md:h-64 bg-gradient-to-t from-purple-500/5 md:from-purple-500/10 to-transparent"></div>
          
          {/* Decorative Header with Animated Pattern */}
          <div className="relative h-2 md:h-4 bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 overflow-hidden">
            <div className="absolute inset-0 bg-white/20 animate-shimmer hidden md:block" style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
              width: '200%',
              transform: 'translateX(-100%)'
            }}></div>
          </div>
          
          {/* Content Container - Responsive padding */}
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">
            
            {/* Header with Floating Icons - Responsive positioning */}
            <div className="text-center mb-8 md:mb-12 lg:mb-16 relative">
              {/* Floating Emoji Badges - Hidden on very small, adjusted on mobile */}
              <div className="hidden xs:block absolute -top-8 md:-top-10 left-2 md:left-5 lg:left-10 w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-sky-100 to-indigo-100 rounded-full flex items-center justify-center animate-bounce-slow shadow-lg md:shadow-xl">
                <span className="text-xl md:text-2xl lg:text-3xl">👋</span>
              </div>
              <div className="hidden xs:block absolute -top-6 md:-top-8 right-2 md:right-5 lg:right-10 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center animate-bounce-slow animation-delay-1000 shadow-lg md:shadow-xl">
                <span className="text-lg md:text-xl lg:text-2xl">✨</span>
              </div>
              
              {/* Breadcrumb - Responsive sizing */}
              <div className="inline-flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6 bg-white/70 backdrop-blur-sm px-3 py-1 md:px-4 md:py-1.5 lg:px-6 lg:py-2 rounded-full shadow-md md:shadow-lg border border-indigo-100">
                <span className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400"></span>
                <span className="text-xs md:text-sm font-medium text-indigo-600 tracking-wider">DIRECTOR'S DESK</span>
                <span className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400"></span>
              </div>
              
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-stone-700 tracking-wide mb-1 md:mb-2">
                A Message From The
              </h1>
              
              <div className="relative inline-block">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mt-1 md:mt-2 mb-3 md:mb-4 lg:mb-6 leading-tight">
                  Director
                </h2>
                <div className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
              </div>
              
              {/* Animated Title - Stack on mobile, row on larger screens */}
             
            </div>

            {/* Two Images Section - Responsive grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-8 md:mb-10 lg:mb-12">
              {/* Image 1 */}
              <div className="relative group rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl transform hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent z-10"></div>
                <img 
                  src="/images/lo8.jpg" 
                  alt="Children learning and playing"
                  className="w-full h-48 sm:h-56 md:h-60 lg:h-64 xl:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 z-20 text-white">
                  <p className="text-base md:text-lg lg:text-2xl font-bold mb-0.5 md:mb-1">Joyful Learning</p>
                  <p className="text-xs md:text-sm opacity-90 hidden xs:block">Where every day is an adventure</p>
                </div>
                <div className="absolute top-2 md:top-4 right-2 md:right-4 z-20 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-base md:text-lg lg:text-2xl group-hover:rotate-12 transition-transform">
                  🎨
                </div>
              </div>
              
              {/* Image 2 */}
              <div className="relative group rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl transform hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent z-10"></div>
                <img 
                  src="/images/lo4.jpg" 
                  alt="Children in classroom"
                  className="w-full h-48 sm:h-56 md:h-60 lg:h-64 xl:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 z-20 text-white">
                  <p className="text-base md:text-lg lg:text-2xl font-bold mb-0.5 md:mb-1">Nurturing Environment</p>
                  <p className="text-xs md:text-sm opacity-90 hidden xs:block">Building foundations with love</p>
                </div>
                <div className="absolute top-2 md:top-4 right-2 md:right-4 z-20 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-base md:text-lg lg:text-2xl group-hover:rotate-12 transition-transform">
                  📚
                </div>
              </div>
            </div>

            {/* Salutation with Animated Icon - Responsive */}
            <div className="mb-6 md:mb-8 flex flex-col xs:flex-row items-start xs:items-center gap-3 bg-gradient-to-r from-indigo-50 to-transparent p-3 md:p-4 rounded-xl md:rounded-2xl">
              <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-lg md:rounded-xl flex items-center justify-center text-white text-base md:text-lg lg:text-xl animate-pulse">
                💌
              </div>
              <p className="text-lg md:text-xl lg:text-2xl text-stone-700 font-medium">Dear Parents and Guardians,</p>
            </div>

            {/* Message Body with Enhanced Typography - Responsive text sizes */}
            <div className="relative max-w-3xl mx-auto mb-10 md:mb-12 lg:mb-16">
              {/* Decorative Quote Marks - Hidden on mobile, visible on larger */}
              <div className="hidden md:block absolute -top-6 lg:-top-8 -left-4 lg:-left-8 text-5xl lg:text-8xl text-indigo-200 font-serif opacity-30">"</div>
              <div className="hidden md:block absolute -bottom-6 lg:-bottom-8 -right-4 lg:-right-8 text-5xl lg:text-8xl text-indigo-200 font-serif opacity-30 rotate-180">"</div>
              
              <div className="space-y-4 md:space-y-5 lg:space-y-6 text-stone-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                <p className="relative pl-3 md:pl-4 lg:pl-6 first-letter:text-2xl sm:first-letter:text-3xl md:first-letter:text-4xl lg:first-letter:text-5xl first-letter:font-serif first-letter:text-indigo-600 first-letter:mr-2 md:first-letter:mr-3 first-letter:float-left first-letter:leading-tight">
                  It gives me immense pleasure to welcome you to Flora Wings Preschool, a place 
                  where young minds begin their beautiful journey of learning and discovery. 
                  Early childhood is the most important phase of a child's life, as it lays the 
                  foundation for their future growth, personality, and confidence.
                </p>

                <div className="pl-3 md:pl-4 lg:pl-6 border-l-2 md:border-l-4 border-indigo-300 italic text-indigo-700 py-1 md:py-2 bg-indigo-50/30 p-2 md:p-3 lg:p-4 rounded-r-lg md:rounded-r-xl">
                  <p className="text-sm md:text-base lg:text-lg">"At Flora Wings Preschool, we believe that every child is unique and full of 
                  potential. Our aim is to provide a safe, loving, and stimulating environment 
                  where children feel happy, secure, and encouraged to explore."</p>
                </div>

                <p className="pl-3 md:pl-4 lg:pl-6">
                  Our dedicated team of teachers works with passion and care to ensure that each 
                  child develops confidence, independence, and a love for learning. We strongly 
                  believe in building a partnership with parents, as together we can provide the 
                  best support for our children's growth and success.
                </p>

                <p className="pl-3 md:pl-4 lg:pl-6">
                  We are committed to creating a strong foundation that will help every child 
                  grow into a confident, responsible, and happy individual.
                </p>

                <div className="pl-3 md:pl-4 lg:pl-6 font-medium bg-gradient-to-r from-indigo-50 via-purple-50 to-transparent p-3 md:p-4 lg:p-6 rounded-lg md:rounded-xl lg:rounded-2xl text-indigo-800 text-base md:text-lg lg:text-xl italic shadow-md md:shadow-lg border border-indigo-100">
                  Thank you for trusting Flora Wings Preschool. We look forward to being a part 
                  of your child's bright future.
                </div>
              </div>
            </div>

            {/* Philosophy Points - Responsive 3 Column Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 lg:gap-6 my-8 md:my-10 lg:my-12">
              {philosophyPoints.map((point, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white to-indigo-50/50 p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl shadow-md md:shadow-lg hover:shadow-xl transform hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 border border-indigo-100/50">
                  <div className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-3 group-hover:scale-110 transition-transform">{point.icon}</div>
                  <h3 className="text-base md:text-lg lg:text-xl font-bold text-indigo-800 mb-1 md:mb-2">{point.title}</h3>
                  <p className="text-xs md:text-sm text-stone-600">{point.desc}</p>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 md:h-1 bg-gradient-to-r from-sky-400 to-indigo-500 group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>

            {/* Signature & Address Section - Responsive grid */}
            <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-16 pt-4 md:pt-6 lg:pt-8 border-t-2 border-dashed border-indigo-200 grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-start lg:items-end">
              
              {/* Left side - Signature with Photo Frame - Responsive */}
              <div className="relative flex flex-col xs:flex-row items-start xs:items-center gap-4 md:gap-6 bg-gradient-to-r from-indigo-50 via-white to-transparent p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-xl md:rounded-2xl border-2 border-indigo-200 animate-pulse-slow"></div>
                
                <div className="relative z-10">
                 <div className="w-16 h-16 sm:w-25 sm:h-25 rounded-full bg-gradient-to-br from-amber-200 to-emerald-200 flex items-center justify-center border-4 border-white shadow-xl">
               <img src="/images/ma1.jpg" className='rounded-full h-full w-full'/>
              </div>
                  <div className="absolute -bottom-1 md:-bottom-2 -right-1 md:-right-2 w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xs md:text-sm shadow-lg">
                    ✨
                  </div>
                </div>
                
                <div className="z-10">
                  <p className="text-base md:text-lg lg:text-xl text-stone-600 font-light flex items-center gap-2">
                    <span className="w-4 md:w-5 lg:w-8 h-px bg-indigo-300"></span>
                    Warm Regards,
                  </p>
                  <p className="text-xl md:text-2xl lg:text-3xl font-bold text-stone-800 mt-1 md:mt-2 font-serif">
                    Director
                  </p>
                  <p className="text-base md:text-lg lg:text-xl text-indigo-700 font-medium mt-1 flex items-center gap-2">
                    Flora Wings Preschool
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-indigo-500 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </p>
                </div>
              </div>

              {/* Right side - Address with Interactive Map Style - Responsive */}
              <div className="group relative bg-gradient-to-br from-white to-indigo-50 p-4 md:p-5 lg:p-6 rounded-xl md:rounded-2xl border-2 border-indigo-400/30 shadow-lg md:shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Moving Gradient - Hidden on mobile */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-indigo-400/0 via-indigo-400/10 to-purple-400/0 group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Location Pin Animation - Adjusted size for mobile */}
                <div className="absolute -top-1 md:-top-2 -right-1 md:-right-2 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 bg-indigo-400 rounded-full flex items-center justify-center text-white animate-ping-slow opacity-50"></div>
                <div className="absolute -top-1 md:-top-2 -right-1 md:-right-2 w-8 h-8 md:w-10 md:h-10 lg:w-14 lg:h-14 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <span className="text-sm md:text-base lg:text-xl">📍</span>
                </div>
                
                <div className="relative">
                  <h4 className="text-base md:text-lg lg:text-xl font-semibold text-stone-800 mb-2 md:mb-3 lg:mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-sm md:text-base lg:text-lg">Corporate Headquarters</span>
                  </h4>
                  
                  <div className="flex flex-col xs:flex-row gap-3 md:gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-sky-200 to-indigo-200 rounded-lg md:rounded-xl flex items-center justify-center">
                        <svg className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <p className="font-semibold text-stone-800 text-sm md:text-base lg:text-lg">Shiv Vihar Metro Station,</p>
                      <p className="text-stone-600 text-xs md:text-sm lg:text-base">Jawahar Nagar, Loni,</p>
                      <p className="text-stone-600 text-xs md:text-sm lg:text-base">Ghaziabad - 201102</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with Animated Elements - Responsive */}
            <div className="mt-8 md:mt-10 lg:mt-12 text-center">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 md:gap-4 bg-white/70 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 lg:px-6 lg:py-3 rounded-full shadow-md md:shadow-lg border border-indigo-100">
                <span className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-sky-100 to-indigo-100 flex items-center justify-center animate-bounce text-xs md:text-sm lg:text-base">🌟</span>
                <span className="text-indigo-600 font-medium text-xs md:text-sm lg:text-base">where learning begins with love</span>
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                <span className="text-indigo-600 font-medium text-xs md:text-sm lg:text-base">every child matters</span>
                <span className="w-5 h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center animate-bounce animation-delay-500 text-xs md:text-sm lg:text-base">💫</span>
              </div>
              
              {/* Copyright with hover effect */}
              <p className="mt-4 md:mt-6 text-xs text-stone-400 hover:text-indigo-500 transition-colors">
                © {new Date().getFullYear()} Flora Wings Preschool. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes ping-slow {
          75%, 100% { transform: scale(1.5); opacity: 0; }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 3s infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Extra small devices */
        @media (min-width: 475px) {
          .xs\\:block {
            display: block;
          }
          .xs\\:flex-row {
            flex-direction: row;
          }
          .xs\\:items-center {
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
};

export default DirectorMessage;