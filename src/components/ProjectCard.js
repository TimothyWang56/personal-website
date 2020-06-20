import React from 'react';
import '../css/Projects.css';

class ProjectCard extends React.Component {

  renderFront() {
    return this.props.logo !== null ? <img src={this.props.logo} alt={""} className="front-image"/> : <div className="front-text">{this.props.frontText}</div>
  }

  renderLinks() {
    const links = [
      this.props.githubLink !== null ? <a href={this.props.githubLink}>GITHUB</a> : null,
      this.props.devpostLink !== null ? <a href={this.props.devpostLink}>DEVPOST</a> : null
    ];
    return links;
  }

  render() {
    return (
      <div className="project-flip-card">
        <div className="project-flip-card-inner">
          <div className="project-flip-card-front">
            {this.renderFront()}
          </div>
          <div className="project-flip-card-back">
            <h4>{this.props.projectName}</h4>
            <p>{this.props.description}</p>
            <p><b>Built using: </b>{this.props.technologies}</p>
            <div className="links-container">{this.renderLinks()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectCard;