import React from "react";

const ScheduleSection = () => {
  return (
    <div className="min-h-screen bg-[#F7FAE2] overflow-hidden exo py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-[#F15F25] text-lg md:text-xl font-semibold uppercase tracking-wider">
            Session Times
          </h2>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mt-2">
            Our session Times
          </h1>
        </div>

        {/* Description */}
        <div className="text-center mb-10 md:mb-12">
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Dolor sit amet, consectetur adipiscing elit. Nibh ullamcorper felis arcu elementum.
          </p>
        </div>

        {/* Schedule Cards */}
        <div className="max-w-3xl mx-auto space-y-4">
          
          {/* Early Drop Off */}
          <div className="bg-white rounded-2xl p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Early Drop Off
              </h3>
              <p className="text-[#F15F25] text-lg md:text-xl font-semibold">
                8.00am - 10.00am
              </p>
            </div>
          </div>

          {/* Morning */}
          <div className="bg-white rounded-2xl p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Morning
              </h3>
              <p className="text-[#F15F25] text-lg md:text-xl font-semibold">
                10.30am - 12.00am
              </p>
            </div>
          </div>

          {/* Lunch */}
          <div className="bg-white rounded-2xl p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Lunch
              </h3>
              <p className="text-[#F15F25] text-lg md:text-xl font-semibold">
                12pm - 1.00pm
              </p>
            </div>
          </div>

          {/* Afternoon */}
          <div className="bg-white rounded-2xl p-5 md:p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center">
              <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                Afternoon
              </h3>
              <p className="text-[#F15F25] text-lg md:text-xl font-semibold">
                2.00am - 4.00am
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;