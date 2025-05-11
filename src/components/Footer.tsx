'use client';

import React from 'react';
import { FaLinkedinIn, FaDownload } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 px-4 md:px-8 text-center border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        
        <div className="text-sm">
          © {new Date().getFullYear()} Jan Podzimek. All rights reserved.
        </div>

        <div className="flex items-center space-x-6">
          <a 
            href="/Jan-Podzimek-CV.pdf" 
            download
            className="flex items-center space-x-2 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
            aria-label="Download CV"
          >
            <FaDownload className="text-lg" />
            <span>Download CV</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/podzimekjan/" 
            target="_blank" 
            rel="noopener noreferrer" 
            aria-label="LinkedIn Profile"
            className="hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
          >
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 