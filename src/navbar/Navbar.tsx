import React from 'react';
import './Navbar.css';
import logo from './logo1.png';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
    <img src= {logo} alt="Logo" className='logoimage'/>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>

          <li><a href="#projects">Projects</a></li>
          <li><a href="https://drive.google.com/file/d/1TaRrZTXcsK6an-29l90MQGoqqbAuPyt3/view?usp=sharing" target='_blank'>Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
