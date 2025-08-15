import React from 'react';
import SectionTitle from "../components/SectionTitle";
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
    <section
      id="projects"
      className="page-shell flex items-center justify-center"
    >
    <div className="py-12 px-10 text-center text-black">
      <SectionTitle>Projects</SectionTitle>
      <p className="max-w-3xl mx-auto mb-4">
        A showcase of innovative mobile and web applications I’ve built, focusing on full-stack development, UI/UX, and optimized performance. Each project highlights my expertise in modern technologies, problem-solving, and creating impactful digital solutions.
      </p>
      <div className="grid gap-10 justify-center max-w-5xl mx-auto grid-cols-1 md:grid-cols-2">
        {projectsData.map((project, index) => (
          <div className="bg-[#774c60] rounded-xl overflow-hidden shadow-md flex flex-col items-center transition-transform hover:scale-105" key={index}>
            <img src={project.imgSrc} alt={project.title} className="w-full p-5 object-cover" />
            <div className="bg-white w-full p-5 flex flex-col items-center flex-grow">
              <h2 className="text-xl font-bold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-700 mb-2">{project.description}</p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span className="bg-gray-100 px-3 py-1 rounded text-sm" key={i}>{tech}</span>
                ))}
              </div>
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-5 py-2 rounded w-full" onClick={() => window.open(project.url, "_blank")}>Know More&nbsp;<NorthEastIcon className="inline" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Projects;
