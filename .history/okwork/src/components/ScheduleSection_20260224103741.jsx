import React from "react";

const ScheduleSection = () => {
  // Sample image data for Pinterest-style gallery
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=600&fit=crop",
      alt: "Mountain landscape",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1682687220063-4742bd7fd98d?w=400&h=300&fit=crop",
      alt: "Ocean waves",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?w=400&h=450&fit=crop",
      alt: "Forest path",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1682687221038-404cb8830901?w=400&h=700&fit=crop",
      alt: "City skyline",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1682687220923-c58b9a4592ea?w=400&h=350&fit=crop",
      alt: "Desert dunes",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1682687220067-dced0a5faff4?w=400&h=500&fit=crop",
      alt: "Northern lights",
    },
  ];

  return (
    <>
      <div className="  ">
        <img src="/images/footerok.webp" className="w-full" />
      </div>
      <div className="min-h-screen bg-[#FEDB1C] overflow-hidden exo py-12 md:py-16 lg:py-20 relative ">
        
        {/* Background Light Effects */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-[#F15F25]/10 rounded-full blur-3xl"></div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 md:w-96 h-64 md:h-96 bg-[#F15F25]/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
          
          {/* Main Flex Container - Left Text, Right Schedule */}
          <div className="">
            
            
            
            {/* Right Section - Pinterest Style Gallery */}
            <div className="lg:w-2/3">
              {/* Pinterest-style Masonry Grid */}
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
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
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 rounded-xl flex items-end justify-start p-4">
                      <p className="text-white font-medium transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
          
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <img src="/images/hero-line.png" className="w-full" />
        </div>

      </div>
      
      <div className="mt-10">
        <img src="/images/newsletter1.png" alt="Newsletter" className="w-full h-full object-cover" />
      </div>
    </>
  );
};

export default ScheduleSection;