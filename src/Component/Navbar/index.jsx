import React, { useState } from 'react';
import { TiThMenuOutline } from "react-icons/ti";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sticky top-0 p-3  md:py-6  ">
      <nav className="container rounded-full mx-auto flex items-center justify-between p-4 lg:p-0 bg-[#0d1e24] md:bg-inherit">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="mobile_logo.png" alt="Logo" className="w-8 h-8" />
          <span className="hidden md:flex text-white text-xl font-bold">EthAi</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex md:bg-[#0d1e24] md:rounded-full md:px-20 md:py-4 md:space-x-[50px] items-center text-white">
          <li><a href="#features" className="hover:text-gray-300">Features</a></li>
          <li><a href="#why-us" className="hover:text-gray-300">Why Us</a></li>
          <li><a href="#tokenomics" className="hover:text-gray-300">Tokenomics</a></li>
          <li><a href="#roadmap" className="hover:text-gray-300">Roadmap</a></li>
        </ul>

        <ul className="hidden md:flex space-x-6 items-center text-white">
          <li><a href="#login" className="hover:text-gray-300">Log in</a></li>
          <li><a href="#whitepaper" className="bg-[#00bfff] text-white px-4 py-2 rounded-full">Whitepaper</a></li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? <MdClose /> : <TiThMenuOutline />}
        </button>
      </nav>

      {/* Mobile Links */}
      {isMobileMenuOpen && (
        <ul className="md:hidden absolute z-10 w-full  bg-[#0d1e24] flex flex-col items-center text-white space-y-4 py-6">
          <li><a href="#features" className="hover:text-gray-300">Features</a></li>
          <li><a href="#why-us" className="hover:text-gray-300">Why Us</a></li>
          <li><a href="#tokenomics" className="hover:text-gray-300">Tokenomics</a></li>
          <li><a href="#roadmap" className="hover:text-gray-300">Roadmap</a></li>
          <li><a href="#login" className="hover:text-gray-300">Log in</a></li>
          <li><a href="#whitepaper" className="bg-[#00bfff] text-white px-4 py-2 rounded-full">Whitepaper</a></li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
