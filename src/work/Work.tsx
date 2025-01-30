import React from 'react';
import './Work.css';

const Work: React.FC = () => {
 return (
  <div className='work-section' id='work'>
    <h1 className='pagetitle animate__animated animate__fadeInRight'>Work Experience</h1>

    <div className='work animate__animated animate__zoomIn'>
      <div className='detail'>
        <p className='name'>Los Angeles Dodgers</p>
        <p className='date'>March 2024 - December 2024</p>
      </div>
      <p className='role'>Software Engineer</p>
    </div>

    <div className='work animate__animated animate__zoomIn'>
      <div className='detail'>
        <p className='name'>WelSpot Inc.</p>
        <p className='date'>July 2023 - March 2024</p>
      </div>
      <p className='role'>Software Engineer</p>
    </div>
  </div>
 );
};

export default Work;
