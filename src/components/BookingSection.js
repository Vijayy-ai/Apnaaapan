import React, { useState } from 'react';

const BookingSection = () => {
  const [selectedDate, setSelectedDate] = useState(16);
  const [selectedTime, setSelectedTime] = useState(null);
  const [timeFormat, setTimeFormat] = useState('24h');
  const [currentMonth, setCurrentMonth] = useState('October 2023');

  const availableTimeSlots = ['15:00', '15:30', '16:00', '16:30'];
  const calendarDays = [
    // First row
    { day: 1, available: false, current: false },
    { day: 2, available: false, current: false },
    { day: 3, available: false, current: false },
    { day: 4, available: false, current: false },
    { day: 5, available: false, current: false },
    { day: 6, available: false, current: false },
    { day: 7, available: false, current: false },
    // Second row
    { day: 8, available: false, current: false },
    { day: 9, available: false, current: false },
    { day: 10, available: false, current: false },
    { day: 11, available: false, current: false },
    { day: 12, available: false, current: false },
    { day: 13, available: false, current: false },
    { day: 14, available: false, current: false },
    // Third row
    { day: 15, available: false, current: false },
    { day: 16, available: true, current: true, selected: true },
    { day: 17, available: true, current: false },
    { day: 18, available: true, current: false },
    { day: 19, available: true, current: false },
    { day: 20, available: true, current: false },
    { day: 21, available: false, current: false },
    // Fourth row
    { day: 22, available: false, current: false },
    { day: 23, available: true, current: false },
    { day: 24, available: true, current: false },
    { day: 25, available: true, current: false },
    { day: 26, available: true, current: false },
    { day: 27, available: true, current: false },
    { day: 28, available: false, current: false },
    // Fifth row
    { day: 29, available: false, current: false },
    { day: 30, available: true, current: false },
    { day: 31, available: true, current: false },
  ];

  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <section className="bg-[#EFE7D5] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-6">
            Ready to level up your brand? Book a slot.
          </h2>
        </div>

        {/* Main Booking Calendar Widget */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Panel - Meeting Details */}
            <div className="space-y-6">
              {/* Lightning Icon */}
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              
              {/* Meeting Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-800">Antoine Milkoff</h3>
                <h4 className="text-2xl font-bold text-gray-800">30 Min Meeting</h4>
                
                {/* Meeting Details */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>30 mins</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <span>Cal Video</span>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>America/Martinique</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Panel - Calendar */}
            <div className="space-y-6">
              {/* Month Navigation */}
              <div className="flex items-center justify-between">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <h3 className="text-lg font-semibold text-gray-800">{currentMonth}</h3>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Days of Week */}
              <div className="grid grid-cols-7 gap-1">
                {daysOfWeek.map((day) => (
                  <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-1">
                {calendarDays.map((dayData, index) => (
                  <div key={index} className="relative">
                    {dayData.day && (
                      <button
                        onClick={() => dayData.available && setSelectedDate(dayData.day)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 ${
                          dayData.selected
                            ? 'bg-gray-800 text-white'
                            : dayData.available
                            ? 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            : 'text-gray-400'
                        }`}
                      >
                        {dayData.day}
                        {dayData.selected && (
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"></div>
                        )}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel - Time Slots */}
            <div className="space-y-6">
              {/* Selected Day */}
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-800">Mon 16</h4>
              </div>

              {/* Time Format Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setTimeFormat('12h')}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                    timeFormat === '12h'
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  12h
                </button>
                <button
                  onClick={() => setTimeFormat('24h')}
                  className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                    timeFormat === '24h'
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  24h
                </button>
              </div>

              {/* Available Time Slots */}
              <div className="space-y-3">
                {availableTimeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`w-full py-3 px-4 rounded-lg border text-left font-medium transition-all duration-200 ${
                      selectedTime === time
                        ? 'border-gray-800 bg-gray-800 text-white'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Cal.com Branding */}
          <div className="text-center mt-8 pt-6 border-t border-gray-200">
            <span className="text-gray-600 text-sm">Cal.com</span>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-12">
          <p className="text-gray-700 text-lg mb-6">Trusted by 100+ brands</p>
          <button className="bg-gradient-to-r from-orange-500 to-yellow-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-3 mx-auto">
            <span className="text-white text-lg">⚡</span>
            <span>Book a Free Strategy Call</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookingSection; 