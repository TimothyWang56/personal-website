import React from 'react';
import '../css/Projects.css';
import ProjectCard from './ProjectCard';

const projectInfo = [
  {
    projectName: "Give Your Two Cents",
    logo: "../assets/giveyourtwocentslogo1.png",
    description: "Project for HTNE 2020",
    technologies: "JavaScript, HTML, CSS, Chrome Extension"
  },
  {
    projectName: "Give Your Two Cents",
    logo: "../assets/giveyourtwocentslogo1.png",
    description: "Project for HTNE 2020",
    technologies: "JavaScript, HTML, CSS, Chrome Extension"
  },
  {
    projectName: "Give Your Two Cents",
    logo: "../assets/giveyourtwocentslogo1.png",
    description: "Project for HTNE 2020",
    technologies: "JavaScript, HTML, CSS, Chrome Extension"
  },
  {
    projectName: "Give Your Two Cents",
    logo: "../assets/giveyourtwocentslogo1.png",
    description: "Project for HTNE 2020",
    technologies: "JavaScript, HTML, CSS, Chrome Extension"
  },
  {
    projectName: "Give Your Two Cents",
    logo: "../assets/giveyourtwocentslogo1.png",
    description: "Project for HTNE 2020",
    technologies: "JavaScript, HTML, CSS, Chrome Extension"
  },
  {
    projectName: "Give Your Two Cents",
    logo: "../assets/giveyourtwocentslogo1.png",
    description: "Project for HTNE 2020",
    technologies: "JavaScript, HTML, CSS, Chrome Extension"
  },
  {
    projectName: "Give Your Two Cents",
    logo: "../assets/giveyourtwocentslogo1.png",
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
        technologies={project.technologies}
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
