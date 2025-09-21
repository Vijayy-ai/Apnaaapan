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
    <section className="bg-[#EFE7D5] py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-blue-600 text-sm font-medium mb-2">Client Feedback</p>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800">
            What They Say After Using Our Product
          </h2>
        </div>
      </div>

      {/* Moving Cards Container - Full Screen Width */}
      <div className="relative overflow-hidden w-full">
        {/* First Row - Moving Right to Left */}
        <div className="flex mb-8 animate-scroll-left">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={`row1-${index}`} className="flex-shrink-0 w-96 mx-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg h-48">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex text-orange-500">
                    <span>★★★★★</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {testimonial.feedback}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - Moving Left to Right */}
        <div className="flex animate-scroll-right">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={`row2-${index}`} className="flex-shrink-0 w-96 mx-6">
              <div className="bg-white rounded-2xl p-6 shadow-lg h-48">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl mr-3">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex text-orange-500">
                    <span>★★★★★</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
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