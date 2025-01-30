import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './logo3.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavLinkClick = (sectionId: string) => {
    closeMenu();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className={`navbar ${isScrolled ? 'fixed' : ''}`} id='navbar'>
        <img src={logo} alt="Logo" className="logoimage" />
        <nav>
          <ul className={`links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#home" onClick={() => handleNavLinkClick('home')}>Home</a></li>
            <li><a href="#about" onClick={() => handleNavLinkClick('about')}>About</a></li>
            <li><a href="#work" onClick={() => handleNavLinkClick('work')}>Work</a></li>
            <li><a href="#education" onClick={() => handleNavLinkClick('education')}>Education</a></li>
            <li><a href="#projects" onClick={() => handleNavLinkClick('projects')}>Projects</a></li>
            <li><a href="https://drive.google.com/file/d/1TaRrZTXcsK6an-29l90MQGoqqbAuPyt3/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
            <li className='get-in-touch'><a href="#contact" onClick={() => handleNavLinkClick('contact')}>Contact</a></li>
          </ul>
        </nav>

        {/* Toggle Button */}
        <div className="toggle_btn" onClick={toggleMenu}>
          {isMenuOpen ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-list"></i>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="overlay" onClick={closeMenu}>
            <nav className="overlay-menu">
              <ul>
                <li><a href="#home" onClick={() => handleNavLinkClick('home')}>Home</a></li>
                <li><a href="#about" onClick={() => handleNavLinkClick('about')}>About</a></li>
                <li><a href="#work" onClick={() => handleNavLinkClick('work')}>Work</a></li>
                <li><a href="#education" onClick={() => handleNavLinkClick('education')}>Education</a></li>
                <li><a href="#projects" onClick={() => handleNavLinkClick('projects')}>Projects</a></li>
                <li><a href="https://drive.google.com/file/d/1TaRrZTXcsK6an-29l90MQGoqqbAuPyt3/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
                {/* <li><a href="#contact" onClick={() => handleNavLinkClick('contact')}>Contact</a></li> */}
                <li><button className="get-in-touch" onClick={() => handleNavLinkClick('contact')}>Get In Touch</button></li>

              </ul>

            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
