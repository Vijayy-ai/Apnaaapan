import React from 'react';

const WorkWithUs = () => {
  return (
    <div className="min-h-screen bg-[#EFE7D5] py-40 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-40">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#0D1B2A] mb-12 leading-tight">
            Shape Your Growth With <span className="text-[#FFC107]">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#5B5B5B] max-w-4xl mx-auto leading-relaxed mb-16">
            Lorem ipsum dolor sit amet consectetur. Ultricies quis velit eu malesuada molestie arcu. Cursus interdum felis id lectus. A nullam erat aliquet mauris justo odio lorem. Nisl cum at non cras mi nibh accumsan dictum.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-10 py-5 rounded-full font-semibold text-xl flex items-center space-x-3 mx-auto hover:shadow-lg transition-all duration-200 hover:scale-105">
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
        {/* Numbers That Shows Growth Section */}
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 leading-tight">
            Numbers That Shows Growth
          </h2>
          
          <div className="flex justify-center space-x-16">
            {/* Stat 1 */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#4A70B0] mb-3">3+</div>
              <p className="text-sm text-[#5B5B5B] max-w-[120px]">
                Lorem ipsum dolor sit amet consectetur. Ultrici...
              </p>
            </div>
            
            {/* Stat 2 */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#4A70B0] mb-3">65+</div>
              <p className="text-sm text-[#5B5B5B] max-w-[120px]">
                Lorem ipsum dolor sit amet consectetur. Ultrici...
              </p>
            </div>
            
            {/* Stat 3 */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#4A70B0] mb-3">100+</div>
              <p className="text-sm text-[#5B5B5B] max-w-[120px]">
                Lorem ipsum dolor sit amet consectetur. Ultrici...
              </p>
            </div>
            
            {/* Stat 4 */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#4A70B0] mb-3">75%+</div>
              <p className="text-sm text-[#5B5B5B] max-w-[120px]">
                Lorem ipsum dolor sit amet consectetur. Ultrici...
              </p>
            </div>
            
            {/* Stat 5 */}
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#4A70B0] mb-3">11+</div>
              <p className="text-sm text-[#5B5B5B] max-w-[120px]">
                Lorem ipsum dolor sit amet consectetur. Ultrici...
              </p>
            </div>
          </div>
        </div>

        {/* Life at Apnaaapan Section */}
        <div className="text-center mb-32">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-16 leading-tight">
            Life at Apnaaapan
          </h2>
          
          <div className="flex justify-center space-x-8">
            {/* Image 1 - with left arrow */}
            <div className="relative">
              <div className="w-72 h-56 rounded-2xl overflow-hidden">
                <img 
                  src="/images/image 13.png" 
                  alt="Team members on couch" 
                  className="w-full h-full object-cover"
                />
                {/* Left Navigation Arrow */}
                <button className="absolute left-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Image 2 */}
            <div className="w-72 h-56 rounded-2xl overflow-hidden">
              <img 
                src="/images/image 14.png" 
                alt="Team member outdoors" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Image 3 - with right arrow */}
            <div className="relative">
              <div className="w-72 h-56 rounded-2xl overflow-hidden">
                <img 
                  src="/images/gaurav.png" 
                  alt="Team members in conversation" 
                  className="w-full h-full object-cover"
                />
                {/* Right Navigation Arrow */}
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Image 4 */}
            <div className="w-72 h-56 rounded-2xl overflow-hidden">
              <img 
                src="/images/kartik patel.png" 
                alt="Team member close-up" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default WorkWithUs;
