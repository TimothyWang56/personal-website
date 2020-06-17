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
    logo: require("../assets/images/theadmiral-logo.png"),
    description: "4-player computer game combining elements from social deduction and racing games",
    technologies: "C#, Unity"
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


function Projects() {
  const projects = projectInfo.map(project => {
    return (
      <ProjectCard
        projectName={project.projectName}
        description={project.description}
        logo={project.logo}
        technologies={"Built using: " + project.technologies}
      />
    )
  });

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <div className="projects-scroll-view">{projects}</div>
    </div>
  );
}

export default Projects;
