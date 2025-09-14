import React, { useEffect, useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';



const WorkExperience: React.FC = () => {
  // Static timeline data from resume
  const timeLineData = [
    {
      timelineType: 'work',
      name: 'Oracle',
      title: 'Applications Developer',
      techStack: 'Java, Oracle ADF, JavaScript, Docker, Kubernetes',
      summaryPoints: [
        'Migrated Oracle HCM Journeys for 4000+ enterprise clients, reducing page load times by 40–60%.',
        'Owned full-cycle delivery of Work Orders and Product Information Management modules, enabling first-time extensibility by cross-org teams like SCM.',
        'Architected a reusable framework used org-wide, cutting redundant code by 50% and shrinking feature rollout from weeks to days.',
        'Integrated LLM-powered AI workflows to drive personalization and automate employee journeys.',
        'Integrated Elasticsearch for fast, intent-driven search across millions of enterprise records.',
        'Won 1st prize for most innovative solution across HCM organization at Oracle Fusion Day.',
        'Engineered robust backend services and frontend interfaces, deploying solutions to production with automated CI/CD pipelines.'
      ],
      dateRange: 'June 2023 – Present',
    },
    {
      timelineType: 'work',
      name: 'CodebaseEra Technologies',
      title: 'Full Stack Developer (Intern)',
      techStack: 'React Native',
      summaryPoints: [
        'Built and maintained a production-grade mobile application using React Native, contributing across the full development lifecycle.',
        'Helped the app scale to 100K+ users by driving key performance.'
      ],
      dateRange: 'Jan. 2023 – Apr. 2023',
    },
    {
      timelineType: 'work',
      name: 'Oracle',
      title: 'Project Intern',
      techStack: 'Java, Jersey, Business Objects',
      summaryPoints: [
        'Built a modular, microservices-based purchase order system as a PoC, designing RESTful APIs with Jersey and Business Objects.'
      ],
      dateRange: 'May 2022 – July 2022',
    },
    {
      timelineType: 'education',
      name: 'National Institute Of Technology Warangal',
      title: 'B.Tech, Computer Science and Engineering',
      techStack: '',
      summaryPoints: [
        'CGPA: 8.79/10',
        'Relevant Coursework: Data Structures & Algorithms, DBMS, OOP, OS, CN, Data Science, Web Development'
      ],
      dateRange: 'Aug. 2019 – May 2023',
    },
  ];

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timeLineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className={`vertical-timeline-element--${item.timelineType}`}
            contentStyle={
              item.timelineType === "work"
                ? index === 0
                  ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                  : { background: 'rgb(240, 240, 240)', color: '#fff' }
                : { background: 'rgb(255, 224, 230)', color: '#fff' }
            }
            contentArrowStyle={
              item.timelineType === "work"
                ? { borderRight: index === 0 ? '7px solid rgb(33, 150, 243)' : '7px solid rgb(240, 240, 240)' }
                : { borderRight: '7px solid rgb(255, 224, 230)' }
            }
            date={item.dateRange}
            iconStyle={
              item.timelineType === "work"
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 160, 200)', color: '#fff' }
            }
            icon={item.timelineType === "work" ? <WorkIcon /> : <SchoolIcon />}
          >
            {item.timelineType === "work" ? (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.title}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.name}</h4>
                <p className="vertical-timeline-element-tech">🔧 {item.techStack}</p>
                <p>{item.summaryPoints}</p>
              </div>
            ) : (
              <div style={{ color: 'black' }}>
                <h3 className="vertical-timeline-element-title">{item.name}</h3>
                <h4 className="vertical-timeline-element-subtitle">{item.title}</h4>
                <p>{item.summaryPoints}</p>
              </div>
            )}
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
