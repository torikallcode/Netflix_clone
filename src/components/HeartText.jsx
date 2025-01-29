import React, { useMemo } from 'react';

const HeartText = () => {
  // Use a constant for rows since it doesn't need to be in state
  const ROWS = 17;
  const BASE_TEXT = "love you ".repeat(20);

  // Memoize the array of rows to prevent recreation on each render
  const rows = useMemo(() => Array.from({ length: ROWS }, (_, index) => ({
    id: index,
    isEven: index % 2 === 0
  })), []);

  return (
    <div className="relative max-w-sm px-3 mx-auto">
      <div className="relative inset-0 flex flex-col overflow-hidden">
        {rows.map(({ id, isEven }) => (
          <div
            key={id}
            className={`whitespace-nowrap font-poppins leading-tight flex ${isEven ? 'animate-marquee-right' : 'animate-marquee-left'
              }`}
          >
            <span className="text-gray-600">{BASE_TEXT}</span>
            <span className="text-gray-600">{BASE_TEXT}</span>
          </div>
        ))}
      </div>
      <img
        src="/img/love1.png"
        alt="Love"
        className="absolute top-0 bottom-0 left-0 right-0 w-full"
        loading="lazy"
      />

    </div>
  );
};

export default HeartText;