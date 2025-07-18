import React from 'react';

const TripodGraphic = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="-110 -110 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="0" cy="0" r="100" stroke="white" strokeWidth="1" />
      <path
        d="M 0 -100 L 86.6 50 L -86.6 50 Z"
        stroke="white"
        strokeWidth="1"
      />
    </svg>
  );
};

export default TripodGraphic;
