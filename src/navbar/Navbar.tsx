import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from './logo1.png';

interface NavbarProps {
  setActiveSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { setActiveSection } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [fix, setFix] = useState(false);
  const [isCrossIcon, setIsCrossIcon] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setFix(true);
      } else {
        setFix(false);
      }

      if (isOpen) {
        closeMenu();
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsCrossIcon(!isCrossIcon);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIsCrossIcon(false);
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
      <div className={fix ? 'navbar fixed' : 'navbar'} id='navbar'>
        {/* <img src={logo} alt="Logo" className="logoimage" /> */}
        <nav>
          <ul className={`links ${isOpen ? 'open' : ''}`}>
            <li className='navbar-left'><a href="#home" onClick={() => handleNavLinkClick('home')}>Home</a></li>
            <li className='navbar-left'><a href="#about" onClick={() => handleNavLinkClick('about')}>About</a></li>
            <li className='navbar-left'><a href="#education" onClick={() => handleNavLinkClick('education')}>Education</a></li>
            <li className='navbar-left'><a href="#projects" onClick={() => handleNavLinkClick('projects')}>Projects</a></li>
            <li className='navbar-right'><a href="https://drive.google.com/file/d/1TaRrZTXcsK6an-29l90MQGoqqbAuPyt3/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
            <li className='navbar-right'><a href="#contact" onClick={() => handleNavLinkClick('contact')}>Contact</a></li>
          </ul>
        </nav>
        <div className="toggle_btn" onClick={toggleMenu}>
          {isCrossIcon ? (
            <i className="bi bi-x"></i>
          ) : (
            <i className="bi bi-list"></i>
          )}
        </div>
        {isOpen && <div className="overlay" onClick={toggleMenu}>
        <nav className="overlay-menu">
              <ul>
                <li><a href="#home" onClick={() => handleNavLinkClick('home')}>Home</a></li>
                <li><a href="#about" onClick={() => handleNavLinkClick('about')}>About</a></li>
                <li><a href="#education" onClick={() => handleNavLinkClick('education')}>Education</a></li>
                <li><a href="#projects" onClick={() => handleNavLinkClick('projects')}>Projects</a></li>
                <li><a href="https://drive.google.com/file/d/1TaRrZTXcsK6an-29l90MQGoqqbAuPyt3/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
                <li><a href="#contact" onClick={() => handleNavLinkClick('contact')}>Contact</a></li>
              </ul>
            </nav></div>}
      </div>
    </>
  );
};

export default Navbar;
