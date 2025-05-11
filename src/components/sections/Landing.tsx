'use client';

import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

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
      className="min-h-screen flex flex-col md:flex-row items-stretch bg-gray-50 dark:bg-gray-900 relative overflow-hidden pt-16 md:pt-0 scroll-mt-20"
    >
      <div className="w-full md:w-3/5 lg:w-1/2 flex flex-col justify-center items-center md:items-start p-8 md:p-12 lg:p-16 text-center md:text-left z-10">
        <p className="text-sky-600 dark:text-sky-400 font-semibold text-sm md:text-base uppercase tracking-wider mb-2">
          HEY THERE!
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight">
          I AM JAN PODZIMEK
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8">
          SOFTWARE TESTER
        </p>
        
        <div className="flex space-x-4 mb-10">
          <a href="https://www.linkedin.com/in/podzimekjan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-500 transition-colors">
            <FaLinkedinIn size={28} />
          </a>
          {/* Add other social icons here if needed, e.g., GitHub */}
          {/* <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="text-gray-600 dark:text-gray-400 hover:text-sky-600 dark:hover:text-sky-500 transition-colors">
            <FaGithub size={28} />
          </a> */}
        </div>

        <button
          onClick={scrollToAbout}
          className="px-8 py-3 bg-gradient-to-r from-sky-500 to-sky-700 hover:from-sky-600 hover:to-sky-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg cursor-pointer"
        >
          ABOUT ME
        </button>
      </div>

      <div 
        className="absolute inset-0 md:relative w-full md:w-2/5 lg:w-1/2 flex items-center justify-center overflow-hidden"
        // The style for clip-path should ideally be here if it applies to the container of the image
      >
        <div 
          className="absolute inset-0" // Removed gradient, image will provide visual
          // IMPORTANT: Replace this polygon with your actual S-curve path from a clip-path generator
          style={{ clipPath: 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)' }} 
        >
          {/* Image to be clipped */}
          <img 
            src="/placeholder-image.jpg" // REPLACE with your image path, e.g., /my-visual.jpg
            alt="Landing page visual"
            className="w-full h-full object-cover" // Ensures image fills the clipped area
          />
        </div>
        {/* Image removed, blobs will be styled in globals.css or a dedicated CSS module */}
      </div>
    </section>
  );
};

export default Landing; 