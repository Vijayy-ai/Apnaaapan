import React, { useEffect, useRef, useState } from 'react';

const PartnerProcess = () => {
  const sectionRef = useRef(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const steps = [
    {
      step: 'Step 1',
      title: 'Connect',
      description:
        'Launch & Execution involves implementing your digital marketing strategy with precision. We coordinate all elements to ensure a seamless rollout, optimizing campaigns for maximum impact and engagement.',
      image: '/images/partner_us/connect.png'
    },
    {
      step: 'Step 2',
      title: 'Collaborate',
      description:
        'Launch & Execution involves implementing your digital marketing strategy with precision. We coordinate all elements to ensure a seamless rollout, optimizing campaigns for maximum impact and engagement.',
      image: '/images/partner_us/collaborate.png'
    },
    {
      step: 'Step 3',
      title: 'Deliver',
      description:
        'Launch & Execution involves implementing your digital marketing strategy with precision. We coordinate all elements to ensure a seamless rollout, optimizing campaigns for maximum impact and engagement.',
      image: '/images/partner_us/deliver.png'
    },
    {
      step: 'Step 4',
      title: 'Grow Together',
      description:
        'Launch & Execution involves implementing your digital marketing strategy with precision. We coordinate all elements to ensure a seamless rollout, optimizing campaigns for maximum impact and engagement.',
      image: '/images/partner_us/grow together.png'
    }
  ];

  useEffect(() => {
    const onResize = () => setIsSmallScreen(window.innerWidth < 768);
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const startOffsetPx = windowHeight / 2;
      if (sectionTop <= windowHeight && sectionBottom >= 0) {
        const shiftedNumerator = (windowHeight - sectionTop) - startOffsetPx;
        const totalRange = Math.max(1, (windowHeight + sectionHeight - startOffsetPx));
        const progress = Math.max(0, Math.min(1, shiftedNumerator / totalRange));
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSmallScreen]);

  const getCardTransform = (index) => {
    const stepSpan = 0.25;
    const stepProgress = Math.max(0, Math.min(1, (scrollProgress - index * stepSpan) / stepSpan));
    if (index === 0) return 'translateY(0)';
    const startY = isSmallScreen ? 120 : 105; // start lower for smoother entrance
    const endY = isSmallScreen ? 18 : 8;     // settle closer for tighter stack
    const currentY = startY - (startY - endY) * stepProgress;
    return `translateY(${currentY}%)`;
  };

  const getCardOpacity = (index) => {
    const stepSpan = 0.25;
    const stepProgress = Math.max(0, Math.min(1, (scrollProgress - index * stepSpan) / stepSpan));
    const baseOpacity = isSmallScreen ? 0.2 : 0;
    return stepProgress > 0 ? Math.min(1, baseOpacity + stepProgress * (1 - baseOpacity)) : baseOpacity;
  };

  const getCardZIndex = (index) => index + 1;

  return (
    <>
    <section ref={sectionRef} className="bg-[#EFE7D5] py-16 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-10 md:mb-12">
          <div className="text-[#E2552A] text-sm md:text-base font-semibold tracking-wide mb-2">Our Process</div>
          <h2 className="font-serif text-[#0D1B2A] font-bold text-[32px] md:text-[44px] lg:text-[52px] leading-tight">How It Works</h2>
        </div>

        <div className={`relative ${isSmallScreen ? 'h-[220vh]' : 'h-[95vh]'}`}> 
          <div className={`sticky ${isSmallScreen ? 'top-24' : 'top-28'} space-y-6 flex flex-col items-center`}>
            {steps.map((item, idx) => (
              <div
                key={idx}
                className={`max-w-6xl w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-[#E6E1D6] transition-all duration-500 ease-out`}
                style={{
                  opacity: getCardOpacity(idx),
                  zIndex: getCardZIndex(idx),
                  position: 'absolute',
                  top: `${idx * (isSmallScreen ? 26 : 20)}%`,
                  left: '50%',
                  transform: `translateX(-50%) ${getCardTransform(idx)}`,
                }}
              >
                <div className="flex flex-col lg:flex-row items-stretch">
                  <div className="lg:w-1/2 p-6 md:p-8 bg-white">
                    <div className="inline-flex items-center text-xs md:text-sm text-[#6B7280] bg-[#F2F2F2] rounded-full px-3 py-1 mb-3">
                      <span className="w-2 h-2 rounded-full bg-[#5B8EF1] mr-2"></span> {item.step}
                    </div>
                    <h3 className="font-serif text-[#0D1B2A] text-2xl md:text-3xl font-bold mb-3">{item.title}</h3>
                    <p className="text-[#1f2937] text-sm md:text-base leading-7 md:leading-8">{item.description}</p>
                  </div>
                  <div className="lg:w-1/2 p-6 md:p-8 flex items-center justify-center bg-white">
                    <img src={item.image} alt={`${item.title} step`} className="w-full h-auto max-h-56 md:max-h-72 object-contain" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    {/* Spacer after animated stack to avoid overlap with next section */}
    <div className="bg-[#EFE7D5] h-[72vh] md:h-[56vh]"></div>
    </>
  );
};

export default PartnerProcess;


