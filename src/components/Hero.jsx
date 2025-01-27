import React, { useState, useEffect } from 'react';
import { Play, Info, Volume2, VolumeX } from 'lucide-react';
import MovieModal from './MovieModal';

const HeroBanner = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Animate content on mount
    setIsVisible(true);
  }, []);

  const truncateText = (text, maxLength) => {
    if (text?.length <= maxLength) return text;
    return text?.substr(0, maxLength).trim() + '...';
  };

  const openModal = () => setShowModal(!showModal);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div
        className="relative h-[85vh] sm:h-[75vh] md:min-h-screen bg-cover bg-center text-white font-poppins overflow-hidden"
        style={{
          backgroundImage: `url('${movie?.backdropUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated gradient overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-700
            bg-gradient-to-t lg:bg-gradient-to-r from-netflix-black/95 via-netflix-black/60 to-transparent
            sm:from-netflix-black/100 sm:via-netflix-gray/40 sm:to-transparent`}
        />

        {/* Optional: Video background for desktop */}
        {movie?.trailerUrl && (
          <div className="hidden md:block absolute inset-0">
            <video
              src={movie.trailerUrl}
              autoPlay
              loop
              muted={isMuted}
              className={`w-full h-full object-cover transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'
                }`}
            />
          </div>
        )}

        {/* Content container with animations */}
        <div className="relative z-10 h-full flex flex-col justify-end sm:justify-center px-6 sm:px-8 md:px-16 pb-20 sm:pb-0">
          <div className="max-w-4xl">
            {/* Animated title */}
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4
                transform transition-all duration-700 ${isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
                }`}
            >
              {movie?.title}
            </h1>

            {/* Genre tags */}
            <div className={`flex flex-wrap gap-2 mb-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'
              }`}>
              {movie?.genres?.map((genre) => (
                <span
                  key={genre}
                  className="text-xs sm:text-sm px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full"
                >
                  {genre}
                </span>
              ))}
            </div>

            {/* Animated overview text */}
            <div
              className={`mb-6 sm:mb-8 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <p className="text-sm sm:text-base md:text-lg max-w-md sm:max-w-xl md:max-w-2xl text-gray-200">
                {truncateText(movie?.overview, window.innerWidth < 640 ? 120 : 200)}
              </p>
            </div>

            {/* Animated buttons container */}
            <div
              className={`flex items-center space-x-3 sm:space-x-4 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
              <button
                onClick={openModal}
                className="bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded-md 
                flex items-center space-x-2 hover:bg-opacity-90 transform hover:scale-105 
                transition duration-300 shadow-lg"
              >
                <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base font-semibold">Play</span>
              </button>

              <button
                className="bg-gray-600/80 backdrop-blur-sm text-white px-6 sm:px-8 py-2 sm:py-3 
                rounded-md flex items-center space-x-2 hover:bg-gray-700/80 transform hover:scale-105 
                transition duration-300 shadow-lg"
              >
                <Info className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base font-semibold">More Info</span>
              </button>

              {/* Volume control - Only show on desktop */}
              {movie?.trailerUrl && (
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="hidden md:flex items-center justify-center w-10 h-10 rounded-full 
                  bg-gray-800/80 backdrop-blur-sm hover:bg-gray-700/80 transition duration-300"
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5" />
                  ) : (
                    <Volume2 className="w-5 h-5" />
                  )}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Cinematic vignette effect */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-netflix-black via-netflix-black/20 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-netflix-black/50 to-transparent" /> */}
      </div>

      {/* Enhanced Modal */}
      {showModal && (
        <MovieModal
          movie={movie}
          onClose={closeModal}
          isMuted={isMuted}
          setIsMuted={setIsMuted}
        />
      )}
    </>
  );
};

export default HeroBanner;