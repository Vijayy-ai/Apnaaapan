import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    question: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#EFE7D5] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left Section - Connect With Us */}
          <div className="space-y-12 animate-fadeIn" style={{ animationDelay: '50ms' }}>
            <div className="animate-fadeIn" style={{ animationDelay: '100ms' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D1B2A] mb-6" style={{ fontFamily: 'MADE Avenue PERSONAL USE' }}>
                Connect With <span className="text-[#FFC107]">Us</span>
              </h2>
              <p className="text-lg text-[#5B5B5B] leading-relaxed animate-fadeIn" style={{ fontFamily: 'nexaRegular', animationDelay: '140ms' }}>
                Have service-related questions or interested in other collaborations? We're here to support you every step of the way.
              </p>
            </div>

            <div className="space-y-12">
              {/* Learn about our services */}
              <div className="animate-fadeIn" style={{ animationDelay: '180ms' }}>
                <h3 className="text-xl font-semibold text-[#0D1B2A] mb-6" style={{ fontFamily: 'nexaRegular' }}>
                  Learn about our services
                </h3>
                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#F26B2A]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-[#5B5B5B]" style={{ fontFamily: 'nexaRegular' }}>hello@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#F26B2A]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-[#5B5B5B]" style={{ fontFamily: 'nexaRegular' }}>+91 9548954859</span>
                  </div>
                </div>
              </div>

              {/* Talk to our PR department */}
              <div className="animate-fadeIn" style={{ animationDelay: '220ms' }}>
                <h3 className="text-xl font-semibold text-[#0D1B2A] mb-6" style={{ fontFamily: 'nexaRegular' }}>
                  Talk to our PR department
                </h3>
                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#F26B2A]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-[#5B5B5B]" style={{ fontFamily: 'nexaRegular' }}>pr@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#F26B2A]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-[#5B5B5B]" style={{ fontFamily: 'nexaRegular' }}>+91 9548954859</span>
                  </div>
                </div>
              </div>

              {/* Join our team */}
              <div className="animate-fadeIn" style={{ animationDelay: '260ms' }}>
                <h3 className="text-xl font-semibold text-[#0D1B2A] mb-6" style={{ fontFamily: 'nexaRegular' }}>
                  Join our team
                </h3>
                <div className="flex items-center space-x-8">
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#F26B2A]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="text-[#5B5B5B]" style={{ fontFamily: 'nexaRegular' }}>join@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-[#F26B2A]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-[#5B5B5B]" style={{ fontFamily: 'nexaRegular' }}>+91 9548954859</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 animate-fadeIn" style={{ animationDelay: '180ms' }}>
            <h2 className="text-2xl font-bold text-[#0D1B2A] mb-6" style={{ fontFamily: 'MADE Avenue PERSONAL USE' }}>
              Let us know more about you and your goals
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name and Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#5B5B5B] mb-2" style={{ fontFamily: 'nexaRegular' }}>
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F26B2A] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your first name"
                    required
                    style={{ fontFamily: 'nexaRegular' }}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#5B5B5B] mb-2" style={{ fontFamily: 'nexaRegular' }}>
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F26B2A] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your last name"
                    required
                    style={{ fontFamily: 'nexaRegular' }}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#5B5B5B] mb-2" style={{ fontFamily: 'nexaRegular' }}>
                  Mail
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-[#F26B2A]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F26B2A] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email address"
                    required
                    style={{ fontFamily: 'nexaRegular' }}
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-[#5B5B5B] mb-2" style={{ fontFamily: 'nexaRegular' }}>
                  Phone Number
                </label>
                <div className="flex">
                  <div className="flex-shrink-0 px-4 py-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-xl flex items-center">
                    <span className="text-[#5B5B5B] font-medium" style={{ fontFamily: 'nexaRegular' }}>+91</span>
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-r-xl focus:ring-2 focus:ring-[#F26B2A] focus:border-transparent transition-all duration-200"
                    placeholder="Enter your phone number"
                    required
                    style={{ fontFamily: 'nexaRegular' }}
                  />
                </div>
              </div>

              {/* Question */}
              <div>
                <label htmlFor="question" className="block text-sm font-medium text-[#5B5B5B] mb-2" style={{ fontFamily: 'nexaRegular' }}>
                  Enter your question here
                </label>
                <textarea
                  id="question"
                  name="question"
                  value={formData.question}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#F26B2A] focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Tell us about your project or question..."
                  required
                  style={{ fontFamily: 'nexaRegular' }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-400 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-200 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                style={{ fontFamily: 'nexaRegular' }}
              >
                Submit
              </button>

              {/* Disclaimer */}
              <p className="text-xs text-[#5B5B5B] text-center leading-relaxed" style={{ fontFamily: 'nexaRegular' }}>
                By entering my phone number in the form, I agree to receive recurring automated marketing text messages. 
                Msg & data rates may apply, msg frequency varies. Reply HELP for help and STOP to unsubscribe. 
                <a href="/terms" className="text-[#F26B2A] hover:underline ml-1">Terms of Use</a> and{' '}
                <a href="/privacy" className="text-[#F26B2A] hover:underline">Privacy Policy</a>.
              </p>
            </form>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-20 mb-20 animate-fadeIn" style={{ animationDelay: '280ms' }}>
          <div className="bg-white rounded-3xl p-2 shadow-lg border border-gray-100">
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden">
              {/* Google Maps iframe - Replace with your actual Google Maps embed code */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5!2d75.7873!3d26.9124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3815c0b1b9d%3A0x1d3e5e1e1e1e1e1e!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Apnaaapan Office Location"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
