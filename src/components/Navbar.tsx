import React from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  return (
    <header className="bg-white p-4 shadow-md fixed w-full top-0 z-50">
      <motion.div
        className="container mx-auto text-green"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <nav className="mt-4">
          <ul className="flex space-x-4">
            <li>
              <a href="#featured" className="hover:text-green-600">
                Featured
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-green-600">
                Pricing
              </a>
            </li>
            <li>
              <a href="#testimonials" className="hover:text-green-600">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
