import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#F7FAE2]  sticky top-0 z-50 exo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
           <img src="/images/logo1.png" className='h-17 w-30 lg:h-20 lg:w-40'/>
          </a>

          {/* Desktop Menu - Home, About, Classes */}
          <div className="hidden md:flex items-center space-x-8 text-lg">
            <a 
              href="#" 
              className="text-gray-700 hover:text-[#F15F25] font-medium transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F15F25] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-[#F15F25] font-medium transition-colors duration-300 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F15F25] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#" 
              className="text-gray-700 hover:text-[#F15F25] font-medium transition-colors duration-300 relative group"
            >
              Classes
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F15F25] group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Desktop Buttons - Contact Us & Get Franchise */}
          <div className="hidden md:flex items-center gap-3">
            <button className="bg-[#F15F25] text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-[#d44e1e] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Contact Us
            </button>
            <button className="border-2 border-[#F15F25] text-[#F15F25] px-5 py-2.5 rounded-xl font-semibold hover:bg-[#F15F25] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Get Franchise
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-[#F15F25] hover:bg-gray-100 focus:outline-none transition-colors duration-300"
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-4 bg-[#F7FAE2] border-t border-gray-200 space-y-2">
          <a 
            href="#" 
            className="block py-2.5 px-3 text-gray-700 hover:text-[#F15F25] font-medium transition-colors duration-300 hover:bg-gray-50 rounded-lg"
          >
            Home
          </a>
          <a 
            href="#" 
            className="block py-2.5 px-3 text-gray-700 hover:text-[#F15F25] font-medium transition-colors duration-300 hover:bg-gray-50 rounded-lg"
          >
            About
          </a>
          <a 
            href="#" 
            className="block py-2.5 px-3 text-gray-700 hover:text-[#F15F25] font-medium transition-colors duration-300 hover:bg-gray-50 rounded-lg"
          >
            Classes
          </a>
          
          {/* Mobile Buttons */}
          <div className="pt-2 space-y-2">
            <button className="w-full bg-[#F15F25] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#d44e1e] transition-colors duration-300 shadow-md">
              Contact Us
            </button>
            <button className="w-full border-2 border-[#F15F25] text-[#F15F25] px-5 py-3 rounded-xl font-semibold hover:bg-[#F15F25] hover:text-white transition-colors duration-300 shadow-md">
              Get Franchise
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;