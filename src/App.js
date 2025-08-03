import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Services from './pages/Services.js';
import Contact from './pages/Contacts.js';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About.js" element={<About />} />
        <Route path="/Projects.js" element={<Projects />} />
        <Route path="/Services.js" element={<Services />} />
        <Route path="/Contact.js" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;