import React from 'react';
import '../css/Experience.css';

class ExperienceCard extends React.Component {
  render() {
    return (
      <div
        className="exp-card"
        onMouseEnter={() => this.props.toggleHoverOn(this.props.index)}
        onMouseLeave={() => this.props.toggleHoverOff(this.props.index)}
      >
        {this.props.isFront ?
          <div className="exp-card-front" style={{opacity: this.props.isHovering ? 0 : 1}}>
            <h4>{this.props.company}</h4>
            <p>{this.props.title}<br/>{this.props.date}</p>
          </div> :
            <div className="exp-card-back" style={{opacity: this.props.isHovering ? 1 : 0}}>
              <p>{this.props.description}</p>
            </div>
          }
      </div>
    )
  }
}

export default ExperienceCard;