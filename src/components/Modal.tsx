import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-white rounded-sm w-1/3 p-6 flex flex-col justify-center items-center"
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-xl text-green-700 font-semibold mb-4 text-center">Thank You</div>
        <div className="mb-6 text-center">
          <p>Your message has been successfully submitted.</p>
        </div>
        <div className="flex justify-center w-full">
          <button
            onClick={onClose}
            className="bg-transparent text-green-700 px-4 py-2 rounded hover:bg-green-700 hover:text-white transition duration-300"
          >
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
