import React from 'react';
import '../css/App.css';
import Intro from '../components/Intro';
import Projects from '../components/Projects';
import Experience from '../components/Experience';

function App() {
  return (
    <div className="container">
        <Intro/>
        <Experience/>
        <Projects/>
    </div>
  );
}

export default App;
