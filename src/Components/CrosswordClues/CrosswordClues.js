import React from 'react';
import './CrosswordClues.scss'

class CrosswordClues extends React.Component {
    renderClues() {
        return this.props.clues.map(clue => {
            return (
                <div
                    className={'clue' + (this.props.activeClue === clue.num ? ' active' : '')}
                    onClick={() => this.props.onClick(clue.num, clue.row)}
                >
                    <div className='clue-number'>{clue.num}</div>
                    <div className='clue-dates'>{clue.dates}</div>
                    <div className='clue-title'>{clue.title}</div>
                    <div className='clue-text'>{clue.text}</div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='crossword-clues-wrapper disable-scrollbar' style={{ height: this.props.height }}>
                <h2 className='clues-title'>
                    Clues
                </h2>
                <div className='clues-wrapper'>
                    {this.renderClues()}
                </div>
            </div>
        )
    }
}

export default CrosswordClues;
