import React, { useState } from 'react';
import { Play, Plus, ThumbsUp } from 'lucide-react';

const MovieRow = ({ title, movies }) => {
  const [isHovered, setIsHovered] = useState(null);

  return (
    <div className="py-4 sm:py-6 md:py-8">
      {/* Title Section */}
      <div className="px-4 md:px-12 mb-4 flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl font-bold text-white">{title}</h2>
        <button className="text-sm text-gray-400 hover:text-white transition-colors duration-300">
          See All
        </button>
      </div>

      {/* Movies Grid Container */}
      <div className="px-4 md:px-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-6 
          gap-2 sm:gap-3 md:gap-4">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="relative transform transition-all duration-300 hover:z-10"
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
                <div className="absolute inset-0 bg-black/60 flex flex-col 
                  justify-end p-3 sm:p-4 text-white opacity-0 group-hover/item:opacity-100 
                  transition-all duration-300">
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
      </div>
    </div>
  );
};

export default MovieRow;