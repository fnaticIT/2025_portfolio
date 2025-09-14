import React, { useEffect, useState } from 'react';
import './ContactMe.css';
import profilePic from '../images/profile.jpg';
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from 'react-icons/fa';


const ContactMe: React.FC = () => {
  // Static contact info from resume
  const userData = {
    name: "Naman Balai",
    title: "Applications Developer, Oracle",
    summary: "Hyderabad, Telangana",
    companyUniversity: "National Institute Of Technology Warangal",
    linkedinLink: "https://www.linkedin.com/in/namanbalai/", // Update with your actual LinkedIn if different
    email: "namanbalai06@gmail.com",
    phoneNumber: "+91 8460505238",
    profilePicture: { url: "/images/profile.jpg" },
  };

  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        {userData.profilePicture.url && userData.profilePicture.url !== '' ? (
          <img src={userData.profilePicture.url} alt="Naman Balai" className="badge-avatar" onError={e => (e.currentTarget.style.display = 'none')} />
        ) : null}
        <div className="badge-content">
          <h3 className="badge-name">{userData.name}</h3>
          <p className="badge-title">{userData.title}</p>
          <p className="badge-description">
            {userData.summary}
          </p>
          <p className="badge-company">{userData.companyUniversity}</p>
          <a
            href={userData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>
      <div className="contact-header">
        <p>I'm always open to connect! Feel free to reach out.</p>
      </div>
      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${userData.phoneNumber}`} className="contact-link">
            {userData.phoneNumber}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
