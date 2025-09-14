import React, { useEffect, useState } from 'react';
import './ProfileBanner.css';
import PlayButton from '../components/PlayButton';
import MoreInfoButton from '../components/MoreInfoButton';


const ProfileBanner: React.FC = () => {



  // Static content from resume
  const bannerData = {
    headline: "Naman Balai",
    profileSummary: "Applications Developer at Oracle | B.Tech CSE, NIT Warangal | React, Node.js, Java, Cloud | Hyderabad, Telangana",
    resumeLink: { url: "/Naman_Balai_Updated.pdf" },
    linkedinLink: "https://www.linkedin.com/in/namanbalai/", // Update with your actual LinkedIn if different
    backgroundImage: { url: "../images/profile-banner.jpg" },
  };

  const handlePlayClick = () => {
    window.open(bannerData.resumeLink.url, '_blank');
  };

  const handleLinkedinClick = () => { 
    window.open(bannerData.linkedinLink, '_blank');
  }

  return (
    <div className="profile-banner">
      <div className="banner-content">
        <h1 className="banner-headline" id='headline'>{bannerData.headline}</h1>
        <p className="banner-description">
          {bannerData.profileSummary}
        </p>
        <div className="banner-buttons">
          <PlayButton onClick={handlePlayClick} label="Resume" />
          <MoreInfoButton onClick={handleLinkedinClick} label="LinkedIn" />
        </div>
      </div>
    </div>
  );
};

export default ProfileBanner;
