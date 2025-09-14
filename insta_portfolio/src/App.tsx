import './App.css';

const profile = {
  name: 'Naman Balai',
  username: 'namanbalai',
  avatar: 'https://avatars.githubusercontent.com/u/10135785?v=4', // Replace with your own or a static image
  bio: 'Software Engineer | Web Developer | ML Enthusiast',
  location: 'India',
  website: 'https://www.linkedin.com/in/namanbalai/',
  links: [
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/namanbalai/' },
    { label: 'GitHub', url: 'https://github.com/namanbalai' },
    { label: 'Research Paper', url: 'https://ieeexplore.ieee.org/document/10012345' },
  ],
};

const highlights = [
  { title: 'Skills', items: ['React', 'TypeScript', 'Python', 'Machine Learning', 'Node.js', 'SQL'] },
  { title: 'Experience', items: ['Software Engineer at XYZ Corp (2022–Present)', 'Intern at ABC Tech (2021)'] },
  { title: 'Education', items: ['B.Tech, Computer Science, IIT Kanpur (2018–2022)'] },
];

const posts = [
  {
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    title: 'Personal Portfolio Website',
    description: 'A Netflix-inspired and Instagram-inspired portfolio site built with React and TypeScript.',
    tags: ['React', 'TypeScript', 'Vite'],
  },
  {
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'Research Paper',
    description: 'Published a research paper on Deep Learning in IEEE Xplore.',
    tags: ['Deep Learning', 'Research'],
  },
  {
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'Open Source Contributions',
    description: 'Contributed to open source projects on GitHub.',
    tags: ['Open Source', 'GitHub'],
  },
  // Add more posts as needed
];

function App() {
  return (
    <div className="insta-root">
      <header className="insta-header">
        <img className="insta-avatar" src={profile.avatar} alt="avatar" />
        <div className="insta-profile-info">
          <h2>{profile.name}</h2>
          <span className="insta-username">@{profile.username}</span>
          <p className="insta-bio">{profile.bio}</p>
          <p className="insta-location">{profile.location}</p>
          <div className="insta-links">
            {profile.links.map((link) => (
              <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>
      <section className="insta-highlights">
        {highlights.map((hl) => (
          <div key={hl.title} className="insta-highlight">
            <h4>{hl.title}</h4>
            <ul>
              {hl.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <main className="insta-posts-grid">
        {posts.map((post, idx) => (
          <div key={idx} className="insta-post">
            <img src={post.image} alt={post.title} className="insta-post-img" />
            <div className="insta-post-content">
              <h5>{post.title}</h5>
              <p>{post.description}</p>
              <div className="insta-tags">
                {post.tags.map((tag) => (
                  <span key={tag} className="insta-tag">#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
