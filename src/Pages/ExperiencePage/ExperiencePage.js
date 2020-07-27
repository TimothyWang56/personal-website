import React from 'react';
import './ExperiencePage.scss';

import Page from '../../Layout/Page/Page';
import Crossword from '../../Components/Crossword/Crossword';

class ExperiencePage extends React.Component {
    render() {
        return (
            <Page active='Experiences'>
                <div className='experiences-wrapper'>
                    <div>
                        <h1 className='experiences-title'>Experiences</h1>
                        <hr className='thin-horz-line'/>
                    </div>
                    <div className='experiences-content'>
                        <Crossword/>
                        <div>Hello</div>
                    </div>
                </div>
            </Page>
        );
    }
}

export default ExperiencePage;
