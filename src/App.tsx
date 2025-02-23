import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./App.css";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Navbar from "./components/Navbar";

const App: React.FC = () => {
  const { scrollY } = useScroll(); // Track the vertical scroll position

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />   
      <Hero />
        <main className="container mx-auto px-4 py-8">
       
          <motion.section id="featured">
            <Features />
          </motion.section>

          <motion.section id="testimonials">
            <Testimonials />
          </motion.section>

       
          <motion.section id="pricing">
            <Pricing />
          </motion.section>

      
          <motion.section id="contact">
            <Contact />
          </motion.section>
      </main>

   
      <Footer />
    </div>
  );
};

export default App;
