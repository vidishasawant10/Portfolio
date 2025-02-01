import React from 'react';
import './About.css';
import Skills from "../skills/Skills";
import Work from "../work/Work";
import profilePic from "./About.jpg"; // Replace with actual image path

const About: React.FC = () => {
  return (
    <div className="about-container" id='about'>
      {/* Image on Left */}
      <div className="about-image">
        <img src={profilePic} alt="Profile" />
      </div>

      {/* Text on Right */}
      <div className="about-content">
        <h1 className='pagetitle animate__animated animate__fadeInRight'>About</h1>
        <p className='animate__animated animate__fadeInLeft'>
          I'm deeply fascinated by the ever-evolving world of Software Engineering and committed to continuous learning and growth.
        </p>
        <p className='animate__animated animate__fadeInLeft'>
          I’m a Software Engineer with hands-on experience in full-stack development, applying core computer science fundamentals like data structures, algorithms, and object-oriented programming to build scalable and responsive applications.
        </p>
        <p className='animate__animated animate__fadeInLeft'>
          I have work experience with JavaScript, React, Node.js, Python, Java, Salesforce, and APIs, along with tools like Git, Docker, Kubernetes, and cloud platforms such as AWS and GCP.
        </p>
        <p className='animate__animated animate__fadeInLeft'>
          My work involves collaborating with cross-functional teams, conducting user research, and converting insights into high-performance applications.
        </p>
        <p className='animate__animated animate__fadeInLeft'>
          I’m skilled in handling JSON data, developing RESTful APIs, and creating dynamic, responsive user interfaces.
        </p>
        <p className='animate__animated animate__fadeInLeft'>
          With a focus on continuous learning, innovation, and problem-solving, I bring technical expertise, teamwork, and a proactive mindset to deliver impactful solutions.
        </p>
      </div>

      {/* Skills and Work sections below */}
      <div className="skills-work-container">
        <Skills />
        <Work />
      </div>
    </div>
  );
};

export default About;
