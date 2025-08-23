import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

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

const OurServices = () => {
  const wrapperRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const sections = sectionRefs.current;
    const wrapper = wrapperRef.current;
    if (!sections.length || !wrapper) return;

    // Calculate max width
    const getMaxWidth = () =>
      sections.reduce((val, section) => val + section.offsetWidth, 0);
    
    let maxWidth = getMaxWidth();
    let tl = gsap.timeline();

    // Set initial position
    gsap.set(sections, { x: 0 });

    // Create the main animation timeline with smoother easing
    tl.to(sections, {
      x: () => -(maxWidth - window.innerWidth + 100),
      duration: 1,
      ease: "power1.out"
    });

    // Create ScrollTrigger with optimized settings
    ScrollTrigger.create({
      animation: tl,
      trigger: wrapper,
      pin: true,
      scrub: 0.5, // Reduced for smoother scrubbing
      start: "top top",
      end: () => "+=" + (maxWidth - window.innerWidth + 100),
      invalidateOnRefresh: true,
      markers: false,
      anticipatePin: 1 // Improves performance
    });

    // Handle window resize with debouncing
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        maxWidth = getMaxWidth();
        ScrollTrigger.refresh();
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className="bg-[#EFE7D5] py-20 px-4 md:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto overflow-x-hidden">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between mb-20">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1a2236] mb-4 tracking-tight">
              Our Services
            </h2>
            <p className="text-base md:text-lg text-[#22223b] mb-8 leading-relaxed max-w-xl">
              Whatever we take on, whether it's a product, website, or brand, it's never just for show. It's designed to work hard, deliver real value, and never coast on aesthetics.
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-6 py-2 rounded-full font-semibold text-base md:text-lg hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2">
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
      </div>
      
      {/* Horizontal Cards Animation Section - Using reference pattern */}
      <div className="w-full overflow-hidden">
        <div ref={wrapperRef} className="wrapper flex flex-nowrap" style={{ height: '100vh', willChange: 'transform', transform: 'translateZ(0)' }}>
          {services.map((service, idx) => (
            <section
              key={service.id}
              ref={el => sectionRefs.current[idx] = el}
              className="panel section bg-white rounded-3xl p-8 shadow-xl m-4 flex-shrink-0 flex flex-col justify-between border border-gray-300 transform-gpu will-change-transform group relative overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl"
              style={{ width: '420px', minWidth: '420px', height: '480px', willChange: 'transform', transform: 'translateZ(0)' }}
            >
              {/* Hover Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-orange-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out rounded-3xl"></div>
              
              {/* Arrow Icon */}
              <div className="absolute top-6 right-6 z-10">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <svg className="w-6 h-6 text-[#1a2236] transform rotate-45 transition-all duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
              
              {/* Content Container */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="mt-8 group-hover:mt-12 transition-all duration-500 ease-out">
                  <span className="text-orange-500 font-bold text-lg mb-4 block tracking-wider group-hover:text-white transition-colors duration-300">
                    ({service.id})
                  </span>
                  <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#1a2236] mb-4 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-[#22223b] leading-relaxed text-base md:text-lg group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices; 