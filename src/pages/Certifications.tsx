import React, { useEffect, useState } from 'react';
import './Certifications.css';
import { FaExternalLinkAlt, FaUniversity } from 'react-icons/fa';
import { SiUdemy, SiCoursera, SiIeee } from 'react-icons/si';
// import { Certification } from '../types';
const iconData: { [key: string]: JSX.Element } = {
  'udemy': <SiUdemy />,
  'coursera': <SiCoursera />,
  'ieee': <SiIeee />,
  'university': <FaUniversity />
}

const Certifications: React.FC = () => {
  // Static certifications from resume
  const certifications = [
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      issuedDate: "May 2023",
      link: "https://www.credly.com/badges/aws-solutions-architect",
      iconName: "aws"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Coursera",
      issuedDate: "Dec 2022",
      link: "https://www.coursera.org/account/accomplishments/fullstack",
      iconName: "coursera"
    },
    // Add more certifications as needed from your resume
  ];

  return (
    <div className="certifications-container">
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <a href={cert.link} key={index} target="_blank" rel="noopener noreferrer" className="certification-card" style={{ '--delay': `${index * 0.2}s` } as React.CSSProperties}>
            <div className="certification-content">
              <div className="certification-icon">{iconData[cert.iconName] || <FaUniversity />}</div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.issuedDate && <span className="issued-date">Issued {cert.issuedDate}</span>}
            </div>
            <div className="certification-link animated-icon">
              <FaExternalLinkAlt />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
