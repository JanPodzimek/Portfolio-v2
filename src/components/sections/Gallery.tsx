'use client';

import React, { useState } from 'react';
import GalleryItem from '@/components/GalleryItem';
import ImageModal from '@/components/ImageModal';
import FadeIn from '@/animations/FadeIn';
import SectionTitle from '@/components/SectionTitle';

const placeholderImages = [
  { id: '1', src: '/gallery/relax.JPG', alt: 'Gallery image - Relaxing' },
  { id: '2', src: '/gallery/guitar.jpg', alt: 'Gallery image - Playing guitar' },
  { id: '3', src: '/gallery/ruckovani.jpg', alt: 'Gallery image - Ruckovani (activity)' }
  // { id: '4', src: '/gallery/kroj.jpg', alt: 'Gallery image - Wearing kroj' }, // Removed
  // { id: '5', src: '/gallery/medaile.jpg', alt: 'Gallery image - Medal' }, // Removed
  // { id: '6', src: '/gallery/DnD.jpg', alt: 'Gallery image - Dungeons and Dragons' } // Removed
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
      className="min-h-screen py-20 px-4 md:px-8 pt-16 scroll-mt-16 section-bg-properties skills-gallery-bg apply-light2-bg"
    >
      <FadeIn className="max-w-6xl mx-auto">
        <SectionTitle title="Photo Gallery" />
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
      </FadeIn>
      <ImageModal src={selectedImage} alt={selectedImageAlt} onClose={closeModal} />
    </section>
  );
};

export default Gallery; 