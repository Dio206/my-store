import React from 'react';

const Rating = ({ value = 0 }) => {
  const safeValue = Math.max(0, Math.min(5, Number(value)));

  return (
    <div className="stars">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i}>{i < safeValue ? '★' : '☆'}</span>
      ))}
    </div>
  );
};

export default Rating;
