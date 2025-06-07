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
        <SectionTitle title="What I enjoy outside of work" />
        
        <div className="mb-12 p-6 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-md">
          <div className="flex items-center gap-4">
            <img 
              src="/techIcons/brain-exercise.png" 
              alt="Puzzle icon" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Puzzle Solving</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
                Solving puzzles helps me practice creativity, problem-solving, and critical thinking—skills that are essential for keeping my mind sharp. It trains me to think clearly and outside the box, which is crucial for doing my job effectively.
              </p>
            </div>
          </div>
        </div>

        
        <div className="mb-12 p-6 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-md">
          <div className="flex items-center gap-4">
            <img 
              src="/techIcons/running.png" 
              alt="Running icon" 
              className="w-12 h-12 object-contain"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">I'm a Sportsman!</h3>
              <p className="text-gray-700 dark:text-gray-300 mt-1">
              I enjoy almost every kind of sport—running, hiking, playing badminton, working out—anything that keeps me active and energized.
              </p>
            </div>
          </div>
        </div>

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