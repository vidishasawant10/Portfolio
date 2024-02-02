import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar';

import Home from './home/Home';
import About from './about/About';
import Education from './education/Education';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

function App() {
  return (
    <div className="App">
      <title>Vidisha Portfolio</title>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
