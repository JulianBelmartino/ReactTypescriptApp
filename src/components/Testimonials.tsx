import React, { useEffect, useState } from 'react';
import { fetchComments, Comment } from '../utils/apicall'; 
import Ratings from './Rating';
import { generateRandomRating } from '../utils/ratingGenerator';

const Testimonials: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch comments on component mount
    const getComments = async () => {
      const fetchedComments = await fetchComments();
      setComments(fetchedComments);
      setLoading(false);
    };
    
    getComments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {comments.slice(0, 3).map((comment) => (
            <div key={comment.id} className="bg-white p-8 rounded-sm shadow-lg flex flex-col justify-between h-full">
              <p className="text-lg text-gray-700 mb-4">{comment.body}</p>
              <div className="mt-auto">
                <p className="font-semibold text-gray-800">{comment.name}</p>
                <p className="text-gray-600"><Ratings rating={generateRandomRating()}/></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
