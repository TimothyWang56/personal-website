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
            <div className='dropdown'>
                <div className='dropdown-icon'>
                    <MdMenu/>
                </div>
                
            </div>
        )
    }
}

export default Dropdown;
