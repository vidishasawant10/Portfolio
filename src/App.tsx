import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import WelcomeScreen from './components/WelcomeScreen';
import Home from './home/Home';
import About from './about/About'; 
import Projects from './projects/Projects';
import Work from './work/Work';
import Contact from './contact/Contact';
import More from "./more/More";


function App() {
  return (
    <Router>
      <div className="min-h-screen px-8 md:px-10">
        <title>Vidisha Portfolio</title>
        {/* <WelcomeScreen
          title="Welcome to Vidisha’s Portfolio"
          subtitle="Loading delightful pixels and performant code…"
          minDurationMs={1200}> */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/more" element={<More />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* </WelcomeScreen> */}

      </div>
    </Router>
  );
}

export default App;
