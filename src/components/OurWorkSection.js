import React from 'react';

const companyLogos = [
  { src: '/images/himee ride.png', alt: 'Himee Ride' },
  { src: '/images/kavvya.png', alt: 'Kavvya' },
  { src: '/images/safal.png', alt: 'Safal' },
  { src: '/images/kap.png', alt: 'KAP' },
  { src: '/images/utkrasht.png', alt: 'Utkrasht' },
];

const OurWorkSection = () => {
  const projectCards = [
    {
      title: 'Safal',
      hasButton: true,
      hasDescription: false,
      hoverImage: '/images/Moxie-Sozo-Organic-Valley-Portfolio-Image-4x5_01-1 1.png',
      clientLogo: '/images/safal.png',
      topBgColor: 'bg-blue-500'
    },
    {
      title: 'Kavvya',
      hasButton: false,
      hasDescription: true,
      hoverImage: '/images/Moxie-Sozo-Organic-Valley-Portfolio-Image-4x5_01-1 1.png',
      clientLogo: '/images/kavvya.png',
      topBgColor: 'bg-orange-500'
    },
    {
      title: 'Safal',
      hasButton: true,
      hasDescription: false,
      hoverImage: '/images/Moxie-Sozo-Organic-Valley-Portfolio-Image-4x5_01-1 1.png',
      clientLogo: '/images/safal.png',
      topBgColor: 'bg-yellow-400'
    },
    {
      title: 'Safal',
      hasButton: true,
      hasDescription: false,
      hoverImage: '/images/Moxie-Sozo-Organic-Valley-Portfolio-Image-4x5_01-1 1.png',
      clientLogo: '/images/safal.png',
      topBgColor: 'bg-blue-500'
    },
    {
      title: 'Safal',
      hasButton: true,
      hasDescription: false,
      hoverImage: '/images/Moxie-Sozo-Organic-Valley-Portfolio-Image-4x5_01-1 1.png',
      clientLogo: '/images/safal.png',
      topBgColor: 'bg-yellow-400'
    },
    {
      title: 'Kavvya',
      hasButton: false,
      hasDescription: true,
      hoverImage: '/images/Moxie-Sozo-Organic-Valley-Portfolio-Image-4x5_01-1 1.png',
      clientLogo: '/images/kavvya.png',
      topBgColor: 'bg-orange-500'
    }
  ];

  return (
    <section className="bg-[#EFE7D5] py-16 px-2 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Trusted Companies Section */}
        <div className="bg-[#faf8f3] rounded-xl px-6 py-4 flex flex-col md:flex-row items-center md:items-center justify-between mb-16 border border-[#e5e2d8]">
          <div className="w-full md:w-1/3 text-left text-gray-700 text-lg font-nexa-regular mb-4 md:mb-0">
            Trusted by fast-growing<br />companies around the world
          </div>
          <div className="w-full md:w-2/3 overflow-hidden">
            <div className="flex items-center animate-scroll">
              {/* First set of logos */}
              {companyLogos.map((logo, idx) => (
                <img
                  key={`first-${idx}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 md:h-12 max-w-[120px] object-contain mx-4 md:mx-6 flex-shrink-0"
                  style={{ filter: logo.alt === 'Himee Ride' ? 'none' : 'none' }}
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {companyLogos.map((logo, idx) => (
                <img
                  key={`second-${idx}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 md:h-12 max-w-[120px] object-contain mx-4 md:mx-6 flex-shrink-0"
                  style={{ filter: logo.alt === 'Himee Ride' ? 'none' : 'none' }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800">
            Our Client & Work
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectCards.map((card, index) => (
            <div key={index} className="group relative bg-[#faf8f3] rounded-xl p-8 border border-gray-200 overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-xl min-h-[400px]">
              {/* Full Card Background Color - Appears on hover */}
              <div className={`absolute inset-0 ${card.topBgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out rounded-xl`}></div>

              {/* Hover Image - Slides up from bottom and covers 75% with rounded top */}
              <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-cover bg-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out rounded-t-xl overflow-hidden">
                <img 
                  src={card.hoverImage} 
                  alt={`${card.title} project`}
                  className="w-full h-full object-cover rounded-t-xl"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>

              {/* Client Logo - Appears on hover */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 z-20">
                <div className="bg-white rounded-full p-3 shadow-lg">
                  <img 
                    src={card.clientLogo} 
                    alt={`${card.title} logo`}
                    className="h-10 w-auto object-contain"
                  />
                </div>
              </div>

              {/* Arrow Button - Appears on hover */}
              <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 z-20">
                <button className="w-12 h-12 bg-[#faf8f3] rounded-full flex items-center justify-center shadow-lg">
                  <svg 
                    className="w-6 h-6 text-gray-700 transform rotate-45" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M7 17l9.2-9.2M17 17V7H7" 
                    />
                  </svg>
                </button>
              </div>

              {/* Original Card Content - Hidden on hover */}
              <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
                {/* Card Title */}
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {card.title}
                </h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Branding
                  </span>
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    UI
                  </span>
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    UX
                  </span>
                </div>

                {/* Description or Button */}
                {card.hasDescription ? (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of t...
                  </p>
                ) : card.hasButton ? (
                  <button className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors duration-200">
                    <svg 
                      className="w-5 h-5 text-white transform rotate-45" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M7 17l9.2-9.2M17 17V7H7" 
                      />
                    </svg>
                  </button>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorkSection; 