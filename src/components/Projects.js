import React from 'react';
import '../css/Projects.css';
import ProjectCard from './ProjectCard';

const projectInfo = [
  {
    projectName: "The Admiral",
    logo: require("../assets/images/theadmiral.gif"),
    description: "4-player social deduction/racing game set in a procedurally-generated underwater world",
    technologies: "C#, Unity",
    githubLink: null,
    devpostLink: null,
    backgroundColor: "#bbb"
  },
  {
    projectName: "Rhyme Time",
    logo: require("../assets/images/rhymetime-model.png"),
    description: "LSTM neural network that generates limerick poems with perplexity of ~4.1",
    technologies: "Python, Tensorflow",
    githubLink: "https://github.com/zhaovan/lstm-rhyme-time",
    devpostLink: null,
    backgroundColor: "white"
  },
  {
    projectName: "Rubik's Cube Simulator",
    logo: require("../assets/images/cube.gif"),
    description: "Simulator for a 3x3 Rubik's cube using keyboard inputs",
    technologies: "Python, PyGame, OpenGL",
    githubLink: "https://github.com/TimothyWang56/rubiks-cube",
    devpostLink: null,
    backgroundColor: "black"
  },
  {
    projectName: "Give Your Two Cents",
    logo: require("../assets/images/giveyourtwocentslogo1.png"),
    description: "Chrome extension for Hack the Northeast 2020 and Winner of Most Viable Startup Category",
    technologies: "JavaScript, HTML, CSS",
    githubLink: "https://github.com/TimothyWang56/give-your-two-cents",
    devpostLink: "https://devpost.com/software/charity-tracker-chrome-extension",
    backgroundColor: "#bbb"
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
          technologies={project.technologies}
          githubLink={project.githubLink}
          devpostLink={project.devpostLink}
          backgroundColor={project.backgroundColor}
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
