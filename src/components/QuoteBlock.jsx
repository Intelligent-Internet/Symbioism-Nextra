import React from 'react';

const QuoteBlock = ({ children, author }) => {
  return (
    <blockquote className="relative p-2 sm:p-4 lg:p-6 my-6 sm:my-8 max-w-6xl mx-auto border-l-4 border-[#BAE9F4]">
      <p className="text-lg sm:text-xl lg:text-2xl italic text-white font-[Montserrat] leading-relaxed text-left">
        {children}
      </p>
      <cite className="block text-left text-base sm:text-lg text-[#BAE9F4] mt-4 font-[Montserrat]">
        — {author}
      </cite>
    </blockquote>
  );
};

export default QuoteBlock;
