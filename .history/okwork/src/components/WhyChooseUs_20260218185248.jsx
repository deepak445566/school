import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-[#F7FAE2] overflow-hidden exo py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        
        {/* Flex container: column on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          
          {/* LEFT SECTION - Pinterest style 3 images */}
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4">
              
              {/* Left column - 2 images stacked */}
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                {/* Top left image */}
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src="/images/choose1.png"
                    alt="Pinterest style 1"
                    className="w-full h-40 xs:h-48 sm:h-56 md:h-64 lg:h-72 object-cover"
                  />
                </div>
                
                {/* Bottom left image */}
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                  <img
                    src="/images/choose2.jpg"
                    alt="Pinterest style 2"
                    className="w-full h-32 xs:h-36 sm:h-40 md:h-48 lg:h-56 object-cover"
                  />
                </div>
              </div>
              
              {/* Right column - 1 tall image */}
              <div className="relative overflow-hidden rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                <img
                  src="/images/choose3.png"
                  alt="Pinterest style 3"
                  className="w-full h-56 xs:h-64 sm:h-80 md:h-[28rem] lg:h-[32rem] xl:h-[36rem] object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* RIGHT SECTION - Content */}
          <div className="w-full md:w-1/2 space-y-4 sm:space-y-5 md:space-y-6">
            {/* Small heading */}
            <h2 className="text-[#F15F25] text-base sm:text-lg md:text-xl font-semibold uppercase tracking-wider">
              Why Choose Us
            </h2>
            
            {/* Main heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
              <span className="block">Where Every Little Step</span>
              <span className="block">Leads to Big Discoveries</span>
            </h1>
            
            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl">
              Dolor sit amet, consectetur adipiscing elit. Nibh ullamcorper felis arcu elementum. 
              Viverra lectus nullam sagittis nunc imperdiet.
            </p>
            
            {/* Early Learning section */}
            <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-3 md:pt-4">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                Early Learning
              </h3>
              
              <p className="text-gray-600 text-sm sm:text-base">
                Kindergarten is an early childhood educational environment where 
                most young children engage in foundational.
              </p>
              
              {/* Progress bars */}
              <div className="space-y-4 sm:space-y-5 md:space-y-6 pt-2 sm:pt-3 md:pt-4">
                {/* Creativity */}
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 text-sm sm:text-base md:text-lg font-semibold">Creativity</span>
                    <span className="text-gray-800 text-sm sm:text-base md:text-lg font-semibold">90%</span>
                  </div>
                  <div className="w-full h-2 sm:h-2.5 md:h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#F15F25] rounded-full transition-all duration-500"
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>
                
                {/* Experiences */}
                <div className="space-y-1 sm:space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 text-sm sm:text-base md:text-lg font-semibold">Experiences</span>
                    <span className="text-gray-800 text-sm sm:text-base md:text-lg font-semibold">70%</span>
                  </div>
                  <div className="w-full h-2 sm:h-2.5 md:h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#F15F25] rounded-full transition-all duration-500"
                      style={{ width: '70%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;