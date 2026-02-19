import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-[#F7FAE2] overflow-hidden exo py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-10">
        
        {/* Flex container: column on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT SECTION - Image only */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-xl">
              <img
                src="/images/why-choose-image.png" // Replace with your image path
                alt="Why choose us"
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>
          </div>
          
          {/* RIGHT SECTION - Content */}
          <div className="w-full md:w-1/2 space-y-6">
            {/* Small heading */}
            <h2 className="text-[#F15F25] text-lg md:text-xl font-semibold uppercase tracking-wider">
              Why Choose Us
            </h2>
            
            {/* Main heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Where Every Little Step <br />
              Leads to Big Discoveries
            </h1>
            
            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg max-w-2xl">
              Dolor sit amet, consectetur adipiscing elit. Nibh ullamcorper felis arcu elementum. 
              Viverra lectus nullam sagittis nunc imperdiet.
            </p>
            
            {/* Early Learning section */}
            <div className="space-y-4 pt-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Early Learning
              </h3>
              
              <p className="text-gray-600">
                Kindergarten is an early childhood educational environment where 
                most young children engage in foundational.
              </p>
              
              {/* Progress bars */}
              <div className="space-y-6 pt-4">
                {/* Creativity */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 font-semibold">Creativity</span>
                    <span className="text-gray-800 font-semibold">90%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#F15F25] rounded-full"
                      style={{ width: '90%' }}
                    ></div>
                  </div>
                </div>
                
                {/* Experiences */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 font-semibold">Experiences</span>
                    <span className="text-gray-800 font-semibold">70%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#F15F25] rounded-full"
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