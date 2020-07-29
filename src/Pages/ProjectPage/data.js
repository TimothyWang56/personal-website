export const projects = [
    {
        title: 'Gyoza',
        className: 'gyoza',
        defaultHorizontal: false,
        image: require('../../Assets/Images/gyoza-logo.svg'),
        text:
            "Gyoza is a project I'm currently working on - it's my very own statically typed language! " +
            "So far, I've written two key components to building the language - the lexer and the parser. The lexer tokenizes the source code - in other words, it " +
            "splits up all of the pieces of code into small units (called tokens), such as identifiers (e.g. variable names), literals (e.g. numbers and strings), and symbols (e.g. = and *). " +
            "After the lexer does it's job, the parser takes the tokens and organizes them into an Abstract Syntax Tree, or AST. " + 
            "An AST represents the tokens in a syntatically-logical tree. For example, if one of the lines of the source code is \"a = 5\", " +
            "then you'd have a Parent node holding the = sign, and two children, one holding the variable \"a\" and the other holding the number 5. " +
            "Now I'm working on the last step, code generation - the biggest part of this whole project. I can either make this a compiled language or interpreted language. " +
            "While making a compiled language is more difficult, I think I'm up for the challenge! Compiled languages are typically faster too, so I think it's worth the extra work."
    },
    {
        title: 'The Admiral',
        className: 'admiral',
        defaultHorizontal: true,
        image: require('../../Assets/Images/theadmiral.gif'),
        text:
            "For my final project in my Software Engineering course, my team of 4 students " +
            "decided to create a game in Unity. The Admiral is a 4-player social-deduction and racing game. " +
            "Among the players, there's 3 pirates - the good guys - and 1 admiral - the bad guy, but the admiral is hiding among the crew! " +
            "The pirates must find their way to the treasure in the foggy waters while the admiral is trying to secretly sabotage their journey. " +
            "The terrain is procedurally-generated using the Marching Cubes algorithm and the paths are randomly determined using the Perlin worms algorithm."
    },
    {
        title: 'Give Your Two Cents',
        className: 'two-cents',
        defaultHorizontal: true,
        image: require('../../Assets/Images/giveyourtwocentslogo1.png'),
        text:
            "Give Your Two Cents is a Google Chrome extension that helps streamline the process of saving and donating. " +
            "It prompts the user to round up the cost of any online purchase to the nearest dollar and store it in a virtual bank, and also provides a donation suggestion and history interface. " +
            "This project was chosen as a winner for the Most Viable Startup Hack Category for Hack the Northeast 2020, the most competitive category " +
            "of the hackathon. This was a really enjoyable project to complete because no one in my team of 3 had made a Chrome extension before, " +
            "which made for a fun but challenging experience."
    },
    {
        title: 'Rubik\'s Cube',
        className: 'cube',
        defaultHorizontal: false,
        image: require('../../Assets/Images/cube.gif'),
        text:
            "I've been solving Rubik's cubes since the 3rd grade, so I thought I'd try creating a 3-D simulator for one! " +
            "This was my first project dealing with graphics, so it ended up being a lot more difficult than I anticipated. Despite the challenges I had with it, " +
            "I was able to create an animated Rubik's cube that is controlled by keyboard inputs."
    },
    {
        title: 'Rhyme Time',
        className: 'rhyme-time',
        defaultHorizontal: false,
        image: require('../../Assets/Images/rhymetime-model.png'),
        text:
            "Rhyme Time was my final project for my Deep Learning course. My team of 4 students created " +
            "a LSTM neural network that generates Limerick poems using TensorFlow. It was trained on 75,000 limerick poems and " +
            "had a perplexity of ~4.1 after 15 epochs."
    },
    {
        title: 'Text Editor',
        className: 'text-editor',
        defaultHorizontal: true,
        image: require('../../Assets/Images/text-editor.gif'),
        text: "I created a text editor in Java using the Swing toolkit. " +
        "It supports functionality for loading, saving, and finding based on text or regex expressions."
    },   
]
