import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
 return (
    <div className="container home-container">
      {/* <div className="row"> */}
        <div className="col home-section">
          <h1 className='title'>Projects</h1>
          <div className='projects'>
            <a href=''>CANY - Tour Guide</a>
            <a href=''>EasyWay</a>
            <a href=''>Daily You</a>
          </div>
          <div className='projects'>
            <a href=''>Hope</a>
            <a href=''>Student Hub</a>
            <a href =''>Space Invader</a>
            </div>
            <div className='projects'>
            <a href=''>Friendly Car Dealership</a>
            <a href=''>Big Query and Data Warehousing</a>
            <a href=''>NYC Taxi Trip</a>
            <a href=''>Audio Analysis</a>
          </div>
          <p>Check out my projects section to see the variety of work I've done.</p>
        </div>
      </div>
    // </div>
 );
};

export default Projects;