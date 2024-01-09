import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <div className="logo" >Logo</div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
