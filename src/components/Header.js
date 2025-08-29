import React from 'react';

const Header = () => {
  // Get current path to determine active page
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  // Function to handle logo click - redirect to home page
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo - Clickable */}
        <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
          <img 
            src="/images/apnaaapan logo.png" 
            alt="Apnaaapan Logo" 
            className="h-10 w-auto mr-2 select-none hover:opacity-80 transition-opacity duration-200"
            style={{marginTop: '-2px'}}
          />
        </div>
        
        {/* Navigation Links - Center */}
        <div className="hidden md:flex items-center space-x-8 relative">
          <a 
            href="/our-story" 
            className={`font-medium text-sm transition-colors duration-200 relative ${
              currentPath === '/our-story' ? 'text-[#0D1B2A]' : 'text-[#5B5B5B]'
            }`}
          >
            Our Story
            {/* Active indicator line */}
            {currentPath === '/our-story' && (
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full"></div>
            )}
          </a>
          <a 
            href="/work" 
            className={`font-medium text-sm transition-colors duration-200 relative ${
              currentPath === '/work' ? 'text-[#0D1B2A]' : 'text-[#5B5B5B]'
            }`}
          >
            Work
            {/* Active indicator line */}
            {currentPath === '/work' && (
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full"></div>
            )}
          </a>
          <a 
            href="/blog" 
            className={`font-medium text-sm transition-colors duration-200 relative ${
              currentPath === '/blog' ? 'text-[#0D1B2A]' : 'text-[#5B5B5B]'
            }`}
          >
            Blog
            {/* Active indicator line */}
            {currentPath === '/blog' && (
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full"></div>
            )}
          </a>
          <a 
            href="/contact" 
            className={`font-medium text-sm transition-colors duration-200 relative ${
              currentPath === '/contact' ? 'text-[#0D1B2A]' : 'text-[#5B5B5B]'
            }`}
          >
            Contact Us
            {/* Active indicator line */}
            {currentPath === '/contact' && (
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full"></div>
            )}
          </a>
          <a 
            href="/with-apnaaapan" 
            className={`font-medium text-sm transition-colors duration-200 relative ${
              currentPath === '/with-apnaaapan' ? 'text-[#0D1B2A]' : 'text-[#5B5B5B]'
            }`}
          >
            With.Apnaaapan
            {/* Active indicator line */}
            {currentPath === '/with-apnaaapan' && (
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full"></div>
            )}
          </a>
        </div>
        
        {/* CTA Button - Right */}
        <div className="flex items-center">
          <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-6 py-2.5 rounded-full font-medium text-sm flex items-center space-x-2 hover:shadow-lg transition-all duration-200 hover:scale-105">
            <span className="text-white text-xs">⭐</span>
            <span>Work with US</span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header; 