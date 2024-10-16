import React, { useState } from "react";
import { TiThMenuOutline } from "react-icons/ti";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMenuItemClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    const navbarHeight = document.querySelector("nav").offsetHeight; // Get navbar height
    if (section) {
      // Scroll to the section and adjust for the navbar height
      window.scrollTo({
        top: section.offsetTop - navbarHeight, // Adjust for navbar height
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <header className="sticky top-3 z-50 bg-[#0C2B2F] md:bg-inherit mb-8">
      <nav className="container mx-auto flex items-center justify-between p-4 lg:p-0">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="mobile_logo.png" alt="Logo" className="w-8 h-8" />
          <span className="hidden md:block text-white text-xl font-bold">EthAi</span>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex bg-[#0C2B2F] rounded-full px-20 py-4 space-x-10 text-white">
          <li>
            <button onClick={() => handleMenuItemClick("features")} className="hover:text-gray-300">
              Features
            </button>
          </li>
          <li>
            <button onClick={() => handleMenuItemClick("why-us")} className="hover:text-gray-300">
              Why Us
            </button>
          </li>
          <li>
            <button onClick={() => handleMenuItemClick("tokenomics")} className="hover:text-gray-300">
              Tokenomics
            </button>
          </li>
          <li>
            <button onClick={() => handleMenuItemClick("roadmap")} className="hover:text-gray-300">
              Roadmap
            </button>
          </li>
        </ul>

        {/* Desktop Right-Side Links */}
        <ul className="hidden md:flex space-x-6 items-center text-white">
          <li>
            <a href="#login" className="hover:text-gray-300">
              Log in
            </a>
          </li>
          <li>
            <a href="#whitepaper" className="bg-[#00bfff] px-4 py-2 rounded-full">
              Whitepaper
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <MdClose /> : <TiThMenuOutline />}
        </button>
      </nav>

      {/* Mobile Links */}
      {isMobileMenuOpen && (
        <ul className="md:hidden absolute z-40 w-full bg-[#0d1e24] flex flex-col items-center text-white space-y-6 py-6">
          <li>
            <button onClick={() => handleMenuItemClick("features")} className="hover:text-gray-300">
              Features
            </button>
          </li>
          <li>
            <button onClick={() => handleMenuItemClick("why-us")} className="hover:text-gray-300">
              Why Us
            </button>
          </li>
          <li>
            <button onClick={() => handleMenuItemClick("tokenomics")} className="hover:text-gray-300">
              Tokenomics
            </button>
          </li>
          <li>
            <button onClick={() => handleMenuItemClick("roadmap")} className="hover:text-gray-300">
              Roadmap
            </button>
          </li>
          <li>
            <a href="#login" className="hover:text-gray-300">
              Log in
            </a>
          </li>
          <li>
            <a href="#whitepaper" className="bg-[#00bfff] px-4 py-2 rounded-full">
              Whitepaper
            </a>
          </li>
        </ul>
      )}
    </header>
  );
};

export default Navbar;
