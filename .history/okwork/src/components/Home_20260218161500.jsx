import React from "react";

const Home = () => {
  // Image URL - using a high-quality free image
  const imageUrl =
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80";

  return (
    <div className="min-h-screen bg-[#F7FAE2]overflow-hidden">
      {/* Main container - centered with responsive padding */}
      <div className="container mx-auto px-6 py-12 md:px-12 lg:px-10 min-h-screen flex items-center">
        
        {/* Flex container: column on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 w-full">
          
          {/* LEFT SECTION: Heading, Paragraph, Button */}
          <div className="flex-1 text-center md:text-left space-y-6 md:space-y-8">
            {/* Heading with gradient effect */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
             A Happy Place to 
              <br />
              <span className="text-gray-800">Grow, Play And </span>
              <br />
              <span className="text-gray-800">Learn</span>
            </h1>

            {/* Paragraph description */}
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto md:mx-0">
              Create stunning, responsive user interfaces faster than ever.
              Combine the power of React with the flexibility of Tailwind CSS
              for your next project.
            </p>

            {/* Button with hover effects */}
            <div className="flex justify-center md:justify-start">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:shadow-purple-200 transform hover:-translate-y-1 transition-all duration-300 ease-in-out">
                <span className="relative z-10">Get Started Now</span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>

            {/* Optional: Small trust indicator */}
            <p className="text-sm text-gray-400 pt-4">✨ Join 10,000+ developers</p>
          </div>

          {/* RIGHT SECTION: Only one image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              {/* Decorative background blur element */}
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              
              {/* Main image */}
              <img
                src={imageUrl}
                alt="Team collaboration in modern workspace"
                className="relative z-10 w-full h-auto rounded-2xl shadow-2xl object-cover border-4 border-white/30 backdrop-blur-sm"
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