import React, { useState } from 'react';
import './Work.css';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const experiences = [
  {
    company: "Los Angeles Dodgers",
    duration: "March 2024 - December 2024",
    role: "Software Engineer",
    location: "California, US",
    description: `Built and optimized a React-based web app for automated ticket distribution, reducing task time by 42%.
    Enhanced Dodgers Homeplate UI with lazy loading, improving response time by 54%.
    Implemented Redis caching and .NET optimizations, cutting API response time by 50%.`,
    skills: ["React", "Node.js", "BigQuery", "Google Cloud", "Salesforce"]
  },
  {
    company: "WelSpot Inc.",
    duration: "July 2023 - March 2024",
    role: "Software Engineer",
    location: "California, US",
    description: `Developed a healthcare loan portal in React and Node.js, increasing loan submissions by 60%.
    Improved backend operations with AWS RDS, reducing response time by 27%.
    Designed wireframes and prototypes in Figma, enhancing user experience.`,
    skills: ["React", "TypeScript", "AWS RDS", "PostgreSQL", "Docker"]
  }
];

const Work: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="work-section" id="work">
      <h1 className="pagetitle">Work Experience</h1>

      <div className="work-container">
        {experiences.map((exp, index) => (
          <div key={index} className="work-item">
            {/* Header with layout changes */}
            <div className="work-header" onClick={() => toggleAccordion(index)}>
              <div className="work-header-left">
                <p className="company-name">{exp.company}</p>
                <p className="role-name"><em>{exp.role}</em></p> {/* Role in italics */}
              </div>

              <div className="work-header-right">
              <p className="work-duration">{exp.duration}</p>
                <p className="work-location"><em>{exp.location}</em></p>
                {/* <span className="toggle-icon">
                  {openIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </span> */}
              </div>

            </div>

            {/* Expandable content */}
            <div className={`work-content ${openIndex === index ? "open" : ""}`}>
              <p className="work-description">{exp.description}</p>
              <ul className="work-skills">
                {exp.skills.map((skill, idx) => (
                  <li key={idx}>+ {skill}</li>
                ))}
              </ul>
              <hr className="work-divider" />

            </div>

            {/* Divider for better separation */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
