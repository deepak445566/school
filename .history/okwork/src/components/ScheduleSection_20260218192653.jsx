import React from "react";

const ScheduleSection = () => {
  const sessions = [
    {
      title: "Early Drop Off",
      time: "8.00am - 10.00am",
      isMain: true
    },
    {
      title: "Morning",
      time: "10.30am - 12.00pm"
    },
    {
      title: "Lunch",
      time: "12pm - 1.00pm"
    },
    {
      title: "Afternoon",
      time: "2.00pm - 4.00pm"
    }
  ];

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
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mt-4">
            Dolor sit amet, consectetur adipiscing elit. Nibh ullamcorper felis arcu elementum.
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {sessions.map((session, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all ${
                session.isMain ? 'md:col-span-2 bg-gradient-to-r from-[#F15F25] to-[#F15F25]/80 text-white' : ''
              }`}
            >
              <h3 className={`text-xl md:text-2xl font-bold mb-2 ${
                session.isMain ? 'text-white' : 'text-gray-800'
              }`}>
                {session.title}
              </h3>
              <p className={`text-lg md:text-xl font-semibold ${
                session.isMain ? 'text-white/90' : 'text-[#F15F25]'
              }`}>
                {session.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;