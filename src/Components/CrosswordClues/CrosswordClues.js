import React from 'react';
import './CrosswordClues.scss'

class CrosswordClues extends React.Component {
    renderClues() {
        return this.props.clues.map((clue, index) => {
            const handleClick = () => {
                this.props.clueRefs[index].current.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start',
                });
            }

            return (
                <div
                    ref={this.props.clueRefs[index]}
                    className={'clue' + (this.props.activeClue === clue.num ? ' active' : '')}
                    onClick={() => {this.props.onClick(clue.num, clue.row); handleClick();}}
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
