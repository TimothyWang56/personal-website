import React from 'react';
import './NavButton.scss';

import { Redirect } from "react-router-dom";

class NavButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            redirect: false
        }
    }

    render() {
        if (this.state.redirect) {
            this.setState({ redirect: false });
            return <Redirect to={this.props.navigation}/>;
        }

        return (
            <div
                className={'button-wrapper' + (this.props.active ? ' nav-button-active' : '')}
                onClick={() => this.setState({ redirect: true })}
            >
                {this.props.buttonText}
            </div>
        );
    }
}

export default NavButton;