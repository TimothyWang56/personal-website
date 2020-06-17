import React from 'react';
import '../css/Projects.css';

class ProjectCard extends React.Component {
  render() {
    return (
      <div class="project-flip-card">
        <div class="project-flip-card-inner">
          <div class="project-flip-card-front">
            <img src={this.props.logo} class="front-image"/>
          </div>
          <div class="project-flip-card-back">
            <h4>{this.props.projectName}</h4>
            <p>{this.props.description}</p><p>{this.props.technologies}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;