import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaCode, FaBriefcase, FaCertificate, FaHandsHelping, FaProjectDiagram, FaEnvelope, FaLink } from 'react-icons/fa';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: "Skills", imgSrc: "https://picsum.photos/seed/skills/250/200", icon: <FaCode />, route: "/skills" },
    { title: "Experience", imgSrc: "https://picsum.photos/seed/workexperience/250/200", icon: <FaBriefcase />, route: "/work-experience" },
    // Removed Certifications and Recommendations
    { title: "Projects", imgSrc: "https://picsum.photos/seed/projects/250/200", icon: <FaProjectDiagram />, route: "/projects" },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/contact/250/200", icon: <FaEnvelope />, route: "/contact-me" },
    { title: "Links", imgSrc: "https://picsum.photos/seed/links/250/200", icon: <FaLink />, route: "/links" }
  ],
  developer: [
    { title: "Skills", imgSrc: "https://picsum.photos/seed/coding/250/200", route: "/skills", icon: <FaCode /> },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/development/250/200", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Experience", imgSrc: "https://picsum.photos/seed/work/250/200", route: "/work-experience", icon: <FaBriefcase /> },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/connect/250/200", route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Links", imgSrc: "https://picsum.photos/seed/links/250/200", route: "/links", icon: <FaLink /> }
  ],
  stalker: [
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/call/250/200", route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Links", imgSrc: "https://picsum.photos/seed/links/250/200", route: "/links", icon: <FaLink /> },
    { title: "Projects", imgSrc: "https://picsum.photos/seed/planning/250/200", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Experience", imgSrc: "https://picsum.photos/seed/resume/250/200", route: "/work-experience", icon: <FaBriefcase /> }
  ],
  adventure: [
    { title: "Projects", imgSrc: "https://picsum.photos/seed/innovation/250/200", route: "/projects", icon: <FaProjectDiagram /> },
    { title: "Contact Me", imgSrc: "https://picsum.photos/seed/connect/250/200", route: "/contact-me", icon: <FaEnvelope /> },
    { title: "Links", imgSrc: "https://picsum.photos/seed/links/250/200", route: "/links", icon: <FaLink /> },
    // Removed Certifications
  ]
};


const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
      {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className={`pick-card${pick.title === 'Links' ? ' links-card-bg' : ''}`}
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;
