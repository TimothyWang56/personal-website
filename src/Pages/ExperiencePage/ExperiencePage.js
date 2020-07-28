import React from 'react';
import './ExperiencePage.scss';

import Page from '../../Layout/Page/Page';
import Crossword from '../../Components/Crossword/Crossword';
import CrosswordClues from '../../Components/CrosswordClues/CrosswordClues';
import { crossword, clues } from './data.js';

class ExperiencePage extends React.Component {
    constructor(props) {
        super(props);

        const refs = clues.map(clue => {
            return React.createRef();
        })

        this.state = {
            activeClue: 1,
            row: true,
            crossword,
            clues,
            horizontalOrientation: true,
            clueRefs: refs,
        }

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
		this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
	}
	
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}
	
	updateWindowDimensions() {
        let horizontalOrientation = true;

        if (window.innerWidth/window.innerHeight < 1) {
            horizontalOrientation = false;
        }

        this.setState({ horizontalOrientation });
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
            this.state.clueRefs[rowClue - 1].current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        } else if (colClue !== -1) {
            this.setState({
                activeClue: colClue,
                row: false
            })
            this.state.clueRefs[colClue - 1].current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
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
            'height': '8vh',
            'fontSize': this.state.horizontalOrientation ? 'calc(min(1.3vw, 1.4em))' : '1.2em',
            'textAlign': !this.state.horizontalOrientation ? 'center' : 'left'
        }

        const pageContentStyle = {
            padding: '2vh'
        }

        const experiencesContentStyle = {};

        if (this.state.horizontalOrientation) {
            experiencesContentStyle['gridTemplateColumns'] = 'min-content 1fr';
        } else {
            experiencesContentStyle['gridTemplateRows'] = 'min-content 1fr';
        }

        const crosswordSize = this.state.horizontalOrientation ?
            'calc(100vh - ' + headerHeight + ' - ' + titleStyle.height + ' - (' + pageContentStyle.padding + ' * 2))' :
            'calc(100vw - (' + pageContentStyle.padding + ' * 2))';

        const cluesHeight = this.state.horizontalOrientation ?
            'calc(100vh - ' + headerHeight + ' - ' + titleStyle.height + ' - (' + pageContentStyle.padding + ' * 2))' :
            '100%'

        return (
            <Page active='Experiences' headerHeight={headerHeight}>
                <div className='experiences-wrapper' style={pageContentStyle}>
                    <div style={titleStyle}>
                        <h1 className='experiences-title title'>Crossword</h1>
                        <hr className='thin-horz-line'/>
                    </div>
                    <div className='experiences-content' style={experiencesContentStyle}>
                        <Crossword
                            activeClue={this.state.activeClue}
                            row={this.state.row}
                            crossword={this.state.crossword}
                            onSquareClick={this.onSquareClick.bind(this)}
                            size={crosswordSize}
                        />
                        <CrosswordClues
                            height={cluesHeight}
                            activeClue={this.state.activeClue}
                            onClick={this.onClueClick.bind(this)}
                            clues={this.state.clues}
                            clueRefs={this.state.clueRefs}
                            horizontalOrientation={this.state.horizontalOrientation}
                        />
                    </div>
                </div>
            </Page>
        );
    }
}

export default ExperiencePage;
