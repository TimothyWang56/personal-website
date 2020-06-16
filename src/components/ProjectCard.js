import React from 'react';
import '../css/Projects.css';

class ProjectCard extends React.Component {
  render() {
    return (
      <div class="project-flip-card">
        <div class="project-flip-card-inner">
          <div class="project-flip-card-front">
            <img src={require("../assets/giveyourtwocentslogo1.png")}/>
          </div>
          <div class="project-flip-card-back">
            <h1>{this.props.projectName}</h1>
            <p>{this.props.description}</p>
            <p>{this.props.technologies}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;