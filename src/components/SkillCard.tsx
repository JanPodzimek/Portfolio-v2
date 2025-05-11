'use client';

import React from 'react';
import Image from 'next/image';

interface SkillCardProps {
  iconSrc: string;
  name: string;
  description: string;
  level?: 'Main' | 'Additional';
}

const SkillCard: React.FC<SkillCardProps> = ({ iconSrc, name, description, level }) => {
  return (
    <div className="flex flex-row items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out w-full">
      {/* Icon container */}
      <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 flex items-center justify-center mr-4 md:mr-6 relative">
        <Image 
          src={iconSrc} 
          alt={`${name} icon`} 
          fill
          style={{ objectFit: 'contain' }}
        />
      </div>
      {/* Text content container */}
      <div className="flex-grow text-left">
        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white mb-1">{name}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default SkillCard; 