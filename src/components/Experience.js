import React from 'react';
import '../css/Experience.css';
import ExperienceCard from './ExperienceCard';

const experiencesInfo = [
  {
    company: "Cress Health",
    date: "May 2020 - Present",
    logo: "",
    title: "Full Stack Software Engineering Intern",
    description: "I'm a Software Engineering Intern \
      for Cress Health Inc., a startup that's aiming to help workers in \
      the healthcare industry manage their stress. I'm currently working on the \
      back-end of our web application. So far, I've developed REST APIs using Node, Express, \
      Azure Cosmos DB, Azure Service Bus, and Azure App Service to handle account data, authentication, \
      and data analytics. For the front-end, we're using React."
  },
  {
    company: "Brown University Department of Computer Science",
    date: "March 2020 - Present",
    logo: "",
    title: "Head Teaching Assistant",
    description: "I'm a Head Teaching Assistant for one of \
      Brown University's introductory computer science courses, \
      CSCI0170 - Computer Science: An Integrated Introduction. \
      The course teaches functional programming through 2 languages, \
      Racket and ReasonML. Some of my responsibilities include developing \
      course material and deciding on changes for the upcoming Fall 2020 semester. \
      We're also currently putting together a team of \
      ~20 teaching assistants to help us in the Fall semester."
  },
  {
    company: "Cress Health",
    date: "February 2020 - May 2020",
    logo: "",
    title: "Front-End Developer",
    description: "During the Spring semester of my sophomore year, I worked \
      on Cress's iOS application and implemented the home page. The app was \
      built using React Native.",
  },
  {
    company: "Brown University Department of Computer Science",
    date: "August 2019 - May 2020",
    logo: "",
    title: "Teaching Assistant",
    description: "I was an undergraduate teaching assistant for \
      both the Fall (CSCI0170) and Spring (CSCI0180) semesters of my sophomore year. \
      For both semesters, I was working on the homeworks teams, which meant I \
      was responsible for editing and testing homework assignments before releasing them, \
      as well as grading and reviewing homeworks for plagiarism using Stanford's MOSS API. \
      CSCI0170 was taught in Racket and ReasonML, and CSCI0180 was taught in Java and Scala."
  },
]


class Experience extends React.Component {
constructor(props) {
    super(props);

    experiencesInfo.map(e => {
      e.isHovering = false;
      e.isFront = true;
    });
    this.state = {
      showing: 0,
      experiencesInfo,
    };
  }

  async sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }

  toggleHoverOn(index) {
    const experiences = this.state.experiencesInfo;
    experiences.map((e, i) => {
      if (i === index) {
        e.isHovering = true;
      } else {
        e.isHovering = false;
      }
    });
    this.setState({
      experiencesInfo: experiences,
      showing: 1,
    });
    this.sleep(150).then(() => {
      experiences.map((e, i) => {
        if (i === index) {
          e.isFront = false;
        } else {
          e.isFront = true;
        }
      })
      this.setState({
        experiencesInfo: experiences,
      });
    });
  }

  toggleHoverOff(index) {
    const experiences = this.state.experiencesInfo;
    experiences.map((e) => {
      e.isHovering = false;
    });
    // experiences[index].isHovering = false;
    this.setState({
      experiencesInfo: experiences,
      showing: 0
    });
    this.sleep(150).then(() => {
      experiences.map((e) => {
        e.isFront = true;
      })
      // experiences[index].isFront = true;
      this.setState({
        experiencesInfo: experiences,
      });
    });
  }
  

  renderCards() {
    return experiencesInfo.map((experience, i) => {
      return (
        <ExperienceCard
          current={experience.current}
          date={experience.date}
          company={experience.company}
          logo={experience.logo}
          title={experience.title}
          description={experience.description}
          isHovering={experience.isHovering}
          isFront={experience.isFront}
          index={i}
          toggleHoverOn={this.toggleHoverOn.bind(this)}
          toggleHoverOff={this.toggleHoverOff.bind(this)}

        />
      )
    });
  }

  render() {
    return (
      <div className="experience-container">
        <h1>Experiences</h1>
        {this.renderCards()}
      </div>
    );
  }
}

export default Experience;
