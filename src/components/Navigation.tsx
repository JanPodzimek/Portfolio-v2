'use client';

import React from 'react';
import Link from 'next/link';
import ThemeToggleButton from './ThemeToggleButton';

const navItems = [
  { name: 'Home', href: '#landing' }, // Assuming 'landing' is the ID for the landing section
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Gallery', href: '#gallery' },
];

const Navigation: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="font-bold text-xl text-gray-800 dark:text-white">My Portfolio</span>
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="ml-4">
              <ThemeToggleButton />
            </div>
          </div>
          <div className="md:hidden ml-4">
            <ThemeToggleButton />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 