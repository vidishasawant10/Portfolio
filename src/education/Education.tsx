
import React from 'react';
import './Education.css';

const Education: React.FC = () => {
 return (
  <div className='row' id ='education'>
        <div className="col educationSection">
          <h1 className='pagetitle animate__animated animate__fadeInRight'>Education & Work Experience</h1>
          <h3 className='subtitle animate__animated animate__fadeInLeft'>Work Experience</h3>

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
              <h3 className='subtitle animate__animated animate__fadeInLeft'>Education</h3>

              <div className='work animate__animated animate__zoomIn'>

          <div className='detail'>
          <p className='name'>Pace University</p>
          <p className='date'>September 2021 - May 2023</p>
          </div>
          <p className ='role'>Master of Science(MS) in Computer Science</p>
          </div>
          <div className='work animate__animated animate__zoomIn'>

          <div className='detail'>
          <p className='name'>University of Mumbai</p>
          <p className='date'>June 2016 - June 2019</p>
          </div>
          <p className ='role'>Bachelor of Science(BS) in Information Technology</p>
          </div>
        
        </div>
        </div>
 );
};

export default Education;
