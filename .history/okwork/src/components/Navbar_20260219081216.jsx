import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-bold text-[#F15F25]">Kidza</span>
            <span className="hidden sm:inline-block text-xs bg-[#F15F25] text-white px-2 py-1 rounded-full">
              School
            </span>
          </a>

          {/* Desktop Menu - Home, About, Classes */}
          <div className="hidden md:flex items-center space-x-8">
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

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <button className="bg-[#F15F25] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#d44e1e] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Contact Us
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
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-4 bg-white border-t border-gray-200 space-y-2">
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
          
          {/* Mobile Contact Button */}
          <div className="pt-2">
            <button className="w-full bg-[#F15F25] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#d44e1e] transition-colors duration-300 shadow-md">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;