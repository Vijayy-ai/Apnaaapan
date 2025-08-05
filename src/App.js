import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import OurWorkSection from './components/OurWorkSection';
import OurWinningProcess from './components/OurWinningProcess';

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
    </div>
  );
}

export default App; 