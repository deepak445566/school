import React from "react";

const Home = () => {
  // Image URL - using a high-quality free image
  const imageUrl =
    "/images/hero1.png";

  return (
    <div className="min-h-screen bg-[#F7FAE2] overflow-hidden exo">
      {/* Main container - centered with responsive padding */}
      <div className="container mx-auto px-6 py-12 md:px-12 lg:px-10 min-h-screen flex items-center">
        
        {/* Flex container: column on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-5 w-full">
          
          {/* LEFT SECTION: Heading, Paragraph, Button */}
          <div className="flex-1 w-[40%] text-center md:text-left space-y-6 md:space-y-6">
            {/* Heading with gradient effect */}
            <h1 className="text-4xl text-gray-800 md:text-5xl lg:text-6xl font-bold leading-tight exo">
             A Happy Place to 
              <br />
              <span className="text-gray-800">Grow, Play And </span>
              <br />
              <span className="text-gray-800">Learn</span>
            </h1>

            {/* Paragraph description */}
            <p className="text-lg md:text-lg text-gray-600 max-w-2xl mx-auto md:mx-0">
           Kindergarten is an early childhood educational environment where
most young for your children life.
            </p>

            {/* Button with hover effects */}
            <div className="flex justify-center md:justify-start">
              <button className="group relative px-8 py-4 bg-[#F15F25] text-white font-semibold rounded-xl float hover:shadow-xl hover:transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
                <span className="relative z-10">Get Started Now</span>
            
              </button>
            </div>

            {/* Optional: Small trust indicator */}
           
          </div>

          {/* RIGHT SECTION: Only one image */}
          <div className="flex-1 flex justify-center md:justify-end ">
            <div className="relative w-full max-w-md lg:max-w-xl">
             
              
              {/* Main image */}
              <img
                src={imageUrl}
                alt="Team collaboration in modern workspace"
                className="relative z-10 w-full h-auto rounded-2xl  object-cover "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add custom animation keyframes */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
};

export default Home;