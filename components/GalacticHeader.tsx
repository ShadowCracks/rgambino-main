import React from 'react';

const GalacticHeader = () => {
  return (
    <div className="relative py-8 mb-8 md:py-16 md:mb-16">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-blue-200/30 to-blue-100/30 blur-3xl" />
      
      {/* Main content */}
      <div className="relative flex flex-col items-center scale-100 md:scale-125">
        {/* Company name with responsive text sizes */}
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
          Galactic
          <span className="text-6xl md:text-9xl block mt-2 md:mt-3 font-black">
            Shine
          </span>
        </h1>
        
        {/* Subtitle with responsive sizes */}
        <div className="relative mt-4 md:mt-6">
          <p className="text-2xl md:text-4xl font-semibold text-blue-900/80 tracking-widest uppercase">
            Detailing
          </p>
          {/* Shine line */}
          <div className="absolute inset-0 w-full h-1 md:h-2 bg-gradient-to-r from-transparent via-blue-400 to-transparent top-full mt-2 md:mt-3 animate-shine" />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl md:max-w-6xl">
        <div className="absolute inset-0 border-2 md:border-4 border-blue-200/30 rounded-full animate-pulse" />
        <div className="absolute inset-4 md:inset-6 border-2 md:border-4 border-blue-200/20 rounded-full animate-pulse [animation-delay:0.2s]" />
      </div>
    </div>
  );
};

export default GalacticHeader;