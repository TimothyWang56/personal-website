import React from 'react';
import './Page.scss';

import Header from '../../Layout/Header/Header';

class Page extends React.Component {

    render() {        
        return (
            <div className='page-wrapper'>
                <Header
                    headerText='TimothyWang'
                    active={this.props.active}
                />
                <div className='page-content-wrapper'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Page;