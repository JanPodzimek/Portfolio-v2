'use client';

import React from 'react';

interface GalleryItemProps {
  src: string;
  alt: string;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ src, alt, onClick }) => {
  return (
    <div 
      className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden cursor-pointer group transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
      onClick={onClick}
    >
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
      />
    </div>
  );
};

export default GalleryItem; 