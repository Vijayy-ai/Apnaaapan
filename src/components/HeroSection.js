import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#f5f5f0] px-8 py-16">
      {/* Main Hero Card Container */}
      <div className="relative max-w-6xl mx-auto w-full">
        {/* Hero Card with rounded corners and cream background */}
        <div className="relative bg-[#faf8f3] rounded-3xl p-12 md:p-16 shadow-lg overflow-hidden">
          
          {/* Top-left Blue Gradient Semi-half Circle with Extended Gradient */}
          <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-gradient-to-br from-[#5C84BF]/60 via-[#5C84BF]/40 via-white/20 to-transparent rounded-full -translate-x-1/3 -translate-y-1/3"></div>
          
          {/* Bottom-left Yellow Gradient Semi-half Circle with Light Border and Subtle Extended Gradient */}
          <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-gradient-to-tr from-[#F4BF11]/80 via-[#F4BF11]/60 via-white/20 to-transparent rounded-full -translate-x-1/3 translate-y-1/3 border border-[#F4BF11]/20 shadow-[0_0_20px_rgba(244,191,17,0.3)]"></div>
          
          {/* Subtle Extended Gradient Outside Bottom-left Circle */}
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-[#F4BF11]/15 via-white/10 to-transparent rounded-full -translate-x-1/3 translate-y-1/3"></div>
          
          {/* Content Container - Centered */}
          <div className="relative z-10 text-center">
            {/* Main Headline - Centered with Spacing */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight">
              <span className="text-gray-800 block mb-4">We first puts your goals</span>
              <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent font-bold block">
                to derive results
              </span>
            </h1>
            
            {/* Descriptive Text - Centered */}
            <p className="text-lg md:text-xl text-gray-700 mt-8 mb-12 leading-relaxed font-sans max-w-3xl mx-auto">
              At Apnaaapan, we handle it all—design, content, marketing, socials— to make your brand shine.
            </p>
            
            {/* CTA Button - Centered */}
            <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-3 mx-auto">
              <span className="text-white text-lg">📞</span>
              <span>Book a Free Strategy Call</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 