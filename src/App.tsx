import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NetflixTitle from './NetflixTitle';
import ProfilePage from './profilePage/profilePage';
import Browse from './browse/browse';
import WorkPermit from './pages/WorkPermit';
import WorkExperience from './pages/WorkExperience';
// import Recommendations from './pages/Recommendations';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';
import Layout from './Layout';
// Removed Music, Reading, Blogs
// import Certifications from './pages/Certifications';
import Links from './pages/Links';

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<NetflixTitle />} />
      <Route path="/browse" element={<Browse />} />
      <Route path="/profile/:profileName" element={<Layout><ProfilePage /></Layout>} />
  <Route path="/work-permit" element={<Layout><WorkPermit /></Layout>} />
  <Route path="/work-experience" element={<Layout><WorkExperience /></Layout>} />
  <Route path="/skills" element={<Layout><Skills /></Layout>} />
  <Route path="/projects" element={<Layout><Projects /></Layout>} />
  <Route path="/contact-me" element={<Layout><ContactMe /></Layout>} />
  <Route path="/links" element={<Layout><Links /></Layout>} />
    </Routes>
  );
};

export default App;
