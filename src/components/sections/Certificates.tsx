'use client';

import React from 'react';
import CertificateCard from '@/components/CertificateCard';
import FadeIn from '@/animations/FadeIn';
import SectionTitle from '@/components/SectionTitle';
// Placeholder for specific certificate icons if needed, e.g., from react-icons/si for specific issuers
// import { SiCoursera, SiUdemy } from 'react-icons/si'; 

const placeholderCertificates = [
  {
    title: 'ISTQB® Certified',
    issuer: 'ISTQB® - International Software Testing Qualifications Board',
    date: 'Jul 2024',
    url: '/certificates/istqb-certificate.pdf',
    iconSrc: '/techIcons/istqb.png',
    // Credential ID: CTFLv4-2024-01514-CSQ (not displayed on card by default)
  },
  {
    title: 'C1 English Proficiency',
    issuer: 'goFLUENT',
    date: 'Mar 2023',
    url: '/certificates/english-proficiency.pdf',
    iconSrc: '/techIcons/uk.png',
  },
  // Third certificate removed
];

const Certificates: React.FC = () => {
  return (
    <section 
      id="certifications" 
      className="min-h-screen py-20 px-4 md:px-8 pt-16 scroll-mt-16 section-bg-properties about-certs-bg apply-light2-bg"
    >
      <FadeIn className="max-w-5xl mx-auto">
        <SectionTitle title="My Certifications" />
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
          {placeholderCertificates.map((cert, index) => (
            <FadeIn key={cert.title} delay={index * 0.1}>
              <CertificateCard 
                title={cert.title} 
                issuer={cert.issuer}
                date={cert.date}
                url={cert.url} 
                iconSrc={cert.iconSrc}
                // defaultIcon={<SomeOtherIcon />} // Example if you had a different default
              />
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </section>
  );
};

export default Certificates; 