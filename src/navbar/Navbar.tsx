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

  return (
    <>
      <div className={`navbar ${isScrolled ? 'fixed' : ''}`} id='navbar'>
        {/* Clicking the Logo Navigates to Home */}
        <img src={logo} alt="Logo" className="logoimage" onClick={() => navigate('/')} />

        <nav>
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

        {/* Toggle Button for Mobile */}
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
                <li><button className="get-in-touch" onClick={() => navigate('/contact')}>Get In Touch</button></li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
