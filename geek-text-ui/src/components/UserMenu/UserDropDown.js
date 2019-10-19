import React from "react";
import "./UserDropDown.css";

const UserDropDown = props => {
  let userClasses = "userDropDown";

  if (props.show) {
    userClasses = "userDropDown open";
  }

    return (
        <div className={userClasses}>
            <div className="dropdown-user">
                <a href="/login">Sign In</a>
                <a href="/myaccount">My Account</a>
                <a href="/">Favorites</a>
                <a href="/">Wishlist</a>
                <a href="/login">Create an Account</a>
                <a href="/cart">Cart</a>
            </div>
        </div>
    );

};

export default UserDropDown;
