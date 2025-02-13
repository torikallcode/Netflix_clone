import React, { useState, useEffect } from 'react';
import {
  X, Play, ThumbsUp, Plus, Volume2, VolumeX,
  Star, Clock, Download, Share2, ChevronDown
} from 'lucide-react';

const MovieModal = ({ movie, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animate modal entrance
    setTimeout(() => setIsVisible(true), 100);

    // Simulasi progress trailer
    if (isPlaying) {
      const timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 100);
      return () => clearInterval(timer);
    }
  }, [isPlaying]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm
      flex items-center justify-center overflow-y-auto p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className={`relative bg-[#181818] rounded-lg sm:rounded-xl w-full max-w-2xl 
        max-h-[70vh] overflow-hidden shadow-2xl transform transition-all duration-500
        ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video/Image Section */}
        <div className="relative h-[30vh] sm:h-[50vh] md:h-[35vh] w-full bg-cover bg-center">
          {/* Video Background */}
          {movie.trailerUrl && isPlaying ? (
            <video
              src={movie.trailerUrl}
              className="w-full h-full object-cover"
              autoPlay
              muted={isMuted}
              loop
            />
          ) : (
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url('${movie.backdropUrl}')`,
              }}
            />
          )}

          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#181818]/50 to-transparent" />

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-black/50 rounded-full p-1.5 sm:p-2
            hover:bg-black/70 transform hover:scale-110 transition-all duration-300"
          >
            <X className="w-4 h-4 sm:w-6 sm:h-6 text-white cursor-pointer" />
          </button>

          {/* Trailer Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
            {/* Progress Bar */}
            {/* <div className="w-full bg-gray-700 h-1 mb-2 rounded-full overflow-hidden">
              <div
                className="bg-netflix-red h-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div> */}

            {/* Video Controls */}
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-white text-black p-1.5 sm:p-2 rounded-full 
                hover:bg-gray-200 transform hover:scale-105 transition-all duration-300"
              >
                <Play className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>

              <button
                onClick={() => setIsMuted(!isMuted)}
                className="bg-black/50 text-white p-1.5 sm:p-2 rounded-full 
                hover:bg-black/70 transform hover:scale-105 transition-all duration-300"
              >
                {isMuted ?
                  <VolumeX className="w-4 h-4 sm:w-6 sm:h-6" /> :
                  <Volume2 className="w-4 h-4 sm:w-6 sm:h-6" />
                }
              </button> */}

              <div className="flex-grow" />

              <div className="flex space-x-2">
                <button className="bg-white/20 text-white p-1.5 sm:p-2 rounded-full 
                  hover:bg-white/30 transform hover:scale-105 transition-all duration-300">
                  <ThumbsUp className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button className="bg-white/20 text-white p-1.5 sm:p-2 rounded-full 
                  hover:bg-white/30 transform hover:scale-105 transition-all duration-300">
                  <Plus className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Movie Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-4 sm:p-6 md:p-8 text-white">
          {/* Left Column - Basic Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex flex-wrap items-center gap-4">
              <h2 className="text-2xl sm:text-3xl font-bold">{movie.title}</h2>
              {/* <div className="flex items-center space-x-2">
                <Star className="text-yellow-500 w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-green-500 font-semibold text-sm sm:text-base">
                  98% Match
                </span>
              </div> */}
            </div>

            <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
              <span className="text-green-500 font-bold">New</span>
              <span>2024</span>
              <span className="border px-2 rounded">16+</span>
              <span>2h 14m</span>
            </div>

            <p className="text-sm sm:text-base text-gray-300">{movie.overview}</p>

            <div className="flex flex-wrap gap-3">
              <button className="bg-white text-black px-4 sm:px-6 py-2 rounded-md 
                flex items-center space-x-2 hover:bg-gray-200 transform hover:scale-105 
                transition-all duration-300 shadow-lg">
                <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base font-semibold">Play</span>
              </button>
              <button className="bg-white/20 text-white px-4 sm:px-6 py-2 rounded-md 
                flex items-center space-x-2 hover:bg-white/30 transform hover:scale-105 
                transition-all duration-300 backdrop-blur-sm">
                <Download className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm sm:text-base">Download</span>
              </button>
            </div>
          </div>

          {/* Right Column - Additional Details */}
          {/* <div className="space-y-4">
            <div>
              <span className="text-gray-400 text-sm block mb-2">Genres:</span>
              <div className="flex flex-wrap gap-2">
                {['Action', 'Sci-Fi', 'Thriller'].map((genre) => (
                  <span
                    key={genre}
                    className="bg-white/10 px-3 py-1 rounded-full text-xs 
                    hover:bg-white/20 transition-all duration-300"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-gray-400 text-sm block mb-2">Cast:</span>
              <div className="flex flex-wrap gap-2">
                {['Actor 1', 'Actor 2', 'Actor 3'].map((actor) => (
                  <span
                    key={actor}
                    className="text-sm text-white/70 hover:text-white 
                    transition-all duration-300"
                  >
                    {actor}
                  </span>
                ))}
              </div>
            </div>

            <button className="flex items-center space-x-2 text-white/70 
              hover:text-white transition-all duration-300 group">
              <Share2 className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Share</span>
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MovieModal;