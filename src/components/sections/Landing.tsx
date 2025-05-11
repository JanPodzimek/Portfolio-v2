'use client';

import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

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
      className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-sky-100 to-sky-300 dark:from-sky-900 dark:to-sky-700 pt-16" // pt-16 to offset nav height
    >
      <div className="px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Software Tester with a Passion for Quality
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Dedicated to ensuring software excellence through meticulous testing and a keen eye for detail. 
          Welcome to my professional portfolio.
        </p>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 animate-bounce text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
        aria-label="Scroll to About section"
      >
        <FaChevronDown className="w-10 h-10" />
      </button>
    </section>
  );
};

export default Landing; 