import React, { useState } from 'react';

const Blog = () => {
  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Function to go to previous page
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to go to next page
  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <main className="bg-[#EFE7D5] min-h-screen relative">
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
            <span className="text-[#0D1B2A] transition-all duration-300 hover:text-[#1a365d]" style={{ fontFamily: 'MADE Avenue PERSONAL USE' }}>Inside the</span>
            <span className="bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent ml-4 hover:from-orange-600 hover:to-yellow-500 transition-all duration-300" style={{ fontFamily: 'MADE Avenue PERSONAL USE' }}>Studio</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-[#2C2C2C] max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'NexaRegular' }}>
            Stories, Insights & Ideas from the World of Apnaaapan
          </p>
        </div>
      </section>

      {/* Top Blog Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-16 md:py-20 relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0D1B2A] tracking-tight">
            Top Blog
          </h2>
        </div>

        {/* Main Blog Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Featured Blog Post - Left Section */}
          <div className="lg:col-span-3">
                          <div className="mb-6">
                {/* Image Box */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-6 group cursor-pointer transition-all duration-300 hover:shadow-2xl">
                  <div className="relative overflow-hidden">
                    <img
                      src="/images/work/Tsczi1maYoHHENT2Fu6ychsMM 1.png"
                      alt="White banner with Reach Talent logo in stone archway"
                      className="w-full h-96 md:h-[28rem] object-cover transition-all duration-500 group-hover:scale-110"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              
              {/* Text Content Outside Box */}
              <div className="text-left">
                <div className="text-gray-500 text-sm font-medium mb-3">10 Min</div>
                <h3 className="text-2xl font-bold text-[#0D1B2A] mb-3">
                  The Power of Social Media for Your Brand
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  Discover how social media can shape your brand's voice, build real connections, and drive meaningful growth. From visibility to engagement, it's more than just posts-i...
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Two Smaller Blog Posts */}
          <div className="lg:col-span-2 space-y-0">
            {/* First Blog Post Preview */}
            <div className="flex h-48 md:h-56 mb-4 group cursor-pointer">
              {/* Image Box Only */}
              <div className="rounded-2xl overflow-hidden shadow-lg mr-4 flex-shrink-0 transition-all duration-300 hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <img
                    src="/images/istockphoto-104251890-612x612 1.png"
                    alt="Modern open-plan office space with cubicles and bright lighting"
                    className="w-40 h-40 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              {/* Text Content Outside Box */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="text-gray-500 text-sm font-medium mb-2">10 Min</div>
                <h3 className="text-lg font-bold text-[#0D1B2A] mb-2">
                  From Likes to Loyalty
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Discover how social media can shape your brand's voice, build real connections, and drive meaningful growth. From visibilit...
                </p>
              </div>
            </div>

            {/* Second Blog Post Preview */}
            <div className="flex h-48 md:h-56 group cursor-pointer">
              {/* Image Box Only */}
              <div className="rounded-2xl overflow-hidden shadow-lg mr-4 flex-shrink-0 transition-all duration-300 hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <img
                    src="/images/desk-setup-idea-3 1.png"
                    alt="Minimalist home office setup"
                    className="w-40 h-40 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              {/* Text Content Outside Box */}
              <div className="flex-1 flex flex-col justify-center">
                <div className="text-gray-500 text-sm font-medium mb-2">10 Min</div>
                <h3 className="text-lg font-bold text-[#0D1B2A] mb-2">
                  From Likes to Loyalty
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Discover how social media can shape your brand's voice, build real connections, and drive meaningful growth. From visibilit...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-16 md:py-20 relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#0D1B2A] tracking-tight">
            Latest Blog
          </h2>
        </div>

        {/* Blog Posts Grid - 2 rows of 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {/* Card 1 - Top Left */}
          <div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-4">
              <div className="w-full h-80 bg-white rounded-t-2xl border border-gray-100"></div>
            </div>
            <div className="text-left">
              <div className="text-gray-500 text-sm font-medium mb-2">10 Min</div>
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-2">
                The Power of Social Media...
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Discover how social media can shape your brand's voice, build real connections, and drive meaningful gro...
              </p>
            </div>
          </div>
          
          {/* Card 2 - Top Middle */}
          <div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-4">
              <div className="w-full h-80 bg-white rounded-t-2xl border border-gray-100"></div>
            </div>
            <div className="text-left">
              <div className="text-gray-500 text-sm font-medium mb-2">10 Min</div>
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-2">
                The Power of Social Media...
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Discover how social media can shape your brand's voice, build real connections, and drive meaningful gro...
              </p>
            </div>
          </div>
          
          {/* Card 3 - Top Right */}
          <div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-4">
              <div className="w-full h-80 bg-white rounded-t-2xl border border-gray-100"></div>
            </div>
            <div className="text-left">
              <div className="text-gray-500 text-sm font-medium mb-2">10 Min</div>
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-2">
                The Power of Social Media...
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Discover how social media can shape your brand's voice, build real connections, and drive meaningful gro...
              </p>
            </div>
          </div>
          
          {/* Card 4 - Bottom Left */}
          <div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-4">
              <div className="w-full h-80 bg-white rounded-t-2xl border border-gray-100"></div>
            </div>
            <div className="text-left">
              <div className="text-gray-500 text-sm font-medium mb-2">10 Min</div>
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-2">
                The Power of Social Media...
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Discover how social media can shape your brand's voice, build real connections, and drive meaningful gro...
              </p>
            </div>
          </div>
          
          {/* Card 5 - Bottom Middle */}
          <div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-4">
              <div className="w-full h-80 bg-white rounded-t-2xl border border-gray-100"></div>
            </div>
            <div className="text-left">
              <div className="text-gray-500 text-sm font-medium mb-2">10 Min</div>
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-2">
                The Power of Social Media...
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Discover how social media can shape your brand's voice, build real connections, and drive meaningful gro...
              </p>
            </div>
          </div>
          
          {/* Card 6 - Bottom Right */}
          <div>
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg mb-4">
              <div className="w-full h-80 bg-white rounded-t-2xl border border-gray-100"></div>
            </div>
            <div className="text-left">
              <div className="text-gray-500 text-sm font-medium mb-2">10 Min</div>
              <h3 className="text-lg font-bold text-[#0D1B2A] mb-2">
                The Power of Social Media...
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Discover how social media can shape your brand's voice, build real connections, and drive meaningful gro...
              </p>
            </div>
          </div>
        </div>

        {/* Pagination Controls */}
        <div className="flex items-center justify-center space-x-4">
          {/* Previous Arrow */}
          <button 
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
            className={`p-2 rounded-full transition-all duration-200 ${
              currentPage === 1 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-[#0D1B2A] hover:bg-gray-100'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4].map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                  currentPage === page
                    ? 'bg-[#0D1B2A] text-white'
                    : 'text-[#0D1B2A] hover:bg-gray-100'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Arrow */}
          <button 
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
            className={`p-2 rounded-full transition-all duration-200 ${
              currentPage === totalPages 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-[#0D1B2A] hover:bg-gray-100'
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>
    </main>
  );
};

export default Blog;
