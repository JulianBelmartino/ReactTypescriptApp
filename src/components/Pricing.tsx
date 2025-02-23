import React from 'react';

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
    name: 'Basic',
    price: '$19/month',
    description: 'For individuals or small teams',
    features: ['1 User', 'Basic Support', '5 GB Storage'],
    highlighted: false,
  },
  {
    id: 2,
    name: 'Pro',
    price: '$49/month',
    description: 'For growing businesses',
    features: ['5 Users', 'Priority Support', '50 GB Storage'],
    highlighted: true,
  },
  {
    id: 3,
    name: 'Enterprise',
    price: '$99/month',
    description: 'For large organizations',
    features: ['Unlimited Users', '24/7 Support', '200 GB Storage'],
    highlighted: false,
  },
];

const Pricing: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative bg-white p-8 rounded-sm shadow-lg transition-transform transform ${
                tier.highlighted ? 'scale-105 shadow-2xl' : ''
              }`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 right-0 bg-green-600 text-white text-xs py-1 px-3 rounded-sm">
                  Best Value
                </div>
              )}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">{tier.name}</h3>
              <p className="text-xl font-bold text-gray-900 mb-4">{tier.price}</p>
              <p className="text-gray-600 mb-6">{tier.description}</p>
              <ul className="space-y-3 mb-6">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    {/* Circle replacement for the SVG */}
                    <span className="w-3 h-3 bg-green-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="#contact">
                <button className="w-full py-3 px-4 bg-transparent text-green-700 border-2 border-green-700 hover:bg-green-700 hover:text-white hover:shadow-md transition-all ease-in-out duration-300">
                  Get Started
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
