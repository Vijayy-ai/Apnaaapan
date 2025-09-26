import React, { useEffect, useRef, useState } from 'react';

const StickySteps = ({ steps = [], onActiveChange, onProgress }) => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || 0;
      const totalScrollable = rect.height - viewportH;

      const sectionTopInDoc = el.offsetTop;
      const scrollY = window.scrollY || 0;

      // Delay the start of progress until the section reaches the viewport center
      const startOffsetPx = viewportH / 2; // begin when first card hits center
      const shifted = scrollY - sectionTopInDoc - startOffsetPx;
      const progress = Math.min(
        1,
        Math.max(0, shifted / Math.max(1, totalScrollable))
      );
      const index = Math.min(steps.length - 1, Math.floor(progress * steps.length + 0.0001));
      setActiveIndex((prev) => {
        if (prev !== index && typeof onActiveChange === 'function') {
          onActiveChange(index, steps.length);
        }
        return index;
      });
      if (typeof onProgress === 'function') {
        onProgress(progress, index, steps.length);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [steps.length]);

  const sectionHeight = `calc(100vh * ${Math.max(1, steps.length - 0.1)})`;

  return (
    <div ref={sectionRef} className="relative" style={{ height: sectionHeight }}>
      <div className="sticky top-36 md:top-40 lg:top-44 max-h-none md:max-h-[80vh] mt-12 md:mt-20 lg:mt-24">
        <div className="relative bg-white rounded-3xl shadow-sm border border-[#E6E1D6] overflow-hidden h-full min-h-[560px] sm:min-h-[600px] md:min-h-[640px] lg:min-h-[700px]">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`absolute inset-0 p-6 md:p-8 transition-all duration-300 ease-out ${i === activeIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3 pointer-events-none'}`}
            >
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 h-full">
                <div className="md:w-1/2 order-2 md:order-1 bg-white/90 sm:bg-transparent rounded-xl p-4 sm:p-0">
                  <div className="inline-flex items-center text-xs md:text-sm text-[#6B7280] bg-[#F2F2F2] rounded-full px-3 py-1 mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#5B8EF1] mr-2"></span> {`Step ${i + 1}`}
                  </div>
                  <h4 className="font-serif text-[#0D1B2A] text-2xl md:text-4xl font-bold mb-3 md:mb-4">{step.title}</h4>
                  <p className="text-[#1f2937] text-sm md:text-base leading-7 md:leading-8">{step.description}</p>
                </div>
                <div className="md:w-1/2 order-1 md:order-2 flex items-center justify-center">
                  <img src={step.image} alt={`${step.title} step`} className="w-full h-auto max-h-48 md:max-h-72 object-contain" />
                </div>
              </div>
            </div>
          ))}
          {/* Ensure container has intrinsic height */}
          <div className="p-6 md:p-8 opacity-0 select-none h-full">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 h-full">
              <div className="md:w-1/2">
                <div className="inline-flex items-center text-xs md:text-sm text-[#6B7280] bg-[#F2F2F2] rounded-full px-3 py-1 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#5B8EF1] mr-2"></span> Step
                </div>
                <h4 className="font-serif text-[#0D1B2A] text-3xl md:text-4xl font-bold mb-4">Placeholder</h4>
                <p className="text-[#22223b] leading-7 md:leading-8">Placeholder</p>
              </div>
              <div className="md:w-1/2 flex items-center justify-center">
                <div className="w-full bg-gray-100 h-56 md:h-72" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickySteps;


