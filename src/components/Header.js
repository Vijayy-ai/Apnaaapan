import React, { useEffect, useRef, useState } from 'react';

const Header = () => {
  // Get current path to determine active page
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  const [openMenu, setOpenMenu] = useState(null); // 'ourStory' | 'work' | null
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null); // 'ourStory' | 'work' | null
  const closeTimeoutRef = useRef(null);

  const [showHeader, setShowHeader] = useState(true);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  const clearCloseTimeout = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleGroupEnter = (menuKey) => {
    clearCloseTimeout();
    setOpenMenu(menuKey);
  };

  const handleGroupLeave = () => {
    clearCloseTimeout();
    closeTimeoutRef.current = setTimeout(() => setOpenMenu(null), 150);
  };

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY || 0;
      if (!tickingRef.current) {
        window.requestAnimationFrame(() => {
          const lastY = lastScrollYRef.current;
          const isScrollingDown = currentY > lastY;
          const distance = Math.abs(currentY - lastY);

          if (currentY < 10) {
            setShowHeader(true);
          } else if (distance > 4) {
            setShowHeader(!isScrollingDown);
          }

          lastScrollYRef.current = currentY;
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Function to handle logo click - redirect to home page
  const handleLogoClick = () => {
    window.location.href = '/';
  };

  return (
    <header className={`bg-[#EFE7D5] border-b border-gray-200 shadow-sm fixed top-0 left-0 right-0 z-50 transition-transform duration-200 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        {/* Logo - Clickable */}
        <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
          <img 
            src="/images/apnaaapan logo.png" 
            alt="Apnaaapan Logo" 
            className="h-10 w-auto mr-2 select-none hover:opacity-80 transition-opacity duration-200"
            style={{marginTop: '-2px'}}
          />
        </div>
        
        {/* Navigation Links - Center (with dropdown groupings) */}
        <div className="hidden md:flex items-center space-x-8 relative">
          {/* Our Story group */}
          <div 
            className="relative"
            onMouseEnter={() => handleGroupEnter('ourStory')}
            onMouseLeave={handleGroupLeave}
          >
            <a 
              href="/our-story" 
              className={`font-dm-sans-medium text-sm transition-colors duration-200 relative ${
                currentPath === '/our-story' ? 'text-[#0D1B2A]' : 'text-[#5B5B5B]'
              }`}
            >
              <span className="inline-flex items-center gap-1">
                <span>Our Story</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor" 
                  className={`w-4 h-4 transition-transform duration-200 ${openMenu === 'ourStory' ? 'rotate-180' : 'rotate-0'}`}
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </span>
              {currentPath === '/our-story' && (
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full"></div>
              )}
            </a>
            {openMenu === 'ourStory' && (
              <div className="absolute left-0 top-full mt-2">
                <div className="rounded-xl bg-white shadow-lg ring-1 ring-black/5 py-2 min-w-[180px]">
                  <a href="/partner-with-us" className="block px-4 py-2 text-sm text-[#3B3B3B] hover:bg-gray-50">Partner With Us</a>
                  <a href="/about-us" className="block px-4 py-2 text-sm text-[#3B3B3B] hover:bg-gray-50">About Us</a>
                </div>
              </div>
            )}
          </div>

          {/* Work group */}
          <div 
            className="relative"
            onMouseEnter={() => handleGroupEnter('work')}
            onMouseLeave={handleGroupLeave}
          >
            <a 
              href="/work" 
              className={`font-dm-sans-medium text-sm transition-colors duration-200 relative ${
                currentPath === '/work' ? 'text-[#0D1B2A]' : 'text-[#5B5B5B]'
              }`}
            >
              <span className="inline-flex items-center gap-1">
                <span>Work</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 20 20" 
                  fill="currentColor" 
                  className={`w-4 h-4 transition-transform duration-200 ${openMenu === 'work' ? 'rotate-180' : 'rotate-0'}`}
                  aria-hidden="true"
                >
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                </svg>
              </span>
              {currentPath === '/work' && (
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-full"></div>
              )}
            </a>
            {openMenu === 'work' && (
              <div className="absolute left-0 top-full mt-2">
                <div className="rounded-xl bg-white shadow-lg ring-1 ring-black/5 py-2 min-w-[160px]">
                  <a href="/blog" className="block px-4 py-2 text-sm text-[#3B3B3B] hover:bg-gray-50">Blog</a>
                  <a href="/services" className="block px-4 py-2 text-sm text-[#3B3B3B] hover:bg-gray-50">Services</a>
                </div>
              </div>
            )}
          </div>

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
        
        {/* CTA Button + Mobile Menu Button - Right */}
        <div className="flex items-center gap-3">
          <a 
            href="/work-with-us" 
            className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-3.5 py-2 md:px-6 md:py-2.5 rounded-full font-nexa-bold text-xs md:text-sm flex items-center gap-2 hover:shadow-lg transition-all duration-200 hover:scale-105 whitespace-nowrap"
          >
            <span className="text-white text-xs">⭐</span>
            <span>Work with US</span>
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
            onClick={() => {
              setIsMobileMenuOpen((prev) => !prev);
              setMobileSubmenuOpen(null);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className={`w-6 h-6 transition-transform ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Horizontal separator line */}
      <div className="w-full h-px bg-[#D9D9D9]"></div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed top-[57px] left-0 right-0 bg-[#EFE7D5] border-b border-gray-200 shadow-sm transition-max-height duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[80vh]' : 'max-h-0'}`}
      >
        <div className="px-4 py-3 space-y-1">
          {/* Our Story group (accordion) */}
          <button
            className="w-full flex items-center justify-between py-3 text-[#3B3B3B] font-dm-sans-medium"
            onClick={() => setMobileSubmenuOpen((k) => (k === 'ourStory' ? null : 'ourStory'))}
          >
            <span className="inline-flex items-center gap-2">
              <span>Our Story</span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 transition-transform ${mobileSubmenuOpen === 'ourStory' ? 'rotate-180' : ''}`}> 
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
            </svg>
          </button>
          {mobileSubmenuOpen === 'ourStory' && (
            <div className="pl-4 pb-2 space-y-1">
              <a href="/partner-with-us" className="block py-2 text-sm text-[#3B3B3B]">Partner With Us</a>
              <a href="/about-us" className="block py-2 text-sm text-[#3B3B3B]">About Us</a>
            </div>
          )}

          {/* Work group (accordion) */}
          <button
            className="w-full flex items-center justify-between py-3 text-[#3B3B3B] font-dm-sans-medium"
            onClick={() => setMobileSubmenuOpen((k) => (k === 'work' ? null : 'work'))}
          >
            <span className="inline-flex items-center gap-2">
              <span>Work</span>
            </span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-5 h-5 transition-transform ${mobileSubmenuOpen === 'work' ? 'rotate-180' : ''}`}> 
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
            </svg>
          </button>
          {mobileSubmenuOpen === 'work' && (
            <div className="pl-4 pb-2 space-y-1">
              <a href="/blog" className="block py-2 text-sm text-[#3B3B3B]">Blog</a>
              <a href="/services" className="block py-2 text-sm text-[#3B3B3B]">Services</a>
            </div>
          )}

          <a href="/contact" className="block py-3 text-[#3B3B3B] font-dm-sans-medium">Contact Us</a>
          <a href="/with-apnaaapan" className="block py-3 text-[#3B3B3B] font-dm-sans-medium">With.Apnaaapan</a>
        </div>
      </div>
    </header>
  );
};

export default Header; 