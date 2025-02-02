import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from './logo3.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
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

  return (
    <>
      <div className={`navbar ${isScrolled ? 'fixed' : ''}`} id='navbar'>
        <img src={logo} alt="Logo" className="logoimage" onClick={() => navigate('/')} />

        <nav className="desktop-nav">
          <ul className={`links ${isMenuOpen ? 'open' : ''}`}>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
            <li>
              <a 
                href="https://drive.google.com/file/d/1TaRrZTXcsK6an-29l90MQGoqqbAuPyt3/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
              >
                Resume
              </a>
            </li>
            <li className='get-in-touch'><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </nav>

        <div className="toggle_btn" onClick={toggleMenu}>
          {isMenuOpen ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
        </div>
      </div>

      {isMenuOpen && (
        <div className="overlay">
          <div className="overlay-menu">
            <ul>
              <li><Link to="/about" onClick={closeMenu}>About</Link></li>
              <li><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
              <li>
                <a 
                  href="https://drive.google.com/file/d/1TaRrZTXcsK6an-29l90MQGoqqbAuPyt3/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                >
                  Resume
                </a>
              </li>
              <li className="get-in-touch"><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
