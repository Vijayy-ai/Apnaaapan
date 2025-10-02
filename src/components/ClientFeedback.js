import React from 'react';

const ClientFeedback = () => {
  const testimonials = [
    {
      name: "Crystal Maiden",
      role: "UIUX Designer",
      feedback: "I've used other kits, but this one is the best. The attention to detail and usability are truly amazing for all designers. I highly recommend it for any type of project.",
      avatar: "👩‍🎨"
    },
    {
      name: "Dazzle Healer",
      role: "Front End Developer",
      feedback: "I've used other kits, but this one is the best. The attention to detail and usability are truly amazing for all designers. I highly recommend it for any type of project.",
      avatar: "👨‍💻"
    },
    {
      name: "Mirana Marci",
      role: "3D Designer",
      feedback: "This UI Kit saved me hours of work. It's intuitive, high-quality, and totally worth the price for all design needs. My projects look more professional and appealing now.",
      avatar: "👩‍🎨"
    },
    {
      name: "Bimosaurus",
      role: "Graphic Designer",
      feedback: "Amazing work! The color schemes are vibrant, and the icons fit perfectly with all my projects, especially modern UI designs. It makes everything look polished and user-friendly instantly.",
      avatar: "👨‍🎨"
    },
    {
      name: "Crystal Maiden",
      role: "UIUX Designer",
      feedback: "This UI Kit is incredibly helpful for my design process. The and illustrations are clean, modern, and save me a lot of It's perfect for beginners and professionals alike.",
      avatar: "👩‍🎨"
    },
    {
      name: "Dazzle Healer",
      role: "Front End Developer",
      feedback: "The attention to detail and usability are truly amazing for all designers. I highly recommend it for any type of project.",
      avatar: "👨‍💻"
    }
  ];

  return (
    <section className="bg-[#EFE7D5] py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-12">
          <p className="text-blue-600 text-xs sm:text-sm font-medium mb-2">Client Feedback</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-gray-800">
            What They Say After Using Our Product
          </h2>
        </div>
      </div>

      {/* Moving Cards Container - Full Screen Width */}
      <div className="relative overflow-hidden w-full">
        {/* First Row - Moving Right to Left */}
        <div className="flex mb-6 sm:mb-8 animate-scroll-left">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={`row1-${index}`} className="flex-shrink-0 w-80 sm:w-96 mx-3 sm:mx-6">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg min-h-[10rem] sm:min-h-[12rem] h-auto overflow-hidden">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg sm:text-2xl mr-2 sm:mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex text-orange-500 text-sm sm:text-base">
                    <span>★★★★★</span>
                  </div>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                  {testimonial.feedback}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - Moving Left to Right */}
        <div className="flex animate-scroll-right">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={`row2-${index}`} className="flex-shrink-0 w-80 sm:w-96 mx-3 sm:mx-6">
              <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg min-h-[10rem] sm:min-h-[12rem] h-auto overflow-hidden">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg sm:text-2xl mr-2 sm:mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 text-sm sm:text-base">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex text-orange-500 text-sm sm:text-base">
                    <span>★★★★★</span>
                  </div>
                </div>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                  {testimonial.feedback}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback; 