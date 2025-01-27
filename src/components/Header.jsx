import React, { useState, useEffect } from 'react';
import { Search, Bell, User, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-poppins
      ${isScrolled
          ? 'bg-netflix-black/95 backdrop-blur-sm shadow-lg'
          : 'bg-gradient-to-b from-black/70 to-transparent'}`}
    >
      <div className="relative flex justify-between items-center px-4 md:px-8 lg:px-12 py-4">
        {/* Left side - Logo and Navigation */}
        <div className="flex items-center">
          {/* <img
            src="/netflix-logo.png"
            alt="Netflix Logo"
            className="h-6 md:h-8 transition-transform duration-300 hover:scale-105"
          /> */}
          <h1 className='text-2xl md:text-3xl font-bold font-poppins uppercase text-netflix-red'>NETFLiX</h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex ml-8 text-white space-x-6">
            {['Home', 'TV Shows', 'Movies', 'New & Popular'].map((item) => (
              <a
                key={item}
                href="#"
                className="relative group py-2"
              >
                <span className="hover:text-gray-300 transition-colors duration-300">{item}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        </div>

        {/* Right side - Icons */}
        <div className="flex items-center space-x-4 md:space-x-6 text-white">
          {/* Search Bar */}
          <div className="hidden md:flex items-center">
            <div className={`relative flex items-center ${isSearchOpen ? 'w-48' : 'w-8'} transition-all duration-300`}>
              <input
                type="text"
                placeholder="Search..."
                className={`bg-black/20 backdrop-blur-md rounded-full py-1 px-4 pr-8 text-sm outline-none border border-white/10 focus:border-white/30 transition-all duration-300
                ${isSearchOpen ? 'w-full opacity-100' : 'w-0 opacity-0'}`}
              />
              <Search
                className="w-5 h-5 cursor-pointer absolute right-1 hover:text-red-600 transition-colors duration-300"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              />
            </div>
          </div>

          {/* Notification Bell */}
          <div className="hidden md:flex relative group">
            <Bell className="w-5 h-5 cursor-pointer group-hover:text-red-600 transition-colors duration-300" />
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-600 rounded-full"></div>
          </div>

          {/* User Profile */}
          <div className="relative group">
            <User className="w-5 h-5 cursor-pointer group-hover:text-red-600 transition-colors duration-300" />
            <div className="absolute top-full right-0 mt-2 w-48 bg-netflix-black/95 backdrop-blur-sm rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-2 px-4 text-sm">
                <div className="hover:text-red-600 cursor-pointer py-1">Profile</div>
                <div className="hover:text-red-600 cursor-pointer py-1">Settings</div>
                <div className="hover:text-red-600 cursor-pointer py-1">Sign Out</div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50 group"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute left-0 block w-6 h-0.5 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 top-3' : 'top-2'}`}></span>
              <span className={`absolute left-0 block w-6 h-0.5 bg-white transform transition-all duration-300 top-3 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute left-0 block w-6 h-0.5 bg-white transform transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 top-3' : 'top-4'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-netflix-black/95 backdrop-blur-sm md:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <nav className="flex flex-col items-center justify-center h-full text-white space-y-8">
            {['Home', 'TV Shows', 'Movies', 'New & Popular'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-2xl font-semibold hover:text-red-600 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
            <div className="flex items-center space-x-6 mt-8">
              <Search className="w-6 h-6 hover:text-red-600 transition-colors duration-300" />
              <Bell className="w-6 h-6 hover:text-red-600 transition-colors duration-300" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;