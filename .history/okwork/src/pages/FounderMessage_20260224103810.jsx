import React, { useEffect, useRef } from 'react';

const FounderMessage = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Parallax effect on scroll
    const handleScroll = () => {
      if (cardRef.current) {
        const scrolled = window.scrollY;
        cardRef.current.style.transform = `translateY(${scrolled * 0.05}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const coreValues = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Quality Education",
      description: "Research-backed curriculum fostering holistic development in early years",
      color: "from-emerald-400 to-teal-500",
      stats: "15+ Years",
      statLabel: "Of Excellence"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      ),
      title: "Franchise Support",
      description: "End-to-end mentorship and operational guidance for partners",
      color: "from-amber-400 to-orange-500",
      stats: "50+",
      statLabel: "Centers Nationwide"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Community Impact",
      description: "Building brighter futures through compassionate education",
      color: "from-rose-400 to-pink-500",
      stats: "5000+",
      statLabel: "Children Impacted"
    }
  ];

  const milestones = [
    { year: "2010", event: "Founded with a vision" },
    { year: "2015", event: "First franchise launched" },
    { year: "2020", event: "Expanded to 50+ centers" },
    { year: "2024", event: "Shaping tomorrow's leaders" }
  ];

  return (
    <div ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-amber-50 via-white to-emerald-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(245,158,11,0.1)_0%,transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl animate-float"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `rgba(${Math.random() * 100 + 155}, ${Math.random() * 100 + 55}, ${Math.random() * 100}, 0.1)`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>

      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto">
        
        {/* Decorative Header Banner */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
        
        {/* Main Card with Parallax */}
        <div 
          ref={cardRef}
          className="relative bg-white/90 backdrop-blur-md rounded-[3rem] shadow-2xl overflow-hidden border border-white/20 transform transition-all duration-700 hover:shadow-[0_20px_80px_-15px_rgba(16,185,129,0.3)]"
        >
          
          {/* Gradient Ornament */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-emerald-500/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-32 bg-gradient-to-t from-amber-500/10 to-transparent"></div>
          
          {/* Decorative Header with Animated Pattern */}
          <div className="relative h-4 bg-gradient-to-r from-amber-400 via-emerald-400 to-teal-500 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.2"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20 animate-slide"></div>
          </div>
          
          {/* Content Container */}
          <div className="px-6 sm:px-8 md:px-16 py-8 sm:py-10 md:py-16">
            
            {/* Pinterest-style Header with Floating Icons */}
            <div className="text-center mb-12 md:mb-16 relative">
              {/* Floating Badges */}
              <div className="absolute -top-10 left-10 w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center animate-bounce-slow">
                <span className="text-2xl">🌟</span>
              </div>
              <div className="absolute -top-8 right-10 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center animate-bounce-slow animation-delay-1000">
                <span className="text-xl">✨</span>
              </div>
              
              <div className="inline-flex items-center justify-center gap-3 mb-6 bg-white/50 px-6 py-2 rounded-full shadow-lg backdrop-blur-sm">
                <span className="w-8 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></span>
                <span className="text-sm font-medium text-emerald-600 tracking-wider">FOUNDER'S DESK</span>
                <span className="w-8 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent"></span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-stone-700 tracking-wide mb-2">
                A Message From The
              </h1>
              
              <div className="relative inline-block">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500 bg-clip-text text-transparent mt-2 mb-6 leading-tight">
                  Founder & Franchisor
                </h2>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
              </div>
              
              {/* Decorative Element with Animation */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-200 to-amber-400 flex items-center justify-center shadow-xl animate-spin-slow">
                  <span className="w-8 h-8 rounded-full bg-white"></span>
                </div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-stone-600 bg-white/50 px-6 py-2 rounded-full backdrop-blur-sm">
                  Flora Wings Preschool
                </p>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-200 to-emerald-400 flex items-center justify-center shadow-xl animate-spin-slow animation-delay-2000">
                  <span className="w-8 h-8 rounded-full bg-white"></span>
                </div>
              </div>
            </div>

            {/* Message Body with Enhanced Typography */}
            <div className="relative max-w-3xl mx-auto mb-16">
              {/* Decorative Quote Marks */}
              <div className="absolute -top-8 -left-8 text-8xl text-amber-200 font-serif opacity-30">"</div>
              <div className="absolute -bottom-8 -right-8 text-8xl text-amber-200 font-serif opacity-30 rotate-180">"</div>
              
              <div className="space-y-6 text-stone-700 text-base sm:text-lg md:text-xl leading-relaxed">
                <p className="relative pl-6 first-letter:text-5xl first-letter:font-serif first-letter:text-emerald-600 first-letter:mr-3 first-letter:float-left first-letter:leading-tight">
                  At Flora Wings Preschool, our journey began with a simple yet powerful vision—
                  to create a nurturing environment where every child feels valued, inspired, and 
                  confident to explore their potential. We believe that the early years of education 
                  lay the foundation for lifelong learning, character building, and emotional growth.
                </p>

                <p className="pl-6 border-l-4 border-amber-300 italic text-stone-600 bg-amber-50/30 p-4 rounded-r-2xl">
                  "As the Founder and Franchisor, my mission is not only to provide quality 
                  preschool education but also to empower aspiring entrepreneurs, especially women, 
                  who wish to build a meaningful and successful career in the education sector."
                </p>

                <p className="pl-6">
                  Through our franchise program, we offer complete support including curriculum, 
                  teacher training, operational guidance, branding, and continuous mentorship. Our 
                  goal is to create a network of passionate educators who share our vision.
                </p>

                <div className="pl-6 font-medium bg-gradient-to-r from-emerald-50 via-amber-50 to-transparent p-6 rounded-2xl text-emerald-800 text-xl italic shadow-lg">
                  Together, we are not just building preschools—we are shaping futures, nurturing 
                  dreams, and creating a brighter tomorrow for every child.
                </div>
              </div>
            </div>

            {/* Pinterest-style 3-Point Grid with Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 my-12 lg:my-16">
              {coreValues.map((value, index) => (
                <div 
                  key={index}
                  className="group relative bg-gradient-to-br from-white to-amber-50/50 rounded-3xl p-6 lg:p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500 border border-white/50 backdrop-blur-sm overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-400/10 to-transparent rounded-bl-full"></div>
                  
                  {/* Icon with Glow Effect */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-emerald-400 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                    <div className={`relative w-20 h-20 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      {value.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl lg:text-2xl font-bold text-stone-800 mb-3 group-hover:text-emerald-600 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-sm lg:text-base text-stone-600 leading-relaxed mb-4">
                    {value.description}
                  </p>
                  
                  {/* Stat Badge */}
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-amber-200">
                    <span className={`text-2xl font-bold bg-gradient-to-r ${value.color} bg-clip-text text-transparent`}>
                      {value.stats}
                    </span>
                    <span className="text-xs text-stone-500">{value.statLabel}</span>
                  </div>
                  
                  {/* Animated Border */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-400 to-emerald-400 group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>

            {/* Timeline Section */}
            <div className="my-16 py-8 bg-gradient-to-r from-amber-50/50 via-white to-emerald-50/50 rounded-3xl">
              <h3 className="text-2xl font-bold text-center text-stone-800 mb-8">Our Journey</h3>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className="relative text-center group">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-emerald-100 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <div className="font-bold text-emerald-600">{milestone.year}</div>
                    <div className="text-xs text-stone-600 max-w-[100px]">{milestone.event}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Signature & Address Section with Creative Layout */}
            <div className="mt-12 lg:mt-16 pt-8 border-t-2 border-dashed border-amber-300 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
              
              {/* Left side - Signature with Photo Frame */}
              <div className="relative flex items-center gap-6 bg-gradient-to-r from-amber-50 to-transparent p-6 rounded-2xl">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-amber-200 animate-pulse-slow"></div>
                
                <div className="relative">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-amber-300 to-emerald-300 flex items-center justify-center border-4 border-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                    <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center text-white text-sm shadow-lg">
                    ✨
                  </div>
                </div>
                
                <div>
                  <p className="text-lg lg:text-xl text-stone-600 font-light flex items-center gap-2">
                    <span className="w-8 h-px bg-amber-300"></span>
                    Warm Regards,
                  </p>
                  <p className="text-2xl lg:text-3xl font-bold text-stone-800 mt-2 font-serif">
                    Founder & Franchisor
                  </p>
                  <p className="text-lg lg:text-xl text-emerald-700 font-medium mt-1 flex items-center gap-2">
                    Flora Wings Preschool
                    <svg className="w-5 h-5 text-emerald-500 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </p>
                </div>
              </div>

              {/* Right side - Address with Interactive Map Style */}
              <div className="group relative bg-gradient-to-br from-white to-amber-50 p-6 rounded-2xl border-2 border-emerald-400/30 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Moving Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 via-emerald-400/5 to-amber-400/0 group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Location Pin Animation */}
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-emerald-400 rounded-full flex items-center justify-center text-white animate-ping-slow opacity-50"></div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
                  📍
                </div>
                
                <div className="relative">
                  <h4 className="text-lg font-semibold text-stone-800 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    Corporate Headquarters
                  </h4>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-emerald-200 rounded-lg flex items-center justify-center">
                        <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <p className="font-semibold text-stone-800">Shiv Vihar Metro Station,</p>
                      <p className="text-stone-600">Jawahar Nagar, Loni,</p>
                      <p className="text-stone-600">Ghaziabad - 201102</p>
                      
                      <div className="mt-3 flex gap-2">
                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-medium">
                          📞 +91 12345 67890
                        </span>
                        <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                          ✉️ info@florawings.com
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with Animated Elements */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-4 bg-white/50 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
                <span className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center animate-bounce">🌱</span>
                <span className="text-amber-600 font-medium">nurturing dreams</span>
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                <span className="text-emerald-600 font-medium">shaping futures</span>
                <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center animate-bounce animation-delay-500">🦋</span>
              </div>
              
              {/* Copyright with hover effect */}
              <p className="mt-6 text-xs text-stone-400 hover:text-emerald-500 transition-colors">
                © {new Date().getFullYear()} Flora Wings Preschool. All rights reserved.
              </p>
            </div>
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes slide {
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
        
        .animate-slide {
          animation: slide 10s linear infinite;
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
      `}</style>
    </div>
  );
};

export default FounderMessage;