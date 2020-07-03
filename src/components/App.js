import React from 'react';
import '../css/App.css';
import Intro from './Intro';
import Projects from './Projects';
import Experience from './Experience';
import Skills from './Skills';
import Footer from './Footer';

function App() {
  return (
    <div className="container">
        <Intro/>
        <Experience/>
        <Projects/>
        <Skills/>
        <Footer/>
    </div>
  );
}

export default App;