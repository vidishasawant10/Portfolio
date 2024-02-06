import React from 'react';


const Skills: React.FC = () => {
    const frontendSkills = ['HTML', 'CSS', 'React'];
    const backendSkills = ['Node.js'];
    const cloudComputingSkills = ['AWS'];

    return (
        <div className="container">
        <div className="skill-box">
          <span className="title">HTML</span>
      
          <div className="skill-bar">
            <span className="skill-per html">
              <span className="tooltip">70%</span>
            </span>
          </div>
        </div>
      
        <div className="skill-box">
          <span className="title">SCSS</span>
      
          <div className="skill-bar">
            <span className="skill-per scss">
              <span className="tooltip">80%</span>
            </span>
          </div>
        </div>
        <div className="skill-box">
          <span className="title">Boostrap</span>
      
          <div className="skill-bar">
            <span className="skill-per Boostrap">
              <span className="tooltip">50%</span>
            </span>
          </div>
        </div>
      </div>
      
    );
};

export default Skills;
