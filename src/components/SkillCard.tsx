'use client';

import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level?: 'Main' | 'Additional'; // Optional level for styling or info
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out">
      <div className="text-5xl text-sky-600 dark:text-sky-400 mb-4">{icon}</div>
      <span className="text-lg font-medium text-center text-gray-700 dark:text-gray-300">{name}</span>
    </div>
  );
};

export default SkillCard; 