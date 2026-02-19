import React from "react";

const MeetOurTeachers = () => {
  const teachers = [
    {
      name: "John Smith",
      image: "/images/team1.png", // Replace with your image path
      subject: "Lead Teacher"
    },
    {
      name: "David William",
      image: "/images/team1.png", // Replace with your image path
      subject: "Math Teacher"
    },
    {
      name: "Sarah William",
      image: "/images/team1.png", // Replace with your image path
      subject: "Art Teacher"
    },
    {
      name: "Emily Johnson",
      image: "/images/team1.png", // Replace with your image path
      subject: "Music Teacher"
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-[#F7FAE2] overflow-hidden exo py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16">
          <h2 className="text-[#F15F25] text-base sm:text-lg md:text-xl font-semibold uppercase tracking-wider mb-2">
            Our Team
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Meet With Our Teacher
          </h1>
        </div>

        {/* Teachers Grid - 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teachers.map((teacher, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Teacher Image */}
              <div className="relative overflow-hidden h-64 sm:h-72 md:h-80">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Teacher Info */}
              
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeachers;