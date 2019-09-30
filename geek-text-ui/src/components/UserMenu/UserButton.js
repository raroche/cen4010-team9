import React from 'react';
import './UserButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const UserButton = props => (
    <div>
        <button className="UserButton" onClick={props.click}><FontAwesomeIcon icon={faUser}/></button>
        
    </div>
);

export default UserButton;