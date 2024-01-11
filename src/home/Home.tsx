import React from 'react';
import './Home.css';
import profile from './ProfilePhoto.jpg'

const handleGithub = () => {
  window.open('https://github.com/vidishasawant10','_blank');
};
const handleLinkedln = () => {
  window.open('https://www.linkedin.com/in/vidisha-vijay-sawant-23a63613a','_blank');
};
const Home: React.FC = () => {
 return (
  <div className="row">
    <div className="col-md-8 info-section">
          <h1 className='title'>Vidisha Vijay Sawant</h1>
          <h3>San Jose, CA</h3>
          <p>I'm a Full Stack Developer at WelSpot Inc. with expertise in Software Engineering graduated from Pace University with Master's in Computer Science.</p>
         </div>
         <div className="col-md-4 profile-section p-5">
         <img src= {profile} alt="Profile Photo" className='profileimage rounded img-thumbnail p-2'/>
         </div>
         <h3 className='col-md-1 pb-1'>@vidishasawant10</h3>
         <div className='ps-2'>
         <a onClick={handleLinkedln} className="fa-brands fa-linkedin fa-2xl p-1"></a>
         <a onClick= {handleGithub} className="fa-brands fa-square-github fa-2xl p-3"></a>
         </div>
         </div>
        
 );
};

export default Home;