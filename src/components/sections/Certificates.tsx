'use client';

import React from 'react';
import CertificateCard from '@/components/CertificateCard';
// Placeholder for specific certificate icons if needed, e.g., from react-icons/si for specific issuers
// import { SiCoursera, SiUdemy } from 'react-icons/si'; 

const placeholderCertificates = [
  {
    title: 'ISTQB Certified Tester - Foundation Level',
    issuer: 'ISTQB® - International Software Testing Qualifications Board',
    date: 'Jan 2023',
    url: 'https://www.istqb.org/certifications/certified-tester-foundation-level', // Replace with actual link
    // icon: <FaCertificate /> // Default icon is already in CertificateCard
  },
  {
    title: 'API Testing with Postman - Advanced Course',
    issuer: 'Udemy',
    date: 'Mar 2023',
    url: 'https://www.udemy.com/course/postman-the-complete-guide/', // Replace with actual link
    // icon: <SiUdemy /> // Example specific icon
  },
  {
    title: 'Introduction to Agile Development and Scrum',
    issuer: 'Coursera',
    date: 'Nov 2022',
    url: 'https://www.coursera.org/learn/agile-software-development', // Replace with actual link
    // icon: <SiCoursera /> // Example specific icon
  },
];

const Certificates: React.FC = () => {
  return (
    <section 
      id="certificates" 
      className="min-h-screen bg-white dark:bg-gray-800 py-20 px-4 md:px-8 pt-16"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-16 text-center">
          My Certificates
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {placeholderCertificates.map((cert) => (
            <CertificateCard 
              key={cert.title} 
              title={cert.title} 
              issuer={cert.issuer}
              date={cert.date}
              url={cert.url} 
              // icon={cert.icon} // Pass specific icon if defined
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates; 