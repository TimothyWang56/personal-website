import React from 'react';
import '../css/Projects.css';
import ProjectCard from './ProjectCard';

const projectInfo = [
  {
    projectName: "Give Your Two Cents",
    logo: require("../assets/images/giveyourtwocentslogo1.png"),
    description: "Chrome extension for Hack the Northeast 2020 and Winner of Most Viable Startup Category",
    technologies: "JavaScript, HTML, CSS"
  },
  {
    projectName: "The Admiral",
    logo: require("../assets/images/theadmiral.gif"),
    description: "4-player computer game combining elements from social deduction and racing games",
    technologies: "C#, Unity"
  },
  {
    projectName: "Rhyme Time",
    logo: require("../assets/images/rhymetime-model.png"),
    description: "LSTM neural network that generates limerick poems with perplexity of ~4.1",
    technologies: "Python, Tensorflow"
  },
  {
    projectName: "Rubik's Cube Simulator",
    logo: require("../assets/images/cube.gif"),
    description: "Simulator for a 3x3 Rubik's cube using keyboard inputs",
    technologies: "Python, PyGame, OpenGL"
  },
  {
    projectName: "Give Your Two Cents",
    logo: require("../assets/images/giveyourtwocentslogo1.png"),
    description: "Project for HTNE 2020",
    technologies: "JavaScript, HTML, CSS, Chrome Extension"
  },
  {
    projectName: "Give Your Two Cents",
    logo: require("../assets/images/giveyourtwocentslogo1.png"),
    description: "Project for HTNE 2020",
    technologies: "JavaScript, HTML, CSS, Chrome Extension"
  },
  {
    projectName: "Give Your Two Cents",
    logo: require("../assets/images/giveyourtwocentslogo1.png"),
    description: "Project for HTNE 2020",
    technologies: "JavaScript, HTML, CSS, Chrome Extension"
  },
]


class Projects extends React.Component {
  
  renderCards() {
    return projectInfo.map(project => {
      return (
        <ProjectCard
          projectName={project.projectName}
          description={project.description}
          logo={project.logo}
          alt={project.alt}
          frontText={project.frontText}
          technologies={"Built using: " + project.technologies}
        />
      )
    });
  }

  render() {
    return (
      <div className="projects-container">
        <h1>Projects</h1>
        <div className="projects-view">{this.renderCards()}</div>
      </div>
    );
  }
}

export default Projects;
