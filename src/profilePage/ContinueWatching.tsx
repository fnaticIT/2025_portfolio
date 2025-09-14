import React from 'react';
import { Link } from 'react-router-dom';
import './ContinueWatching.css';

type ProfileType = 'recruiter' | 'developer' | 'stalker' | 'adventure';

interface ContinueWatchingProps {
  profile: ProfileType;
}

const continueWatchingConfig = {
  recruiter: [
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" },
    { title: "Links", imgSrc: "https://picsum.photos/id/1030/300/200", link: "/links" }
  ],
  developer: [
  // Removed Certifications
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" },
    { title: "Links", imgSrc: "https://picsum.photos/id/1030/300/200", link: "/links" }
  ],
  stalker: [
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" },
    { title: "Links", imgSrc: "https://picsum.photos/id/1030/300/200", link: "/links" }
  ],
  adventure: [
  // Removed Certifications
    { title: "Contact Me", imgSrc: "https://picsum.photos/id/1029/300/200", link: "/contact-me" },
  { title: "Links", imgSrc: "/logo.svg", link: "/links" }
  ]
};

const ContinueWatching: React.FC<ContinueWatchingProps> = ({ profile }) => {
  const continueWatching = continueWatchingConfig[profile];

  return (
    <div className="continue-watching-row">
      <h2 className="row-title">Continue Watching for {profile}</h2>
      <div className="card-row">
        {continueWatching.map((pick, index) => (
          <Link to={pick.link} key={index} className="pick-card">
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContinueWatching;
