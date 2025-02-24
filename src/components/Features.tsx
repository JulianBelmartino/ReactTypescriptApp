import React from "react";
import { motion } from "framer-motion";
import { products } from "../utils/products";

const Features: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
          Our Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.a
              key={product.id}
              href="#pricing"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`relative bg-white p-6 rounded-sm shadow-lg transition-transform transform cursor-pointer group ${
                product.highlighted ? "scale-105 shadow-2xl" : ""
              }`}
            >
              {product.highlighted && (
                <div className="absolute top-10 right-0 bg-green-600 text-white text-xs py-1 px-3 rounded-bl-lg group-hover:bg-green-300 ease-in-out duration-300">
                  SPECIAL DEAL
                </div>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-sm mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-green-700 transition-colors ease-in-out duration-300">
                {product.name}
              </h3>
              <p className="text-gray-600 group-hover:text-green-700 transition-colors ease-in-out duration-300">
                {product.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Features;
