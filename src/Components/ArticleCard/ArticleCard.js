import React from 'react';
import './ArticleCard.scss';

class ArticleCard extends React.Component {
    render() {
        return (
            <div className='article-card-wrapper'>
                {this.props.image &&
                <div className='picture-wrapper'>
                    <img
                        src={this.props.image}
                        alt='portrait'
                        className='picture'
                    />
                </div>}
                <div className={'article-wrapper' + (this.props.image ? '' : ' no-image')}>
                    <h1 className='article-title'>About Me</h1>
                    <hr className='horizontal-card-black-line'/>
                    <div className='article-text'>
                    Hey there, and welcome to my website! I'm a rising junior at Brown University studying Applied Mathematics and Computer Science. In my free time, I really enjoy watching shows, playing board games, and solving puzzles. Since coming home during the pandemic, my friends and I have been playing a lot of online Catan, so definitely hit me up if you love to play as well! One of my biggest hobbies growing up was speed-solving Rubik's cubes. I used to attend competitions as well, and while I'm not quite as addicted as I used to be, I still keep my cubes near my desk for whenever I need a break from what I'm doing. More recently, I've been getting really into crossword puzzles, and I have been solving the NYT crossword everyday since February with a group of friends. A really cool variant of crossword puzzles that I recently discovered is cryptic crosswords. Here's an example of a cryptic clue: "really large bird I can stew" (7). The answer is titanic. Here's why: titanic means "really large", a tit is a "bird", and anic is "I can" stewed - in other words, the letters in "I can" mixed up. Really neat right?
                    </div>
                </div>
            </div>
        );
    }
}

export default ArticleCard;