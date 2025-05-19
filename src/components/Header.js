import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full font-sans bg-white">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2 px-4 md:px-6 flex flex-col md:flex-row justify-between items-center shadow-lg space-y-2 md:space-y-0">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
          <span className="flex items-center justify-center md:justify-start transition-all duration-300 hover:bg-blue-700 rounded-lg px-2 py-1">
            <svg className="w-5 h-5 mr-2 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            <span className="text-gray-100 text-xs md:text-sm">Call 8708822925</span>
          </span>
          <span className="flex items-center justify-center md:justify-start transition-all duration-300 hover:bg-blue-700 rounded-lg px-2 py-1">
            <svg className="w-5 h-5 mr-2 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <a href="mailto:aryanengineers195@gmail.com" className="text-gray-100 hover:text-blue-300 text-xs md:text-sm">kveerse370@gmail.com</a>
          </span>
          <span className="flex items-center justify-center md:justify-start transition-all duration-300 hover:bg-blue-700 rounded-lg px-2 py-1">
            <svg className="w-5 h-5 mr-2 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span className="text-gray-100 text-xs md:text-sm">Gali No.3 Surat Nagar Bahadurgarh-124507, Distt. Jhajjar</span>
          </span>
        </div>
        {/* <div className="flex space-x-3">
          <a href="#" className="hover:text-blue-300 transition-colors duration-300 transform hover:scale-110">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 elves24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.22-1.79L9 14v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26.81-1.16 1.39-2.09 1.39v-1c0-1.1-.9-2-2-2h-1v-2h2c1.1 0 2-.9 2-2V9h1c1.1 0 2-.9 2-2V5.36c1.92 1.99 3 4.68 3 7.64 0 2.67-1.03 5.1-2.71 6.93z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-blue-300 transition-colors duration-300 transform hover:scale-110">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 15h-3v-3h3v3zm0-4h-3V8h3v5zm-4 4H9v-3h4v3zm0-4H9V8h4v5zm-5 4H6v-3h3v3zm0-4H6V8h3v5z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-blue-300 transition-colors duration-300 transform hover:scale-110">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 13h-3v3h-2v-3H8v-2h3V8h2v5h3v2z"/>
            </svg>
          </a>
          <a href="#" className="hover:text-blue-300 transition-colors duration-300 transform hover:scale-110">
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
            </svg>
          </a>
        </div> */}
      </div>

      {/* Main Header */}
      <div className="flex justify-between items-center py-4 px-4 md:px-8 bg-white shadow-xl relative">
        <div className="flex items-center transition-all duration-300 hover:scale-105">
          <div className="text-3xl md:text-4xl font-extrabold tracking-tighter">
            <span className="text-blue-900">A</span>
            <span className="text-red-600">B</span>
          </div>
          <div className="ml-2 md:ml-3">
            <div className="text-xl md:text-2xl font-bold text-blue-900 tracking-wide">Ayushmann</div>
            <div className="text-xs md:text-sm text-gray-600 tracking-wider">Biomass Energy Equipment</div>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-blue-900 focus:outline-none transition-transform duration-300 hover:scale-110">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Navigation for Desktop */}
        <nav className="hidden md:flex items-center space-x-6 md:space-x-8">
          <Link href="/" className="text-blue-900 font-medium text-base md:text-lg hover:text-blue-600 transition-all duration-300 hover:scale-105">HOME</Link>
          <Link href="/about" className="text-blue-900 font-medium text-base md:text-lg hover:text-blue-600 transition-all duration-300 hover:scale-105">ABOUT US</Link>
          <Link href="/products" className="text-blue-900 font-medium text-base md:text-lg hover:text-blue-600 transition-all duration-300 hover:scale-105">PRODUCTS</Link>
          <Link href="/contact" className="text-blue-900 font-medium text-base md:text-lg hover:text-blue-600 transition-all duration-300 hover:scale-105">CONTACT US</Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-2xl absolute w-full z-20 rounded-b-xl`}>
        <nav className="flex flex-col items-center space-y-4 py-6">
          <Link href="/" className="text-blue-900 font-medium text-base hover:text-blue-600 transition-all duration-300 hover:scale-105" onClick={toggleMenu}>HOME</Link>
          <Link href="/about" className="text-blue-900 font-medium text-base hover:text-blue-600 transition-all duration-300 hover:scale-105" onClick={toggleMenu}>ABOUT US</Link>
          <Link href="/products" className="text-blue-900 font-medium text-base hover:text-blue-600 transition-all duration-300 hover:scale-105" onClick={toggleMenu}>PRODUCTS</Link>
          <Link href="/contact" className="text-blue-900 font-medium text-base hover:text-blue-600 transition-all duration-300 hover:scale-105" onClick={toggleMenu}>CONTACT US</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;