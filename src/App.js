import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OurWorkSection from './components/OurWorkSection';
import OurWinningProcess from './components/OurWinningProcess';
import ClientFeedback from './components/ClientFeedback';
import OurServices from './components/OurServices';
import BookingSection from './components/BookingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      {/* Header Component */}
      <Header />

      {/* Hero Section Component */}
      <HeroSection />

      {/* Our Work Section Component */}
      <OurWorkSection />

      {/* Our Winning Process Section Component */}
      <OurWinningProcess />

      {/* Client Feedback Section Component */}
      <ClientFeedback />

      {/* Our Services Section Component */}
      <OurServices />

      {/* Booking Section Component */}
      <BookingSection />

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default App; 