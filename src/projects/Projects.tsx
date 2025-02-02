import React from 'react';
import './Projects.css';
import canyimage from './CANY1.png';
import easyway from './EasyWay1.png';
import spaceinvader from './space.png';
import nyctaxi from './nyctaxi.png';
import hope from './Hope.png';
import studenthub from './StudentHub1.png';
import daily from './DailyYou1.png';
import audioanalysis from './audioanalysis.png';
import cardealer from './CarDealership.png';
import NorthEastIcon from '@mui/icons-material/NorthEast';

const projectsData = [
  {
    title: "CANY Tour Guide",
    description: "A tour guide application for exploring New York and California.",
    technologies: ["React", "SCSS", "JavaScript", "HTML", "CSS"],
    imgSrc: canyimage,
    url: "https://github.com/vidishasawant10/CANY-Tour-Guide"
  },
  {
    title: "EasyWay",
    description: "A travel optimization platform for better routes.",
    technologies: ["Angular", "React", "SCSS", "Machine Learning", "Cypress"],
    imgSrc: easyway,
    url: "https://github.com/vidishasawant10/EasyWay"
  },
  {
    title: "Hope",
    description: "A UI/UX project designed for community engagement.",
    technologies: ["Figma", "UX Research", "Personas", "Design Thinking"],
    imgSrc: hope,
    url: "https://github.com/vidishasawant10/Hope"
  },
  {
    title: "Student Hub",
    description: "A platform for international students to connect and share resources.",
    technologies: ["Bootstrap", "Figma", "Research Questions", "Marvel"],
    imgSrc: studenthub,
    url: "https://github.com/vidishasawant10/StudentHub"
  },
  {
    title: "Space Invader",
    description: "A classic arcade shooter game built in Python.",
    technologies: ["Python", "Pygame", "PyCharm"],
    imgSrc: spaceinvader,
    url: "https://github.com/vidishasawant10/spaceInvader"
  },
  {
    title: "Friendly Car Dealership",
    description: "A database management project for managing car sales and data.",
    technologies: ["SQL", "Oracle Database"],
    imgSrc: cardealer,
    url: "https://github.com/vidishasawant10/Friendly-Car-Dealership"
  },
  {
    title: "NYC Taxi Trip",
    description: "A data analysis project on NYC taxi trips.",
    technologies: ["Python", "Pandas", "Matplotlib", "Google Colab"],
    imgSrc: nyctaxi,
    url: "https://github.com/vidishasawant10/NYCTaxiTrip"
  },
  {
    title: "Audio Analysis",
    description: "Analyzing audio patterns using machine learning.",
    technologies: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
    imgSrc: audioanalysis,
    url: "https://github.com/vidishasawant10/AudioAnalysis"
  },
  {
    title: "Daily You",
    description: "A mobile application which would have daily applications such as Clock, Reminder, To-do, Notes, Alarm Clock, and Self-care in one place to help focus!",
    technologies: ["React Native", "CSS"],
    imgSrc: daily,
    url: "https://github.com/vidishasawant10/Daily-You"
  }
];

const Projects = () => {
  return (
    <div className="projects-section">
      <h1 className="pagetitle">Projects</h1>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.imgSrc} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span className="tech-tag" key={i}>{tech}</span>
                ))}
              </div>
              <button className="project-button" onClick={() => window.open(project.url, "_blank")}>
                Know More &nbsp;
                <NorthEastIcon className="arrow-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
