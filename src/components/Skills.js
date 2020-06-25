import React from 'react';
import '../css/Skills.css';

const languageIcons = [
  require('../assets/icons/java.png'),
  require('../assets/icons/javascript.png'),
  require('../assets/icons/python.png'),
  require('../assets/icons/scala.png'),
  require('../assets/icons/c-sharp-logo.png'),
  require('../assets/icons/c-programming.png'),
  require('../assets/icons/x86.png'),
  require('../assets/icons/ocaml.png'),
  require('../assets/icons/racket-logo.png'),
  require('../assets/icons/reasonml.png'),
]

const frontendIcons = [
  require('../assets/icons/html-5.png'),
  require('../assets/icons/css3.png'),
  require('../assets/icons/react.png')
]

const backendIcons = [
  require('../assets/icons/nodejs.png'),
  require('../assets/icons/azure.png'),
  require('../assets/icons/azure-app-service.png'),
  require('../assets/icons/azure-service-bus.png'),
  require('../assets/icons/azure-cosmos-db.png'),
]

class Skills extends React.Component {
  
  renderIcons(iconsList) {
    return iconsList.map(icon => {
      return <img src={icon} alt={""} className='skills-icon'></img>
    })
  }

  render() {
    return (
      <div className="skills-container">
        <h1>Skills</h1>
        <div className="skills-card">
          <h4>Languages</h4>
          <div className='skills-section'>
            {this.renderIcons(languageIcons)}
          </div>
          <h4>Frontend</h4>
          <div className='skills-section'>
            {this.renderIcons(frontendIcons)}
          </div>
          <h4>Backend</h4>
          <div className='skills-section'>
            {this.renderIcons(backendIcons)}
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
