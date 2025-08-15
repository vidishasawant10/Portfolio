import React from 'react';
import Skills from "../skills/Skills";
import profilePic from "./About.jpg";
import SectionTitle from "../components/SectionTitle";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="page-shell flex items-center justify-center"
    >
      <div className="mx-auto px-6 md:px-10 py-5">
        <div className="flex flex-wrap items-center justify-center md:justify-normal gap-6 md:gap-0">
          
          <div className="flex justify-center md:w-1/3 w-full">
            <img
              src={profilePic}
              alt="Profile"
              className="
                max-w-full h-auto border-[10px] border-black rounded-lg
                max-md:w-64 md:max-w-[30vw]
              "
            />
          </div>

     
          <div className="flex-1 w-full text-left md:pl-10 max-md:text-center overflow-x-clip">
            <SectionTitle>About</SectionTitle>

            <div className="space-y-4 max-md:overflow-x-clip">
              <p className="animate__animated animate__fadeInLeft">
                I'm deeply fascinated by the ever-evolving world of Software Engineering and committed to continuous learning and growth.
              </p>
              <p className="animate__animated animate__fadeInLeft">
                I’m a Software Engineer with hands-on experience in full-stack development, applying core computer science fundamentals like data structures, algorithms, and object-oriented programming to build scalable and responsive applications.
              </p>
              <p className="animate__animated animate__fadeInLeft">
                I have work experience with JavaScript, React, Node.js, Python, Java, Salesforce, and APIs, along with tools like Git, Docker, Kubernetes, and cloud platforms such as AWS and GCP.
              </p>
              <p className="animate__animated animate__fadeInLeft">
                My work involves collaborating with cross-functional teams, conducting user research, and converting insights into high-performance applications.
              </p>
              <p className="animate__animated animate__fadeInLeft">
                I’m skilled in handling JSON data, developing RESTful APIs, and creating dynamic, responsive user interfaces.
              </p>
              <p className="animate__animated animate__fadeInLeft">
                With a focus on continuous learning, innovation, and problem-solving, I bring technical expertise, teamwork, and a proactive mindset to deliver impactful solutions.
              </p>
            </div>
          </div>


          <div className="w-full mt-12 overflow-x-clip">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
