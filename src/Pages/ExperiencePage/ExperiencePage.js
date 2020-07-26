import React from 'react';
import './ExperiencePage.scss';

import Page from '../../Layout/Page/Page';
import Crossword from '../../Components/Crossword/Crossword';

class ExperiencePage extends React.Component {
    render() {
        return (
            <Page active='Experiences'>
                <div className='experiences-wrapper'>
                    <Crossword/>
                </div>
            </Page>
        );
    }
}

export default ExperiencePage;
