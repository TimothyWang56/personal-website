import React from 'react';
import './Header.scss';

import NavButton from '../../Components/NavButton/NavButton';
import Dropdown from '../../Components/Dropdown/Dropdown'

const pages = [
    {name: "Home", navigation: "/home"},
    {name: "Experiences", navigation: "/experiences"},
    {name: "Skills", navigation: "/skills"},
    {name: "Projects", navigation: "/projects"},
]

const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const shortDayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const shortMonthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

class Header extends React.Component {

    renderNavButtons(startIndex, endIndex) {
        if (!endIndex) {
            endIndex = startIndex;
        }

        return pages.map((page, index) =>
            index >= startIndex && index <= endIndex ?
                <div className='nav-button'>
                    <NavButton
                        navigation={page.navigation}
                        buttonText={page.name.toUpperCase()} 
                        active={this.props.active === page.name}/>
                </div>
            :
                null
        );
    }

    handleMenuClick() {

    }

    render() {
        const d = new Date();
        const dayOfWeek = this.props.shortened ? shortDayName[d.getDay()] : dayName[d.getDay()];
        const date = d.getDate();
        const month = this.props.shortened ? shortMonthName[d.getMonth()] : monthName[d.getMonth()];
        const year = d.getFullYear();
        const formattedDate = dayOfWeek.toUpperCase() + ', ' + month.toUpperCase() + ' ' + date + ', ' + year;

        return (
            <div className='header-wrapper'>
                <div className='header-text'>
                    {this.props.headerText}
                </div>
                <hr className='horizontal-black-line'/>
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
                                <Dropdown/>
                            </div>
                        ]
                }
                </div>
                <hr className='horizontal-black-line'/>
            </div>
        );
    }
}

export default Header;