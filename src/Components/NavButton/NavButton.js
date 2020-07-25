import React from 'react';
import './NavButton.scss';

class NavButton extends React.Component {
    render() {        
        return (
            <div className={'button-wrapper' + (this.props.active ? ' nav-button-active' : '')}>
                {this.props.buttonText}
            </div>
        );
    }
}

export default NavButton;