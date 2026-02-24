import React, { useEffect } from 'react';

const DirectorMessage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/30 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center exo relative overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-200/20 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-300/30 rounded-full animate-particle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`
            }}
          />
        ))}
        
        {/* Decorative Lines */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dots" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="2" fill="rgba(99, 102, 241, 0.1)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      {/* Main Letter Card with 3D Effect */}
      <div className="relative max-w-5xl w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-blue-100/50 transform hover:scale-[1.02] transition-all duration-700 group">
        
        {/* 3D Shadow Effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
        
        {/* Decorative Header with Animated Gradient */}
        <div className="relative h-4 bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 overflow-hidden">
          <div className="absolute inset-0 bg-white/30 animate-shimmer" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)', transform: 'skewX(-20deg)' }}></div>
          <div className="absolute inset-0 flex justify-around">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="w-1 h-full bg-white/20 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
            ))}
          </div>
        </div>
        
        {/* Content Container */}
        <div className="relative px-6 sm:px-8 md:px-12 py-8 sm:py-10 md:py-14 z-10">
          
          {/* Creative Header with 3D Text Effect */}
          <div className="text-center mb-8 sm:mb-10 relative">
            {/* Animated Circle Background */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-r from-sky-200/20 to-indigo-200/20 rounded-full blur-2xl animate-pulse"></div>
            
            <div className="inline-flex items-center justify-center gap-2 mb-4 relative">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-sky-400 to-transparent animate-slide-left"></div>
              <div className="relative">
                <svg className="w-8 h-8 text-indigo-500 animate-spin-slow" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <div className="absolute inset-0 animate-ping">
                  <svg className="w-8 h-8 text-sky-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                </div>
              </div>
              <div className="w-12 h-px bg-gradient-to-r from-indigo-400 to-transparent animate-slide-right"></div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-stone-700 tracking-wide animate-fade-in-up">
              From the Desk of the
            </h1>
            
            {/* Creative 3D Text Effect */}
            <div className="relative mt-2 mb-4">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-sky-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x relative z-10">
                Director
              </h2>
              <h2 className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-transparent" style={{ WebkitTextStroke: '2px rgba(79, 70, 229, 0.3)', transform: 'translate(2px, 2px)' }}>Director</h2>
            </div>
            
            {/* Creative Decorative Element */}
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-200 to-indigo-200 flex items-center justify-center relative group-hover:rotate-180 transition-transform duration-700">
                <div className="absolute inset-0 rounded-full border-2 border-white animate-ping"></div>
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-sky-400 to-indigo-400 animate-pulse"></span>
              </div>
              
              <div className="relative">
                <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-stone-600 animate-fade-in">
                  Flora Wings Preschool
                </p>
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-slide"></div>
              </div>
              
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-200 to-purple-200 flex items-center justify-center relative group-hover:-rotate-180 transition-transform duration-700">
                <div className="absolute inset-0 rounded-full border-2 border-white animate-ping animation-delay-1000"></div>
                <span className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 animate-pulse animation-delay-500"></span>
              </div>
            </div>
            
            <div className="w-32 h-1.5 bg-gradient-to-r from-sky-300 via-indigo-300 to-purple-300 mx-auto rounded-full animate-width"></div>
          </div>

          {/* Creative Two Images Section with Overlay Effects */}
          <div className="flex flex-col sm:flex-row gap-6 mb-10 justify-center">
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 w-full sm:w-1/2 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=400&fit=crop" 
                alt="Children learning and playing"
                className="w-full h-52 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Creative Frame Effect */}
              <div className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-4 rounded-xl z-20"></div>
              <div className="absolute bottom-4 left-4 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-20 bg-gradient-to-r from-sky-500 to-indigo-600 px-4 py-2 rounded-full backdrop-blur-sm">
                ✨ Joyful Learning
              </div>
              <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce animation-delay-150"></span>
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce animation-delay-300"></span>
                </div>
              </div>
            </div>
            
            <div className="relative group overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 w-full sm:w-1/2 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-transparent to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop" 
                alt="Children in classroom"
                className="w-full h-52 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Creative Frame Effect */}
              <div className="absolute inset-0 border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 m-4 rounded-xl z-20"></div>
              <div className="absolute bottom-4 left-4 text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 z-20 bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 rounded-full backdrop-blur-sm">
                🌟 Nurturing Environment
              </div>
              <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce animation-delay-150"></span>
                  <span className="w-2 h-2 bg-white rounded-full animate-bounce animation-delay-300"></span>
                </div>
              </div>
            </div>
          </div>

          {/* Creative Salutation with Animation */}
          <div className="mb-6 flex items-center gap-3 group">
            <div className="relative">
              <svg className="w-8 h-8 text-indigo-500 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <div className="absolute inset-0 animate-ping">
                <svg className="w-8 h-8 text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <p className="text-2xl text-stone-600 font-medium animate-fade-in-left bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Dear Parents,
            </p>
          </div>

          {/* Creative Message Body with Floating Elements */}
          <div className="relative space-y-6 text-stone-700 text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-12">
            {/* Animated Floating Elements */}
            <div className="absolute -top-6 -left-6 text-8xl text-sky-200 font-serif opacity-30 animate-float">"</div>
            <div className="absolute -bottom-6 -right-6 text-8xl text-indigo-200 font-serif opacity-30 animate-float animation-delay-2000">"</div>
            
            {[
              "It gives me immense pleasure to welcome you to Flora Wings Preschool, a place where young minds begin their beautiful journey of learning and discovery. Early childhood is the most important phase of a child's life, as it lays the foundation for their future growth, personality, and confidence.",
              
              "At Flora Wings Preschool, we believe that every child is unique and full of potential. Our aim is to provide a safe, loving, and stimulating environment where children feel happy, secure, and encouraged to explore.",
              
              "Our dedicated team of teachers works with passion and care to ensure that each child develops confidence, independence, and a love for learning. We strongly believe in building a partnership with parents, as together we can provide the best support for our children's growth and success.",
              
              "We are committed to creating a strong foundation that will help every child grow into a confident, responsible, and happy individual.",
              
              "Thank you for trusting Flora Wings Preschool. We look forward to being a part of your child's bright future."
            ].map((text, index) => (
              <div 
                key={index}
                className={`relative pl-6 sm:pl-8 animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 via-indigo-400 to-purple-400 rounded-full animate-height"></div>
                <p className={index === 1 ? "italic text-stone-600" : index === 4 ? "font-medium bg-gradient-to-r from-sky-50 to-transparent p-4 rounded-r-xl text-indigo-800" : ""}>
                  {text}
                </p>
              </div>
            ))}
          </div>

          {/* Creative Signature & Address Section */}
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t-2 border-dashed border-sky-200 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 relative">
            
            {/* Decorative Corner Elements */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-indigo-400 rounded-tl-xl"></div>
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-indigo-400 rounded-tr-xl"></div>
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b-2 border-l-2 border-indigo-400 rounded-bl-xl"></div>
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-indigo-400 rounded-br-xl"></div>
            
            {/* Left side - Creative Signature */}
            <div className="relative flex items-center gap-4 group">
              <div className="relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-sky-200 via-indigo-200 to-purple-200 flex items-center justify-center border-4 border-white shadow-xl transform group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-indigo-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
              </div>
              
              <div className="relative">
                <p className="text-lg sm:text-xl text-stone-600 font-light">Warm Regards,</p>
                <p className="text-2xl sm:text-3xl font-bold text-stone-800 mt-1 font-serif animate-gradient-x bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Director
                </p>
                <p className="text-lg sm:text-xl text-indigo-700 font-medium mt-1 flex items-center gap-2">
                  Flora Wings Preschool
                  <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                </p>
              </div>
            </div>

            {/* Right side - Creative Address Card */}
            <div className="group relative bg-gradient-to-br from-sky-50 via-white to-indigo-50 p-5 sm:p-6 rounded-2xl border-2 border-indigo-400/30 max-w-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-400/50 transition-all duration-500"></div>
              
              {/* Mini Map Decorations */}
              <div className="absolute top-3 right-3 flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse animation-delay-200"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse animation-delay-400"></span>
              </div>
              
              <p className="text-stone-600 text-sm sm:text-base flex items-start gap-3">
                <svg className="w-6 h-6 text-indigo-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="flex-1">
                  <span className="font-bold block text-base sm:text-lg bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Shiv Vihar Metro Station,</span>
                  <span className="text-stone-500 text-sm sm:text-base">Jawahar Nagar, Loni, Ghaziabad</span>
                </span>
              </p>
              
              {/* Location Badge with Animation */}
              <div className="mt-4 flex items-center gap-2 text-sm text-indigo-600">
                <div className="relative">
                  <span className="w-3 h-3 rounded-full bg-indigo-500 animate-ping absolute"></span>
                  <span className="w-3 h-3 rounded-full bg-indigo-500 relative"></span>
                </div>
                <span className="font-medium">Corporate Office</span>
              </div>
            </div>
          </div>

          {/* Creative Footer */}
          <div className="mt-8 sm:mt-10 text-center relative">
            <div className="flex items-center justify-center gap-4">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
              
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-sky-400 animate-float" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                
                <span className="text-indigo-600 font-medium text-sm sm:text-base animate-pulse bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  where learning begins with love
                </span>
                
                <svg className="w-5 h-5 text-indigo-400 animate-float animation-delay-1000" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
              </div>
              
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-indigo-300 to-transparent"></div>
            </div>
            
            {/* Small Decorative Elements */}
            <div className="flex justify-center gap-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 rounded-full bg-indigo-300 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                ></div>
              ))}
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
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes particle {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-20deg); }
          100% { transform: translateX(200%) skewX(-20deg); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes slide-left {
          0% { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        
        @keyframes slide-right {
          0% { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-left {
          0% { opacity: 0; transform: translateX(-20px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes width {
          0% { width: 0; opacity: 0; }
          100% { width: 8rem; opacity: 1; }
        }
        
        @keyframes height {
          0% { height: 0; }
          100% { height: 100%; }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-particle {
          animation: particle linear infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-slide-left {
          animation: slide-left 1s ease-out;
        }
        
        .animate-slide-right {
          animation: slide-right 1s ease-out;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
        
        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out;
        }
        
        .animate-width {
          animation: width 1.5s ease-out;
        }
        
        .animate-height {
          animation: height 1s ease-out;
        }
        
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
        
        .animation-delay-150 {
          animation-delay: 150ms;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
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