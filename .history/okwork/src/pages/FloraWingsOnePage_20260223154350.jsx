import React, { useState } from 'react';

const FloraWingsOnePage = () => {


  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-blue-50">
      
      {/* Hero Section with Special Offer */}
      <div className="relative bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-800 text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-orange-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Flora Wings Preschool</h1>
            <p className="text-2xl md:text-3xl text-amber-200">Where Young Minds Bloom & Dreams Take Flight</p>
          </div>

          {/* Special Offer Cards - NO ROYALTY & NO FRANCHISE FEE */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* No Royalty Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-amber-300/50 shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="text-6xl mb-4 text-amber-300">💰</div>
              <h2 className="text-4xl md:text-5xl font-black mb-2 text-amber-300">NO ROYALTY</h2>
              <p className="text-xl text-white/90">Zero royalty • 0% revenue share</p>
              <div className="mt-4 h-1 w-20 bg-amber-300 rounded-full"></div>
              <p className="mt-4 text-lg text-white/80">Keep 100% of your earnings forever</p>
            </div>

            {/* No Franchise Fee Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border-2 border-emerald-300/50 shadow-2xl transform hover:scale-105 transition-all duration-500">
              <div className="text-6xl mb-4 text-emerald-300">🚫</div>
              <h2 className="text-4xl md:text-5xl font-black mb-2 text-emerald-300">NO FRANCHISE FEE</h2>
              <p className="text-xl text-white/90">Zero franchise fee • No joining cost</p>
              <div className="mt-4 h-1 w-20 bg-emerald-300 rounded-full"></div>
              <p className="mt-4 text-lg text-white/80">Start your preschool with minimal investment</p>
            </div>
          </div>

         
        </div>
      </div>

      {/* Messages Section */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">Message from Our Leadership</h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto">
            Hear from the people dedicated to making Flora Wings Preschool a nurturing home for your child
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Founder Message */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-amber-200 hover:shadow-3xl transition-all duration-500 group">
            <div className="h-2 bg-gradient-to-r from-amber-400 via-orange-400 to-[#F15F25]"></div>
            <div className="p-8 md:p-10">
              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-sm font-bold text-[#F15F25] bg-orange-50 px-4 py-2 rounded-full border border-orange-200">
                  👑 FOUNDER & FRANCHISOR
                </span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold border border-green-200">
                  🚫 NO ROYALTY
                </span>
              </div>
              
              <h3 className="text-3xl font-bold text-stone-800 mb-4 group-hover:text-[#F15F25] transition-colors">
                From the Founder's Desk
              </h3>
              
              <div className="space-y-4 text-stone-600 mb-8">
                <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-[#F15F25] first-letter:mr-2 first-letter:float-left">
                  At Flora Wings Preschool, our journey began with a simple yet powerful vision—to create a 
                  nurturing environment where every child feels valued, inspired, and confident to explore 
                  their potential. We believe that the early years of education lay the foundation for 
                  lifelong learning, character building, and emotional growth.
                </p>
                <p>
                  As the Founder and Franchisor, my mission is not only to provide quality preschool education 
                  but also to empower aspiring entrepreneurs, especially women, who wish to build a meaningful 
                  and successful career in the education sector. Through our franchise program, we offer 
                  complete support including curriculum, teacher training, operational guidance, branding, 
                  and continuous mentorship.
                </p>
                <p className="font-bold italic text-emerald-700 text-lg border-l-4 border-[#F15F25] pl-4">
                  "Together, we are not just building preschools—we are shaping futures, nurturing dreams, 
                  and creating a brighter tomorrow for every child."
                </p>
              </div>
              
              <div className="border-t border-amber-200 pt-6 flex items-start gap-3">
                <svg className="w-6 h-6 text-[#F15F25] mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-semibold">Shiv Vihar Metro Station, Jawahar Nagar, Loni, Ghaziabad</p>
              </div>
            </div>
          </div>
          
          {/* Director Message */}
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-200 hover:shadow-3xl transition-all duration-500 group">
            <div className="h-2 bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-400"></div>
            <div className="p-8 md:p-10">
              {/* Badges */}
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="text-sm font-bold text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-200">
                  🎓 DIRECTOR
                </span>
                <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold border border-green-200">
                  💰 NO FRANCHISE FEE
                </span>
              </div>
              
              <h3 className="text-3xl font-bold text-stone-800 mb-4 group-hover:text-indigo-600 transition-colors">
                From the Director's Desk
              </h3>
              
              <div className="space-y-4 text-stone-600 mb-8">
                <p className="font-medium text-lg">Dear Parents,</p>
                <p>
                  It gives me immense pleasure to welcome you to Flora Wings Preschool, a place where young 
                  minds begin their beautiful journey of learning and discovery. Early childhood is the most 
                  important phase of a child's life, as it lays the foundation for their future growth, 
                  personality, and confidence.
                </p>
                <p>
                  At Flora Wings Preschool, we believe that every child is unique and full of potential. Our 
                  aim is to provide a safe, loving, and stimulating environment where children feel happy, 
                  secure, and encouraged to explore. We focus on nurturing their intellectual, emotional, 
                  social, and creative development through play-based and activity-based learning.
                </p>
                <p>
                  Our dedicated team of teachers works with passion and care to ensure that each child 
                  develops confidence, independence, and a love for learning. We strongly believe in building 
                  a partnership with parents, as together we can provide the best support for our children's 
                  growth and success.
                </p>
                <p className="font-bold italic text-indigo-700 text-lg border-l-4 border-indigo-400 pl-4">
                  "Thank you for trusting Flora Wings Preschool. We look forward to being a part of your 
                  child's bright future."
                </p>
              </div>
              
              <div className="border-t border-blue-200 pt-6 flex items-start gap-3">
                <svg className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="font-semibold">Shiv Vihar, Loni, Ghaziabad</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-amber-100 to-blue-100 rounded-3xl p-10 border border-amber-200">
          <h3 className="text-3xl font-bold text-stone-800 mb-4">Start Your Journey With Flora Wings Today!</h3>
          <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
            Join our family with <span className="font-bold text-emerald-600">NO ROYALTY</span> and{' '}
            <span className="font-bold text-indigo-600">NO FRANCHISE FEE</span> - Limited time offer
          </p>
          
      
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