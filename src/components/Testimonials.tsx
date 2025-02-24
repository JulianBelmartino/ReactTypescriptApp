import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { fetchComments, Comment } from "../utils/apicall";
import Ratings from "./Rating";
import { generateRandomRating } from "../utils/ratingGenerator";
import { Loader2 } from "lucide-react";

const Testimonials: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getComments = async () => {
      const fetchedComments = await fetchComments();
      setComments(fetchedComments);
      setLoading(false);
    };
    getComments();
  }, []);

  const loadingCards = (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3].map((index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
          className="bg-white p-8 rounded-sm shadow-lg flex flex-col justify-center items-center h-full"
        >
          <Loader2 className="h-10 w-10 text-gray-400 animate-spin" />
        </motion.div>
      ))}
    </div>
  );

  return (
    <motion.section
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="py-16 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
          What Our Customers Say
        </h2>
        {loading ? (
          loadingCards
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comments.slice(0, 3).map((comment, index) => (
              <motion.div
                key={comment.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-sm shadow-lg flex flex-col justify-between h-full"
              >
                <p className="text-lg text-gray-700 mb-4">{comment.body}</p>
                <div className="mt-auto">
                  <p className="font-semibold text-gray-800">{comment.name}</p>
                  <p className="text-gray-600">
                    <Ratings rating={generateRandomRating()} />
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default Testimonials;
