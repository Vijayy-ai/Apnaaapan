import React from 'react';

const Blog = () => {
  return (
    <main className="bg-[#F8F5EE] min-h-screen relative">
      {/* Subtle Grid Pattern Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Horizontal line near top */}
        <div className="absolute top-32 left-0 right-0 h-px bg-gray-200/40"></div>
        {/* Vertical lines on left and right */}
        <div className="absolute top-0 bottom-0 left-8 w-px bg-gray-200/40"></div>
        <div className="absolute top-0 bottom-0 right-8 w-px bg-gray-200/40"></div>
        {/* Diamond nodes at intersections */}
        <div className="absolute top-32 left-8 w-2 h-2 bg-gray-300/50 transform rotate-45"></div>
        <div className="absolute top-32 right-8 w-2 h-2 bg-gray-300/50 transform rotate-45"></div>
        {/* Additional subtle grid elements */}
        <div className="absolute top-64 left-16 w-1 h-1 bg-gray-200/30 rounded-full"></div>
        <div className="absolute top-64 right-16 w-1 h-1 bg-gray-200/30 rounded-full"></div>
      </div>

      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-20 md:py-32 relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-[#0D1B2A] transition-all duration-300 hover:text-[#1a365d]">Inside the</span>
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent ml-4 hover:from-orange-600 hover:to-yellow-500 transition-all duration-300">Studio</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-[#2C2C2C] max-w-3xl mx-auto leading-relaxed">
            Stories, Insights & Ideas from the World of Apnaaapan
          </p>
        </div>
      </section>
    </main>
  );
};

export default Blog;
