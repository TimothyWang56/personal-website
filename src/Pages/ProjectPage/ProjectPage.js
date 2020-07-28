import React from 'react';
import './ProjectPage.scss';

import Page from '../../Layout/Page/Page';
import ArticleCard from '../../Components/ArticleCard/ArticleCard';
import { projects } from './data';

class ProjectPage extends React.Component {
    constructor(props) {
        super(props);

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

        if (window.innerWidth/window.innerHeight < 1) {
            horizontalOrientation = false;
        }

        this.setState({ horizontalOrientation });
    }

    renderProjects() {
            const projectStyle = this.state.horizontalOrientation ? {
                
                'padding': '1em',
                'outline': '2px solid black',
                'border': '2px solid black',
            } : {
                
                'paddingBottom': '1em'
            }

        if (!this.state.horizontalOrientation) {
            return projects.map(project => {
                return (
                    <div style={projectStyle}>
                        <ArticleCard
                            title={project.title}
                            image={project.image}
                            horizontalOrientation={false}
                            resizingFont={false}
                        >
                            {project.text}
                        </ArticleCard>
                        <hr className='thin-horz-line' style={{color: 'gray'}}/>
                    </div>
                )
            })
        } else {
            return projects.map(project => {
                return (
                    <div className={project.className} style={projectStyle}>
                        <ArticleCard
                            title={project.title}
                            image={project.image}
                            horizontalOrientation={project.defaultHorizontal}
                            resizingFont={true}
                        >
                            {project.text}
                        </ArticleCard>
                    </div>
                )
            })
        }
    }

    render() {
        const headerHeight = '15vh';

        const contentStyle = this.state.horizontalOrientation ? {
            'display': 'grid',
            'gridTemplateColumns': '1fr 1fr 1fr',
            'gridTemplateRows': 'auto',
        } : {
            'display': 'flex',
            'flexDirection': 'column',
            'align-items': 'center'
        }

        return (
            <Page active='Projects' headerHeight={headerHeight}>
                <div className='projects-page-content-wrapper' style={contentStyle}>
                    {this.renderProjects()}
                </div>
            </Page>
        );
    }
}

export default ProjectPage;
