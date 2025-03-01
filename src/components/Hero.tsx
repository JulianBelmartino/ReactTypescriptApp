import React from 'react';
import bannerImage from '../assets/images/banner.jpg';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bannerImage})` }} 
  >      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Our Company</h1>
        <p className="text-xl mb-8">We provide the best solutions for your bonsai needs.</p>
        <a href="#featured" className="bg-transparent border-2 border-white text-white hover:bg-green-700 border-2 border-white text-white font-bold py-2 px-6 rounded-sm transition duration-300">
          Get Started
        </a>
      </div>
    </section>
  );
};

export default Hero;