import React from 'react';

const OurWinningProcess = () => {
  const processSteps = [
    {
      step: "Step 1",
      title: "Discovery & Analysis",
      description: "Through Discovery & Analysis, we deeply assess your brand, audience, and market landscape. These insights enable us to craft effective, data-driven strategies tailored to your business goals.",
      bgColor: "bg-orange-500",
      tagColor: "bg-orange-500",
      image: "/images/step1.png",
      cardSize: "max-w-4xl" // Smallest card
    },
    {
      step: "Step 2",
      title: "Strategy Development",
      description: "Strategy Development focuses on creating customized digital marketing plans. We align insights with your goals to ensure targeted, measurable, and sustainable growth.",
      bgColor: "bg-yellow-400",
      tagColor: "bg-yellow-500",
      image: "/images/step2.png",
      cardSize: "max-w-5xl" // Larger than step 1
    },
    {
      step: "Step 3",
      title: "Launch & Execution",
      description: "Launch & Execution involves implementing your digital marketing strategy with precision. We coordinate all elements to ensure a seamless rollout, optimizing campaigns for maximum impact and engagement.",
      bgColor: "bg-blue-400",
      tagColor: "bg-blue-500",
      image: "/images/step3.png",
      cardSize: "max-w-6xl" // Larger than step 2
    },
    {
      step: "Step 4",
      title: "Optimization",
      description: "Optimization focuses on continuously refining your digital marketing efforts for better performance. We analyze data, adjust strategies, and enhance campaigns to maximize ROI and achieve your business objectives.",
      bgColor: "bg-orange-500",
      tagColor: "bg-orange-400",
      image: "/images/step4.png",
      cardSize: "max-w-7xl" // Largest card
    }
  ];

  return (
    <section className="bg-[#f5f5f0] py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800">
            Our Winning Process
          </h2>
        </div>

        {/* Process Steps */}
        <div className="space-y-6 flex flex-col items-center">
          {processSteps.map((step, index) => (
            <div key={index} className={`${step.cardSize} w-full bg-white rounded-2xl shadow-lg overflow-hidden`}>
              <div className="flex flex-col lg:flex-row">
                {/* Left Side - Text Content */}
                <div className="lg:w-1/2 p-8 bg-white">
                  <div className="flex flex-col h-full justify-center">
                    <span className={`inline-block ${step.tagColor} text-white px-4 py-1 rounded-full text-sm font-medium w-fit mb-4`}>
                      {step.step}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-800 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Right Side - Illustration */}
                <div className={`lg:w-1/2 p-8 ${step.bgColor} flex items-center justify-center min-h-[300px]`}>
                  <img 
                    src={step.image} 
                    alt={`${step.title} illustration`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWinningProcess; 