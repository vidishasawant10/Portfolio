import React from 'react';
import './Projects.css';
import NorthEastIcon from '@mui/icons-material/NorthEast';

type ProjectProps = {
  title: string;
  description: string;
  technologies: string;
  imgSrc: string;
  url: string;
  open: () => void;
};

const Project: React.FC<ProjectProps> = ({ title, description, technologies, imgSrc, url, open }) => {
  return (
    <div className="project-card">
      <img src={imgSrc} alt={title} className="project-image"/>
      <div className="project-content">
        <h2 className="project-title">{title}</h2>
        <p className="project-description">{description}</p>
        <p className="project-technologies"><strong>Technologies:</strong> {technologies}</p>
        <button className="project-button" onClick={open}>Know More</button>
      </div>
    </div>
  );
};

export default Project;
