import React from 'react';
import '../css/Experience.css';
import ExperienceCard from './ExperienceCard';

const experiencesInfo = [
  {
    company: "Cress Health",
    date: "May 2020 - Present",
    logo: "",
    title: "Full Stack Software Engineering Intern",
    description: "I'm a Software Engineering Intern " +
      "for Cress Health Inc., a startup that's aiming to help workers in " +
      "the healthcare industry manage their stress. I'm currently working on the " +
      "back-end of our web application. The APIs are written using JavaScript, " +
      "and I'm using the Express framework for API development, " + 
      "Azure Cosmos DB for the database, " +
      "and Azure App Service to deploy the APIs. For the front-end, we're using React."
  },
  {
    company: "Brown University Department of Computer Science",
    date: "March 2020 - Present",
    logo: "",
    title: "Head Teaching Assistant",
    description: "I'm a Head Teaching Assistant for one of " +
      "Brown University's introductory computer science courses, " +
      "CSCI0170 - Computer Science: An Integrated Introduction. " +
      "The course teaches functional programming through 2 languages, " +
      "Racket and ReasonML. Some of my responsibilities include developing " +
      "course material and deciding on changes for the upcoming Fall 2020 semester. " +
      "We're also currently putting together a team of " +
      "~20 teaching assistants to help us in the Fall semester."
  },
  {
    company: "Cress Health",
    date: "February 2020 - May 2020",
    logo: "",
    title: "Front-End Software Engineering Intern",
    description: "During the Spring semester of my sophomore year, I worked " +
      "on Cress's iOS application and implemented the home page.",
  },
  {
    company: "Brown University Department of Computer Science",
    date: "August 2019 - May 2020",
    logo: "",
    title: "Teaching Assistant",
    description: "Put description here"
  },
]


function Experience() {
  const experiences = experiencesInfo.map(experience => {
    return (
      <ExperienceCard
        current={experience.current}
        date={experience.date}
        company={experience.company}
        logo={experience.logo}
        title={experience.title}
        description={experience.description}
      />
    )
  });

  return (
    <div className="experience-container">
      <h1>Experiences</h1>
      {experiences}
    </div>
  );
}

export default Experience;
