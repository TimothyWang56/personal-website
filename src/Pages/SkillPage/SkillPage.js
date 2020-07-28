import React from 'react';
import './SkillPage.scss';

import Page from '../../Layout/Page/Page';
import ArticleCard from '../../Components/ArticleCard/ArticleCard';

const languageIcons = [
    {
        icon: require('../../Assets/Icons/java.png'),
        text: 'Java'
    },
    {
        icon: require('../../Assets/Icons/javascript.png'),
        text: 'JavaScript'
    },
    {
        icon: require('../../Assets/Icons/python.png'),
        text: 'Python'
    },
    {
        icon: require('../../Assets/Icons/scala.png'),
        text: 'Scala'
    },
    {
        icon: require('../../Assets/Icons/c-sharp-logo.png'),
        text: 'C#'
    },
    {
        icon: require('../../Assets/Icons/c-programming.png'),
        text: 'C'
    },
    {
        icon: require('../../Assets/Icons/x86.png'),
        text: 'x86'
    },
    {
        icon: require('../../Assets/Icons/ocaml.png'),
        text: 'OCaml'
    },
    {
        icon: require('../../Assets/Icons/racket-logo.png'),
        text: 'Racket'
    },
    {
        icon: require('../../Assets/Icons/reasonml.png'),
        text: 'ReasonML'
    },
]
      
const frontendIcons = [
    {
        icon: require('../../Assets/Icons/html-5.png'),
        text: 'HTML'
    },
    {
        icon: require('../../Assets/Icons/css3.png'),
        text: 'CSS'
    },
    {
        icon: require('../../Assets/Icons/react.png'),
        text: 'ReactJS'
    },
]
      
const backendIcons = [
    {
        icon: require('../../Assets/Icons/nodejs.png'),
        text: 'NodeJS'
    },
    {
        icon: require('../../Assets/Icons/azure.png'),
        text: 'Azure'
    },
]

class SkillPage extends React.Component {
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

    renderIcons(iconList) {
        return iconList.map(icon => {
            return (
                <img
                    src={icon.icon}
                    alt={icon.text}
                    title={icon.text}
                    className='skill-icon'
                />
            )
        })
    }

    render() {
        const skillsContentStyle = {
            'textAlign': this.state.horizontalOrientation ? 'left' : 'center'
        }

        const pageContentStyle = {
            'padding': '5vh',
            'width': this.state.horizontalOrientation ? '75%' : '100%'
        }

        return (
            <Page active='Skills'>
                <div className='skills-wrapper' style={pageContentStyle}>
                    <ArticleCard
                        title='Skills'
                        horizontalOrientation={this.state.horizontalOrientation}
                        resizingFont={this.state.horizontalOrientation}
                    >
                        <div style={skillsContentStyle}>
                            <div className='skill-section'>
                                <div>Languages:</div>
                                {this.renderIcons(languageIcons)}
                            </div>
                            <div>Frontend:</div>
                            {this.renderIcons(frontendIcons)}
                            <div>Backend:</div>
                            {this.renderIcons(backendIcons)}
                        </div>
                    </ArticleCard>
                </div>
            </Page>
        );
    }
}

export default SkillPage;
