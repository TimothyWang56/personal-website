import React from 'react';
import './ProjectPage.scss';

import Page from '../../Layout/Page/Page';
import ArticleCard from '../../Components/ArticleCard/ArticleCard';

const projects = [
    {
        title: 'The Admiral',
        image: require('../../Assets/Images/theadmiral.gif'),
        text: 'The Admiral description.'
    },
    {
        title: 'Rubik\'s Cube',
        image: require('../../Assets/Images/cube.gif'),
        text: 'Rubik\'s Cube description.'
    },
    {
        title: 'Text Editor',
        image: require('../../Assets/Images/text-editor.gif'),
        text: 'Text Editor description.'
    },
    {
        title: 'Give Your Two Cents',
        image: require('../../Assets/Images/giveyourtwocentslogo1.png'),
        text: 'Give Your Two Cents description.'
    },
    {
        title: 'Rhyme Time',
        image: require('../../Assets/Images/rhymetime-model.png'),
        text: 'Rhyme Time description.'
    },
]

class ProjectPage extends React.Component {

    renderProjects() {
        return projects.map(project => {
            return (
                <div className='project-wrapper'>
                    <ArticleCard
                        title={project.title}
                        image={project.image}
                        horizontalOrientation={true}
                    >
                        {project.text}
                    </ArticleCard>
                </div>
            )
        })
    }

    render() {
        const headerHeight = '15vh';

        const bodyPadding = '2vh';
        const bodyHeight = 'calc(100vh - ' + headerHeight + ')';
        
        const bodyStyle = {
            padding: bodyPadding, 
            height: bodyHeight,
        }

        return (
            <Page active='Projects' headerHeight={headerHeight}>
                <div className='projects-wrapper' style={bodyStyle}>
                    {this.renderProjects()}
                </div>
            </Page>
        );
    }
}

export default ProjectPage;
