import React from 'react';
import '../css/Intro.css';
import { MdDescription } from "react-icons/md";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

class Intro extends React.Component {

  render() {
    return (
      <div className='intro-container'>
        <div className='portrait-card'>
          <img src={require('../assets/images/portrait.png')} alt={""} className="portrait"></img>
          <h4 className='portrait-name'>Timothy Wang</h4>
          <p className='portrait-description'>Boston, MA</p>
        </div>
        <div className='intro-card'>
          <h1>About Me</h1>
          <div className='intro-text-container'>
            <p>Hey there, and welcome to my website! I'm a rising junior at Brown University studying Applied Mathematics and Computer Science.
              In my free time, I really enjoy watching shows, playing board games, and solving puzzles. Since coming home during the pandemic,
              my friends and I have been playing a lot of online Catan, so definitely hit me up if you love to play as well!
              One of my biggest hobbies growing up was speed-solving Rubik's cubes. I used to attend competitions as well, and while I'm not quite as
              addicted as I used to be, I still keep my cubes near my desk for whenever I need a break from what I'm doing. More recently, I've been
              getting really into crossword puzzles, and I have been solving the NYT crossword everyday since February with a group of friends.
              A really cool variant of crossword puzzles that I recently discovered is cryptic crosswords. Here's an example of a cryptic clue:
              "really large bird I can stew" (7). The answer is titanic. Here's why: titanic means "really large", a tit is a "bird", and anic is "I can" stewed -
              in other words, the letters in "I can" mixed up. Really neat right?
            </p>
            <div className='icon-bar'>
              <a href='' target='_blank' className='icon'>
                <MdDescription size='2.5em' title='resume'/>
              </a>
              <a href='mailto:timothywang56@gmail.com' target='_blank' className='icon'>
                <FaEnvelope size='2.5em' title='email'/>
              </a>
              <a href='https://linkedin.com/in/timothywang56' target='_blank' className='icon'>
                <FaLinkedin size='2.5em' title='linkedin'/>
              </a>
              <a href='https://github.com/TimothyWang56' target='_blank' className='icon'>
                <FaGithub size='2.5em' title='github'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Intro;