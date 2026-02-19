import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="min-h-screen bg-[#F7FAE2] overflow-hidden exo py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-10">
        
        {/* Flex container: column on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          
          {/* LEFT SECTION - Pinterest style 3 images */}
          <div className="w-full md:w-1/2">
            <div className="grid grid-cols-2 gap-4 lg:p-4">
              {/* Left column - 2 images stacked */}
              <div className="space-y-4">
                {/* Top left image */}
                <div className="relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <img
                    src="/images/choose1.png" // Replace with your image path
                    alt="Pinterest style 1"
                    className="w-full h-64 object-cover"
                  />
                </div>
                
                {/* Bottom left image */}
                <div className="relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <img
                    src="/images/choose2.jpg" // Replace with your image path
                    alt="Pinterest style 2"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
              
              {/* Right column - 1 tall image */}
              <div className="relative overflow-hidden rounded-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src="/images/choose3.png" // Replace with your image path
                  alt="Pinterest style 3"
                  className="w-full h-[28rem] object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* RIGHT SECTION - Content (same as before) */}
          <div className="w-full md:w-1/2 space-y-3 exo">
            {/* Small heading */}
            <h2 className="text-white bg-[#6754E9] rounded-4xl w-fit  text-lg  px-4  py-1 font-semibold ">
              Why Choose Us
            </h2>
            
            {/* Main heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 leading-tight">
              Where Every Little Step <br />
              Leads to Big Discoveries
            </h1>
            
            {/* Description */}
            <p className="text-gray-600 text-base md:text-lg max-w-2xl ">
             Our school provides quality education, experienced teachers, modern facilities, and a safe environment. We focus on academic excellence, character development, creativity, discipline, and overall growth to prepare students confidently for future success.
            </p>
            
            {/* Early Learning section */}
            <div className="space-y-4 pt-4">
             
              
              {/* Progress bars */}
              <div className="space-y-4 pt-">
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
                    <span className="text-gray-800 font-semibold">80%</span>
                  </div>
                  <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#6754E9] rounded-full"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
              </div>
               <button className="group relative px-8 py-4 bg-[#F15F25] text- text-white font-semibold rounded-xl float hover:shadow-xl hover:transform hover:-translate-y-1 transition-all duration-300 ease-in-out mt-10">
                <span className="relative z-10">Start Your Learing</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;