import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#EFE7D5] via-[#F5F0E8] to-[#E8DCC6] px-4 md:px-8 py-12 md:py-16">
      {/* Main Content Container - Adjusted size to match design */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Hero Card - Properly sized as in design image */}
        <div className="relative bg-[#faf8f3] rounded-2xl md:rounded-3xl p-10 sm:p-14 md:p-20 lg:p-24 shadow-2xl overflow-hidden min-h-[70vh] flex items-center justify-center">
          
          {/* Background Gradient Shapes - EXACTLY as in design image */}
          
          {/* Top-left Blue Gradient Arc - with dark border and larger spread as in design */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#5C84BF]/70 via-[#5C84BF]/50 via-[#5C84BF]/30 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2 border-2 border-[#5C84BF]/60"></div>
          
          {/* Bottom-left Large Yellow-Orange Gradient Arc - positioned exactly as in design */}
          <div className="absolute bottom-0 left-0 w-[380px] h-[380px] bg-gradient-to-tr from-yellow-400/50 via-orange-400/40 to-transparent rounded-full -translate-x-1/4 translate-y-1/4"></div>
          
          {/* Right side Orange-Red Gradient Arc - positioned exactly as in design */}
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-orange-500/45 via-red-400/35 to-transparent rounded-full translate-x-1/3 -translate-y-1/3"></div>
          
          {/* Content Container - Centered */}
          <div className="relative z-10 text-center max-w-4xl mx-auto">
            {/* Main Headline - EXACTLY as in design image */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif leading-tight mb-6">
              <span className="text-gray-800 block mb-3 font-medium">We first puts your goals</span>
              <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent font-bold block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                to derive results
              </span>
            </h1>
            
            {/* Descriptive Text - EXACTLY as in design image */}
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-10 leading-relaxed font-sans max-w-4xl mx-auto">
              At Apnaaapan, we handle it all—design, content, marketing, socials—to make your brand shine.
            </p>
            
            {/* CTA Button - EXACTLY as in design image */}
            <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-10 sm:px-12 py-4 sm:py-5 rounded-full font-semibold text-base sm:text-lg md:text-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center space-x-3 mx-auto shadow-lg">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>Book a Free Strategy Call</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 