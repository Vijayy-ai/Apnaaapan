import React, { useState } from 'react';
import ClientFeedback from '../components/ClientFeedback';

const Services = () => {
  const [expandedCards, setExpandedCards] = useState({});
  // FAQ items for the accordion
  const faqItems = [
    {
      q: 'Where is Lorem',
      a: "Lorem Ipsum is a placeholder text used in publishing and design to focus on layout and typography rather than content. You'll find it anywhere mockups or drafts need readable text."
    },
    {
      q: 'Lorem Ipsum is simply dummy text of the printing',
      a: 'It originated from a scrambled section of Cicero\'s writings in the 1500s and has been the industry standard dummy text ever since, surviving leaps to digital typesetting. '
    },
    {
      q: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      a: 'Designers use Lorem Ipsum to help clients visualize how a page will feel without being distracted by final copy. It improves feedback on layout, hierarchy, and spacing.'
    },
    {
      q: 'Lorem Ipsum is simply dummy text of the printing and',
      a: 'Using dummy text keeps prototypes flexible. Copy changes frequently early on, so placeholder text helps teams iterate quickly without blocking on content.'
    },
    {
      q: 'Lorem Ipsum is simply dummy',
      a: 'It reads like natural language, with word length and rhythm that resemble English, making it ideal for assessing readability and line lengths.'
    },
    {
      q: 'Lorem Ipsum is simply dummy text of the printing',
      a: 'Most design tools and CMSs include Lorem Ipsum generators. You can also replace it later with real copy via content workflows.'
    },
    {
      q: 'Lorem Ipsum is simply',
      a: 'Short answer: it\'s a time‑saving tool. Use it when you need realistic filler text so your team can focus on the structure and experience first.'
    }
  ];
  const [openFaq, setOpenFaq] = useState(faqItems.map((_, index) => index === 0));
  const toggleFaq = (index) => {
    setOpenFaq(prev => prev.map((isOpen, i) => (i === index ? !isOpen : isOpen)));
  };

  const toggleCard = (cardId) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardId]: !prev[cardId]
    }));
  };
  return (
    <>
    <div className="min-h-screen bg-[#EFE7D5] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Social Media Marketing Section */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-20">
          {/* Left Section - Text Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-[#F26B2A] mb-4 font-nexa-regular">
                Social Media Marketing
              </h3>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0D1B2A] mb-6 leading-tight font-serif">
                From Likes to Leads – We Turn Social into Sales.
              </h1>
              <p className="text-lg text-[#5B5B5B] leading-relaxed font-nexa-regular">
                Our social media services go beyond posting pretty pictures. We combine storytelling, data, and platform-specific strategies to engage your audience and drive measurable results.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <button className="bg-gradient-to-r from-[#F26B2A] to-[#FFC107] text-white px-8 py-4 rounded-full font-nexa-bold text-lg flex items-center space-x-3 hover:shadow-lg transition-all duration-200 hover:scale-105">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>Book a Free Strategy Call</span>
              </button>
            </div>
          </div>

          {/* Right Section - Dashboard Style Visual */}
          <div className="relative order-first lg:order-last">
            {/* Main Dashboard Card */}
            <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-2xl relative overflow-hidden transform hover:scale-105 transition-all duration-300">
              {/* Engagement Metrics Section */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-sm font-medium text-gray-600 font-nexa-regular">Engagement Last 7 days</h4>
                  <div className="flex items-center space-x-2">
                    <span className="text-3xl font-bold text-gray-800">5.49K</span>
                    <div className="flex items-center text-green-500">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Mini Bar Chart */}
                <div className="flex items-end space-x-1 h-8">
                  {[3, 5, 4, 7, 6, 8, 9].map((height, index) => (
                    <div 
                      key={index}
                      className="bg-green-400 rounded-t-sm flex-1"
                      style={{ height: `${height * 0.8}rem` }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Revenue Graph Section */}
              <div className="mb-8">
                <h4 className="text-sm font-medium text-gray-600 mb-4 font-nexa-regular">Revenue</h4>
                <div className="relative h-32">
                  {/* SVG Line Graph */}
                  <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="revenueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3"/>
                        <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0"/>
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,80 Q50,60 100,40 T200,20 T300,30"
                      stroke="#8B5CF6"
                      strokeWidth="3"
                      fill="none"
                      className="drop-shadow-sm"
                    />
                    <path
                      d="M0,80 Q50,60 100,40 T200,20 T300,30 L300,100 L0,100 Z"
                      fill="url(#revenueGradient)"
                    />
                  </svg>
                </div>
              </div>

              {/* 3D Avatar Elements */}
              <div className="absolute top-2 right-2 lg:top-4 lg:right-4 animate-pulse">
                <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-lg lg:text-2xl">👩</span>
                  </div>
                </div>
                {/* Emojis floating around */}
                <div className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 text-lg lg:text-xl animate-bounce">❤️</div>
                <div className="absolute -bottom-1 -right-1 lg:-bottom-1 lg:-right-2 text-sm lg:text-lg animate-bounce" style={{ animationDelay: '0.5s' }}>👍</div>
              </div>

              {/* Bottom Avatar */}
              <div className="absolute bottom-2 left-2 lg:bottom-4 lg:left-4">
                <div className="w-10 h-10 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 lg:w-10 lg:h-10 bg-white rounded-full flex items-center justify-center">
                    <span className="text-sm lg:text-lg">👨</span>
                  </div>
                </div>
              </div>

              {/* Megaphone Icon */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM15.657 6.343a1 1 0 011.414 0A9.972 9.972 0 0119 12a9.972 9.972 0 01-1.929 5.657 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 12a7.971 7.971 0 00-1.343-4.243 1 1 0 010-1.414z"/>
                </svg>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -z-10 top-8 left-8 w-full h-full bg-gradient-to-br from-orange-100 to-yellow-100 rounded-3xl"></div>
          </div>
        </div>

        {/* Trusted Companies Section */}
        <div className="bg-[#EFE7D5] rounded-xl px-6 py-4 flex flex-col md:flex-row items-center md:items-center justify-between mb-16 border border-[#e5e2d8]">
          <div className="w-full md:w-1/3 text-left text-gray-700 text-lg font-nexa-regular mb-4 md:mb-0">
            Trusted by fast-growing<br />companies around the world
          </div>
          <div className="w-full md:w-2/3 overflow-hidden">
            <div className="flex items-center animate-scroll">
              {/* First set of logos */}
              {[
                { src: '/images/himee ride.png', alt: 'Himee Ride' },
                { src: '/images/kavvya.png', alt: 'Kavvya' },
                { src: '/images/safal.png', alt: 'Safal' },
                { src: '/images/kap.png', alt: 'KAP' },
                { src: '/images/utkrasht.png', alt: 'Utkrasht' },
              ].map((logo, idx) => (
                <img
                  key={`first-${idx}`}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-10 md:h-12 max-w-[120px] object-contain mx-4 md:mx-6 flex-shrink-0"
                  style={{ filter: logo.alt === 'Himee Ride' ? 'none' : 'none' }}
                />
              ))}
              {/* Duplicate set for seamless loop */}
              {[
                { src: '/images/himee ride.png', alt: 'Himee Ride' },
                { src: '/images/kavvya.png', alt: 'Kavvya' },
                { src: '/images/safal.png', alt: 'Safal' },
                { src: '/images/kap.png', alt: 'KAP' },
                { src: '/images/utkrasht.png', alt: 'Utkrasht' },
              ].map((logo, idx) => (
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

        {/* We Help Solve Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0D1B2A] mb-12">
            We Help Solve
          </h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Problem 1 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div 
                className="p-6 flex items-center justify-between cursor-pointer"
                onClick={() => toggleCard('problem1')}
              >
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-[#F26B2A] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <p className="text-lg text-[#0D1B2A] font-nexa-regular">
                    Low engagement despite regular posting
                  </p>
                </div>
                <div className="text-[#F26B2A]">
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${expandedCards.problem1 ? 'rotate-180' : ''}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              {expandedCards.problem1 && (
                <div className="px-6 pb-6 pt-0 border-t border-gray-100">
                  <div className="ml-18 pt-4">
                    <p className="text-gray-600 font-nexa-regular leading-relaxed">
                      We analyze your content performance and optimize posting times, hashtags, and content formats.
                    </p>
                    <p className="text-gray-600 font-nexa-regular leading-relaxed mt-2">
                      Our data-driven approach increases engagement by 300% on average within 90 days.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Problem 2 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div 
                className="p-6 flex items-center justify-between cursor-pointer"
                onClick={() => toggleCard('problem2')}
              >
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-[#F26B2A] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <p className="text-lg text-[#0D1B2A] font-nexa-regular">
                    No clear content strategy or brand voice
                  </p>
                </div>
                <div className="text-[#F26B2A]">
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${expandedCards.problem2 ? 'rotate-180' : ''}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              {expandedCards.problem2 && (
                <div className="px-6 pb-6 pt-0 border-t border-gray-100">
                  <div className="ml-18 pt-4">
                    <p className="text-gray-600 font-nexa-regular leading-relaxed">
                      We develop a unique brand voice and comprehensive content calendar tailored to your audience.
                    </p>
                    <p className="text-gray-600 font-nexa-regular leading-relaxed mt-2">
                      Our strategic approach ensures consistent messaging that resonates with your target market.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Problem 3 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div 
                className="p-6 flex items-center justify-between cursor-pointer"
                onClick={() => toggleCard('problem3')}
              >
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-[#F26B2A] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <p className="text-lg text-[#0D1B2A] font-nexa-regular">
                    Difficulty converting followers into customers
                  </p>
                </div>
                <div className="text-[#F26B2A]">
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${expandedCards.problem3 ? 'rotate-180' : ''}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              {expandedCards.problem3 && (
                <div className="px-6 pb-6 pt-0 border-t border-gray-100">
                  <div className="ml-18 pt-4">
                    <p className="text-gray-600 font-nexa-regular leading-relaxed">
                      We create conversion-focused content funnels and implement strategic call-to-actions.
                    </p>
                    <p className="text-gray-600 font-nexa-regular leading-relaxed mt-2">
                      Our proven methods typically increase conversion rates by 250% within the first quarter.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Problem 4 */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div 
                className="p-6 flex items-center justify-between cursor-pointer"
                onClick={() => toggleCard('problem4')}
              >
                <div className="flex items-center space-x-6">
                  <div className="w-12 h-12 bg-[#F26B2A] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-xl">4</span>
                  </div>
                  <p className="text-lg text-[#0D1B2A] font-nexa-regular">
                    Overwhelm with managing multiple platforms
                  </p>
                </div>
                <div className="text-[#F26B2A]">
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${expandedCards.problem4 ? 'rotate-180' : ''}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              {expandedCards.problem4 && (
                <div className="px-6 pb-6 pt-0 border-t border-gray-100">
                  <div className="ml-18 pt-4">
                    <p className="text-gray-600 font-nexa-regular leading-relaxed">
                      We handle all platform management, content creation, and community engagement for you.
                    </p>
                    <p className="text-gray-600 font-nexa-regular leading-relaxed mt-2">
                      Our team ensures consistent, high-quality presence across all your social media channels.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Our Approach Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0D1B2A] mb-16">
            Our Approach
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {/* Step 1: Audit & Strategy */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-[#F26B2A] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">1</span>
                </div>
              </div>
              <div className="flex flex-col items-center text-center pt-4">
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-3 font-nexa-regular">
                  Audit & Strategy
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-nexa-regular">
                  We start by analyzing your audience, competitors, and past performance to identify exactly where opportunities lie.
                </p>
              </div>
            </div>

            {/* Step 2: Content Planning */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-[#F26B2A] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">2</span>
                </div>
              </div>
              <div className="flex flex-col items-center text-center pt-4">
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-3 font-nexa-regular">
                  Content Planning
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-nexa-regular">
                  A tailored content calendar with clear goals ensures your messaging is consistent and impactful.
                </p>
              </div>
            </div>

            {/* Step 3: Creative Production */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-[#F26B2A] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">3</span>
                </div>
              </div>
              <div className="flex flex-col items-center text-center pt-4">
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-3 font-nexa-regular">
                  Creative Production
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-nexa-regular">
                  From visuals to copy and video, we create scroll-stopping content your audience will remember.
                </p>
              </div>
            </div>

            {/* Step 4: Publishing & Engagement */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-[#F26B2A] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">4</span>
                </div>
              </div>
              <div className="flex flex-col items-center text-center pt-4">
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-3 font-nexa-regular">
                  Publishing & Engagement
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-nexa-regular">
                  Consistent posting paired with active community management to keep your brand in the conversation.
                </p>
              </div>
            </div>

            {/* Step 5: Reporting & Optimization */}
            <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="w-16 h-16 bg-[#F26B2A] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">5</span>
                </div>
              </div>
              <div className="flex flex-col items-center text-center pt-4">
                <h3 className="text-xl font-bold text-[#0D1B2A] mb-3 font-nexa-regular">
                  Reporting & Optimization
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed font-nexa-regular">
                  We track performance, measure impact, and tweak campaigns for even better results over time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Expected Outcomes Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0D1B2A] mb-16">
            Expected Outcomes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto mb-12">
            {/* Top-Left: Higher engagement rates */}
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-8 h-8 text-[#F26B2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-lg text-[#0D1B2A] font-nexa-regular leading-tight">
                  Higher engagement<br />rates
                </p>
              </div>
            </div>

            {/* Top-Right: A clear, recognizable brand voice */}
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-8 h-8 text-[#F26B2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-lg text-[#0D1B2A] font-nexa-regular leading-tight">
                  A clear, recognizable<br />brand voice
                </p>
              </div>
            </div>

            {/* Bottom-Left: Consistent follower growth */}
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-8 h-8 text-[#F26B2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-lg text-[#0D1B2A] font-nexa-regular leading-tight">
                  Consistent follower<br />growth
                </p>
              </div>
            </div>

            {/* Bottom-Right: More inbound leads and conversions */}
            <div className="flex items-center space-x-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                <svg className="w-8 h-8 text-[#F26B2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-lg text-[#0D1B2A] font-nexa-regular leading-tight">
                  More inbound leads<br />and conversions
                </p>
              </div>
            </div>
          </div>

          {/* Call-to-Action Button */}
          <div className="flex justify-center">
            <button className="bg-gradient-to-r from-[#F26B2A] to-[#FFC107] text-white px-8 py-4 rounded-full font-nexa-bold text-lg flex items-center space-x-3 hover:shadow-lg transition-all duration-200 hover:scale-105">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>Let's Grow Your Socials</span>
            </button>
          </div>
        </div>

        {/* Your Dedicated Team Section */}
        <div className="mb-24">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0D1B2A]">
            Your Dedicated Team
          </h2>
          <p className="mt-4 text-lg text-[#0D1B2A]/80 font-nexa-regular">
            Meet the team behind making your appointments happen.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {[0, 1, 2, 3, 4].map((idx) => (
              <div
                key={idx}
                className="bg-white h-64 border border-[#E5E2D8] shadow-sm"
              ></div>
            ))}
          </div>
        </div>

        {/* What sets us apart Section */}
        <div className="mb-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left side - Color bars */}
              <div className="lg:w-8 flex lg:flex-col">
                <div className="flex-1 lg:flex-none lg:h-24 bg-[#FF6B35]"></div>
                <div className="flex-1 lg:flex-none lg:h-24 bg-[#FFD700]"></div>
                <div className="flex-1 lg:flex-none lg:h-24 bg-[#4682B4]"></div>
              </div>
              
              {/* Right side - Content */}
              <div className="flex-1 p-8 lg:p-12">
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D1B2A]" style={{ fontFamily: 'MADE Avenue PERSONAL USE' }}>
                    What sets us apart from others?
                  </h3>
                  <div className="flex space-x-1 ml-6">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6 text-[#FF6B35]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-lg md:text-xl leading-8 text-[#2C2C2C] max-w-5xl" style={{ fontFamily: 'NexaRegular' }}>
                  We genuinely care about your goals. Every team here, from design to marketing, works with one focus: making sure you win. We don't believe in one-size-fits-all solutions. Instead, we listen, we understand, and we build what actually works for you. It's not just about delivering work—it's about delivering impact.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Client Feedback moved below container for full-width */}

        
      </div>
    </div>
    {/* Full-width Client Feedback section (outside padded container) */}
    <ClientFeedback />
    {/* FAQ Section (moved after Client Feedback) */}
    <section className="py-12 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-5xl md:text-6xl font-serif text-[#0D1B2A] mb-10 md:mb-14">
          FAQ
        </h2>

        <div className="border-t border-[#D9D2C4]"></div>
        {faqItems.map((item, idx) => (
          <div key={idx}>
            <button
              type="button"
              className="w-full flex items-center justify-between py-5 md:py-6 text-left"
              onClick={() => toggleFaq(idx)}
              aria-expanded={openFaq[idx]}
            >
              <span className="text-[#0D1B2A] text-sm md:text-base font-medium">
                {item.q}
              </span>
              <span className="text-[#0D1B2A] text-lg md:text-2xl leading-none select-none">
                {openFaq[idx] ? '×' : '+'}
              </span>
            </button>
            {openFaq[idx] && (
              <div className="pb-6 text-[#2C2C2C] text-xs md:text-sm leading-6 md:leading-7">
                {item.a}
              </div>
            )}
            <div className="border-t border-[#D9D2C4]"></div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Services;
