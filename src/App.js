import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      {/* Header Component */}
      <Header />

      {/* Hero Section Component */}
      <HeroSection />
    </div>
  );
}

export default App; 