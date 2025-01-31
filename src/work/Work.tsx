import React, { useState } from 'react';
import './Work.css';

const experiences = [
  {
    company: "Los Angeles Dodgers",
    duration: "March 2024 - December 2024",
    role: "Software Engineer",
    description: `Worked on full-stack development projects, cloud integration, and optimized backend operations.
    Built and optimized a React-based web app for automated ticket distribution, reducing task time by 42%.
    Enhanced Dodgers Homeplate UI with lazy loading, improving response time by 54% for better user experience.
    Implemented Redis caching and .NET optimizations, cutting API response time by 50% in high-traffic apps.
    Documented Salesforce workflows, flows, process builders, Apex code, and Google Cloud Functions for internal use.`,
    skills: ["React", "Node.js","Python", "BigQuery", "Google Cloud","Figma", "Salesforce"]
  },
  {
    company: "WelSpot Inc.",
    duration: "July 2023 - March 2024",
    role: "Software Engineer",
    description: `Developed a healthcare loan portal in React and Node.js, increasing loan submissions by 60%.
    Improved backend operations with AWS RDS, reducing response time by 27% and ensuring system stability.
    Designed wireframes and prototypes in Figma, enhancing user experience and workflow efficiency.`,
    skills: ["React", "TypeScript", "AWS RDS", "PostgreSQL", "Docker"]
  }
]

const Work: React.FC = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

  return (
    <div className='work-section' id='work'>
      <h1 className='pagetitle'>Experience</h1>

      <div className='work-container'>
        {/* Sidebar with company names */}
        <div className='work-sidebar'>
          {experiences.map((exp, index) => (
            <p 
              key={index} 
              className='company-name' 
              onClick={() => setSelectedExperience(exp)}
            >
              {exp.company}
            </p>
          ))}
        </div>

        {/* Work Details */}
        <div className='work-details'>
          <p className='work-title'><em>{selectedExperience.duration}</em></p>
          <p className='work-description'>{selectedExperience.description}</p>

          <ul className='work-skills'>
            {selectedExperience.skills.map((skill, index) => (
              <li key={index}>+ {skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
