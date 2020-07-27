import React from 'react';
import './ExperiencePage.scss';

import Page from '../../Layout/Page/Page';
import Crossword from '../../Components/Crossword/Crossword';
import CrosswordClues from '../../Components/CrosswordClues/CrosswordClues';

const crossword = [
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

const clues = [
    {
        num: 1,
        row: true,
        dates: 'Jan 2020 - Present',
        title: 'Full-Stack Software Engineering Intern',
        text: 'I\'m a Software Engineering Intern for Cress Health, a startup that\'s aiming to help workers in the healthcare industry manage their mental wellness. I\'m currently working on the back-end of our web application. So far, I\'ve developed REST APIs using Node, Express, and Azure Cosmos DB to handle account data, authentication, and data analytics. For the front-end, we\'re using React.'
    },
    {
        num: 2,
        row: false,
        dates: 'Mar 2020 - Present',
        title: 'Head Teaching Assistant',
        text: 'I\'m a Head Teaching Assistant for one of Brown University\'s introductory computer science courses, CSCI0170 - Computer Science: An Integrated Introduction. The course teaches functional programming through 2 languages, Racket and ReasonML. Some of my responsibilities include developing course material and deciding on changes for the upcoming Fall 2020 semester. We\'re also currently putting together a team of ~20 teaching assistants to help us in the Fall semester.'
    },
    {
        num: 3,
        row: false,
        dates: 'Nov 2019 - Jan 2020',
        title: 'Front-End Developer',
        text: 'SciSquare is an online lab management platform that aims to streamline all lab project-related tasks into one interface, including communication, project planning, scheduling, and equipment purchasing. The web application was built using React, and I was in charge of implementing the marketplace, which allowed users to search and make bulk orders of important laboratory equipment.'
    },
    {
        num: 4,
        row: true,
        dates: 'Aug 2019 - May 2019',
        title: 'Full-Stack Software Engineering Intern',
        text: 'I was an undergraduate teaching assistant for both the Fall (CSCI0170) and Spring (CSCI0180) semesters of my sophomore year. For both semesters, I was working on the homeworks teams, which meant I was responsible for editing and testing homework assignments before releasing them, as well as grading and reviewing homeworks for plagiarism using Stanford\'s MOSS API. CSCI0170 was taught in Racket and ReasonML, and CSCI0180 was taught in Java and Scala.'
    }
]

class ExperiencePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeClue: 1,
            row: true,
            crossword,
            clues,
        }
    }

    findClueNumByRow(rowIndex, colIndex) {
        const square = this.state.crossword[rowIndex][colIndex];
        const numCols = this.state.crossword[0].length;

        if (colIndex === 0 || this.state.crossword[rowIndex][colIndex - 1].contents === ',') {
            if (colIndex + 1 < numCols &&
                this.state.crossword[rowIndex][colIndex + 1].contents !== ',' &&
                square.num) {
                return square.num;
            } else {
                return -1;
            }
        } else {
            for (let i = colIndex - 1; i >= 0; i--) {
                if (this.state.crossword[rowIndex][i].num && (i === 0 || this.state.crossword[rowIndex][i - 1].contents === ',')) {
                    return this.state.crossword[rowIndex][i].num;
                }
            }
            return -1;
        }
    }

    findClueNumByCol(rowIndex, colIndex) {
        const square = this.state.crossword[rowIndex][colIndex];
        const numRows = this.state.crossword.length;

        if (rowIndex === 0 || this.state.crossword[rowIndex - 1][colIndex].contents === ',') {
            if (rowIndex + 1 < numRows &&
                this.state.crossword[rowIndex + 1][colIndex].contents !== ',' &&
                square.num) {
                return square.num;
            } else {
                return -1;
            }
        } else {
            for (let i = rowIndex - 1; i >= 0; i--) {
                if (this.state.crossword[i][colIndex].num && (i === 0 || this.state.crossword[i - 1][colIndex].contents === ',')) {
                    return this.state.crossword[i][colIndex].num;
                }
            }
            return -1;
        }
    }

    onSquareClick(rowIndex, colIndex) {
        const rowClue = this.findClueNumByRow(rowIndex, colIndex);
        const colClue = this.findClueNumByCol(rowIndex, colIndex);

        if (rowClue !== -1 && (this.state.activeClue !== rowClue || !this.state.row)) {
            this.setState({
                activeClue: rowClue,
                row: true
            })
        } else if (colClue !== -1) {
            this.setState({
                activeClue: colClue,
                row: false
            })
        }
    }

    onClueClick(clueNum, row) {
        this.setState({
            activeClue: clueNum,
            row,
        })
    }

    render() {
        const headerHeight = '15vh';

        const titleStyle = {
            height: '8vh',
            fontSize: '2vh'
        }

        const pagePadding = {
            padding: '2vh'
        }

        return (
            <Page active='Experiences' headerHeight={headerHeight}>
                <div className='experiences-wrapper' style={pagePadding}>
                    <div style={titleStyle}>
                        <h1 className='experiences-title'>Experiences</h1>
                        <hr className='thin-horz-line'/>
                    </div>
                    <div className='experiences-content'>
                        <Crossword
                            activeClue={this.state.activeClue}
                            row={this.state.row}
                            crossword={this.state.crossword}
                            onSquareClick={this.onSquareClick.bind(this)}
                            size={'calc(100vh - ' + headerHeight + ' - ' + titleStyle.height + ' - (' + pagePadding.padding + ' * 2))'}
                        />
                        <CrosswordClues
                            height={'calc(100vh - ' + headerHeight + ' - ' + titleStyle.height + ' - (' + pagePadding.padding + ' * 2))'}
                            activeClue={this.state.activeClue}
                            onClick={this.onClueClick.bind(this)}
                            clues={this.state.clues}
                        />
                    </div>
                </div>
            </Page>
        );
    }
}

export default ExperiencePage;
