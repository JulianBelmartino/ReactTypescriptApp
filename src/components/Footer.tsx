import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Bonsai Company</h3>
            <p className="text-sm">Delivering exceptional bonsai services to grow your bonsai.</p>
          </div>
          <div className="mt-4 md:mt-0">
            <ul className="flex justify-center md:justify-end space-x-6">
              <li>
                <a href="#featured" className="text-sm hover:text-gray-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm hover:text-gray-400">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm hover:text-gray-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Bonsai Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;