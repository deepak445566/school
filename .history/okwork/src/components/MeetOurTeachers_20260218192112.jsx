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
    <div className="min-h-screen bg-white overflow-hidden exo py-12 md:py-16 lg:py-20">
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
            <div>
            <div 
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Teacher Image */}
              <div className="relative overflow-hidden h-64 sm:h-72 md:h-80">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover  transition-transform duration-500"
                />
                {/* Overlay on hover */}
               </div>
              
              {/* Teacher Info */}
              
            </div>
            <div className="p-4 md:p-6 text-center">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">
                  {teacher.name}
                </h3>
                <p className="text-[#F15F25] text-sm md:text-base font-medium">
                  {teacher.subject}
                </p>
                
              
              </div>
              </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default MeetOurTeachers;