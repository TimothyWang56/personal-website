import React from 'react';
import '../css/Experience.css';

class ExperienceCard extends React.Component {
  render() {
    return (
      <div class="exp-flip-card">
        <div class="exp-flip-card-inner">
          <div class="exp-flip-card-front">
            <h4>{this.props.company}</h4>
            <p>{this.props.title}<br/>{this.props.date}</p>
          </div>
          <div class="exp-flip-card-back">
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ExperienceCard;