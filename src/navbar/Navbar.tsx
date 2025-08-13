import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from './logo3.png';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

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
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
        <div
          className={`fixed top-0 left-0 w-full flex justify-between items-center border-b-2 border-black p-4 md:px-10 z-50 ${isScrolled ? 'bg-[#FFF5EE]' : 'bg-transparent'}`}
          id="navbar"
        >
          <img src={logo} alt="Logo" className="w-24 cursor-pointer" onClick={() => navigate('/')} />

          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              <li>
                <Link to="/about" onClick={closeMenu} className="font-bold text-lg text-black hover:text-red-600">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={closeMenu} className="font-bold text-lg text-black hover:text-red-600">
                  Projects
                </Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1TaRrZTXcsK6an-29l90MQGoqqbAuPyt3/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="font-bold text-lg text-black hover:text-red-600"
                >
                  Resume
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="border-2 border-black px-4 py-2 font-bold hover:bg-red-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
            {isMenuOpen ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
          </div>
        </div>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-40" ref={menuRef}>
          <div className="bg-[#FCE8DD] p-5 rounded text-center w-11/12 max-w-xs">
            <ul className="space-y-5">
              <li>
                <Link to="/about" onClick={closeMenu} className="font-bold text-lg">About</Link>
              </li>
              <li>
                <Link to="/projects" onClick={closeMenu} className="font-bold text-lg">Projects</Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1TaRrZTXcsK6an-29l90MQGoqqbAuPyt3/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="font-bold text-lg"
                >
                  Resume
                </a>
              </li>
              <li>
                <Link to="/contact" onClick={closeMenu} className="font-bold text-lg">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
