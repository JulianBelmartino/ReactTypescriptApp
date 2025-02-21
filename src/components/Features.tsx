import React from 'react';
import { products } from '../utils/products';

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Our Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`relative bg-white p-6 rounded-lg shadow-lg transition-transform transform ${
                product.highlighted ? 'scale-105 shadow-2xl' : ''
              }`}
            >
              {product.highlighted && (
                <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs py-1 px-3 rounded-bl-lg">
                  Featured
                </div>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{product.name}</h3>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
