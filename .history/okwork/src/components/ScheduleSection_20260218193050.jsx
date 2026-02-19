import React from "react";

const ScheduleSection = () => {
  return (
    <div className="min-h-screen bg-[#F7FAE2] overflow-hidden exo py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 max-w-5xl">
        
        {/* Early Drop Off - Top Box */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md mb-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-0">
              Early Drop Off
            </h3>
            <p className="text-[#F15F25] text-xl md:text-2xl font-semibold">
              8.00am - 10.00am
            </p>
          </div>
        </div>

        {/* Session Times Section */}
        <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-md">
          
          {/* Session Times Header */}
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-[#F15F25] text-lg md:text-xl font-semibold uppercase tracking-wider">
              Session Times
            </h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
              Our session Times
            </h3>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mt-4">
              Dolor sit amet, consectetur adipiscing elit. Nibh ullamcorper felis arcu elementum.
            </p>
          </div>

          {/* Schedule Table - Left Text, Right Time */}
          <div className="space-y-4 mt-8">
            
            {/* Morning */}
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-xl md:text-2xl font-bold text-gray-800">Morning</span>
              <span className="text-[#F15F25] text-lg md:text-xl font-semibold">10.30am - 12.00am</span>
            </div>
            
            {/* Lunch */}
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-xl md:text-2xl font-bold text-gray-800">Lunch</span>
              <span className="text-[#F15F25] text-lg md:text-xl font-semibold">12pm - 1.00pm</span>
            </div>
            
            {/* Afternoon */}
            <div className="flex justify-between items-center py-3">
              <span className="text-xl md:text-2xl font-bold text-gray-800">Afternoon</span>
              <span className="text-[#F15F25] text-lg md:text-xl font-semibold">2.00am - 4.00am</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;