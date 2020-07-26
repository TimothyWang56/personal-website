import React from 'react';
import './Dropdown.scss'
import { MdMenu } from 'react-icons/md';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false
        }
    }

    render() {
        return (
            <div className='dropdown-wrapper'>
                <div className='dropdown'>
                    <div className='dropdown-icon'>
                        <MdMenu onClick={() => this.setState({ open: !this.state.open})}/>
                    </div>
                    {
                        this.state.open &&
                        <div className='dropdown-choices'>
                            {this.props.children}
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Dropdown;
