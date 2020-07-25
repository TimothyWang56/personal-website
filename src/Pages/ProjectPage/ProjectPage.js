import React from 'react';
import './ProjectPage.scss';

import Page from '../../Layout/Page/Page';

class ProjectPage extends React.Component {
    render() {
        return (
            <div>
                <Page active='Projects'>
                    Projects
                </Page>
            </div>
        );
    }
}

export default ProjectPage;
