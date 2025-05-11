'use client'; // Required for client-side interactions like onClick

import React from 'react';
import Landing from '@/components/sections/Landing';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Certificates from '@/components/sections/Certificates';
import Gallery from '@/components/sections/Gallery';
// We will import other sections here as we create them
// import Gallery from '@/components/sections/Gallery';

export default function HomePage() {
  return (
    <>
      <Landing />
      <About />
      <Skills />
      <Certificates />
      <Gallery />
      {/* Placeholder for other sections that will be added below the landing section */}
      {/* <div id="gallery" className="min-h-screen bg-gray-100 dark:bg-gray-700 pt-16"><h2 class="text-center text-2xl">Gallery Section Placeholder</h2></div> */}
    </>
  );
}
