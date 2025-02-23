import React from 'react';

const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex items-center">
      {/* Render stars based on the rating */}
      {Array.from({ length: 5 }, (_, index) => (
        <span key={index} className="text-xl">
          {index < rating ? '★' : '☆'}
        </span>
      ))}
    </div>
  );
};

export default Rating;
