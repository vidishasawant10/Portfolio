import React, { useState } from 'react';
import SectionTitle from "../components/SectionTitle";

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

const Education: React.FC = () => {
  const [selectedEducation, setSelectedEducation] = useState(educationData[0]);

    return (
      <div className='py-10 px-10 text-gray-800' id='education'>
        <SectionTitle>Education</SectionTitle>

        <div className='flex flex-row gap-12 w-[90vw] max-md:flex-col'>
          <div className='border-l-2 border-red-500 pl-5 min-w-[200px] max-md:border-l-0 max-md:border-t-2 max-md:pt-2 max-md:text-center'>
            {educationData.map((edu, index) => (
              <p
                key={index}
                className='font-bold uppercase py-2 text-lg cursor-pointer transition-colors hover:text-red-500'
                onClick={() => setSelectedEducation(edu)}
              >
                {edu.institution}
              </p>
            ))}
          </div>

          <div className='flex-1'>
            <p className='italic text-sm mb-2'>{selectedEducation.duration}</p>
            <p className='text-lg font-bold mb-2'>{selectedEducation.degree}</p>
            <p className='text-base leading-relaxed text-gray-700'>{selectedEducation.description}</p>
          </div>
        </div>
      </div>
    );
  };

export default Education;
