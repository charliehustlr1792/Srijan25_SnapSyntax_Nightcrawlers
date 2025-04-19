import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
    return (
        <div className='relative w-full h-screen overflow-hidden'>
           <Image 
                src="/assets/hero.png"
                alt="hero"
                fill
                priority
                className="object-cover"
            />
            <div className="absolute inset-0">
                <div className="relative h-full flex items-center">
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
            </div>
        </div>
    );
}