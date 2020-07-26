import React from 'react';
import './Crossword.scss';

class Crossword extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight
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

    render() {
        console.log(window.innerWidth);
        console.log(window.innerHeight);
        return (
            <div className='crossword-wrapper'>
                hi
            </div>
        );
    }
}

export default Crossword;