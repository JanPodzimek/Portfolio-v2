'use client';

import React from 'react';
import FadeIn from '@/animations/FadeIn';
import SectionTitle from '@/components/SectionTitle';

const About: React.FC = () => {
  return (
    <section 
      id="about" 
      className="min-h-screen py-20 px-4 md:px-8 pt-16 scroll-mt-16 section-bg-properties about-certs-bg apply-light2-bg"
    >
      <FadeIn className="max-w-3xl mx-auto">
        <SectionTitle title="About Me" />
        <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
          <p>
          My testing approach aligns with the principles of Rapid Software Testing, focusing on adaptability, critical thinking, and real-time analysis over rigid processes. Instead of strictly following predefined test cases, I explore the system through investigative and context-driven testing. This allows me to uncover issues quickly, adapt to changes, and provide fast, valuable feedback to the team. I rely on my intuition, experience, and technical understanding to evaluate risk, design meaningful tests on the fly, and make informed decisions about what to test next.
          </p>
          <p>
          What I naturally don’t like is the labeling of testers as either 'manual' or 'automation'—it oversimplifies the role. Effective testing combines critical thinking, exploration, and the smart use of tools, regardless of such labels.
          </p>
          <p>
          Currently, I work at Alza.cz, testing the AlzaTrade project while continuously expanding my skills in software testing. I quickly learn new tools and technologies as needed by the development process. With experience in front-end, back-end, integration, and end-to-end testing, I adapt to whatever is required to get the job done.
          </p>
        </div>

        {/* Buttons container */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a 
            href="/Jan-Podzimek-CV.pdf" // Updated CV path
            download
            className="px-8 py-3 bg-transparent border-2 border-sky-600 text-sky-600 dark:border-sky-500 dark:text-sky-500 hover:bg-sky-600 hover:text-white dark:hover:bg-sky-500 dark:hover:text-white font-semibold rounded-lg shadow-sm hover:shadow-md transform hover:scale-105 transition-all duration-300 text-lg cursor-pointer inline-block text-center"
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

        {/* LinkedIn Icon Button */}
        <div className="mt-8 flex justify-center">
          <a 
            href="https://www.linkedin.com/in/podzimekjan/" // <<< --- REMEMBER TO REPLACE THIS
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Connect on LinkedIn"
            className="px-4 py-2 bg-gradient-to-r from-sky-500 to-sky-700 hover:from-sky-600 hover:to-sky-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 text-xl cursor-pointer inline-flex items-center justify-center"
          >
            in
          </a>
        </div>

      </FadeIn>
    </section>
  );
};

export default About; 