import React from 'react';
import './Page.scss';

import Header from '../../Layout/Header/Header';

class Page extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            shortenedHeader: false,
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
        let shortenedHeader = false;

        if (window.innerWidth < window.innerHeight) {
            shortenedHeader = true;
        }

        this.setState({ shortenedHeader });
	}

    render() {
        return (
            <div className='page page-wrapper'>
                <div className='page-header'>
                    <Header
                        headerText='TimothyWang'
                        active={this.props.active}
                        shortened={this.state.shortenedHeader}
                        height={this.props.headerHeight}
                    />
                </div>
                
                <div className='page-content-wrapper'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

Page.defaultProps = {
    headerHeight: '15vh'
}

export default Page;