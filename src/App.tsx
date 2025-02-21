import React from "react";
import { motion } from "framer-motion";
import "./App.css"; // Ensure you have the proper CSS setup
import Hero from './components/Hero';
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Pricing from "./components/Pricing"

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header Section */}
      <header className="bg-blue-600 p-4">
        <motion.div
          className="container mx-auto text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold">Your App Header</h1>
          <nav className="mt-4">
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:text-blue-200">Home</a></li>
              <li><a href="#about" className="hover:text-blue-200">About</a></li>
              <li><a href="#services" className="hover:text-blue-200">Services</a></li>
              <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
            </ul>
          </nav>
        </motion.div>
      </header>
          <Hero />

      {/* Main Content Section */}
      <main className="container mx-auto px-4 py-8">
        <section id="home" className="py-16">
          <motion.h2
            className="text-2xl font-semibold mb-4"
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Welcome to Our Homepage
          </motion.h2>
          <p>This is the home section. Add your homepage content here.</p>
        </section>

        <section id="about" className="py-16 bg-gray-200">
          <motion.h2
            className="text-2xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h2>
          <p>Here's some information about your company or app.</p>
        </section>
        <Features />
        <section id="services" className="py-16">
          <motion.h2
            className="text-2xl font-semibold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h2>
        </section>
        <Testimonials />
        <Pricing />
        <section id="contact" className="py-16 bg-gray-200">
          <motion.h2
            className="text-2xl font-semibold mb-4"
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h2>
          <p>Get in touch with us through the contact form or email.</p>
          <Contact />
        </section>
      </main>

      {/* Footer Section */}
      <Footer/>
    </div>
  );
};

export default App;
