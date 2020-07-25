import React from 'react';
import './Header.scss';

import NavButton from '../../Components/NavButton/NavButton';

const pages = [
    {name: "Home", navigation: "/home"},
    {name: "Experiences", navigation: "/experiences"},
    {name: "Projects", navigation: "/projects"},
    {name: "Skills", navigation: "/skills"},
]

class Header extends React.Component {

    renderNavButtons() {
        return pages.map((page) =>
            <div className="nav-button">
                <NavButton
                    navigation={page.navigation}
                    buttonText={page.name} 
                    active={this.props.active === page.name}/>
            </div>
        );
    }

    render() {        
        return (
            <div className='header-wrapper'>
                <div className='header-text'>
                    {this.props.headerText}
                </div>
                <hr className='horizontal-black-line'/>
                <div className="nav-buttons-wrapper">
                    {this.renderNavButtons()}
                </div>
                <hr className='horizontal-black-line'/>
            </div>
        );
    }
}

export default Header;