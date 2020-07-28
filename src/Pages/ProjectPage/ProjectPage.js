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
        const projectStyle = this.state.horizontalOrientation ?
            { 'width': '75%' } :
            { 'width': '95%' }

        return projects.map(project => {
            return (
                <div className='project-wrapper' style={projectStyle}>
                    <ArticleCard
                        title={project.title}
                        image={project.image}
                        horizontalOrientation={this.state.horizontalOrientation}
                    >
                        {project.text}
                    </ArticleCard>
                    <hr className='thin-horz-line' style={{color: 'gray'}}/>
                </div>
            )
        })
    }

    render() {
        const headerHeight = '15vh';

        

        return (
            <Page active='Projects' headerHeight={headerHeight}>
                <div className='projects-page-content-wrapper'>
                    {/* <div className='dim'> */}
                        {this.renderProjects()}
                    {/* </div> */}
                </div>
            </Page>
        );
    }
}

export default ProjectPage;
