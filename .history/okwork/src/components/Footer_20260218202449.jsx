import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#F4F8E1] exo text-white py-12 md:py-16 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#F15F25]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#F15F25]/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Column 1 - Kidza Info */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-black flex items-center gap-2">
              <span className="text-[#F15F25]">◆</span> Kidza
            </h2>
            <p className="text-black text-sm md:text-base leading-relaxed">
              Kidza is an early childhood education school where all children, 
              typically aged 4 to 6, begin their learning journey.
            </p>
           
          </div>
          
          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-black border-b-2 border-[#F15F25] pb-2 inline-block">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-3 pt-2 text-black">
              <a href="#" className=" hover:text-[#F15F25] transition-colors text-sm md:text-base flex items-center gap-2">
                <span className="text-[#F15F25] text-xs">▶</span> Courses
              </a>
              <a href="#" className=" hover:text-[#F15F25] transition-colors text-sm md:text-base flex items-center gap-2">
                <span className="text-[#F15F25] text-xs">▶</span> Program
              </a>
              <a href="#" className=" hover:text-[#F15F25] transition-colors text-sm md:text-base flex items-center gap-2">
                <span className="text-[#F15F25] text-xs">▶</span> About Us
              </a>
              <a href="#" className=" hover:text-[#F15F25] transition-colors text-sm md:text-base flex items-center gap-2">
                <span className="text-[#F15F25] text-xs">▶</span> Contact Us
              </a>
            </div>
          </div>
          
        
          
          {/* Column 4 - Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-black border-b-2 border-[#F15F25] pb-2 inline-block">
              Contact
            </h3>
            
            {/* Email */}
            <div className="space-y-2 pt-2">
              <h4 className="text-[#F15F25] font-medium text-base md:text-lg flex items-center gap-2">
                <span>📧</span> Email us
              </h4>
              <a href="mailto:support@kidza.com" className="text-black hover:text-[#F15F25] transition-colors text-sm md:text-base break-all pl-7">
                support@kidza.com
              </a>
            </div>
            
            {/* Location */}
            <div className="space-y-2">
              <h4 className="text-[#F15F25] font-medium text-base md:text-lg flex items-center gap-2">
                <span>📍</span> Location
              </h4>
              <p className="text-black text-sm md:text-base leading-relaxed pl-7">
                Office: 2220 Plymouth R02 Road, Hopkins, Minnesota(MN), UK
              </p>
            </div>
          </div>
        </div>
        
     
        
        {/* Bottom Bar */}
        <p>&copy; {new Date().getFullYear()} Kidza. All rights reserved.</p>
        <div className="border-t border-gray-700 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-black text-xs md:text-sm font-semibold">
          
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-full'>
        <img src='/images/bg-bottom.png' className='w-full '/>
      </div>
    </footer>
  );
};

export default Footer;