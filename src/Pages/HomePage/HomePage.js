import React from 'react';
import './HomePage.scss';

import { MdDescription } from "react-icons/md";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

import Page from '../../Layout/Page/Page';
import ArticleCard from '../../Components/ArticleCard/ArticleCard';

const aboutMeText = "Hey there, and welcome to my website! " + 
    "I'm a rising senior at Brown University studying Applied Mathematics and Computer Science. " +
    "In my free time, I really enjoy watching shows, playing board games, and solving puzzles. " +
    "Since coming home during the pandemic, my friends and I have been playing a lot of online Catan, " +
    "so definitely hit me up if you love to play as well! One of my biggest hobbies growing up was " +
    "speed-solving Rubik's cubes. I used to attend competitions as well, and while I'm not quite as " +
    "addicted as I used to be, I still keep my cubes near my desk for whenever I need a break from what " +
    "I'm doing. More recently, I've been getting really into crossword puzzles, and I have been solving " +
    "the NYT crossword everyday since February with a group of friends. A really cool variant of crossword " +
    "puzzles that I recently discovered is cryptic crosswords. Here's an example of a cryptic clue: \"really " +
    "large bird I can stew\" (7). The answer is titanic. Here's why: titanic means \"really large\", a tit is a " +
    "\"bird\", and anic is \"I can\" stewed - in other words, the letters in \"I can\" mixed up. Really neat right?"

class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            horizontalOrientation: true,
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

        if (window.innerWidth < window.innerHeight) {
            horizontalOrientation = false;
        }

        this.setState({ horizontalOrientation });
	}

    render() {

        const headerHeight = '15vh';
        const pageContentStyle = {
            'padding': '5vh',
            'width': this.state.horizontalOrientation ? '75%' : '100%'
        }

        return (
            <Page active='Home' headerHeight={headerHeight}>
                <div className='home-wrapper' style={pageContentStyle}>
                    <ArticleCard
                        title='About Me'
                        image={require('../../Assets/Images/portrait.png')}
                        horizontalOrientation={this.state.horizontalOrientation}
                        resizingFont={this.state.horizontalOrientation}
                    >
                        {aboutMeText}
                        <div className='icon-bar'>
                            <a href={require('../../Assets/Images/Timothy_Wang_Resume.pdf')} target='_blank' rel="noopener noreferrer" className='icon'>
                                <MdDescription size='2.5em' title='resume'/>
                            </a>
                            <a href='mailto:timothywang56@gmail.com' target='_blank' rel="noopener noreferrer" className='icon'>
                                <FaEnvelope size='2.5em' title='email'/>
                            </a>
                            <a href='https://linkedin.com/in/timothywang56' target='_blank' rel="noopener noreferrer" className='icon'>
                                <FaLinkedin size='2.5em' title='linkedin'/>
                            </a>
                            <a href='https://github.com/TimothyWang56' target='_blank' rel="noopener noreferrer" className='icon'>
                                <FaGithub size='2.5em' title='github'/>
                            </a>
                        </div>
                    </ArticleCard>
                </div>
            </Page>
        );
    }
}

export default HomePage;
