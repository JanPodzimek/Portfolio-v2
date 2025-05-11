'use client';

import React from 'react';

interface SectionTitleProps {
  title: string;
  className?: string; // Optional className for the outer wrapper for margins etc.
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, className }) => {
  return (
    <div className={`mb-12 md:mb-16 flex justify-center ${className || ''}`}>
      <div className="relative py-2"> {/* Increased py for taller shadow effect */} 
        {/* Background/Shadow Layer - Changed to grey */}
        <div 
          className="absolute inset-0 bg-gray-400 dark:bg-gray-600 transform -skew-y-3 -rotate-2 translate-x-1 translate-y-1 rounded-lg shadow-md"
        ></div>
        {/* Foreground/Text Layer */}
        <div 
          className="relative bg-sky-600 dark:bg-sky-700 text-white px-8 py-4 font-bold text-2xl md:text-3xl uppercase tracking-wider transform -skew-y-3 rounded-lg shadow-lg"
        >
          {title}
        </div>
      </div>
    </div>
  );
};

export default SectionTitle; 