import React from 'react';

function App() {
  return (
    <div className="h-screen bg-apna-bg flex items-center justify-center px-4 pb-4 overflow-hidden">
      {/* Desktop Image - Hidden on mobile */}
      <div className="hidden md:block w-[98%] h-full flex items-center">
        <img 
          src="/images/desktop-coming-soon.png" 
          alt="Apnaaapan Coming Soon - Desktop" 
          className="w-full h-auto max-h-full object-contain"
        />
      </div>
      
      {/* Mobile Image - Hidden on desktop */}
      <div className="md:hidden w-[98%] h-full flex items-center">
        <img 
          src="/images/mobile-coming-soon.png" 
          alt="Apnaaapan Coming Soon - Mobile" 
          className="w-full h-auto max-h-full object-contain"
        />
      </div>
    </div>
  );
}

export default App; 