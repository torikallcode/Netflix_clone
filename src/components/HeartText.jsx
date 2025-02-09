import React, { useMemo } from 'react';

const HeartText = () => {
  const ROWS = 17;
  const BASE_TEXT = "love you ".repeat(20);

  const rows = useMemo(() => Array.from({ length: ROWS }, (_, index) => ({
    id: index,
    isEven: index % 2 === 0
  })), []);

  return (
    <div className="relative w-[500px] h-[500px] mx-auto ">
      <div className="absolute inset-0">
        {/* SVG Mask Definition */}
        <svg width="0" height="0" className="hidden">
          <defs>
            <mask id="heart-mask">
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                fill="white"
                transform="scale(20)"
              />
            </mask>
          </defs>
        </svg>

        {/* Text Container */}
        <div
          className="absolute inset-0 overflow-hidden bg-white"
          style={{
            mask: "url(#heart-mask)",
            WebkitMask: "url(#heart-mask)",
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskPosition: "center"
          }}
        >
          <div className="w-full h-full flex flex-col justify-center gap-1">
            {rows.map(({ id, isEven }) => (
              <div
                key={id}
                className={`whitespace-nowrap text-sm font-bold flex
                  ${isEven ? 'animate-marquee-right' : 'animate-marquee-left'}`}
              >
                <span className="text-rose-500 px-2">{BASE_TEXT}</span>
                <span className="text-rose-500 px-2">{BASE_TEXT}</span>

              </div>
            ))}
          </div>
          <h1 className='text-white'>test</h1>
        </div>

        {/* Heart Outline */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="none"
            stroke="white"
            strokeWidth="0.5"
            transform="scale(20)"
          />
        </svg>
      </div>
    </div>
  );
};

export default HeartText;