import React from 'react';
import './Header.scss';

import NavButton from '../../Components/NavButton/NavButton';
import Dropdown from '../../Components/Dropdown/Dropdown'

const pages = [
    {name: "Home", navigation: "/home"},
    {name: "Experiences", navigation: "/experiences"},
    {name: "Projects", navigation: "/projects"},
    {name: "Skills", navigation: "/skills"},
]

const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Header extends React.Component {

    renderNavButtons(startIndex, endIndex) {
        if (!endIndex) {
            endIndex = startIndex;
        }

        return pages.map((page, index) =>
            index >= startIndex && index <= endIndex &&
                <div className={'nav-button' + (this.props.shortened ? ' button-in-dropdown' : '')}>
                    <NavButton
                        navigation={page.navigation}
                        buttonText={page.name.toUpperCase()} 
                        active={this.props.active === page.name}/>
                </div>
        );
    }

    render() {
        const d = new Date();
        const dayOfWeek = dayName[d.getDay()];
        const date = d.getDate();
        const month = monthName[d.getMonth()];
        const year = d.getFullYear();
        const formattedDate = dayOfWeek.toUpperCase() + ', ' + month.toUpperCase() + ' ' + date + ', ' + year;

        return (
            <div className='header-wrapper'>
                <div className='header-text'>
                    {this.props.headerText}
                </div>
                <hr className='thick-horz-line'/>
                <div className='bar-wrapper'>
                {
                    !this.props.shortened ? 
                        [
                            <div className='left-nav-buttons'>
                                {this.renderNavButtons(0, 1)}
                            </div>,
                            <div className='date-wrapper'>
                                {formattedDate}
                            </div>,
                            <div className='right-nav-buttons'>
                                {this.renderNavButtons(2, 3)}
                            </div>,
                        ]
                    :
                        [
                            <div className='date-wrapper'>
                                {formattedDate}
                            </div>,
                            <div className='right-nav-buttons'>
                                <Dropdown>
                                    {this.renderNavButtons(0, 3)}
                                </Dropdown>
                            </div>
                        ]
                }
                </div>
                <hr className='thick-horz-line'/>
            </div>
        );
    }
}

export default Header;