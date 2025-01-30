import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "./logo3.png";

const Navbar: React.FC = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    // Ensure navbar styles apply after refresh
    document.body.classList.add("navbar-loaded");

    const handleScroll = () => {
      setIsFixed(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.classList.remove("navbar-loaded");
    };
  }, []);

  return (
    <header className={`navbar ${isFixed ? "fixed" : ""}`}>
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>

      {/* Desktop Navigation */}
      <nav className="nav-links">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="https://drive.google.com/file/d/1TaRrZTXcsK6an-29l90MQGoqqbAuPyt3/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
          <li><button className="get-in-touch">Get In Touch</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
