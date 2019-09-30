import React from 'react';
import './SignOutButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const SignOutButton = props => (
    <div>
        <button className="signout-btn"><FontAwesomeIcon icon={faSignOutAlt}/></button>
        
    </div>
);

export default SignOutButton;