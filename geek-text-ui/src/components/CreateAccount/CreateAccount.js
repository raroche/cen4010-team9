import React, { Component } from 'react'
import './CreateAccount.css';

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    submitRegister(e) {

    }

    render() {
        return (
            <div className="inner-container">

                <div className="header">
                    Create Account
                </div>

                <div className="box">

                    <div className="input-group">
                        <label htmlFor="full-name">Full Name</label>
                        <input type="text" name="full-name" className="login-input" placeholder="John Smith"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="text" name="email" className="login-input" placeholder="jsmith@gmail.com"/>
                    </div>
                
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="login-input" placeholder="Username"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="login-input" placeholder="Password"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="verify-password">Verify Password</label>
                        <input type="password" name="verify-password" className="login-input" placeholder="Verify Password"/>
                    </div>


                    <button type="button" className="login-btn" onClick={this.submitRegister.bind(this)}>Sign Up</button>

                </div>

            </div>
        );
    }

}

export default CreateAccount;