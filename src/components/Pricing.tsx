import React from "react";
import { motion } from "framer-motion";

interface PricingTier {
  id: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    id: 1,
    name: "Basic",
    price: "$19/month",
    description: "For individuals or small teams",
    features: ["1 User", "Basic Support", "5 GB Storage"],
    highlighted: false,
  },
  {
    id: 2,
    name: "Pro",
    price: "$49/month",
    description: "For growing businesses",
    features: ["5 Users", "Priority Support", "50 GB Storage"],
    highlighted: true,
  },
  {
    id: 3,
    name: "Enterprise",
    price: "$99/month",
    description: "For large organizations",
    features: ["Unlimited Users", "24/7 Support", "200 GB Storage"],
    highlighted: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`relative bg-white p-8 rounded-sm shadow-lg transition-transform transform group ${
                tier.highlighted ? "scale-105 shadow-2xl" : ""
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-10 right-0 bg-green-600 text-white text-xs py-1 px-3 rounded-bl-lg group-hover:bg-green-300 ease-in-out duration-300">
                  BONSAI DEAL
                </div>
              )}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {tier.name}
              </h3>
              <p className="text-xl font-bold text-gray-900 mb-4">
                {tier.price}
              </p>
              <p className="text-gray-600 mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact">
                <button className="w-full py-3 px-4 bg-transparent text-green-700 border-2 border-green-700 hover:bg-green-700 hover:border-white hover:text-white hover:shadow-md transition-all ease-in-out duration-300">
                  Get Started
                </button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Pricing;
