import React, { useEffect } from 'react';

const FloraWingsOnePage = () => {
   useEffect(()=>{
      scrollTo(0,0)
    })
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-blue-50">
      
      {/* Hero Section with Special Offer */}
      <div className="relative bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-800 text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 md:w-40 md:h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 md:w-60 md:h-60 bg-orange-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-24">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-2 sm:mb-4 px-2">
              Flora Wings Preschool
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-200 px-4">
              Where Young Minds Bloom & Dreams Take Flight
            </p>
          </div>

          {/* Special Offer Cards - Stack on mobile, side by side on larger screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto px-2">
            {/* No Royalty Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-amber-300/50 shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4 text-amber-300 text-center sm:text-left">💰</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 text-amber-300 text-center sm:text-left">
                NO ROYALTY
              </h2>
              <p className="text-sm sm:text-base md:text-xl text-white/90 text-center sm:text-left">
                Zero royalty • 0% revenue share
              </p>
              <div className="mt-2 sm:mt-4 h-1 w-16 sm:w-20 bg-amber-300 rounded-full mx-auto sm:mx-0"></div>
              <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg text-white/80 text-center sm:text-left">
                Keep 100% of your earnings forever
              </p>
            </div>

            {/* No Franchise Fee Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border-2 border-emerald-300/50 shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-4 text-emerald-300 text-center sm:text-left">🚫</div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-1 sm:mb-2 text-emerald-300 text-center sm:text-left">
                NO FRANCHISE FEE
              </h2>
              <p className="text-sm sm:text-base md:text-xl text-white/90 text-center sm:text-left">
                Zero franchise fee • No joining cost
              </p>
              <div className="mt-2 sm:mt-4 h-1 w-16 sm:w-20 bg-emerald-300 rounded-full mx-auto sm:mx-0"></div>
              <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg text-white/80 text-center sm:text-left">
                Start with minimal investment
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Section */}
      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-stone-800 mb-2 sm:mb-4 px-2">
            Message from Our Leadership
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-stone-600 max-w-3xl mx-auto px-4">
            Hear from the people dedicated to making Flora Wings Preschool a nurturing home for your child
          </p>
        </div>

        {/* Two Column Layout - Stack on mobile, side by side on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12">
          
          {/* Founder Message */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group">
            <div className="h-2 bg-gradient-to-r from-amber-400 via-orange-400 to-[#F15F25] rounded-t-2xl sm:rounded-t-3xl"></div>
            <div className="p-5 sm:p-6 md:p-8 lg:p-10">
              {/* Badges - Stack on mobile, wrap on tablet */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-bold text-[#F15F25] bg-orange-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-orange-200">
                  👑 FOUNDER & FRANCHISOR
                </span>
                <span className="text-xs sm:text-sm bg-green-100 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold border border-green-200">
                  🚫 NO ROYALTY
                </span>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-800 mb-3 sm:mb-4 group-hover:text-[#F15F25] transition-colors">
                From the Founder's Desk
              </h3>
              
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-stone-600 mb-6 sm:mb-8">
                <p className="first-letter:text-3xl sm:first-letter:text-4xl md:first-letter:text-5xl first-letter:font-serif first-letter:text-[#F15F25] first-letter:mr-2 first-letter:float-left">
                  At Flora Wings Preschool, our journey began with a simple yet powerful vision—to create a 
                  nurturing environment where every child feels valued, inspired, and confident to explore 
                  their potential.
                </p>
                <p>
                  As the Founder and Franchisor, my mission is to empower aspiring entrepreneurs, especially 
                  women, who wish to build a meaningful career in education. Through our franchise program, 
                  we offer complete support including curriculum, teacher training, and continuous mentorship.
                </p>
                <p className="font-bold italic text-emerald-700 text-sm sm:text-base md:text-lg border-l-4 border-[#F15F25] pl-3 sm:pl-4">
                  "Together, we are shaping futures, nurturing dreams, and creating a brighter tomorrow."
                </p>
              </div>
              
              <div className="border-t border-amber-200 pt-4 sm:pt-6 flex items-start gap-2 sm:gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#F15F25] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm sm:text-base font-semibold">Shiv Vihar Metro Station, Jawahar Nagar, Loni, Ghaziabad</p>
              </div>
            </div>
          </div>
          
          {/* Director Message */}
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 group">
            <div className="h-2 bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400 rounded-t-2xl sm:rounded-t-3xl"></div>
            <div className="p-5 sm:p-6 md:p-8 lg:p-10">
              {/* Badges */}
              <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-bold text-indigo-600 bg-indigo-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-indigo-200">
                  🎓 DIRECTOR
                </span>
                <span className="text-xs sm:text-sm bg-green-100 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold border border-green-200">
                  💰 NO FRANCHISE FEE
                </span>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-800 mb-3 sm:mb-4 group-hover:text-indigo-600 transition-colors">
                From the Director's Desk
              </h3>
              
              <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-stone-600 mb-6 sm:mb-8">
                <p className="font-medium text-base sm:text-lg">Dear Parents,</p>
                <p>
                  It gives me immense pleasure to welcome you to Flora Wings Preschool, a place where young 
                  minds begin their beautiful journey of learning and discovery. Early childhood is the most 
                  important phase of a child's life.
                </p>
                <p>
                  At Flora Wings Preschool, we provide a safe, loving, and stimulating environment where 
                  children feel happy, secure, and encouraged to explore. We focus on nurturing intellectual, 
                  emotional, social, and creative development through play-based learning.
                </p>
                <p>
                  Our dedicated teachers work with passion to ensure each child develops confidence, 
                  independence, and a love for learning. We believe in building a partnership with parents 
                  for the best support of our children's growth.
                </p>
                <p className="font-bold italic text-indigo-700 text-sm sm:text-base md:text-lg border-l-4 border-indigo-400 pl-3 sm:pl-4">
                  "Thank you for trusting Flora Wings Preschool. We look forward to being a part of your 
                  child's bright future."
                </p>
              </div>
              
              <div className="border-t border-blue-200 pt-4 sm:pt-6 flex items-start gap-2 sm:gap-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-sm sm:text-base font-semibold">Shiv Vihar, Loni, Ghaziabad</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 sm:mt-16 text-center bg-gradient-to-r from-amber-100 to-blue-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-amber-200 mx-2 sm:mx-0">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-stone-800 mb-2 sm:mb-4 px-2">
            Start Your Journey With Flora Wings Today!
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-stone-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join our family with <span className="font-bold text-emerald-600">NO ROYALTY</span> and{' '}
            <span className="font-bold text-indigo-600">NO FRANCHISE FEE</span> - Limited time offer
          </p>
          
          {/* You can add buttons/forms here */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-6 sm:py-3 sm:px-8 rounded-full text-sm sm:text-base transition-all transform hover:scale-105 shadow-lg">
              Enquire Now
            </button>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 sm:py-3 sm:px-8 rounded-full text-sm sm:text-base transition-all transform hover:scale-105 shadow-lg">
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default FloraWingsOnePage;