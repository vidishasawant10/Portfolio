import React from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import Skills from './skills/Skills';
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
      <main className='content'> {/* Adjust padding top according to navbar height */}
        <Home />
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
