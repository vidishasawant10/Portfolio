import React, { useState } from 'react';
import './Education.css';

const educationData = [
  {
    institution: "Pace University",
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

const Education: React.FC = () => {
  const [selectedEducation, setSelectedEducation] = useState(educationData[0]);

  return (
    <div className='education-section' id='education'>
      <h1 className='pagetitle'>Education</h1>

      <div className='education-container'>
        {/* Sidebar with institution names */}
        <div className='education-sidebar'>
          {educationData.map((edu, index) => (
            <p 
              key={index} 
              className='institution-name' 
              onClick={() => setSelectedEducation(edu)}
            >
              {edu.institution}
            </p>
          ))}
        </div>

        {/* Education Details */}
        <div className='education-details'>
          <p className='education-title'><em>{selectedEducation.duration}</em></p>
          <p className='education-degree'><strong>{selectedEducation.degree}</strong></p>
          <p className='education-description'>{selectedEducation.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
