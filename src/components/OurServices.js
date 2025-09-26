import React, { useEffect, useRef, useState } from 'react';

const services = [
  {
    id: "01",
    title: "Branding & Identity.",
    description: "Whatever we take on, whether it's a product, website, or brand, it's never just for show. It's designed to work hard, deliver real value, and never coast on aesthetics."
  },
  {
    id: "02",
    title: "Design & Creative.",
    description: "Whatever we take on, whether it's a product, website, or brand, it's never just for show. It's designed to work hard, deliver real value, and never coast on aesthetics."
  },
  {
    id: "03",
    title: "Social Media & Marketing.",
    description: "Whatever we take on, whether it's a product, website, or brand, it's never just for show. It's designed to work hard, deliver real value, and never coast on aesthetics."
  },
  {
    id: "04",
    title: "Web Development.",
    description: "Whatever we take on, whether it's a product, website, or brand, it's never just for show. It's designed to work hard, deliver real value, and never coast on aesthetics."
  },
  {
    id: "05",
    title: "Marketing Strategy.",
    description: "Whatever we take on, whether it's a product, website, or brand, it's never just for show. It's designed to work hard, deliver real value, and never coast on aesthetics."
  }
];

const OurServices = ({ showHeader = true, items }) => {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const firstCardRef = useRef(null);
  const secondCardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(400);
  const [gapPx, setGapPx] = useState(20); // Tailwind space-x-5 = 1.25rem ~ 20px
  const [currentIndex, setCurrentIndex] = useState(0);
  const [stepDistance, setStepDistance] = useState(420);
  const itemsToRender = items && items.length ? items : services;
  const [sectionHeightPx, setSectionHeightPx] = useState(0);
  const [stickyHeightPx, setStickyHeightPx] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (firstCardRef.current) {
        setCardWidth(firstCardRef.current.offsetWidth);
      }
      // Prefer measuring distance between first two cards to include margins/padding
      if (firstCardRef.current && secondCardRef.current) {
        const step = Math.abs(secondCardRef.current.offsetLeft - firstCardRef.current.offsetLeft);
        if (step > 0) {
          setStepDistance(step);
        }
      } else {
        // Fallback to width + assumed gap
        setStepDistance(cardWidth + gapPx);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Measure cards and compute section height so vertical scroll length maps to total horizontal distance
  useEffect(() => {
    const measureHeights = () => {
      const container = scrollContainerRef.current;
      if (!container) return;
      const viewportH = window.innerHeight || 0;
      setStickyHeightPx(viewportH);
      // Use ceil to avoid fractional off-by-one early release
      const totalHorizontal = Math.max(0, Math.ceil(container.scrollWidth - container.clientWidth));
      // Keep sticky until horizontal animation completes; add 1px buffer to prevent early release
      const newSectionHeight = viewportH + totalHorizontal + 1;
      setSectionHeightPx(newSectionHeight);
    };
    measureHeights();
    window.addEventListener('resize', measureHeights);
    return () => window.removeEventListener('resize', measureHeights);
  }, []);

  // Drive horizontal scrollLeft from vertical scroll progress within the section
  useEffect(() => {
    const el = sectionRef.current;
    const container = scrollContainerRef.current;
    if (!el || !container) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const totalScrollableY = Math.max(1, sectionHeightPx - stickyHeightPx);
      // Progress while the sticky area is on screen (locked to top, full height)
      const progressedY = Math.min(totalScrollableY, Math.max(0, -rect.top));
      const progress = progressedY / totalScrollableY;
      const maxScrollLeft = Math.max(0, container.scrollWidth - container.clientWidth);
      container.scrollLeft = maxScrollLeft * progress;

      // Update pagination index based on mapped scrollLeft
      const step = stepDistance || (cardWidth + gapPx);
      if (step > 0) {
        const idx = Math.round(container.scrollLeft / step);
        setCurrentIndex(idx);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sectionRef, scrollContainerRef, sectionHeightPx, stickyHeightPx, stepDistance, cardWidth, gapPx]);

  const scrollToIndex = (index) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const step = stepDistance || (cardWidth + gapPx);
    const maxScrollLeft = container.scrollWidth - container.clientWidth;
    const targetLeft = Math.min(Math.max(0, index * step), Math.max(0, maxScrollLeft));
    container.scrollTo({ left: targetLeft, behavior: 'smooth' });
  };

  const scrollLeft = () => {
    scrollToIndex(Math.max(0, currentIndex - 1));
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const step = cardWidth + gapPx;
    const maxIndex = Math.ceil((container.scrollWidth - container.clientWidth) / step);
    scrollToIndex(Math.min(maxIndex, currentIndex + 1));
  };

  return (
    <section className="bg-[#EFE7D5] pt-14 md:pt-20 pb-0 px-4 md:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto overflow-x-hidden">
        {/* Header Section */}
        {showHeader && (
          <div className="flex flex-col lg:flex-row items-center justify-between mb-12 md:mb-20">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1a2236] mb-4 tracking-tight">
                Our Services
              </h2>
              <p className="text-base md:text-lg text-[#22223b] mb-8 leading-relaxed max-w-xl">
                Whatever we take on, whether it's a product, website, or brand, it's never just for show. It's designed to work hard, deliver real value, and never coast on aesthetics. We believe in creating solutions that not only look great but perform exceptionally well, driving meaningful results for our clients and their businesses.
              </p>
              <button 
                onClick={() => window.location.href = '/services'}
                className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-6 py-2 rounded-full font-semibold text-base md:text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <span>View All</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <img 
                src="/images/Group 100.png" 
                alt="Company Logo" 
                className="w-48 h-48 object-contain relative z-10"
              />
            </div>
          </div>
        )}
      </div>
      
      {/* Services Cards with scroll-controlled horizontal movement */}
      <div className="relative" ref={sectionRef} style={{ height: sectionHeightPx ? `${sectionHeightPx}px` : '200vh' }}>
        {/* Sticky viewport locks to top and fills viewport to freeze vertical motion */}
        <div className="sticky top-0 h-screen flex items-center justify-center" ref={stickyRef}>
          <div className="w-full">
            <div 
              ref={scrollContainerRef}
              className="flex space-x-5 px-4 overflow-x-hidden"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
          {itemsToRender.map((service, index) => (
            <div 
              key={service.id} 
              className="flex-shrink-0 w-[300px] sm:w-[340px] md:w-[400px]" 
              ref={index === 0 ? firstCardRef : (index === 1 ? secondCardRef : null)}
            >
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-300 group relative overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl h-[460px] md:h-[520px]">
                {/* Hover Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-orange-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out rounded-3xl"></div>
                
                {/* Arrow Icon */}
                <div className="absolute top-6 right-6 z-10">
                  <svg className="w-6 h-6 text-[#1a2236] transform rotate-45 transition-all duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
                
                {/* Content Container */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex-1">
                    <span className="text-orange-500 font-bold text-lg mb-6 block tracking-wider group-hover:text-white transition-colors duration-300">
                      ({service.id})
                    </span>
                    <h3 className="text-xl md:text-3xl font-serif font-bold text-[#1a2236] mb-4 md:mb-6 group-hover:text-white transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-[#22223b] leading-relaxed text-sm md:text-base group-hover:text-white transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices; 