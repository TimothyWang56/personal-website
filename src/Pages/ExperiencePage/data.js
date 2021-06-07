export const crossword = [
    [{ contents: 'U', num: 1 }, { contents: 'N' }, { contents: 'C', num: 4}, { contents: 'O'}, { contents: 'U'}, { contents: 'N'}, { contents: 'T'}, { contents: 'A'}, { contents: 'B', num: 6}, { contents: 'L'}, { contents: 'E'}, { contents: ',' }],
    [{ contents: ','}, { contents: ',' }, { contents: 'R' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: 'R' }, { contents: ',' }, { contents: ',' }, { contents: ',' }],
    [{ contents: ','}, { contents: ',' }, { contents: 'E' }, { contents: ',' }, { contents: ',' }, { contents: 'B', num: 5 }, { contents: ',' }, { contents: ',' }, { contents: 'O' }, { contents: ',' }, { contents: ',' }, { contents: ',' }],
    [{ contents: 'N', num: 2 }, { contents: 'I' }, { contents: 'S' }, { contents: 'T' }, { contents: ',' }, { contents: 'R' }, { contents: ',' }, { contents: ',' }, { contents: 'W' }, { contents: ',' }, { contents: ',' }, { contents: ',' }],
    [{ contents: ','}, { contents: ',' }, { contents: 'S' }, { contents: ',' }, { contents: 'C', num: 3 }, { contents: 'O' }, { contents: 'L' }, { contents: 'O' }, { contents: 'N' }, { contents: 'I' }, { contents: 'S' }, { contents: 'T' }],
    [{ contents: ','}, { contents: ',' }, { contents: 'H' }, { contents: ',' }, { contents: ',' }, { contents: 'W' }, { contents: ',' }, { contents: ',' }, { contents: 'U' }, { contents: ',' }, { contents: ',' }, { contents: ',' }],
    [{ contents: ','}, { contents: ',' }, { contents: 'E' }, { contents: ',' }, { contents: ',' }, { contents: 'N' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }],
    [{ contents: ','}, { contents: ',' }, { contents: 'A' }, { contents: ',' }, { contents: ',' }, { contents: 'U' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }],
    [{ contents: ','}, { contents: ',' }, { contents: 'L' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }],
    [{ contents: ','}, { contents: ',' }, { contents: 'T' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }],
    [{ contents: ','}, { contents: ',' }, { contents: 'H' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }, { contents: ',' }],
]

const uncountableText = 
    "I'm a Software Engineering Intern at Uncountable, a startup based in San Francisco that provides a data management system for R&D scientists " +
    "to streamline data collection and cleaning and use AI technologies to leverage cross-project learnings and produce optimized experiment suggestions."

const nistText =
    "I was a NIST PREP Fellow through Brown University in collaboration with the National Institute of Standards and Technology's Gaithersburg branch. " +
    "I'm worked on frontend and backend development for a tool that runs an economic analysis of rooftop solar photovoltaics installations for homeowners, " +
    "a project under the Metrics and Tools for Sustainable Buildings Project."

const colonistText = 
    "I was a contributor to colonist.io, an online version of the popular board game Settlers of Catan. A few things I have added include a new map, a support button " +
    "to redirect players to our discord server with ~15,000 users, and a double-click confirmation system to prevent misclicks from affecting players' experiences. " +
    "I'm also an avid user of colonist.io, and would recommend anyone that's looking to pick up a new hobby to try it out!"

const cressText =
    "I was a Software Engineering Intern for Cress Health, a startup that's aiming to help workers in the healthcare industry manage their mental wellness. " +
    "I started working for Cress at the beginning of my Sophomore Spring semester as a Front-End Developer for Cress's mobile application, but for the summer, " +
    "I took on new responsibilities. For the first month of the summer, I worked with 1 other intern on a dashboard tool that congregates data from the mobile app " +
    "and displays the anonymized data in customizable graphs. It was built using React.js, Express, and Azure Cosmos DB. For the second half of the summer, I led a team of 5 other interns " +
    "in building an internal Feature Flag tool to aid our developers with feature development and rollout. " +
    "This included designing the application from scratch, scheduling regular meetings with the other interns, and distributing the tasks."

const htaText =
    "I was a Head Teaching Assistant for one of Brown University's introductory computer science courses, CSCI0170 - Computer Science: An Integrated Introduction. " +
    "The course teaches functional programming through 2 languages, Racket and ReasonML."

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
        dates: 'Summer 2021',
        title: 'Software Engineering Intern',
        text: uncountableText,
    },
    {
        num: 2,
        row: true,
        dates: 'October 2020 - May 2021',
        title: 'NIST PREP Fellow',
        text: nistText,
    },
    {
        num: 3,
        row: true,
        dates: 'October 2020 - February 2021',
        title: 'Software Contributor',
        text: colonistText,
    },
    {
        num: 4,
        row: false,
        dates: 'Jan 2020 - Aug 2020',
        title: 'Software Engineering Intern',
        text: cressText,
    },
    {
        num: 5,
        row: false,
        dates: 'Mar 2020 - May 2021',
        title: 'Head Teaching Assistant',
        text: htaText,
    },
    {
        num: 6,
        row: false,
        dates: 'Aug 2019 - May 2020',
        title: 'Teaching Assistant',
        text: taText,
    }
]