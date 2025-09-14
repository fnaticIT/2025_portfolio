import React from 'react';

const LINKS = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/namanbalai/',
    icon: '🔗'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/namanbalai',
    icon: '🐙'
  },
  {
    name: 'Research Paper',
    url: 'https://your-research-paper-link.com',
    icon: '📄'
  }
];

const Links: React.FC = () => (
  <div style={{ padding: 32, maxWidth: 500, margin: '0 auto', background: '#181818', borderRadius: 12, boxShadow: '0 2px 12px #0006' }}>
    <h2 style={{ color: '#E50914', marginBottom: 24 }}>Links</h2>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {LINKS.map(link => (
        <li key={link.name} style={{ marginBottom: 18 }}>
          <a href={link.url} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: 18, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 22 }}>{link.icon}</span> {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Links;
