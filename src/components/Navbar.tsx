import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from '../assets/images/logo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white p-4 shadow-md fixed w-full top-0 z-50">
      <motion.div
        className="container mx-auto text-green max-w-full px-4 sm:px-6 md:px-8" // Adjust padding for small screens
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#home">
              <img src={logo} alt="Logo" className="w-10 h-10" />
            </a>
          </div>

          {/* Links and Hamburger Menu */}
          <div className="flex items-center space-x-4">
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-4">
              <li>
                <a href="#featured" className="hover:text-green-600">Featured</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-green-600">Testimonials</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-green-600">Pricing</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-600">Contact</a>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-green-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4 items-center">
            <a href="#featured" className="hover:text-green-600">Featured</a>
            <a href="#testimonials" className="hover:text-green-600">Testimonials</a>
            <a href="#pricing" className="hover:text-green-600">Pricing</a>
            <a href="#contact" className="hover:text-green-600">Contact</a>
          </div>
        )}
      </motion.div>
    </header>
  );
};

export default Navbar;
