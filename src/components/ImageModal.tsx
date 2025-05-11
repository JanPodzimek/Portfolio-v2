'use client';

import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';

interface ImageModalProps {
  src: string | null;
  alt: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!src) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[100] p-4 transition-opacity duration-300 ease-in-out"
      onClick={onClose} // Close on backdrop click
    >
      <div 
        className="relative bg-white dark:bg-gray-900 p-2 rounded-lg shadow-2xl max-w-3xl max-h-[90vh]"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the image/modal content itself
      >
        <img src={src} alt={alt} className="block max-w-full max-h-[85vh] rounded object-contain" />
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 text-white bg-black bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 transition-colors text-2xl"
          aria-label="Close image preview"
        >
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default ImageModal; 