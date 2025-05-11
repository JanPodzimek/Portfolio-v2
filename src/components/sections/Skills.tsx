'use client';

import React from 'react';
import SkillCard from '@/components/SkillCard';
import {
  FaCode,       // For C#
  FaDatabase,   // For SQL Server
  FaCloud,      // For Azure DevOps
  FaPaperPlane, // For Postman
  FaChartLine,  // For Kibana
  FaServer,     // For AKHQ
  FaProjectDiagram // For draw.io
} from 'react-icons/fa';
import { SiConfluence, SiJira } from 'react-icons/si'; // SiAzuredevops and SiDrawio removed

const mainTools = [
  { name: 'C#', icon: <FaCode /> },
  { name: 'Microsoft SQL Server', icon: <FaDatabase /> },
  { name: 'Azure DevOps', icon: <FaCloud /> }, // Using FaCloud
  { name: 'Postman', icon: <FaPaperPlane /> },
  { name: 'Kibana', icon: <FaChartLine /> },
  { name: 'AKHQ', icon: <FaServer /> },
];

const additionalTools = [
  { name: 'Confluence', icon: <SiConfluence /> },
  { name: 'Jira', icon: <SiJira /> },
  { name: 'draw.io', icon: <FaProjectDiagram /> }, // Using FaProjectDiagram
];

const Skills: React.FC = () => {
  return (
    <section 
      id="skills" 
      className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20 px-4 md:px-8 pt-16"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center">
          My Skills & Tools
        </h2>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center md:text-left">
            Main Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
            {mainTools.map((tool) => (
              <SkillCard key={tool.name} icon={tool.icon} name={tool.name} level="Main" />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center md:text-left">
            Additional Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
            {additionalTools.map((tool) => (
              <SkillCard key={tool.name} icon={tool.icon} name={tool.name} level="Additional" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 