import React from 'react';
import './HomePage.scss';

import Page from '../../Layout/Page/Page';
import ArticleCard from '../../Components/ArticleCard/ArticleCard';

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Page active='Home'>
                    <div className='about-me-card'>
                        <ArticleCard image={require('../../Assets/Images/portrait.png')}/>
                    </div>
                </Page>
            </div>
        );
    }
}

export default HomePage;
