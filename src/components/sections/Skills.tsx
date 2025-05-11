'use client';

import React from 'react';
import SkillCard from '@/components/SkillCard';
import FadeIn from '@/animations/FadeIn';
import SectionTitle from '@/components/SectionTitle';

const mainTools = [
  { name: 'Puzzle Solving', iconSrc: '/techIcons/brain-exercise.png', description: 'Solving puzzles helps me practice creativity, problem-solving, and critical thinking—skills that are essential for keeping my mind sharp. It trains me to think clearly and outside the box, which is crucial for doing my job effectively.' },
  { name: 'C#', iconSrc: '/techIcons/c-sharp.png', description: 'Building API testing framework using C# and HttpClient. Writing my own testing tools that help me to test faster and more efficiently.' },
  { name: 'Microsoft SQL Server', iconSrc: '/techIcons/sql-server.png', description: 'I use MS SQL for data validation, verifying backend processes, and supporting test scenarios. I regularly execute SQL queries to check data integrity, perform joins, filter records, and ensure the system stores and processes information as expected. I also use it to troubleshoot production issues when needed.' },
  { name: 'Azure DevOps', iconSrc: '/techIcons/azure-devops.png', description: 'Managing CI/CD pipelines, building applications, and deploying them to both development and production environments. Managing source control, handling repositories, and collaborating through pull requests.' },
  { name: 'Postman', iconSrc: '/techIcons/postman.png', description: 'Creating and managing collections, automated API test runs. Skilled in writing and maintaining test scripts.' },
];

const Skills: React.FC = () => {
  return (
    <section 
      id="skills" 
      className="min-h-screen bg-gray-100 dark:bg-gray-900 py-20 px-4 md:px-8 pt-16 scroll-mt-16"
    >
      <FadeIn className="max-w-5xl mx-auto">
        <SectionTitle title="Technologies and tools I use the most" />

        {/* Introductory List */}
        <div className="mb-12 px-4 md:px-0 mx-auto max-w-3xl">
          <ul className="list-disc list-outside space-y-3 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-left">
            <li>
              As a software tester, I work with a variety of tools depending on the project. My daily routine often includes working with databases, APIs, Azure DevOps, and monitoring tools like Kibana or AKHQ.
            </li>
            <li>
              I also use essential non-technical tools such as Confluence for test documentation, Jira for bug tracking and reporting, and Draw.io for creating diagrams—an important part of analyzing new features.
            </li>
            <li>
            Curiosity about AI tools and their impact on software development drives me to actively explore their use in testing whenever possible.
            </li>
          </ul>
        </div>

        <div className="mb-16">
          {/* <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-8 text-center md:text-left">
            Main Tools
          </h3> */}
          <div className="grid grid-cols-1 gap-6 md:gap-8">
            {mainTools.map((tool, index) => (
              <FadeIn key={tool.name} delay={index * 0.1}>
                <SkillCard iconSrc={tool.iconSrc} name={tool.name} description={tool.description} level="Main" />
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Skills; 