import React, { useState } from 'react';
import './Work.css';

const experiences = [
  {
    company: "Los Angeles Dodgers",
    duration: "March 2024 - December 2024",
    role: "Software Engineer",
    location: "California, US",
    description: `Built and optimized a React-based web app for automated ticket distribution, reducing task time by 42%.
    Enhanced Dodgers Homeplate UI with lazy loading, improving response time by 54%.
    Implemented Redis caching and .NET optimizations, cutting API response time by 50%.`,
    skills: ["React", "Node.js", "Python", "CI/CD", "Google Cloud", "Salesforce"]
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

const educationData = [
  {
    institution: "Pace University - New York",
    duration: "September 2021 - May 2023",
    degree: "Master of Science (MS) in Computer Science",
    description: `Completed coursework in full-stack development, data warehousing, and cloud computing.
    Developed a BigQuery-based data warehouse to analyze flight data, enhancing insights for research.
    Implemented a CI/CD pipeline for web applications, improving deployment speed and reliability.`
  },
  {
    institution: "University of Mumbai",
    duration: "June 2016 - June 2019",
    degree: "Bachelor of Science (BS) in Information Technology",
    description: `Gained a strong foundation in software engineering, algorithms, and database management.
    Developed an Android-based Mumbai tourism app using Java and MySQL, enhancing user engagement.
    Worked on real-world projects involving software development and system design.`
  }
];

const Work: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<number | null>(null);
  const [selectedEducation, setSelectedEducation] = useState(educationData[0]);
  

  return (
    <div className="work-section" id="work">
      <h1 className="pagetitle">Work Experience</h1>

      <div className="work-container">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`work-item ${selectedWork === index ? "selected" : ""}`}
            onClick={() => setSelectedWork(index)}
          >
            <div className="work-header">
              <div className="work-header-left">
                <p className="company-name">{exp.company}</p>
                <p className="role-name"><em>{exp.role}</em></p>
              </div>

              <div className="work-header-right">
                <p className="work-duration">{exp.duration}</p>
                <p className="work-location"><em>{exp.location}</em></p>
              </div>
            </div>

            {selectedWork === index && (
              <div className="work-content open">
                <p className="work-description">{exp.description}</p>
                <ul className="work-skills">
                  {exp.skills.map((skill, idx) => (
                    <li key={idx}> {skill}</li>
                  ))}
                </ul>
                <hr className="work-divider" />
              </div>
            )}
          </div>
        ))}
      </div>

      <h1 className='pagetitle'>Education</h1>
      <div className='education-container'>
        <div className='education-sidebar'>
          {educationData.map((edu, index) => (
            <p
              key={index}
              className={`institution-name ${selectedEducation === edu ? "selected" : ""}`}
              onClick={() => setSelectedEducation(edu)}
            >
              {edu.institution}
            </p>
          ))}
        </div>

        <div className='education-details'>
          <p className='education-title'><em>{selectedEducation.duration}</em></p>
          <p className='education-degree'><strong>{selectedEducation.degree}</strong></p>
          <p className='education-description'>{selectedEducation.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
