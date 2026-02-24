import React from "react";

const ScheduleSection = () => {
  return (
    <>
     <div className="  ">
          <img src="/images/footerok.webp" className="w-full"/>
        </div>
    <div className="min-h-screen bg-[#FEDB1C] overflow-hidden exo py-12 md:py-16 lg:py-20 relative ">
      
      {/* Background Light Effects */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-[#F15F25]/10 rounded-full blur-3xl"></div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-[#F15F25]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        
        {/* Main Flex Container - Left Text, Right Schedule */}
       




       
      </div>
      <div className=" absolute bottom-0  z-1000">
          <img src="/images/hero-line.png" className="w-full"/>
        </div>

    </div>
    
     <div className=" mt-10">
        <img src="/images/newsletter1.png" alt="Newsletter" className="w-full h-full object-cover" />
      </div>
      </>
  );
};

export default ScheduleSection;