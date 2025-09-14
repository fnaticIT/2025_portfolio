import React, { useEffect, useState } from 'react';
import './Skills.css';


import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiRubyonrails, SiTypescript, SiPostgresql, SiMysql, SiKubernetes, SiGooglecloud, SiSpringboot, SiPhp, SiNetlify, SiHeroku, SiHtml5, SiCss3, SiRabbitmq, SiImessage } from 'react-icons/si';
import { Skill } from '../types';

const iconMap: { [key: string]: JSX.Element } = {
  SiRubyonrails: <SiRubyonrails />,
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  SiPhp: <SiPhp />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,
  SiRabbitmq: <SiRabbitmq />,
  SiImessage: <SiImessage />,
};



const Skills: React.FC = () => {
  // Static skills from resume
  const skillsData = [
    { name: "Java", category: "Language", description: "Core Java, Spring Boot", icon: "FaJava" },
    { name: "C++", category: "Language", description: "Data Structures, Algorithms", icon: "FaJava" },
    { name: "JavaScript", category: "Language", description: "React, Node.js, Next.js", icon: "FaReact" },
    { name: "SQL", category: "Language", description: "Database Management, Oracle, MongoDB", icon: "FaDatabase" },
    { name: "Python", category: "Language", description: "Machine Learning, Flask", icon: "FaPython" },
    { name: "React", category: "Frontend", description: "React, React Native", icon: "FaReact" },
    { name: "Node.js", category: "Backend", description: "Node.js, Express.js", icon: "FaNodeJs" },
    { name: "Oracle ADF", category: "Framework", description: "Enterprise Applications", icon: "FaJava" },
    { name: "Spring Boot", category: "Framework", description: "Microservices", icon: "FaJava" },
    { name: "Elasticsearch", category: "Search", description: "Enterprise Search", icon: "FaDatabase" },
    { name: "MongoDB", category: "Database", description: "NoSQL", icon: "FaDatabase" },
    { name: "Docker", category: "DevOps", description: "Containerization", icon: "FaDocker" },
    { name: "Kubernetes", category: "DevOps", description: "Orchestration", icon: "FaDocker" },
    { name: "Git", category: "Tool", description: "Version Control", icon: "FaGitAlt" },
    { name: "Android Studio", category: "Tool", description: "Mobile Development", icon: "FaAndroid" },
    { name: "Agentic AI Workflows", category: "AI", description: "LLM-powered automation", icon: "FaRobot" },
    { name: "Federated Learning", category: "AI", description: "Privacy-preserving ML", icon: "FaRobot" },
    { name: "Oracle Cloud", category: "Cloud", description: "Cloud Infrastructure", icon: "FaCloud" },
  ];

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});


  return (
    <div className="skills-container">
      {Object.keys(skillsByCategory).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div className="skills-grid">
            {skillsByCategory[category].map((skill: any, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                <h3 className="skill-name">
                  {skill.name.split('').map((letter: any, i: number) => (
                    <span key={i} className="letter" style={{ animationDelay: `${i * 0.05}s` }}>
                      {letter}
                    </span>
                  ))}
                </h3>
                <p className="skill-description">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
