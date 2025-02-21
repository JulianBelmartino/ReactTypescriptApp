import React from "react";
import { motion } from "framer-motion";
import "./App.css"; // Ensure you have the proper CSS setup
import Hero from './components/Hero';
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Pricing from "./components/Pricing";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-600 p-4">
        <motion.div
          className="container mx-auto text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
         <nav className="mt-4">
            <ul className="flex space-x-4">
              <li><a href="#featured" className="hover:text-blue-200">Featured</a></li>
              <li><a href="#pricing" className="hover:text-blue-200">Pricing</a></li>
              <li><a href="#testimonials" className="hover:text-blue-200">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
            </ul>
          </nav>
        </motion.div>
      </header>
      <Hero />

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-8">
        {/* Featured Section with Animation */}
        <motion.section
          id="featured"
          initial={{ opacity: 0, y: 50 }} // Initial state
          animate={{ opacity: 1, y: 0 }}   // Animated state when in view
          transition={{ duration: 0.8 }}    // Duration of the transition
        >
          <Features />
        </motion.section>

        {/* Testimonials Section with Animation */}
        <motion.section
          id="testimonials"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Testimonials />
        </motion.section>

        {/* Pricing Section with Animation */}
        <motion.section
          id="pricing"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Pricing />
        </motion.section>

        {/* Contact Section with Animation */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
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
