import React, { useState } from 'react';
import SectionTitle from "../components/SectionTitle";
import Education from "../education/Education";

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

const Work: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<number | null>(null);
  
  return (
    <div className="py-10 text-left" id="work">
      <SectionTitle>Work Experience</SectionTitle>

      <div className="border-l-2 border-red-500 w-[90vw]">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`p-5 cursor-pointer border-b-2 border-red-500 transition-colors ${selectedWork === index ? "bg-red-100" : ""}`}
            onClick={() => setSelectedWork(index)}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xl font-bold">{exp.company}</p>
                <p className="text-lg italic">{exp.role}</p>
              </div>

              <div className="text-right">
                <p className="text-sm font-bold">{exp.duration}</p>
                <p className="text-sm italic">{exp.location}</p>
              </div>
            </div>

            {selectedWork === index && (
              <div className="mt-2">
                <p className="mb-2">{exp.description}</p>
                <p className="mb-2"><strong>Skills:</strong> {exp.skills}</p>
                <hr className="border-red-500" />
              </div>
            )}
          </div>
        ))}
      </div>

      <Education />
    </div>
  );
};

export default Work;
