import React from 'react';

const AboutUs = () => {
  return (
    <main className="bg-[#EFE7D5] min-h-screen">
      {/* Centered Hero Section matching design */}
      <section className="px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-6xl mx-auto relative rounded-2xl border border-[#E2DBC9] bg-[#EFE7D5]">
          {/* Corner dots */}
          <span className="absolute -top-2 -left-2 w-3 h-3 bg-[#E2DBC9] rounded-full"></span>
          <span className="absolute -top-2 -right-2 w-3 h-3 bg-[#E2DBC9] rounded-full"></span>
          <span className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#E2DBC9] rounded-full"></span>
          <span className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#E2DBC9] rounded-full"></span>

          <div className="py-16 md:py-24 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif tracking-tight">
              <span className="text-[#0D1B2A]">About </span>
              <span className="bg-gradient-to-r from-[#DF5316] to-[#F4BF11] bg-clip-text text-transparent">Us</span>
            </h1>
            <p className="mt-6 md:mt-8 text-sm md:text-base text-[#0D1B2A]/80 font-nexa-regular">
              Creative at Heart. Strategic by Nature. Focused on You
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;


