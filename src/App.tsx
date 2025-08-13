import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import About from './about/About'; // About Page with About, Skills, and Work
import Projects from './projects/Projects';
import Contact from './contact/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen px-8 md:px-10">
        <title>Vidisha Portfolio</title>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
