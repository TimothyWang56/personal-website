import React from 'react';
import './HomePage.scss';

import Page from '../../Layout/Page/Page';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Page active='Home'>
                    Home
                </Page>
            </div>
        );
    }
}

export default HomePage;
