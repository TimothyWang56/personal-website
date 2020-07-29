export const crossword = [
    [{ contents: ','}, { contents: 'B', num: 2 }, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}],
    [{ contents: 'C', num: 1 }, { contents: 'R' }, { contents: 'E' }, { contents: 'S' }, { contents: 'S', num: 3 }, { contents: 'H' }, { contents: 'E' }, { contents: 'A' }, { contents: 'L' }, { contents: 'T' }, { contents: 'H' }],
    [{ contents: ','}, { contents: 'O' }, { contents: ','}, { contents: ','}, { contents: 'C'}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}],
    [{ contents: ','}, { contents: 'W' }, { contents: ','}, { contents: ','}, { contents: 'I'}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}],
    [{ contents: ','}, { contents: 'N' }, { contents: ','}, { contents: ','}, { contents: 'S'}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}],
    [{ contents: ','}, { contents: 'U' }, { contents: ','}, { contents: ','}, { contents: 'Q'}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}],
    [{ contents: ','}, { contents: ',' }, { contents: ','}, { contents: ','}, { contents: 'U'}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}],
    [{ contents: ','}, { contents: ',' }, { contents: ','}, { contents: ','}, { contents: 'A'}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}],
    [{ contents: ','}, { contents: ',' }, { contents: ','}, { contents: 'B', num: 4}, { contents: 'R'}, { contents: 'O'}, { contents: 'W'}, { contents: 'N'}, { contents: 'U'}, { contents: ','}, { contents: ','}],
    [{ contents: ','}, { contents: ',' }, { contents: ','}, { contents: ','}, { contents: 'E'}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}, { contents: ','}],
]

const cressText =
    "I'm a Software Engineering Intern for Cress Health, a startup that's aiming to help workers in the healthcare industry manage their mental wellness. " +
    "I started working for Cress at the beginning of my Sophomore Spring semester as a Front-End Developer for Cress's mobile application, but for the summer, " +
    "I've taken on new responsibilities. For the first month of the summer, I worked with 1 other intern on a dashboard tool that congregates data from the mobile app " +
    "and displays the anonymized data in customizable graphs. It was built using React.js, Express, and Azure Cosmos DB. I am now currently leading a team of 5 other interns " +
    "in building an internal Feature Flag tool to aid our developers with feature development and rollout."

const htaText =
    "I'm a Head Teaching Assistant for one of Brown University's introductory computer science courses, CSCI0170 - Computer Science: An Integrated Introduction. " +
    "The course teaches functional programming through 2 languages, Racket and ReasonML. Due to changes in our curriculum because of COVID-19, the course has been pushed " +
    "to the Spring 2021 semester, but we are still working to ensure that the Spring (likely) online course will run smoothly. " +
    "We're also currently putting together a team of ~20 teaching assistants to help us in the Spring semester."

const sciSquareText =
    "SciSquare is an online lab management platform that aims to streamline all lab project-related tasks into one interface, " +
    "including communication, project planning, scheduling, and equipment purchasing. The web application was built using React, " +
    "and I was in charge of implementing the marketplace, which allowed users to search and make bulk orders of important laboratory equipment."

const taText =
    "I was an undergraduate teaching assistant for both the Fall (CSCI0170) and Spring (CSCI0180) semesters of my sophomore year. " +
    "For both semesters, I was working on the homeworks teams, which meant I was responsible for editing and testing homework assignments " +
    "before releasing them, as well as grading and reviewing them. " +
    "Additionally, I volunteered to take on the responsibilities of checking for plagiarism using Stanford's MOSS API. " +
    "CSCI0170 was taught in Racket and ReasonML, and CSCI0180 was taught in Java and Scala."

export const clues = [
    {
        num: 1,
        row: true,
        dates: 'Jan 2020 - Present',
        title: 'Full-Stack Software Engineering Intern',
        text: cressText,
    },
    {
        num: 2,
        row: false,
        dates: 'Mar 2020 - Present',
        title: 'Head Teaching Assistant',
        text: htaText,
    },
    {
        num: 3,
        row: false,
        dates: 'Nov 2019 - Jan 2020',
        title: 'Front-End Developer',
        text: sciSquareText,
    },
    {
        num: 4,
        row: true,
        dates: 'Aug 2019 - May 2020',
        title: 'Teaching Assistant',
        text: taText,
    }
]