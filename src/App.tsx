import React, { useState } from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import Skills from './skills/Skills';
import Home from './home/Home';
import About from './about/About';
import Education from './education/Education';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import 'animate.css';


function App() {
  const [activeSection, setActiveSection] = useState('');

  const handleSetActiveSection = (sectionId: string) => {
    setActiveSection(sectionId);
  };

  const getContentMarginTop = () => {
    switch (activeSection) {
      case 'home':
        return 200;
      case 'about':
        return 200; // Adjust this value as needed
      case 'education':
        return 200; // Adjust this value as needed
      case 'projects':
        return 0;
      case 'contact':
        return 0;
      default:
        return 0;
    }
  };

  return (
    <div className="App">
      <title>Vidisha Portfolio</title>
      <Navbar/>
      <main className='content' style={{ marginTop: getContentMarginTop() }}>
        <Home/>
        <About />
        <Education />
        
        {/* <Skills /> */}
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
