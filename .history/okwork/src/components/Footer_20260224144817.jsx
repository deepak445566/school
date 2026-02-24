import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleenquiry=()=>{
    navigate("/france")
  }

  // Social media links handler
  const handleSocialClick = (url) => {
    window.open(url, '_blank');
  };

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
            <h2 className="text-lg md:text-xl font-bold text-black flex items-center gap-2">
              <span className="text-[#F15F25]"><img src='/images/logo1.png' className='h-20 w-35'/></span> FLORAWINGS PRE-PRIMARY SCHOOL 
            </h2>
            <p className="text-black text-sm md:text-base leading-relaxed">
              FLORAWINGS PRE-PRIMARY SCHOOL is an early childhood education school where all children, 
              typically aged 4 to 6, begin their learning journey.
            </p>
            
            {/* Social Media Icons - Added here */}
            <div className="flex items-center gap-3 pt-2">
              {/* Instagram */}
              <button 
                onClick={() => handleSocialClick('https://instagram.com/florawingspreschool')}
                className="group relative w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
                {/* Tooltip */}
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Instagram
                </span>
              </button>

              {/* YouTube */}
              <button 
                onClick={() => handleSocialClick('https://youtube.com/@florawingspreschool')}
                className="group relative w-10 h-10 bg-gradient-to-br from-red-600 to-red-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Subscribe to our YouTube channel"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                {/* Tooltip */}
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  YouTube
                </span>
              </button>

              {/* Optional: Add Facebook if needed */}
              {/* <button 
                onClick={() => handleSocialClick('https://facebook.com/florawingspreschool')}
                className="group relative w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-.556-.012-1.101-.013-1.574.024-1.613.045-2.466.567-2.466 2.433v1.484h3.991l-.529 3.667h-3.462v7.98z"/>
                </svg>
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                  Facebook
                </span>
              </button> */}
            </div>
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
              <Link to="fees" className=" hover:text-[#F15F25] transition-colors text-sm md:text-base flex items-center gap-2">
                <span className="text-[#F15F25] text-xs">▶</span>Fee Policy
              </Link>
              <Link to="founder" className=" hover:text-[#F15F25] transition-colors text-sm md:text-base flex items-center gap-2">
                <span className="text-[#F15F25] text-xs">▶</span> Founder Message
              </Link>
              <Link to="director" className=" hover:text-[#F15F25] transition-colors text-sm md:text-base flex items-center gap-2">
                <span className="text-[#F15F25] text-xs">▶</span> Director Message
              </Link>
            </div>
            <button onClick={handleenquiry} className="bg-[#F15F25] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d44e1e] transition-colors">
              Get Franchise
            </button>
          </div>
          
          {/* Column 4 - Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-black border-b-2 border-[#F15F25] pb-2 inline-block">
              Contact
            </h3>
            
            {/* Email */}
            <div className="space-y-2 pt-2">
              <h4 className="text-[#F15F25] font-medium text-base md:text-lg flex items-center gap-2">
                <span>📧</span> Contact Us
              </h4>
              <a className="text-black hover:text-[#F15F25] transition-colors text-sm md:text-base break-all pl-7">
                9891965767 / 9999995603
              </a>
            </div>
            
            {/* Location */}
            <div className="space-y-2">
              <h4 className="text-[#F15F25] font-medium text-base md:text-lg flex items-center gap-2">
                <span>📍</span> Location
              </h4>
              <p className="text-black text-sm md:text-base leading-relaxed pl-7">
                I-642, street no -6 East Jawahar. Nagar Loni Shiv Vihar, Loni, Ghaziabad UP
              </p>
            </div>

            {/* Social Media Links Text */}
            <div className="pt-4">
              <p className="text-black text-sm font-medium mb-2">Follow Us:</p>
              <div className="flex items-center gap-2">
                <a 
                  href="https://instagram.com/florawingspreschool" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#F15F25] hover:underline text-sm"
                >
                  @florawingspreschool
                </a>
                <span className="text-black">|</span>
                <a 
                  href="https://www.youtube.com/@florawings4915" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#F15F25] hover:underline text-sm"
                >
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 md:mt-12 pt-6 md:pt-8 text-center text-black text-xs md:text-sm font-semibold">
          <p>&copy; {new Date().getFullYear()} FLORAWINGS PRE-PRIMARY SCHOOL. All rights reserved.</p>
        </div>
      </div>
      <div className='absolute bottom-0 left-0 w-full'>
        <img src='/images/bg-bottom.png' className='w-full' alt="Footer background"/>
      </div>
    </footer>
  );
};

export default Footer;