'use client';

import React from 'react';
import FadeIn from '@/animations/FadeIn';
import SectionTitle from '@/components/SectionTitle';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen bg-white dark:bg-gray-800 py-20 px-4 md:px-8 pt-16 scroll-mt-16" // pt-16 for content, scroll-mt-16 for navbar offset
    >
      <FadeIn className="max-w-3xl mx-auto">
        <SectionTitle title="About Me" />
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
          <p>
            After three years of full-time experience as a software tester, I'm still deeply passionate about my work. During this time, I've grown the most through exploratory and API testing, which I find especially engaging.
          </p>
          <p>
            Currently, I work at Alza.cz, where I test the Alza Trade project and continuously expand my knowledge and skills in software testing. I quickly learn new tools and technologies as required by the development process. I'm experienced in front-end, back-end, integration, and end-to-end testing, and I adapt to whatever is needed to get the job done.
          </p>
          <p>
            Outside of work, I've been studying English as a hobby since 2018. Since 2021, I've taken professional private lessons, which have significantly improved my speaking abilities.
          </p>
        </div>

        {/* Buttons container */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="/Jan-Podzimek-CV.pdf" // Updated CV path
            download
            className="px-8 py-3 bg-gradient-to-r from-sky-500 to-sky-700 hover:from-sky-600 hover:to-sky-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-lg cursor-pointer inline-block text-center"
          >
            Download CV
          </a>
          <button
            onClick={() => {
              const skillsSection = document.getElementById('skills');
              if (skillsSection) {
                skillsSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-3 bg-transparent border-2 border-sky-600 text-sky-600 dark:border-sky-500 dark:text-sky-500 hover:bg-sky-600 hover:text-white dark:hover:bg-sky-500 dark:hover:text-white font-semibold rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 text-lg cursor-pointer"
          >
            Read More
          </button>
        </div>

      </FadeIn>
    </section>
  );
};

export default About; 