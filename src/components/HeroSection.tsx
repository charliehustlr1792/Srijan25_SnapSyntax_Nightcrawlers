import React from 'react';

export default function HeroSection() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-red-600 to-blue-600 flex items-center justify-start">
      <div className="text-left p-8 pl-16 max-w-lg">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          JOHN DOE
        </h1>
        <p className="text-white text-lg md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus 
          hendrerit arcu sed erat molestie vehicula.
        </p>
      </div>
    </div>
  );
}