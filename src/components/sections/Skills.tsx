'use client';

import React from 'react';
import SkillCard from '@/components/SkillCard';
import FadeIn from '@/animations/FadeIn';
import SectionTitle from '@/components/SectionTitle';

const mainTools = [
  { name: 'C#', iconSrc: '/techIcons/c-sharp.png', description: 'I\'m not a programmer, and my C# skills aren\'t at the level of a developer, but I have a solid understanding of the code and can follow changes made by others. This allows me to review pull requests and understand how updates impact the system. I also create simple testing tools that help me test faster and more efficiently.' },
  { name: 'Microsoft SQL Server', iconSrc: '/techIcons/sql-server.png', description: 'Using MS SQL mainly for data validation, backend process verification, and test scenario support. This includes running SQL queries to check data integrity, perform joins, filter records, and ensure correct data processing. It\'s also a helpful tool for troubleshooting production issues when needed.' },
  { name: 'Azure DevOps', iconSrc: '/techIcons/azure-devops.png', description: 'Managing CI/CD pipelines, building applications, and deploying them to both development and production environments are part of my daily routine.' },
  { name: 'Postman', iconSrc: '/techIcons/postman.png', description: 'Using Postman to create and manage collections, run automated API tests, and simplify testing by calling sequences of requests that would otherwise take significantly more time if done manually.' },
{ name: 'Puzzle Solving', iconSrc: '/techIcons/brain-exercise.png', description: 'Solving puzzles helps me practice creativity, problem-solving, and critical thinking—skills that are essential for keeping my mind sharp. It trains me to think clearly and outside the box, which is crucial for doing my job effectively.' }
];

const Skills: React.FC = () => {
  return (
    <section 
      id="skills" 
      className="min-h-screen py-20 px-4 md:px-8 pt-16 scroll-mt-16 section-bg-properties skills-gallery-bg apply-light2-bg"
    >
      <FadeIn className="max-w-5xl mx-auto">
        <SectionTitle title="Technologies and tools I use the most" />

        <div className="mb-16">
          {/* <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center md:text-left">
            Main Tools
          </h3> */}
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {mainTools.map((tool, index) => (
              <FadeIn key={tool.name} delay={index * 0.1}>
                <SkillCard 
                  iconSrc={tool.iconSrc} 
                  name={tool.name} 
                  description={tool.description} 
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Skills; 