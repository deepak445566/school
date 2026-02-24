import React from "react";

const ScheduleSection = () => {
  // 8 photos for Pinterest-style gallery with different heights
  const galleryImages = [
    {
      id: 1,
      src: "/images/lo4.jpg",
      alt: "Mountain landscape",
    },
    {
      id: 2,
      src: "/images/lo4.jpg",
      alt: "Ocean waves",
    },
    {
      id: 3,
      src: "/images/lo4.jpg",
      alt: "Forest path",
    },
    {
      id: 4,
      src: "/images/lo4.jpg",
      alt: "City skyline",
    },
    {
      id: 5,
      src: "/images/lo4.jpg",
      alt: "Desert dunes",
    },
    {
      id: 6,
      src: "/images/lo4.jpg",
      alt: "Northern lights",
    },
    {
      id: 7,
      src: "/images/lo4.jpg",
      alt: "Waterfall",
    },
    {
      id: 8,
      src: "/images/lo4.jpg",
      alt: "Beach sunset",
    },
  ];

  return (
    <>
      <div>
        <img src="/images/footerok.webp" className="w-full" alt="footer" />
      </div>
      
      <div className="bg-[#FEDB1C] overflow-hidden exo relative" >
        
        {/* Background Light Effects */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-[#F15F25]/10 rounded-full blur-3xl"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-[#F15F25]/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10 h-full py-6">
          
          {/* Pinterest Style Masonry Gallery */}
          <div className="h-full overflow-y-auto scrollbar-hide">
            <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="break-inside-avoid mb-4 group cursor-pointer relative overflow-hidden rounded-xl"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-xl"></div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <img src="/images/hero-line.png" className="w-full" alt="hero line" />
        </div>

      </div>
      
      <div className="mt-10">
        <img src="/images/newsletter1.png" alt="Newsletter" className="w-full h-full object-cover" />
      </div>

      {/* Scrollbar hide styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </>
  );
};

export default ScheduleSection;