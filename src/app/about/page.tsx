import React from 'react';
import Image from 'next/image';

export default function AboutUsSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <Image 
        src="/assets/about.png"
        alt="about background"
        fill
        priority
        className="object-cover"
      />
      <div className="relative w-full min-h-screen py-24 px-8 z-10">
        <div className="container mx-auto h-full flex flex-col justify-between">
          <div className="flex flex-col mb-16">
            <h2 className="text-5xl font-bold text-pink-800 ml-96">
              About
            </h2>
            <div className="flex items-center">
              <h2 className="text-5xl font-bold text-pink-800 ml-96">Us</h2>
              <span className="text-6xl text-pink-800">→</span>
            </div>
          </div>
          
          <div className="max-w-2xl mb-auto">
            <p className="text-lg text-pink-800 mb-6 ml-96 pl-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-lg text-pink-800 ml-96 pl-7">
              Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.
            </p>
          </div>
          
          <div className="flex justify-end pr-16 mt-60">
          <button className="bg-gray-800 hover:bg-gray-900 text-white py-3 px-8 rounded-lg text-lg transition-colors duration-300">
            Contact Us
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}