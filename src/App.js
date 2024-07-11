import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Feature from './components/Feature';
import About from './components/About';
import Class from './components/Class';
import Schedule from './components/Schedule';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature />
      <About />
      <Class />
      <Schedule />
      <Contact />
    </div>
  );
};

export default App;