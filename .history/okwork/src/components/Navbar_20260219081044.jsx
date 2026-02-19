import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', icon: '🏠' },
    { name: 'About', icon: '👥' },
    { name: 'Programs', icon: '📚' },
    { name: 'Teachers', icon: '👩‍🏫' },
    { name: 'Schedule', icon: '📅' },
    { name: 'Contact', icon: '📞' },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-[#F15F25] rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
              <span className="text-white text-2xl font-bold">K</span>
            </div>
            <div>
              <span className="text-xl md:text-2xl font-bold text-gray-800">Kidza</span>
              <span className="hidden sm:inline-block text-xs bg-[#F15F25] text-white px-2 py-0.5 rounded-full ml-2">School</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href="#"
                className="px-3 lg:px-4 py-2 text-gray-700 hover:text-[#F15F25] font-medium rounded-lg hover:bg-gray-50 transition-all duration-300 flex items-center gap-1"
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="hidden md:flex items-center gap-3">
            <button className="text-gray-700 hover:text-[#F15F25] font-medium px-4 py-2">
              Login
            </button>
            <button className="bg-[#F15F25] text-white px-5 py-2 rounded-xl font-semibold hover:bg-[#d44e1e] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Sign Up
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center gap-3">
            <button className="bg-[#F15F25] text-white px-4 py-2 rounded-xl text-sm font-semibold">
              Get Started
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <div className={`md:hidden bg-white border-t border-gray-200 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className="block py-2.5 px-3 text-gray-700 hover:text-[#F15F25] hover:bg-gray-50 rounded-lg transition-colors duration-300"
            >
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </a>
          ))}
          <div className="border-t border-gray-200 my-2"></div>
          <a href="#" className="block py-2.5 px-3 text-gray-700 hover:text-[#F15F25] hover:bg-gray-50 rounded-lg">
            <span className="mr-2">🔑</span>Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;