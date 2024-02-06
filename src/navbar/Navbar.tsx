import React, { useState } from 'react';
import './Navbar.css';
import logo from './logo1.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fix, setFix] = useState(false);
  const [isCrossIcon, setIsCrossIcon] = useState(false);

  function handleScroll() {
    if (window.scrollY > 20) {
      setFix(true);
    } else {
      setFix(false);
    }
  }

  window.addEventListener('scroll', handleScroll);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsCrossIcon(!isCrossIcon);
    const dropdownMenu = document.querySelector('.dropdown_menu');
    if (dropdownMenu) {
      dropdownMenu.classList.toggle('open');
    }
  };

  const closeMenuAndNavigate = (sectionId: string) => {
    setIsOpen(false);
    setIsCrossIcon(false);
    const dropdownMenu = document.querySelector('.dropdown_menu');
    if (dropdownMenu) {
      dropdownMenu.classList.remove('open');
    }
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={fix ? 'navbar fixed' : 'navbar'} id='navbar'>
        <img src={logo} alt="Logo" className="logoimage" />
        <nav>
          <ul className={`links ${isOpen ? 'open' : ''}`}>
            <li><a href="#home" onClick={() => closeMenuAndNavigate('home')}>Home</a></li>
            <li><a href="#about" onClick={() => closeMenuAndNavigate('about')}>About</a></li>
            <li><a href="#education" onClick={() => closeMenuAndNavigate('education')}>Education</a></li>
            <li><a href="#projects" onClick={() => closeMenuAndNavigate('projects')}>Projects</a></li>
            <li><a href="https://drive.google.com/file/d/1TaRrZTXcsK6an-29l90MQGoqqbAuPyt3/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
            <li><a href="#contact" onClick={() => closeMenuAndNavigate('contact')}>Contact</a></li>
          </ul>
        </nav>
        <div className="toggle_btn" onClick={toggleMenu}>
          {isCrossIcon ? (
            <i className="fa-solid fa-times"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
      </div>
      <div className="dropdown_menu">
        <ul>
          <li><a href="#home" onClick={() => closeMenuAndNavigate('home')}>Home</a></li>
          <li><a href="#about" onClick={() => closeMenuAndNavigate('about')}>About</a></li>
          <li><a href="#education" onClick={() => closeMenuAndNavigate('education')}>Education</a></li>
          <li><a href="#projects" onClick={() => closeMenuAndNavigate('projects')}>Projects</a></li>
          <li><a href="https://drive.google.com/file/d/1TaRrZTXcsK6an-29l90MQGoqqbAuPyt3/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
          <li><a href="#contact" onClick={() => closeMenuAndNavigate('contact')}>Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
