import React from "react";

const MeetOurTeachers = () => {
  const teachers = [
    {
      name: "John Smith",
      image: "/images/team1.png",
      subject: "Lead Teacher"
    },
    {
      name: "David William",
      image: "/images/team1.png",
      subject: "Math Teacher"
    },
    {
      name: "Sarah William",
      image: "/images/team1.png",
      subject: "Art Teacher"
    },
    {
      name: "Emily Johnson",
      image: "/images/team1.png",
      subject: "Music Teacher"
    }
  ];

  return (
    <>
    <div className="min-h-screen bg-white overflow-hidden exo py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12">
        
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-[#F15F25] text-md md:text-lg lg:text-xl font-semibold uppercase tracking-wider mb-1 sm:mb-2">
            Our Team
          </h2>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight px-2">
            Meet With Our Teacher
          </h1>
        </div>

        {/* Teachers Grid - Responsive grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {teachers.map((teacher, index) => (
            <div key={index} className="flex flex-col">
              {/* Teacher Image Container */}
              <div className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden  transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-full h-full object-cover  duration-500"
                  />
                  {/* Light overlay on hover */}
               
                </div>
              </div>
              
              {/* Teacher Info - Outside the card */}
              <div className="text-center mt-2 sm:mt-3 md:mt-4 px-1">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-0.5 sm:mb-1">
                  {teacher.name}
                </h3>
                <p className="text-[#F15F25] text-xs sm:text-sm md:text-base font-medium">
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