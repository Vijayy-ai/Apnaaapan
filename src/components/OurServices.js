import React, { useRef } from 'react';

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
  const scrollContainerRef = useRef(null);
  const itemsToRender = items && items.length ? items : services;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 420; // Card width (400px) + gap (20px)
      container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = 420; // Card width (400px) + gap (20px)
      container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-[#EFE7D5] py-20 px-4 md:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto overflow-x-hidden">
        {/* Header Section */}
        {showHeader && (
          <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
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
      
      {/* Services Cards with Pagination */}
      <div className="relative">
        {/* Navigation Arrows */}
        <button 
          onClick={scrollLeft}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 hover:shadow-xl transition-all duration-200 active:scale-95"
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={scrollRight}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 hover:shadow-xl transition-all duration-200 active:scale-95"
          aria-label="Scroll right"
        >
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        {/* Cards Container with Horizontal Scrolling */}
        <div 
          ref={scrollContainerRef}
          className="flex space-x-5 overflow-x-auto pb-4 px-4" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {itemsToRender.map((service, index) => (
            <div key={service.id} className="flex-shrink-0 w-[400px]">
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-300 group relative overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl" style={{ height: '520px' }}>
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
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1a2236] mb-6 group-hover:text-white transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-[#22223b] leading-relaxed text-base group-hover:text-white transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices; 