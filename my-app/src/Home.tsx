import React from 'react';
import './Home.css';

const Home: React.FC = () => {
 return (
    <div className="container home-container">
      <div className="row">
        <div className="col-md-6 home-section">
          <h1>About</h1>
          <p>I'm a Full- Stack Developer with expertise in Java, Python, React, TypeScript, Angular, Bootstrap, and UI/UX.</p>
        </div>
        <div className="col-md-6 home-section">
          <h1>Projects</h1>
          <p>Check out my projects section to see the variety of work I've done.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 home-section">
          <h1>Contact Me</h1>
          <p>Feel free to reach out to me via the contact form or through the various social media platforms.</p>
        </div>
      </div>
    </div>
 );
};

export default Home;