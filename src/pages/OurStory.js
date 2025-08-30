import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const photos = [
  '/images/image 12.png',
  '/images/image 13.png',
  '/images/image 14.png'
];

const OurStory = () => {
  const wrapperRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const sections = sectionRefs.current;
    const wrapper = wrapperRef.current;
    if (!sections.length || !wrapper) return;

    // Calculate max width like in reference code
    const getMaxWidth = () =>
      sections.reduce((val, section) => val + section.offsetWidth, 0);
    
    let maxWidth = getMaxWidth();
    let scrollSpeed = 4;
    let tl = gsap.timeline();

    // Set initial position
    gsap.set(sections, { x: 0 });

    // Create the main animation timeline - extend to show last card fully
    tl.to(sections, {
      x: () => window.innerWidth - maxWidth - 100, // Extra 100px to ensure last card is fully visible
      duration: 1,
      ease: "none"
    });

    // Create ScrollTrigger with extended end point to show last card fully
    ScrollTrigger.create({
      animation: tl,
      trigger: wrapper,
      pin: true,
      scrub: 1,
      end: () => "+=" + (maxWidth + 100) / scrollSpeed, // Extra scroll distance for last card
      invalidateOnRefresh: true
    });

    // Handle window resize
    const handleResize = () => {
      maxWidth = getMaxWidth();
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      tl.kill();
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="bg-[#EFE7D5] min-h-screen">
      <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-start">
          <div className="md:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#0D1B2A] tracking-tight font-serif">
              Our Story
            </h1>
            <p className="mt-8 text-sm md:text-base leading-6 text-[#2C2C2C] max-w-xl">
              At Apnaaapan, we believe in advertising as a catalyst for significant business growth. Originally rooted in entertainment, our services have expanded.
            </p>
          </div>

          <div className="md:col-span-5 flex justify-center md:justify-end">
            <img
              src="/images/Logo Icon A 4.png"
              alt="Apnaaapan monogram"
              className="w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain select-none"
            />
          </div>
        </div>

        <div className="mt-32 md:mt-40 lg:mt-48 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((src, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden bg-[#E8DFD0] aspect-[4/3]"
            >
              <img
                src={src}
                alt={`Our story ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Faux carousel dots to match design */}
              <div className="absolute bottom-3 left-3 flex items-center gap-2">
                <span className="inline-block w-6 h-6 bg-white/90 text-[#5B5B5B] text-xs rounded-full grid place-items-center shadow">{index === 0 ? '●' : '○'}</span>
              </div>
              <div className="absolute bottom-3 right-3 flex items-center gap-2">
                <span className="inline-block w-6 h-6 bg-white/90 text-[#5B5B5B] text-xs rounded-full grid place-items-center shadow">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our People Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
          {/* Left Column - Title and Description */}
          <div className="lg:col-span-5 lg:pr-8 flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1B2A] mb-8 leading-tight" style={{ fontFamily: 'MADE Avenue PERSONAL USE' }}>
              Our People
            </h2>
            <div className="space-y-4">
              <p className="text-lg md:text-xl leading-7 text-[#2C2C2C]" style={{ fontFamily: 'NexaRegular' }}>
                We are a collective of creatives, strategists, editors, videographers and more.
              </p>
              <p className="text-lg md:text-xl leading-7 text-[#2C2C2C]" style={{ fontFamily: 'NexaRegular' }}>
                The work we do inspires our culture and we are constantly evolving to create a dynamic and successful working environment where everyone feels heard and supported.
              </p>
            </div>
          </div>

          {/* Right Column - Founder Profile */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-96 md:w-96 md:h-[28rem] lg:w-[28rem] lg:h-[32rem] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/gaurav.png"
                  alt="Gourav Sharma"
                  className="w-full h-full object-cover"
                />
                {/* Badges positioned at bottom-left of image */}
                <div className="absolute -bottom-3 left-6 flex flex-row gap-3">
                  <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#DF5316] to-[#F4BF11] text-white text-sm font-medium rounded-full shadow-md" style={{ fontFamily: 'NexaBold' }}>
                    <span className="mr-2">⭐</span>
                    Founder
                  </span>
                  <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#DF5316] to-[#F4BF11] text-white text-sm font-medium rounded-full shadow-md" style={{ fontFamily: 'NexaBold' }}>
                    <span className="mr-2">⭐</span>
                    Gourav Sharma
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row - Co-Founder and Additional Description */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 mt-20 lg:mt-24">
          {/* Left Column - Co-Founder Profile */}
          <div className="lg:col-span-7 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-96 md:w-96 md:h-[28rem] lg:w-[28rem] lg:h-[32rem] rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/kartik patel.png"
                  alt="Karthik Patel"
                  className="w-full h-full object-cover"
                />
                {/* Badges positioned at bottom-left of image */}
                <div className="absolute -bottom-3 left-6 flex flex-row gap-3">
                  <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#DF5316] to-[#F4BF11] text-white text-sm font-medium rounded-full shadow-md" style={{ fontFamily: 'NexaBold' }}>
                    <span className="mr-2">⭐</span>
                    Co-Founder
                  </span>
                  <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#DF5316] to-[#F4BF11] text-white text-sm font-medium rounded-full shadow-md" style={{ fontFamily: 'NexaBold' }}>
                    <span className="mr-2">⭐</span>
                    Karthik Patel
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Additional Description */}
          <div className="lg:col-span-5 lg:pl-8 flex flex-col justify-center">
            <p className="text-lg md:text-xl leading-7 text-[#2C2C2C]" style={{ fontFamily: 'NexaRegular' }}>
              We're not just a team—we're a blend of creators, thinkers, and doers who believe in the power of meaningful work. Whether it's crafting a bold visual, shaping a sharp message, or producing a story that sticks, we work together with intention. Every voice matters here, and every idea has a place. It's this mix of energy, empathy, and ambition that keeps us moving forward—and makes what we do truly stand out.
            </p>
          </div>
        </div>
      </section>

      {/* Photo Grid Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            { name: "Yashaswi Mertiya", role: "Social Media Manager" },
            { name: "Karthik Patel", role: "Co-Founder" },
            { name: "Team Member", role: "Creative Director" },
            { name: "Team Member", role: "Design Lead" },
            { name: "Team Member", role: "Content Strategist" },
            { name: "Team Member", role: "Project Manager" }
          ].map((member, index) => {
            // Determine overlay color based on column (index % 3)
            const getOverlayColor = (index) => {
              if (index % 3 === 0) return 'from-orange-600/80 via-orange-500/40 to-transparent'; // First column - Orange
              if (index % 3 === 1) return 'from-yellow-500/80 via-yellow-400/40 to-transparent'; // Second column - Yellow
              return 'from-blue-600/80 via-blue-500/40 to-transparent'; // Third column - Blue
            };

            return (
              <div
                key={index}
                className="relative rounded-2xl overflow-hidden h-72 md:h-80 lg:h-96 transition-all duration-300 hover:scale-105 cursor-pointer group"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 25%, #FFD700 50%, #87CEEB 75%, #4682B4 100%)',
                  padding: '6px'
                }}
              >
                <div 
                  className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white transition-all duration-300 pointer-events-none"
                  style={{ zIndex: 10 }}
                ></div>
                <div className="w-full h-full rounded-xl overflow-hidden relative">
                  <img
                    src="/images/file 1.png"
                    alt={member.name}
                    className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
                  />
                  
                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${getOverlayColor(index)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                      <p className="text-sm opacity-90">{member.role}</p>
                    </div>
                    
                    {/* Arrow button */}
                    <div className="absolute bottom-4 right-4 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300">
                      <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Values Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-16 md:py-20">
        {/* Our Values Cards */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0D1B2A] mb-16 text-center" style={{ fontFamily: 'MADE Avenue PERSONAL USE' }}>
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Collaborate Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-[500px] group cursor-pointer transition-all duration-500 relative">
              {/* White top section with icon */}
              <div className="p-8 flex flex-col items-center justify-center h-1/2 group-hover:h-3/4 transition-all duration-500 bg-white relative z-10">
                <img 
                  src="/images/image 16.png" 
                  alt="Collaborate icon" 
                  className="w-40 h-40 object-contain"
                />
                {/* Curved bottom edge */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-b-3xl"></div>
              </div>
              {/* Orange bottom section */}
              <div className="bg-[#FF6B35] text-white px-8 py-8 text-center font-bold text-5xl h-1/2 group-hover:h-1/4 flex items-center justify-center rounded-t-3xl transition-all duration-500 relative z-5" style={{ fontFamily: 'MADE Avenue PERSONAL USE' }}>
                Collaborate
              </div>
            </div>

            {/* Innovate Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-[500px] group cursor-pointer transition-all duration-500 relative">
              {/* White top section with icon */}
              <div className="p-8 flex flex-col items-center justify-center h-1/2 group-hover:h-3/4 transition-all duration-500 bg-white relative z-10">
                <img 
                  src="/images/image 17.png" 
                  alt="Innovate icon" 
                  className="w-40 h-40 object-contain"
                />
                {/* Curved bottom edge */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-b-3xl"></div>
              </div>
              {/* Yellow bottom section */}
              <div className="bg-[#FFD700] text-white px-8 py-8 text-center font-bold text-5xl h-1/2 group-hover:h-1/4 flex items-center justify-center rounded-t-3xl transition-all duration-500 relative z-5" style={{ fontFamily: 'MADE Avenue PERSONAL USE' }}>
                Innovate
              </div>
            </div>

            {/* Elevate Card */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-xl h-[500px] group cursor-pointer transition-all duration-500 relative">
              {/* White top section with icon */}
              <div className="p-8 flex flex-col items-center justify-center h-1/2 group-hover:h-3/4 transition-all duration-500 bg-white relative z-10">
                <img 
                  src="/images/image 18.png" 
                  alt="Elevate icon" 
                  className="w-40 h-40 object-contain"
                />
                {/* Curved bottom edge */}
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-white rounded-b-3xl"></div>
              </div>
              {/* Blue bottom section */}
              <div className="bg-[#4682B4] text-white px-8 py-8 text-center font-bold text-5xl h-1/2 group-hover:h-1/4 flex items-center justify-center rounded-t-3xl transition-all duration-500 relative z-5" style={{ fontFamily: 'MADE Avenue PERSONAL USE' }}>
                Elevate
              </div>
            </div>
          </div>
        </div>

        {/* What sets us apart Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left side - Color bars */}
            <div className="lg:w-8 flex lg:flex-col">
              <div className="flex-1 lg:flex-none lg:h-24 bg-[#FF6B35]"></div>
              <div className="flex-1 lg:flex-none lg:h-24 bg-[#FFD700]"></div>
              <div className="flex-1 lg:flex-none lg:h-24 bg-[#4682B4]"></div>
            </div>
            
            {/* Right side - Content */}
            <div className="flex-1 p-8 lg:p-12">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1B2A]" style={{ fontFamily: 'MADE Avenue PERSONAL USE' }}>
                  What sets us apart from others?
                </h3>
                <div className="flex space-x-1 ml-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-[#FF6B35]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-lg md:text-xl leading-8 text-[#2C2C2C] max-w-5xl" style={{ fontFamily: 'NexaRegular' }}>
                We genuinely care about your goals. Every team here, from design to marketing, works with one focus: making sure you win. We don't believe in one-size-fits-all solutions. Instead, we listen, we understand, and we build what actually works for you. It's not just about delivering work—it's about delivering impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="bg-[#EFE7D5] py-20 px-4 md:px-8 overflow-x-hidden">
        <div className="max-w-7xl mx-auto overflow-x-hidden">
          {/* Header Section */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-[#0D1B2A] mb-4 tracking-tight">
              Milestones
            </h2>
            <p className="text-base md:text-lg text-[#2C2C2C] leading-relaxed max-w-2xl mx-auto">
              Key Moments That Shaped Our Journey
            </p>
          </div>
        </div>
        
        {/* Horizontal Cards Animation Section */}
        <div className="w-full overflow-hidden">
          <div ref={wrapperRef} className="wrapper flex flex-nowrap" style={{ height: '100vh' }}>
            {[
              {
                id: "2023",
                title: "The Beginning",
                description: "Launched Apnaaapan with a vision to offer client-first creative solutions."
              },
              {
                id: "2024",
                title: "First 100 Clients",
                description: "Successfully delivered 50+ branding and marketing projects across industries."
              },
              {
                id: "2025",
                title: "Major Brand Wins",
                description: "Partnered with leading national clients & launched 360° campaigns."
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
            ].map((milestone, idx) => (
              <section
                key={milestone.id}
                ref={el => sectionRefs.current[idx] = el}
                className="panel section bg-white rounded-3xl p-8 shadow-xl m-4 flex-shrink-0 flex flex-col justify-between border border-gray-300 transform-gpu will-change-transform group relative overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl"
                style={{ width: '420px', minWidth: '420px', height: '480px' }}
              >
                {/* Hover Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-orange-600 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out rounded-3xl"></div>
                
                {/* Arrow Icon */}
                <div className="absolute top-6 right-6 z-10">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <svg className="w-6 h-6 text-[#0D1B2A] transform rotate-45 transition-all duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
                
                {/* Content Container */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="mt-8 group-hover:mt-12 transition-all duration-500 ease-out">
                    <span className="text-orange-500 font-bold text-lg mb-4 block tracking-wider group-hover:text-white transition-colors duration-300">
                      ({milestone.id})
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#0D1B2A] mb-4 group-hover:text-white transition-colors duration-300">
                      {milestone.title}
                    </h3>
                    <p className="text-[#2C2C2C] leading-relaxed text-base md:text-lg group-hover:text-white transition-colors duration-300">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      
    </main>
  );
};

export default OurStory;


