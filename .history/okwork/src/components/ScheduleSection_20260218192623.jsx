import React from "react";

const ScheduleSection = () => {
  return (
    <div className="min-h-screen bg-[#F7FAE2] overflow-hidden exo py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-[#F15F25] text-base sm:text-lg md:text-xl font-semibold uppercase tracking-wider mb-2">
            Schedule
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Session Times
          </h1>
        </div>

        {/* Main Content - 2 Column Layout */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column - Early Drop Off */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                Early Drop Off
              </h3>
              <p className="text-[#F15F25] text-xl md:text-2xl font-semibold">
                8.00am - 10.00am
              </p>
            </div>
          </div>

          {/* Right Column - Session Details */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-lg">
              
              {/* Description */}
              <p className="text-gray-600 text-base md:text-lg mb-8 lg:mb-10">
                Dolor sit amet, consectetur adipiscing elit. Nibh ullamcorper felis arcu elementum.
              </p>

              {/* Session Grid */}
              <div className="space-y-6 md:space-y-8">
                
                {/* Morning Session */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-gray-200">
                  <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
                    Morning
                  </h4>
                  <p className="text-[#F15F25] text-lg md:text-xl font-semibold">
                    10.30am - 12.00pm
                  </p>
                </div>

                {/* Lunch Session */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-gray-200">
                  <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
                    Lunch
                  </h4>
                  <p className="text-[#F15F25] text-lg md:text-xl font-semibold">
                    12pm - 1.00pm
                  </p>
                </div>

                {/* Afternoon Session */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-0">
                    Afternoon
                  </h4>
                  <p className="text-[#F15F25] text-lg md:text-xl font-semibold">
                    2.00pm - 4.00pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;