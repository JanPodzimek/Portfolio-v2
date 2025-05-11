'use client';

import React from 'react';
import Image from 'next/image';

const Landing: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="landing" 
      className="min-h-screen flex flex-col md:flex-row items-stretch bg-gray-50 dark:bg-gray-900 relative overflow-hidden pt-24 md:pt-0 scroll-mt-20"
    >
      <div className="w-full md:w-3/5 lg:w-1/2 flex flex-col justify-center items-center md:items-start p-8 md:p-12 lg:p-16 text-center md:text-left z-10 order-1 md:order-1">
        <p className="text-sky-600 dark:text-sky-400 font-semibold text-sm md:text-base uppercase tracking-wider mb-2">
          HEY THERE!
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
          I AM JAN PODZIMEK
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          SOFTWARE TESTER
        </p>
        
        <button
          onClick={scrollToAbout}
          className="px-8 py-3 bg-gradient-to-r from-sky-500 to-sky-700 hover:from-sky-600 hover:to-sky-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg cursor-pointer mb-10"
        >
          ABOUT ME
        </button>
      </div>

      <div 
        className="w-full h-80 md:h-auto md:w-2/5 lg:w-1/2 flex items-center justify-center overflow-hidden order-2 md:order-2 md:relative"
      >
        <div 
          className="w-full h-full relative"
        >
          <div 
            className="w-full h-full hidden md:block relative"
            style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)' }} 
          >
            <Image 
              src="/my-landing-photo.jpg"
              alt="Landing page visual"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <div className="w-full h-full md:hidden relative">
            <Image 
              src="/my-landing-photo.jpg"
              alt="Landing page visual"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing; 