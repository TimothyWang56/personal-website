import React from 'react';
import '../css/Experience.css';
import ExperienceCard from './ExperienceCard';

const experiencesInfo = [
  {
    company: "Cress Health",
    date: "May 2020 - Present",
    logo: "",
    title: "Full Stack Software Engineering Intern",
    description: "I'm currently working as a Software Engineering Intern " +
      "for Cress Health Inc., a startup that's aiming to help workers in " +
      "the healthcare industry manage their stress.",
  },
  {
    company: "Brown University Department of Computer Science",
    date: "March 2020 - Present",
    logo: "",
    title: "Head Teaching Assistant",
    description: "I was chosen to be a Head Teaching Assistant for one of " +
      "Brown University's introductory computer science courses, CSCI0170."
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
    logo: "August 2019 - May 2020",
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
