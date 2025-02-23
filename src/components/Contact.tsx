import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from './Modal'; // Import the modal component

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Used to reset the form fields
  } = useForm<FormData>();

  const [isModalOpen, setModalOpen] = useState(false); // Modal state for visibility

  const onSubmit = (data: FormData) => {
    console.log('Form Submitted:', data);

    // Show the modal after submission
    setModalOpen(true);

    // Reset the form fields
    reset();
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Contact Us</h2>
        
        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>
            <input
              {...register('name', { required: 'Full Name is required' })}
              id="name"
              type="text"
              className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.name ? 'border-red-500' : ''
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                  message: 'Invalid email address',
                },
              })}
              id="email"
              type="email"
              className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.email ? 'border-red-500' : ''
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Message
            </label>
            <textarea
              {...register('message', { required: 'Message is required' })}
              id="message"
              rows={4}
              className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                errors.message ? 'border-red-500' : ''
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Modal Component */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  );
};

export default Contact;
