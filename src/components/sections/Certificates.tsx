'use client';

import React from 'react';
import CertificateCard from '@/components/CertificateCard';
// Placeholder for specific certificate icons if needed, e.g., from react-icons/si for specific issuers
// import { SiCoursera, SiUdemy } from 'react-icons/si'; 

const placeholderCertificates = [
  {
    title: 'ISTQB® Certified',
    issuer: 'ISTQB® - International Software Testing Qualifications Board',
    date: 'Jul 2024',
    url: 'https://janpodzimek.wz.cz/images/CTFLv4-2024-01514-CSQ_Jan_Podzimek.pdf',
    iconSrc: '/techIcons/istqb.png',
    // Credential ID: CTFLv4-2024-01514-CSQ (not displayed on card by default)
  },
  {
    title: 'C1 English Proficiency',
    issuer: 'goFLUENT',
    date: 'Mar 2023',
    url: 'https://janpodzimek.wz.cz/images/Language%20Proficiency(C1).pdf',
    iconSrc: '/techIcons/uk.png',
  },
  // Third certificate removed
];

const Certificates: React.FC = () => {
  return (
    <section 
      id="certificates" 
      className="min-h-screen bg-white dark:bg-gray-800 py-20 px-4 md:px-8 pt-16 scroll-mt-16"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
          My Certificates
        </h2>
        {/* Introductory List */}
        <div className="mb-12 px-4 md:px-0 mx-auto max-w-3xl">
          <ul className="list-disc list-outside space-y-3 text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-left">
            <li>
              I successfully passed the ISTQB Foundation Level exam. While I don't fully agree with everything the certification covers, I saw it as an important step to demonstrate my commitment at the beginning of my testing career.
            </li>
            <li>
              I've also passed the C1 English proficiency exam, so I'm more than comfortable using English in a professional setting. 
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {placeholderCertificates.map((cert) => (
            <CertificateCard 
              key={cert.title} 
              title={cert.title} 
              issuer={cert.issuer}
              date={cert.date}
              url={cert.url} 
              iconSrc={cert.iconSrc}
              // defaultIcon={<SomeOtherIcon />} // Example if you had a different default
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 