import React, { useEffect, useRef } from 'react';

const DirectorMessage = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Parallax effect on scroll
    const handleScroll = () => {
      if (cardRef.current) {
        const scrolled = window.scrollY;
        cardRef.current.style.transform = `translateY(${scrolled * 0.03}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const achievements = [
    { icon: "🎓", number: "15+", label: "Years of Excellence" },
    { icon: "🏆", number: "5000+", label: "Happy Children" },
    { icon: "👩‍🏫", number: "50+", label: "Expert Teachers" },
    { icon: "🌟", number: "100%", label: "Parent Satisfaction" }
  ];

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
    <div ref={sectionRef} className="relative min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/30 py-12 sm:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-4000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(79, 70, 229, 0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Main Container */}
      <div className="relative max-w-6xl mx-auto">
        
        {/* Decorative Header Banner */}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-48 h-48 bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        
        {/* Main Card with Parallax */}
        <div 
          ref={cardRef}
          className="relative bg-white/90 backdrop-blur-md rounded-[4rem] shadow-2xl overflow-hidden border border-white/20 transform transition-all duration-700 hover:shadow-[0_20px_80px_-15px_rgba(79,70,229,0.3)]"
        >
          
          {/* Gradient Ornament */}
          <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-indigo-500/10 to-transparent"></div>
          <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-purple-500/10 to-transparent"></div>
          
          {/* Decorative Header with Animated Pattern */}
          <div className="relative h-4 bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 overflow-hidden">
            <div className="absolute inset-0 bg-white/20 animate-shimmer" style={{
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
              width: '200%',
              transform: 'translateX(-100%)'
            }}></div>
          </div>
          
          {/* Content Container */}
          <div className="px-6 sm:px-8 md:px-16 py-8 sm:py-10 md:py-16">
            
            {/* Header with Floating Icons */}
            <div className="text-center mb-12 md:mb-16 relative">
              {/* Floating Emoji Badges */}
              <div className="absolute -top-10 left-10 w-16 h-16 bg-gradient-to-br from-sky-100 to-indigo-100 rounded-full flex items-center justify-center animate-bounce-slow shadow-xl">
                <span className="text-3xl">👋</span>
              </div>
              <div className="absolute -top-8 right-10 w-14 h-14 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center animate-bounce-slow animation-delay-1000 shadow-xl">
                <span className="text-2xl">✨</span>
              </div>
              
              {/* Breadcrumb */}
              <div className="inline-flex items-center justify-center gap-3 mb-6 bg-white/70 backdrop-blur-sm px-6 py-2 rounded-full shadow-lg border border-indigo-100">
                <span className="w-6 h-6 rounded-full bg-gradient-to-r from-sky-400 to-indigo-400"></span>
                <span className="text-sm font-medium text-indigo-600 tracking-wider">DIRECTOR'S DESK</span>
                <span className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-400 to-purple-400"></span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-stone-700 tracking-wide mb-2">
                A Message From The
              </h1>
              
              <div className="relative inline-block">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2 mb-6 leading-tight">
                  Director
                </h2>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-400 to-transparent"></div>
              </div>
              
              {/* Animated Title */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-200 to-sky-400 flex items-center justify-center shadow-xl animate-spin-slow">
                  <span className="text-2xl">🌺</span>
                </div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-stone-600 bg-white/50 px-8 py-3 rounded-full backdrop-blur-sm shadow-lg">
                  Flora Wings Preschool
                </p>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-200 to-indigo-400 flex items-center justify-center shadow-xl animate-spin-slow animation-delay-2000">
                  <span className="text-2xl">🕊️</span>
                </div>
              </div>
            </div>

            {/* Two Images Section - Enhanced */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Image 1 */}
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent z-10"></div>
                <img 
                  src="/images/lo8.jpg" 
                  alt="Children learning and playing"
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <p className="text-2xl font-bold mb-1">Joyful Learning</p>
                  <p className="text-sm opacity-90">Where every day is an adventure</p>
                </div>
                <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform">
                  🎨
                </div>
              </div>
              
              {/* Image 2 */}
              <div className="relative group rounded-3xl overflow-hidden shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-transparent z-10"></div>
                <img 
                  src="/images/lo10.jpg" 
                  alt="Children in classroom"
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20 text-white">
                  <p className="text-2xl font-bold mb-1">Nurturing Environment</p>
                  <p className="text-sm opacity-90">Building foundations with love</p>
                </div>
                <div className="absolute top-4 right-4 z-20 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl group-hover:rotate-12 transition-transform">
                  📚
                </div>
              </div>
            </div>

            {/* Salutation with Animated Icon */}
            <div className="mb-8 flex items-center gap-3 bg-gradient-to-r from-indigo-50 to-transparent p-4 rounded-2xl">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-indigo-500 rounded-xl flex items-center justify-center text-white text-xl animate-pulse">
                💌
              </div>
              <p className="text-2xl text-stone-700 font-medium">Dear Parents and Guardians,</p>
            </div>

            {/* Message Body with Enhanced Typography */}
            <div className="relative max-w-3xl mx-auto mb-16">
              {/* Decorative Quote Marks */}
              <div className="absolute -top-8 -left-8 text-8xl text-indigo-200 font-serif opacity-30">"</div>
              <div className="absolute -bottom-8 -right-8 text-8xl text-indigo-200 font-serif opacity-30 rotate-180">"</div>
              
              <div className="space-y-6 text-stone-700 text-base sm:text-lg md:text-xl leading-relaxed">
                <p className="relative pl-6 first-letter:text-5xl first-letter:font-serif first-letter:text-indigo-600 first-letter:mr-3 first-letter:float-left first-letter:leading-tight">
                  It gives me immense pleasure to welcome you to Flora Wings Preschool, a place 
                  where young minds begin their beautiful journey of learning and discovery. 
                  Early childhood is the most important phase of a child's life, as it lays the 
                  foundation for their future growth, personality, and confidence.
                </p>

                <div className="pl-6 border-l-4 border-indigo-300 italic text-indigo-700 py-2 bg-indigo-50/30 p-4 rounded-r-2xl">
                  <p className="text-lg">"At Flora Wings Preschool, we believe that every child is unique and full of 
                  potential. Our aim is to provide a safe, loving, and stimulating environment 
                  where children feel happy, secure, and encouraged to explore."</p>
                </div>

                <p className="pl-6">
                  Our dedicated team of teachers works with passion and care to ensure that each 
                  child develops confidence, independence, and a love for learning. We strongly 
                  believe in building a partnership with parents, as together we can provide the 
                  best support for our children's growth and success.
                </p>

                <p className="pl-6">
                  We are committed to creating a strong foundation that will help every child 
                  grow into a confident, responsible, and happy individual.
                </p>

                <div className="pl-6 font-medium bg-gradient-to-r from-indigo-50 via-purple-50 to-transparent p-6 rounded-2xl text-indigo-800 text-xl italic shadow-lg border border-indigo-100">
                  Thank you for trusting Flora Wings Preschool. We look forward to being a part 
                  of your child's bright future.
                </div>
              </div>
            </div>

            {/* Philosophy Points - 3 Column Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              {philosophyPoints.map((point, index) => (
                <div key={index} className="group relative bg-gradient-to-br from-white to-indigo-50/50 p-6 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 border border-indigo-100/50">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{point.icon}</div>
                  <h3 className="text-lg font-bold text-indigo-800 mb-2">{point.title}</h3>
                  <p className="text-sm text-stone-600">{point.desc}</p>
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-sky-400 to-indigo-500 group-hover:w-full transition-all duration-500"></div>
                </div>
              ))}
            </div>

            {/* Achievements Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-12">
              {achievements.map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
                    {item.number}
                  </div>
                  <div className="text-xs text-stone-500">{item.label}</div>
                </div>
              ))}
            </div>

            {/* Signature & Address Section with Creative Layout */}
            <div className="mt-12 lg:mt-16 pt-8 border-t-2 border-dashed border-indigo-200 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
              
              {/* Left side - Signature with Photo Frame */}
              <div className="relative flex items-center gap-6 bg-gradient-to-r from-indigo-50 via-white to-transparent p-6 rounded-2xl">
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-indigo-200 animate-pulse-slow"></div>
                
                <div className="relative">
                  <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-sky-300 via-indigo-300 to-purple-300 flex items-center justify-center border-4 border-white shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                    <svg className="w-10 h-10 lg:w-12 lg:h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm shadow-lg">
                    ✨
                  </div>
                </div>
                
                <div>
                  <p className="text-lg lg:text-xl text-stone-600 font-light flex items-center gap-2">
                    <span className="w-8 h-px bg-indigo-300"></span>
                    Warm Regards,
                  </p>
                  <p className="text-2xl lg:text-3xl font-bold text-stone-800 mt-2 font-serif">
                    Director
                  </p>
                  <p className="text-lg lg:text-xl text-indigo-700 font-medium mt-1 flex items-center gap-2">
                    Flora Wings Preschool
                    <svg className="w-5 h-5 text-indigo-500 animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </p>
                </div>
              </div>

              {/* Right side - Address with Interactive Map Style */}
              <div className="group relative bg-gradient-to-br from-white to-indigo-50 p-6 rounded-2xl border-2 border-indigo-400/30 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Moving Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-400/0 via-indigo-400/10 to-purple-400/0 group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Location Pin Animation */}
                <div className="absolute -top-2 -right-2 w-14 h-14 bg-indigo-400 rounded-full flex items-center justify-center text-white animate-ping-slow opacity-50"></div>
                <div className="absolute -top-2 -right-2 w-14 h-14 bg-indigo-500 rounded-full flex items-center justify-center text-white shadow-xl">
                  📍
                </div>
                
                <div className="relative">
                  <h4 className="text-lg font-semibold text-stone-800 mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></span>
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Corporate Headquarters</span>
                  </h4>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-sky-200 to-indigo-200 rounded-xl flex items-center justify-center">
                        <svg className="w-7 h-7 text-indigo-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <p className="font-semibold text-stone-800 text-lg">Shiv Vihar Metro Station,</p>
                      <p className="text-stone-600">Jawahar Nagar, Loni,</p>
                      <p className="text-stone-600 mb-3">Ghaziabad - 201102</p>
                      
                      <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium flex items-center gap-1">
                          📞 +91 12345 67890
                        </span>
                        <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-xs font-medium flex items-center gap-1">
                          ✉️ director@florawings.com
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with Animated Elements */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-4 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-indigo-100">
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-sky-100 to-indigo-100 flex items-center justify-center animate-bounce">🌟</span>
                <span className="text-indigo-600 font-medium">where learning begins with love</span>
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                <span className="text-indigo-600 font-medium">every child matters</span>
                <span className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 flex items-center justify-center animate-bounce animation-delay-500">💫</span>
              </div>
              
              {/* Copyright with hover effect */}
              <p className="mt-6 text-xs text-stone-400 hover:text-indigo-500 transition-colors">
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
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes ping-slow {
          75%, 100% { transform: scale(1.8); opacity: 0; }
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
      `}</style>
    </div>
  );
};

export default DirectorMessage;