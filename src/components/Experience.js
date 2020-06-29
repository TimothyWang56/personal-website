import React from 'react';
import '../css/Experience.css';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';

const experiencesInfo = [
  {
    company: "Cress Health",
    date: "May 2020 - Present",
    logo: "",
    title: "Full Stack Software Engineering Intern",
    description: "I'm a Software Engineering Intern \
      for Cress Health Inc., a startup that's aiming to help workers in \
      the healthcare industry manage their mental wellness. I'm currently working on the \
      back-end of our web application. So far, I've developed REST APIs using Node, Express, \
      Azure Cosmos DB, Azure Service Bus, and Azure App Service to handle account data, authentication, \
      and data analytics. For the front-end, we're using React."
  },
  {
    company: "Brown University Department of Computer Science",
    date: "Mar 2020 - Present",
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
    date: "Feb 2020 - May 2020",
    logo: "",
    title: "Front-End Developer",
    description: "During the Spring semester of my sophomore year, I worked \
      on Cress's iOS application and implemented the home page. The app was \
      built using React Native.",
  },
  {
    company: "Brown University Department of Computer Science",
    date: "Aug 2019 - May 2020",
    logo: "",
    title: "Teaching Assistant",
    description: "I was an undergraduate teaching assistant for \
      both the Fall (CSCI0170) and Spring (CSCI0180) semesters of my sophomore year. \
      For both semesters, I was working on the homeworks teams, which meant I \
      was responsible for editing and testing homework assignments before releasing them, \
      as well as grading and reviewing homeworks for plagiarism using Stanford's MOSS API. \
      CSCI0170 was taught in Racket and ReasonML, and CSCI0180 was taught in Java and Scala."
  },
  {
    company: "SciSquare",
    date: "Nov 2019 - Feb 2020",
    logo: "",
    title: "Front-End Developer",
    description: "SciSquare is an online lab management platform that aims to streamline \
      all lab project-related tasks into one interface, including communication, project \
      planning, scheduling, and equipment purchasing. \
      The web application was built using React, and I was in charge of \
      implementing the marketplace, which allowed users to search and make bulk orders of \
      important laboratory equipment."
  },
]


class Experience extends React.Component {
  renderTimelineItems() {
    return experiencesInfo.map(experience => {
      return (
        <TimelineItem
          dateText={experience.date}
          dateInnerStyle={{ background: '#779ecb', color: '#000', 'font-family': 'open-sans-light' }}
        >
          <h4 className='timeline-company'>{experience.company}</h4>
          <i className='timeline-title'>{experience.title}</i>
          <p>{experience.description}</p>
        </TimelineItem>
      )
    });
  }

  render() {
    return (
      <div className="experience-container">
        <h1>Experiences</h1>
        <div className='timeline-container'>
          <Timeline
            lineColor={'#779ecb'}
            animate={false}
          >
            {this.renderTimelineItems()}
          </Timeline>
        </div>
      </div>
    );
  }
}

export default Experience;
