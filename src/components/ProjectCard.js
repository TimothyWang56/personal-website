import React from 'react';
import '../css/Projects.css';

class ProjectCard extends React.Component {

  renderFront() {
    return this.props.logo !== null ? <img src={this.props.logo} alt={""} className="front-image"/> : <div className="front-text">{this.props.frontText}</div>
  }

  renderLinks() {
    const links = [
      this.props.githubLink && <a href={this.props.githubLink}>GITHUB</a>,
      this.props.devpostLink && <a href={this.props.devpostLink}>DEVPOST</a>
    ];
    return links;
  }

  render() {
    return (
      <div className="project-flip-card disable-scrollbar">
        <div className="project-flip-card-inner">
          <div style={{backgroundColor: this.props.backgroundColor}} className="project-flip-card-front">
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