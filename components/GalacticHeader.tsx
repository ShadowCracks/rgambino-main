import React from 'react';

const GalacticHeader = () => {
  return (
    <div className="relative py-6 mb-8">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-blue-200/30 to-blue-100/30 blur-xl" />
      
      {/* Main content */}
      <div className="relative flex flex-col items-center">
        {/* Company name with gradient text */}
        <h1 className="text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
          Galactic
          <span className="text-7xl block mt-1">
            Shine
          </span>
        </h1>
        
        {/* Subtitle with shine effect */}
        <div className="relative mt-2">
          <p className="text-2xl font-medium text-blue-900/80 tracking-widest uppercase">
            Detailing
          </p>
          {/* Animated shine line */}
          <div className="absolute inset-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent top-full mt-1 animate-shine" />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-3xl">
        <div className="absolute inset-0 border border-blue-200/30 rounded-full animate-pulse" />
        <div className="absolute inset-2 border border-blue-200/20 rounded-full animate-pulse [animation-delay:0.2s]" />
      </div>
    </div>
  );
};

export default GalacticHeader;