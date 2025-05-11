'use client';

import React from 'react';
import Image from 'next/image';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date: string;
  url: string;
  iconSrc?: string; // Optional: path to a custom image icon
  defaultIcon?: React.ReactNode; // Optional: fallback React icon if iconSrc is not provided
}

const CertificateCard: React.FC<CertificateCardProps> = ({ title, issuer, date, url, iconSrc, defaultIcon }) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 ease-in-out group"
    >
      <div className="flex items-start space-x-4">
        <div className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 flex items-center justify-center text-3xl text-amber-500 dark:text-amber-400 mt-1 group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors relative">
          {iconSrc ? (
            <Image 
              src={iconSrc} 
              alt={`${title} icon`} 
              fill
              style={{ objectFit: 'contain' }}
              className="rounded-sm"
            />
          ) : (
            defaultIcon || <FaCertificate />
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Issued by: {issuer}</p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mb-2">Date: {date}</p>
        </div>
        <FaExternalLinkAlt className="text-gray-400 dark:text-gray-500 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors text-lg opacity-75 group-hover:opacity-100" />
      </div>
    </a>
  );
};

export default CertificateCard; 