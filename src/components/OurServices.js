import React, { useEffect, useRef, useState } from 'react';

const OurServices = () => {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

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
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowWidth = window.innerWidth;
      const sectionWidth = rect.width;
      
      // Calculate horizontal scroll progress within the section
      const sectionLeft = rect.left;
      const sectionRight = rect.right;
      
      if (sectionLeft <= windowWidth && sectionRight >= 0) {
        // Section is in view
        const progress = Math.max(0, Math.min(1, (windowWidth - sectionLeft) / (windowWidth + sectionWidth)));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCardOpacity = (index) => {
    const cardProgress = Math.max(0, Math.min(1, (scrollProgress - index * 0.33) / 0.33));
    return cardProgress;
  };

  const getCardTransform = (index) => {
    const cardProgress = Math.max(0, Math.min(1, (scrollProgress - index * 0.33) / 0.33));
    const translateX = (1 - cardProgress) * 100; // Slide from right to left
    return `translateX(${translateX}%)`;
  };

  return (
    <section ref={sectionRef} className="bg-[#faf8f3] py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-800 mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whatever we take on, whether it's a product, website, or brand, it's never just for show. It's designed to work hard, deliver real value, and never coast on aesthetics.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-3">
              <span>View All</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* Right Content - Logo */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Circular Logo */}
              <div className="w-48 h-48 bg-white rounded-full shadow-lg flex items-center justify-center relative">
                {/* Actual Logo Image */}
                <img 
                  src="/Group 100.png" 
                  alt="Company Logo" 
                  className="w-32 h-32 object-contain relative z-10"
                />
                
                {/* Circular Text */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
                  <defs>
                    <path id="circle" d="M 100 100 m -80 0 a 80 80 0 1 1 160 0 a 80 80 0 1 1 -160 0" />
                  </defs>
                  <text className="text-xs font-medium fill-gray-600">
                    <textPath href="#circle" startOffset="50%">
                      One Stop Solution for All Your Needs
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Services Cards Section */}
        <div className="relative overflow-hidden">
          <div className="flex space-x-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-96 bg-white rounded-2xl p-8 shadow-lg relative transition-all duration-1000 ease-out"
                style={{
                  opacity: getCardOpacity(index),
                  transform: getCardTransform(index),
                }}
              >
                {/* Arrow Icon */}
                <div className="absolute top-6 right-6">
                  <svg className="w-6 h-6 text-gray-800 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>

                {/* Service Content */}
                <div className="mt-8">
                  <span className="text-orange-500 font-semibold text-sm mb-4 block">
                    ({service.id})
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-6">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices; 