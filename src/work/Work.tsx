import React, { useState } from 'react';
import './Work.css';

const experiences = [
  {
    company: "Los Angeles Dodgers",
    duration: "March 2024 - December 2024",
    role: "Software Engineer",
    location: "California, US",
    description: `I worked on developing and enhancing web applications to improve internal processes and user experience. 
    My role involved building React and Node.js applications, creating tools for data migration, optimizing backend services, and automating workflows using Cloud Functions and BigQuery. 
    I also worked with Salesforce, creating and maintaining technical documentation for workflows, flows, process builders, Apex code, and Google Cloud Functions. 
    Additionally, I contributed to cloud deployments and implemented caching solutions to improve performance and efficiency.`,
    skills: "React, Node.js, Python, CI/CD, Google Cloud Platform (GCP), Docker, Salesforce"
  },
  {
    company: "WelSpot Inc.",
    duration: "July 2023 - March 2024",
    role: "Software Engineer",
    location: "California, US",
    description: `I was responsible for building and maintaining a healthcare loan portal, working on both the frontend and backend to enhance functionality and user experience. 
    I designed intuitive interfaces, optimized database operations, and implemented automation to improve system stability. Additionally, I worked on CI/CD pipelines, testing frameworks, and cloud-based deployments to ensure smooth and efficient software releases.`,
    skills: "React, TypeScript, AWS RDS, PostgreSQL, Docker"
  }
];

const educationData = [
  {
    institution: "Pace University - New York",
    duration: "September 2021 - May 2023",
    degree: "Master of Science (MS) in Computer Science",
    description: `At Pace University, I gained expertise in full-stack development, cloud computing, machine learning, and UX design. Throughout my master's, I developed multiple projects,
     including a BigQuery-based data warehouse for large-scale analytics, an AI-powered object detection model, a home utility web application, a volunteering platform, and a mobile app for daily productivity. 
     I also implemented CI/CD pipelines to enhance software deployment efficiency and applied Agile methodologies to streamline project development.`,
    coursework: "Algorithm & Data Structure, Full-Stack Development, Cloud Computing, Database Management System, Machine Learning, Human-Computer Interaction (HCI), UX Design"
  },
  {
    institution: "University of Mumbai",
    duration: "June 2016 - June 2019",
    degree: "Bachelor of Science (BS) in Information Technology",
    description: `At University of Mumbai, I built a strong foundation in software engineering, algorithms, and system design. I developed an Android-based tourism app, Mumbai Tour, which provided navigation and information for over 50+ attractions, integrating GPS for improved accuracy. 
    Additionally, I worked on a game development project, applying Java core programming and UI/UX principles to create an interactive user experience.`,
    coursework: "Data Structures, Object-Oriented Programming, Core Java, Web Development, Software Engineering, Artificial Intelligence"
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
                <p className="work-skills"><strong>Skills:</strong> {exp.skills}</p>
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
          <p className='education-coursework'><strong>Relevant Coursework:</strong> {selectedEducation.coursework}</p>
        </div>
      </div>
    </div>
  );
};

export default Work;
