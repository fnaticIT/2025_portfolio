import React, { useEffect, useState } from 'react';
import './WorkPermit.css';

const WorkPermit: React.FC = () => {
  // Static work permit info from resume
  const workPermitData = {
    visaStatus: "Tier 2 (General) Work Visa",
    expiryDate: "2027-05-31",
    summary: "I'm currently on a Tier 2 (General) Work Visa, which allows me to work in the UK! My visa is valid until 31 May 2027, giving me the opportunity to build valuable experience and grow my career here.",
    additionalInfo: "Open to relocation and remote opportunities.",
  };

  return (
    <div className="work-permit-container">
      <div className="work-permit-card">
        <h2 className="work-permit-headline">🎓 Work Permit</h2>
        <p className="work-permit-summary">
          {workPermitData.summary}
        </p>
        <p className="additional-info">{workPermitData.additionalInfo}</p>
      </div>
    </div>
  );
};

export default WorkPermit;
