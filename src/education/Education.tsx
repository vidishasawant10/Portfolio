import React from 'react';
import './Education.css';

const Education: React.FC = () => {
 return (
  <div className='education-section' id='education'>
    <h1 className='pagetitle animate__animated animate__fadeInRight'>Education</h1>

    <div className='education animate__animated animate__zoomIn'>
      <div className='detail'>
        <p className='name'>Pace University</p>
        <p className='date'>September 2021 - May 2023</p>
      </div>
      <p className='degree'>Master of Science (MS) in Computer Science</p>
    </div>

    <div className='education animate__animated animate__zoomIn'>
      <div className='detail'>
        <p className='name'>University of Mumbai</p>
        <p className='date'>June 2016 - June 2019</p>
      </div>
      <p className='degree'>Bachelor of Science (BS) in Information Technology</p>
    </div>
  </div>
 );
};

export default Education;
