'use client';

import React from 'react';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen bg-white dark:bg-gray-800 py-20 px-4 md:px-8 pt-16" // pt-16 to offset nav height
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          About Me
        </h2>
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            After two years of full-time job experience as a software tester, I'm still strongly passionate about what I do. During these two years I've learned a lot and found myself the most in exploratory and API testing activities.
          </p>
          <p>
            At this time, I've been working as a software tester in Alza.cz company, covering the Alza Trade project, and constantly extending my skills and knowledge about SW testing.
          </p>
          <p>
            In addition, I have been studying English as a hobby since 2018 and redoubled my efforts even further with professional private lessons since 2021, which significantly improved, especially, my speaking ability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 