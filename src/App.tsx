import React, { useEffect, useState } from 'react';
import './App.css';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import About from './about/About';
import Education from './education/Education';
import Projects from './projects/Projects';
import Contact from './contact/Contact';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Hide the splash screen after a certain delay
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // Change the delay as per your requirement

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {showSplash ? (
        <div className="SplashScreen">
          {/* Add your splash screen content here */}
          <h1>Welcome to My Website!</h1>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <title>Vidisha Portfolio</title>
          <Navbar />
          <Home />
          <About />
          <Education />
          <Projects />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
