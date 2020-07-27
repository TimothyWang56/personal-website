import React from 'react';
import './ExperiencePage.scss';

import Page from '../../Layout/Page/Page';
import Crossword from '../../Components/Crossword/Crossword';

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

class ExperiencePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activeClue: 1,
            row: true,
            crossword,
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
                        <div>Right side of page</div>
                    </div>
                </div>
            </Page>
        );
    }
}

export default ExperiencePage;
