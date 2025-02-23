import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./App.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Pricing from "./components/Pricing";

const App: React.FC = () => {
  const { scrollY } = useScroll(); // Track the vertical scroll position

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header Section */}
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
                <a href="#contact" className="hover:text-green-600 form-field">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </motion.div>
      </header>

      
        <Hero />
      

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-8">
        {/* Featured Section */}
        <motion.section
          id="featured"

        >
          <Features />
        </motion.section>

        {/* Testimonials Section */}
        <motion.section
          id="testimonials"
         
        >
          <Testimonials />
        </motion.section>

        {/* Pricing Section */}
        <motion.section
          id="pricing"
        
        >
          <Pricing />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
         
        >
          <Contact />
        </motion.section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
