
import React from 'react';
import './Education.css';

const Education: React.FC = () => {
 return (
  <div className='row'>
        <div className="col-md-11 education-section">
          <h1 className='title'>Education & Work Experience</h1>
          <div className='work'>
          <h3 className='subtitle'>Work Experience</h3>
            <div className='detail'>
              <p className='name'>WelSpot Inc.</p>
              
              <p className='date'>July 2023 - Present</p>
              </div>
              
              <p className='role'>Full Stack Developer</p>
              </div>
              <div className='work'>

          <h3 className='subtitle'>Education</h3>
          <div className='detail'>
          <p className='name'>Pace University</p>
          <p className='date'>September 2021 - May 2023</p>
          </div>
          <p className ='role'>M.S in Computer Science</p>
          </div>
          <p className='detail'>Check out my projects section to see the variety of work I've done.</p>
        </div>
        </div>
 );
};

export default Education;