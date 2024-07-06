// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Mobile Welding</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
        <div className={`fixed top-0 left-0 w-64  h-full  bg-black transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:relative md:flex md:items-center md:translate-x-0 md:w-auto md:h-auto`}>
          <div className="md:flex sticky md:items-center md:justify-between md:flex-row md:space-x-4">
            <a href="#home" className="block text-white py-2 px-4" onClick={closeMenu}>Home</a>
            <a href="#about" className="block text-white py-2 px-4" onClick={closeMenu}>About</a>
            <a href="#services" className="block text-white py-2 px-4" onClick={closeMenu}>Services</a>
            <a href="#contact" className="block text-white py-2 px-4" onClick={closeMenu}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
