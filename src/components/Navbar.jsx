import React, { useState } from 'react';
import img1 from "/src/assets/logo1.jpg";
import img2 from "/src/assets/logo4.jpg";
import img3 from "/src/assets/rwtlogo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Header Section */}
      <div className="relative bg-gray-100 flex flex-col items-center justify-center">
        {/* Logo Section */}
        <div className="absolute top-0 w-full flex items-center justify-between p-4 md:justify-between">
          {/* Left Logo */}
          <div className="hidden md:flex justify-start">
            <img 
              src={img1} 
              alt="Logo 1" 
              className="h-12 w-12 md:h-24 md:w-24 object-contain rounded-full" 
            />
          </div>

          {/* Center Logo for Mobile */}
          <div className="flex justify-center w-full md:hidden">
            <img 
              src={img3} 
              alt="Business Platform" 
              className="h-32 w-32 object-contain rounded-md" 
            />
          </div>

          {/* Center Logo for Medium and Large Screens */}
          <div className="hidden md:flex justify-center">
            <a href="https://www.nexuxrise.com/">
              <img 
                src={img3} 
                alt="Business Platform" 
                className="h-32 w-32 md:h-60 md:w-60 object-contain rounded-md" 
              />
            </a>
          </div>

          {/* Hamburger Menu Icon */}
          <button 
            onClick={toggleMenu} 
            className="absolute right-8 z-10 focus:outline-none md:hidden" // Added top margin
          >
            <div className="w-8 h-[3px] bg-gray-800 mb-1 transition duration-300 ease-in-out transform hover:scale-110"></div>
            <div className="w-8 h-[3px] bg-gray-800 mb-1 transition duration-300 ease-in-out transform hover:scale-110"></div>
            <div className="w-8 h-[3px] bg-gray-800 transition duration-300 ease-in-out transform hover:scale-110"></div>
          </button>

          {/* Right Logo */}
          <div className="hidden md:flex justify-end">
            <img 
              src={img2} 
              alt="Logo 2" 
              className="h-12 w-12 md:h-24 md:w-24 object-contain rounded-full" 
            />
          </div>
        </div>

        {/* Overlay Menu */}
        {menuOpen && (
          <div className="absolute top-10 right-0 w-64 h-auto bg-gradient-to-r from-white to-gray-100 opacity-95 z-20 flex flex-col items-center justify-start p-6 rounded-lg shadow-lg transition-transform duration-300 ease-in-out">
            <button 
              onClick={toggleMenu} 
              className="absolute top-4 right-4 text-gray-700 text-2xl"
            >
              &times; {/* Close Icon */}
            </button>
            <nav className="flex flex-col items-center space-y-3">
              <a 
                href="#home" 
                className="text-gray-700 text-lg font-bold transition duration-300 hover:text-yellow-500 hover:scale-105 px-4 py-2 rounded-lg"
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-gray-700 text-lg font-bold transition duration-300 hover:text-yellow-500 hover:scale-105 px-4 py-2 rounded-lg"
              >
                About Us
              </a>
              <a 
                href="#careers" 
                className="text-gray-700 text-lg font-bold transition duration-300 hover:text-yellow-500 hover:scale-105 px-4 py-2 rounded-lg"
              >
                Careers
              </a>
              <a 
                href="#services" 
                className="text-gray-700 text-lg font-bold transition duration-300 hover:text-yellow-500 hover:scale-105 px-4 py-2 rounded-lg"
              >
                Services
              </a>
              <a 
                href="#contacts" 
                className="text-gray-700 text-lg font-bold transition duration-300 hover:text-yellow-500 hover:scale-105 px-4 py-2 rounded-lg"
              >
                Contacts
              </a>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
