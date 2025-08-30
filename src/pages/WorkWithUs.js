import React from 'react';

const WorkWithUs = () => {
  return (
    <div className="min-h-screen bg-[#EFE7D5] py-60 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-60">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0D1B2A] mb-16 leading-tight" style={{ fontFamily: 'MADE Avenue PERSONAL USE' }}>
            Shape Your Growth With <span className="text-[#FFC107]">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#5B5B5B] max-w-4xl mx-auto leading-relaxed mb-20" style={{ fontFamily: 'NexaRegular' }}>
            Lorem ipsum dolor sit amet consectetur. Ultricies quis velit eu malesuada molestie arcu. Cursus interdum felis id lectus. A nullam erat aliquet mauris justo odio lorem. Nisl cum at non cras mi nibh accumsan dictum.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-10 py-5 rounded-full font-semibold text-xl flex items-center space-x-3 mx-auto hover:shadow-lg transition-all duration-200 hover:scale-105" style={{ fontFamily: 'NexaBold Regular' }}>
            <span>view open positions</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Quote/Testimonial Section */}
        <div className="text-center mb-32">
          <blockquote className="max-w-5xl mx-auto">
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D1B2A] leading-relaxed mb-6">
              "Figma ipsum component variant main layer. Scrolling object vector comment export group arrow. Layer hand align slice layout scrolling layout effect. Slice mask invite union asset project device ellipse. Star vector distribute bold text library fill effect create boolean. <span className="text-[#F26B2A]">- Pixel figma component duplicate polygon line main inspect</span>"
            </p>
            <footer className="mt-8">
              <cite className="not-italic">
                <div className="text-xl font-bold text-[#0D1B2A]">Gourav Sharma</div>
                <div className="text-lg text-[#5B5B5B]">Founder, Apnaaapan</div>
              </cite>
            </footer>
          </blockquote>
        </div>

        {/* Our Culture Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Left Section - Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              Our Culture
            </h2>
            <p className="text-lg md:text-xl text-[#5B5B5B] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Ultricies quis velit eu malesuada molestie arcu. Cursus interdum felis id lectus. A nullam erat aliquet mauris justo odio lorem. Nisl cum at non cras mi nibh accumsan dictum. Ultricies quis velit eu malesuada molestie arcu. Cursus interdum felis id lectus.
            </p>
          </div>

          {/* Right Section - Team Image */}
          <div className="relative">
            <div className="h-[400px] w-full rounded-2xl overflow-hidden">
              {/* Team Culture Image */}
              <img 
                src="/images/image 12.png" 
                alt="Our Team Culture - Four team members standing together" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Numbers That Shows Growth Section */}
        <div className="text-center mb-32 w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 leading-tight font-serif">
            Numbers That Shows Growth
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16 lg:gap-24 w-full">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#4A70B0] mb-3">3+</div>
              <p className="text-sm text-[#5B5B5B] leading-relaxed px-4">
                Years of excellence in digital marketing and brand building, delivering consistent results for our clients
              </p>
            </div>
            
            {/* Stat 2 */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#4A70B0] mb-3">65+</div>
              <p className="text-sm text-[#5B5B5B] leading-relaxed px-4">
                Successful campaigns completed across various industries, from startups to established enterprises
              </p>
            </div>
            
            {/* Stat 3 */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#4A70B0] mb-3">100+</div>
              <p className="text-sm text-[#5B5B5B] leading-relaxed px-4">
                Happy clients who trust us with their brand growth and digital presence strategies
              </p>
            </div>
            
            {/* Stat 4 */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#4A70B0] mb-3">75%+</div>
              <p className="text-sm text-[#5B5B5B] leading-relaxed px-4">
                Average increase in client engagement and conversion rates through our strategic campaigns
              </p>
            </div>
            
            {/* Stat 5 */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#4A70B0] mb-3">11+</div>
              <p className="text-sm text-[#5B5B5B] leading-relaxed px-4">
                Industry awards and recognitions for our innovative approach and outstanding results
              </p>
            </div>
          </div>
        </div>

        {/* Life at Apnaaapan Section */}
        <div className="mb-32 w-full">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 leading-tight font-serif text-center">
            Life at Apnaaapan
          </h2>
          
          <div className="relative">
            {/* Navigation Arrows */}
            <button className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            
            {/* Image Cards Container */}
            <div className="flex space-x-6 overflow-x-auto pb-4 px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {/* Card 1 - Team on Sofa */}
              <div className="flex-shrink-0 w-80 h-96 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/image 13.png" 
                  alt="Team members sitting on sofa - collaborative work environment" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Card 2 - Gaurav */}
              <div className="flex-shrink-0 w-80 h-96 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/gaurav.png" 
                  alt="Gaurav - Team member with red hoodie and wireless earbuds" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Card 3 - Team Discussion */}
              <div className="flex-shrink-0 w-80 h-96 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/image 14.png" 
                  alt="Team members in discussion - collaborative brainstorming session" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Card 4 - Kartik Patel */}
              <div className="flex-shrink-0 w-80 h-96 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="/images/kartik patel.png" 
                  alt="Kartik Patel - Team member with confident smile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Open Positions Section */}
        <div className="mb-32 w-full">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-8 leading-tight">
              Open Positions
            </h2>
            <p className="text-lg md:text-xl text-[#5B5B5B] max-w-4xl leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Ultricies quis velit eu malesuada molestie arcu. Cursus interdum felis id lectus. A nullam erat aliquet mauris justo odio lorem. Nisl cum at non cras mi nibh accumsan dictum.
            </p>
          </div>
          
          <div className="space-y-8 w-full">
            {/* Job Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0D1B2A]">
                  Sales Development Representative
                </h3>
                <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-200 hover:scale-105">
                  <span>Apply Now</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <p className="text-lg text-[#5B5B5B] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Ultricies quis velit eu malesuada molestie arcu. Cursus interdum felis id lectus. A nullam erat aliquet mauris justo odio lorem. Nisl cum at non cras mi nibh accumsan dictum.
              </p>
            </div>

            {/* Job Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0D1B2A]">
                  Sales Development Representative
                </h3>
                <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-200 hover:scale-105">
                  <span>Apply Now</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <p className="text-lg text-[#5B5B5B] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Ultricies quis velit eu malesuada molestie arcu. Cursus interdum felis id lectus. A nullam erat aliquet mauris justo odio lorem. Nisl cum at non cras mi nibh accumsan dictum.
              </p>
            </div>

            {/* Job Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-lg relative">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl md:text-3xl font-bold text-[#0D1B2A]">
                  Sales Development Representative
                </h3>
                <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-6 py-3 rounded-full font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-200 hover:scale-105">
                  <span>Apply Now</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <p className="text-lg text-[#5B5B5B] leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Ultricies quis velit eu malesuada molestie arcu. Cursus interdum felis id lectus. A nullam erat aliquet mauris justo odio lorem. Nisl cum at non cras mi nibh accumsan dictum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
