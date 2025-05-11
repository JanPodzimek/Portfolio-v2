'use client';

import React, { useState } from 'react';
import GalleryItem from '@/components/GalleryItem';
import ImageModal from '@/components/ImageModal';

const placeholderImages = [
  { id: '1', src: '/gallery/relax.JPG', alt: 'Gallery image - Relaxing' },
  { id: '2', src: '/gallery/guitar.jpg', alt: 'Gallery image - Playing guitar' },
  { id: '3', src: '/gallery/ruckovani.jpg', alt: 'Gallery image - Ruckovani (activity)' }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedImageAlt, setSelectedImageAlt] = useState<string>('');

  const openModal = (src: string, alt: string) => {
    setSelectedImage(src);
    setSelectedImageAlt(alt);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedImageAlt('');
  };

  return (
    <section 
      id="gallery" 
      className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20 px-4 md:px-8 pt-16 scroll-mt-16"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center">
          Photo Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {placeholderImages.map((image) => (
            <GalleryItem 
              key={image.id} 
              src={image.src} 
              alt={image.alt}
              onClick={() => openModal(image.src, image.alt)}
            />
          ))}
        </div>
      </div>
      <ImageModal src={selectedImage} alt={selectedImageAlt} onClose={closeModal} />
    </section>
  );
};

export default Gallery; 