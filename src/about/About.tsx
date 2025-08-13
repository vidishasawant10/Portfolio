import React from 'react';
import Skills from "../skills/Skills";
import Work from "../work/Work";
import profilePic from "./About.jpg";
import SectionTitle from "../components/SectionTitle";

const About: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center mx-auto p-10" id='about'>
      <div className="flex justify-center pt-[5vh] md:w-1/3 w-full">
        <img src={profilePic} alt="Profile" className="w-[30vw] max-md:w-64 h-auto border-[10px] border-black rounded-lg" />
      </div>

      <div className="md:w-2/3 w-full text-left md:pl-10 max-md:text-center">
        <SectionTitle>About</SectionTitle>
        <p className='animate__animated animate__fadeInLeft mb-4'>
          I'm deeply fascinated by the ever-evolving world of Software Engineering and committed to continuous learning and growth.
        </p>
        <p className='animate__animated animate__fadeInLeft mb-4'>
          I’m a Software Engineer with hands-on experience in full-stack development, applying core computer science fundamentals like data structures, algorithms, and object-oriented programming to build scalable and responsive applications.
        </p>
        <p className='animate__animated animate__fadeInLeft mb-4'>
          I have work experience with JavaScript, React, Node.js, Python, Java, Salesforce, and APIs, along with tools like Git, Docker, Kubernetes, and cloud platforms such as AWS and GCP.
        </p>
        <p className='animate__animated animate__fadeInLeft mb-4'>
          My work involves collaborating with cross-functional teams, conducting user research, and converting insights into high-performance applications.
        </p>
        <p className='animate__animated animate__fadeInLeft mb-4'>
          I’m skilled in handling JSON data, developing RESTful APIs, and creating dynamic, responsive user interfaces.
        </p>
        <p className='animate__animated animate__fadeInLeft mb-4'>
          With a focus on continuous learning, innovation, and problem-solving, I bring technical expertise, teamwork, and a proactive mindset to deliver impactful solutions.
        </p>
      </div>

      <div className="w-full mt-12">
        <Skills />
        <Work />
      </div>
    </div>
  );
};

export default About;
