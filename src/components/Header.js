import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/images/apnaaapan logo.png" 
            alt="Apnaaapan Logo" 
            className="h-10 w-auto mr-2 select-none"
            style={{marginTop: '-2px'}}
          />
        </div>
        
        {/* Navigation Links - Center */}
        <div className="hidden md:flex items-center space-x-8">
          <a 
            href="/our-story" 
            className="font-medium text-sm transition-colors duration-200"
            style={{ color: '#5B5B5B' }}
          >
            Our Story
          </a>
          <a 
            href="/work" 
            className="font-medium text-sm transition-colors duration-200"
            style={{ color: '#5B5B5B' }}
          >
            Work
          </a>
          <a 
            href="/blog" 
            className="font-medium text-sm transition-colors duration-200"
            style={{ color: '#5B5B5B' }}
          >
            Blog
          </a>
          <a 
            href="/contact" 
            className="font-medium text-sm transition-colors duration-200"
            style={{ color: '#5B5B5B' }}
          >
            Contact Us
          </a>
          <a 
            href="/with-apnaaapan" 
            className="font-medium text-sm transition-colors duration-200"
            style={{ color: '#5B5B5B' }}
          >
            With.Apnaaapan
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