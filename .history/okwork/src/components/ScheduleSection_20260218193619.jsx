import React from "react";

const ScheduleSection = () => {
  return (
    <div className="h-[80vh] bg-[#FFE800] overflow-hidden exo py-12 md:py-16 lg:py-20 relative ">
      
      {/* Background Light Effects */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-[#F15F25]/10 rounded-full blur-3xl"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-[#F15F25]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* Main Flex Container - Left Text, Right Schedule */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* LEFT SIDE - Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-[#F15F25] text-lg md:text-xl font-semibold uppercase tracking-wider mb-3">
              Session Times
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 leading-tight">
              Our session Times
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-lg mx-auto lg:mx-0">
             Our school session begins at 8:00 AM and ends at 2:00 PM. Students are expected to arrive on time. Regular classes, activities, and short breaks are scheduled within this time.
            </p>
          </div>
          
          {/* RIGHT SIDE - Schedule Cards */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 md:p-6 lg:p-8 shadow-xl relative overflow-hidden">
              
              {/* Inner Light Effect */}
              <div className="absolute -left-20 -top-20 w-40 h-40 bg-[#F15F25]/10 rounded-full blur-3xl"></div>
              <div className="absolute -right-20 -bottom-20 w-40 h-40 bg-[#F15F25]/10 rounded-full blur-3xl"></div>
              
              {/* Schedule Items */}
              <div className="space-y-4 relative z-10">
                
                {/* Early Drop Off */}
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-800 font-semibold text-base md:text-lg">Early Drop Off</span>
                  <span className="text-[#F15F25] font-semibold text-base md:text-lg">8.00am – 10.00am</span>
                </div>
                
                {/* Morning */}
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-800 font-semibold text-base md:text-lg">Morning</span>
                  <span className="text-[#F15F25] font-semibold text-base md:text-lg">10.30am – 12.00am</span>
                </div>
                
                {/* Lunch */}
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="text-gray-800 font-semibold text-base md:text-lg">Lunch</span>
                  <span className="text-[#F15F25] font-semibold text-base md:text-lg">12pm – 1.00pm</span>
                </div>
                
                {/* Afternoon */}
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-800 font-semibold text-base md:text-lg">Afternoon</span>
                  <span className="text-[#F15F25] font-semibold text-base md:text-lg">2.00am – 4.00am</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src="/images/"
      </div>
    </div>
  );
};

export default ScheduleSection;