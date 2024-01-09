import React from 'react';
import './Home.css';
import profile from './ProfilePhoto.jpg'

const Home: React.FC = () => {
 return (
  <div className="container home-container">
  <div className="row">
    <div className="col-md-8 info-section">
          <h1>Vidisha Vijay Sawant</h1>
          <h3>San Jose, CA</h3>
          <p>I'm a Full Stack Developer at WelSpot Inc. with expertise in Software Engineering graduated from Pace University with Master's in Computer Science.</p>
         </div>
         <div className="col-md-4 profile-section">
         <img src= {profile} alt="Profile Photo" className='profileimage rounded mx-auto d-block img-thumbnail'/>
         </div>
         <h3 className='col-md-1'>@vidishasawant10</h3>
         </div>
         </div>
 );
};

export default Home;