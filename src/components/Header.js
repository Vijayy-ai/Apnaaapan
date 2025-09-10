import React from 'react';

const Header = () => {
  // Get current path to determine active page
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  // Function to handle logo click - redirect to home page
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <header className="bg-[#EFE7D5] border-b border-gray-200 shadow-sm">
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
            className={`font-dm-sans-medium text-sm transition-colors duration-200 relative ${
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
            href="/partner-with-us" 
            className={`font-dm-sans-medium text-sm transition-colors duration-200 relative ${
              currentPath === '/partner-with-us' ? 'text-[#0D1B2A]' : 'text-[#5B5B5B]'
            }`}
          >
            Partner With Us
            {/* Active indicator line */}
            {currentPath === '/partner-with-us' && (
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full"></div>
            )}
          </a>
          <a 
            href="/about-us" 
            className={`font-dm-sans-medium text-sm transition-colors duration-200 relative ${
              currentPath === '/about-us' ? 'text-[#0D1B2A]' : 'text-[#5B5B5B]'
            }`}
          >
            About Us
            {/* Active indicator line */}
            {currentPath === '/about-us' && (
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full"></div>
            )}
          </a>
          <a 
            href="/work" 
            className={`font-dm-sans-medium text-sm transition-colors duration-200 relative ${
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
            className={`font-dm-sans-medium text-sm transition-colors duration-200 relative ${
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
            href="/services" 
            className={`font-dm-sans-medium text-sm transition-colors duration-200 relative ${
              currentPath === '/services' ? 'text-[#0D1B2A]' : 'text-[#5B5B5B]'
            }`}
          >
            Services
            {/* Active indicator line */}
            {currentPath === '/services' && (
              <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full"></div>
            )}
          </a>
          <a 
            href="/contact" 
            className={`font-dm-sans-medium text-sm transition-colors duration-200 relative ${
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
            className={`font-dm-sans-medium text-sm transition-colors duration-200 relative ${
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
          <a 
            href="/work-with-us" 
            className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-6 py-2.5 rounded-full font-nexa-bold text-sm flex items-center space-x-2 hover:shadow-lg transition-all duration-200 hover:scale-105 transition-all duration-200"
          >
            <span className="text-white text-xs">⭐</span>
            <span>Work with US</span>
          </a>
        </div>
      </nav>
      
      {/* Horizontal separator line */}
      <div className="w-full h-px bg-[#D9D9D9]"></div>
    </header>
  );
};

export default Header; 