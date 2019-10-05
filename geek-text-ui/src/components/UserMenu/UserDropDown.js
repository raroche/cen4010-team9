import React from 'react';
import './UserDropDown.css';


const UserDropDown = props => {
    let userClasses = 'userDropDown';

    if(props.show) {
        userClasses = 'userDropDown open';
    }

    return (
        <div className={userClasses}>
            <div className="dropdown-user">
                <a href="/">Sign In</a>
                <a href="/">My Account</a>
                <a href="/">Favorites</a>
                <a href="/">Wishlist</a>
                <a href="/createaccount">Create an Account</a>
                <a href="/">Cart</a>
            </div>
        </div>
    );
};


export default UserDropDown;