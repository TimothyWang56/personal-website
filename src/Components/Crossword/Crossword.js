import React from 'react';
import './Crossword.scss';

class Crossword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            squareLength: Math.max(this.props.crossword.length, this.props.crossword[0].length),
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
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }
    
    renderCrossword() {
        let activeRow;
        let activeCol;
        let wordFound = false;
        let wordDone = false;

        const rowStyle = {
            'height': 'calc(100% / ' + this.state.squareLength + ')'
        }

        return this.props.crossword.map((row, rowIndex) => {
            return (
                <div className='crossword-row' style={rowStyle}>
                    {row.map((square, colIndex) => {
                        const border = '0.5px solid black'

                        const squareStyle = {
                            'width': 'calc(100% / ' + this.state.squareLength + ')',
                            'height': '100%',
                            'border': square.contents !== ',' ? border : 'none',
                            'outline': square.contents !== ',' ? border : 'none',
                        }

                        if (square.contents === ',') {
                            squareStyle['border'] = 'none';
                            squareStyle['outline'] = 'none';
                        }

                        const activeColor = 'pink';

                        if (!wordDone) {
                            if (wordFound) {
                                if (this.props.row) {
                                    if (square.contents === ',' || activeRow !== rowIndex) {
                                        wordDone = true;
                                    } else {
                                        squareStyle['backgroundColor'] = activeColor;
                                    }
                                } else {
                                    if (square.contents === ',' && activeCol === colIndex) {
                                        wordDone = true;
                                    } else {
                                        if (activeCol === colIndex) {
                                            squareStyle['backgroundColor'] = activeColor;
                                        }
                                    }
                                }
                            } else {
                                if (square.num && (square.num === this.props.activeClue)) {
                                    wordFound = true;
                                    this.props.row ? (activeRow = rowIndex) : (activeCol = colIndex);
                                    squareStyle['backgroundColor'] = activeColor;
                                }
                            }
                        }

                        return (
                            <div className='crossword-square' style={squareStyle} onClick={() => this.props.onSquareClick(rowIndex, colIndex)}>
                                {square.num && <div className='corner-number'>{square.num}</div>}
                                {square.contents !== ',' && <div className='square-content'>{square.contents}</div>}
                            </div>
                        )
                    })}
                </div>
            )
        })
    }

    render() {
        const crosswordStyle = {
            height: this.props.size,
            width: this.props.size,
        }

        return (
            <div className='crossword-wrapper' style={crosswordStyle}>
                {this.renderCrossword()}
            </div>
        );
    }
}

export default Crossword;