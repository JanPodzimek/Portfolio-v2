'use client';

import React from 'react';
import Image from 'next/image';

interface GalleryItemProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt, onClick }) => {
  return (
    <div 
      // className="relative aspect-w-1 aspect-h-1 rounded-lg overflow-hidden cursor-pointer group transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
      // className="relative w-60 h-60 rounded-lg overflow-hidden cursor-pointer group transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
      // Attempting manual aspect ratio with padding-top
      className="relative w-full rounded-lg overflow-hidden cursor-pointer group transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
      style={{ paddingTop: '100%' }} // For 1:1 aspect ratio. Image component should be absolutely positioned within.
      onClick={onClick}
    >
      <div className="absolute inset-0"> {/* Wrapper for next/image to fill */} 
        <Image 
          src={src} 
          alt={alt} 
          fill
          style={{ objectFit: 'cover' }}
          className="group-hover:opacity-90 transition-opacity duration-300"
        />
      </div>
    </div>
  );
};

export default GalleryItem; 