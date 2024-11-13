import React from 'react';

const GalacticHeader = () => {
  return (
    <div className="relative py-12 mb-12">
      {/* Increased padding and margin */}
      
      {/* Expanded background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-blue-200/30 to-blue-100/30 blur-2xl" />
      {/* Increased blur */}
      
      {/* Main content */}
      <div className="relative flex flex-col items-center scale-110">
        {/* Added scale transform */}
        
        {/* Larger company name with gradient text */}
        <h1 className="text-7xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600 bg-clip-text text-transparent animate-gradient-x">
          Galactic
          <span className="text-8xl block mt-2">
            Shine
          </span>
        </h1>
        
        {/* Larger subtitle with shine effect */}
        <div className="relative mt-4">
          <p className="text-3xl font-medium text-blue-900/80 tracking-widest uppercase">
            Detailing
          </p>
          {/* Wider animated shine line */}
          <div className="absolute inset-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent top-full mt-2 animate-shine" />
        </div>
      </div>
      
      {/* Larger decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
        {/* Increased max-width */}
        <div className="absolute inset-0 border-2 border-blue-200/30 rounded-full animate-pulse" />
        {/* Thicker border */}
        <div className="absolute inset-4 border-2 border-blue-200/20 rounded-full animate-pulse [animation-delay:0.2s]" />
        {/* Increased inset spacing */}
      </div>
    </div>
  );
};

export default GalacticHeader;