import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Plus, ThumbsUp, Info } from 'lucide-react';

const MovieRow = ({ title, movies }) => {
  const rowRef = useRef(null);
  const [isHovered, setIsHovered] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [itemWidth, setItemWidth] = useState(200);

  // Handle responsive item width
  useEffect(() => {
    const updateItemWidth = () => {
      if (window.innerWidth < 640) {
        setItemWidth(170); // Mobile
      } else if (window.innerWidth < 768) {
        setItemWidth(160); // Tablet small
      } else if (window.innerWidth < 1024) {
        setItemWidth(180); // Tablet
      } else {
        setItemWidth(255); // Desktop
      }
    };

    updateItemWidth();
    window.addEventListener('resize', updateItemWidth);
    return () => window.removeEventListener('resize', updateItemWidth);
  }, []);

  // Check if can scroll
  useEffect(() => {
    const checkScroll = () => {
      if (rowRef.current) {
        const canScroll = rowRef.current.scrollWidth > rowRef.current.clientWidth;
        setShowControls(canScroll);
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [movies]);

  const scrollRow = (direction) => {
    if (rowRef.current) {
      const container = rowRef.current;
      const scrollAmount = direction === 'left'
        ? -container.clientWidth
        : container.clientWidth;

      const newScrollPosition = container.scrollLeft + scrollAmount;

      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });

      setScrollPosition(newScrollPosition);
    }
  };

  return (
    <div className="py-4 sm:py-6 md:py-8">
      {/* Title Section */}
      <div className="px-4 md:px-12 mb-4 flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl font-bold text-white">{title}</h2>
        <button className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
          See All
        </button>
      </div>

      <div className="relative group"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}>
        {/* Scroll Buttons */}
        {showControls && (
          <>
            <button
              onClick={() => scrollRow('left')}
              className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 
              z-20 bg-black/80 hover:bg-black/90 
              text-white rounded-full p-1 sm:p-2 
              opacity-0 group-hover:opacity-100 
              transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            </button>
            <button
              onClick={() => scrollRow('right')}
              className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 
              z-20 bg-black/80 hover:bg-black/90 
              text-white rounded-full p-1 sm:p-2 
              opacity-0 group-hover:opacity-100 
              transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
            </button>
          </>
        )}

        {/* Movies Container */}
        <div
          ref={rowRef}
          className="grid grid-cols-2 lg:grid-cols-6 overflow-x-scroll scrollbar-hide 
          space-x-2 sm:space-x-3 md:space-x-2 px-4 md:px-12 space-y-2
          scroll-smooth pb-4"
          style={{ scrollbarWidth: 'none' }}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative flex-shrink-0 transform transition-all duration-300 
            hover:z-10"
              style={{ width: `${itemWidth}px` }}
              onMouseEnter={() => setIsHovered(movie.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {/* Movie Poster */}
              <div className="relative rounded-lg overflow-hidden shadow-lg 
                group/item cursor-pointer">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-full aspect-[9/16] object-cover"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/60 flex flex-col 
                  justify-end p-3 sm:p-4 text-white opacity-0 group-hover/item:opacity-100 
                  transition-all duration-300`}>
                  <h3 className="text-sm sm:text-base font-bold truncate mb-2">
                    {movie.title}
                  </h3>

                  <div className="flex items-center space-x-2">
                    <button className="bg-white text-black px-2 sm:px-3 py-1 
                      rounded-md flex items-center space-x-1 hover:bg-gray-200 
                      transition-colors duration-300">
                      <Play className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm font-medium">Play</span>
                    </button>

                    <div className="flex space-x-1">
                      <button className="p-1 rounded-full bg-white/20 
                        hover:bg-white/30 transition-colors duration-300">
                        <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                      <button className="p-1 rounded-full bg-white/20 
                        hover:bg-white/30 transition-colors duration-300">
                        <ThumbsUp className="w-3 h-3 sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 mt-2 text-xs">
                    <span className="text-green-500 font-semibold">98% Match</span>
                    <span className="text-gray-300">2024</span>
                    <span className="border px-1 text-[10px] rounded">16+</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Shadows */}
        {showControls && (
          <>
            <div className="absolute left-0 top-0 bottom-0 w-12 
              bg-gradient-to-r from-netflix-black to-transparent 
              pointer-events-none opacity-0 group-hover:opacity-100 
              transition-opacity duration-300" />
            <div className="absolute right-0 top-0 bottom-0 w-12 
              bg-gradient-to-l from-netflix-black to-transparent 
              pointer-events-none opacity-0 group-hover:opacity-100 
              transition-opacity duration-300" />
          </>
        )}
      </div>
    </div>
  );
};

export default MovieRow;