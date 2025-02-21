import React from 'react';

interface Testimonial {
  name: string;
  title: string;
  quote: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'John Doe',
    title: 'CEO, TechCorp',
    quote: 'This product has completely transformed our workflow. Highly recommended!',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Jane Smith',
    title: 'Marketing Director, WebSolutions',
    quote: 'An amazing experience from start to finish. I couldn\'t be happier!',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Mike Johnson',
    title: 'Founder, Innovators Hub',
    quote: 'Incredible value for the price. It\'s helped us scale faster than ever.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">What Our Clients Say</h2>
        <div className="space-y-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 md:p-8 transition transform hover:scale-105 hover:shadow-xl"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>
              <blockquote className="text-lg italic text-gray-700 mb-4">"{testimonial.quote}"</blockquote>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
