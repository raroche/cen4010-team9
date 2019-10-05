import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './SignIn.css';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    submitLogin(e) {

    }

    render() {
        return (
            <div className="inner-container">

                <div className="header">
                    Sign In
                </div>

                <div className="box">
                
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="login-input" placeholder="Username"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="login-input" placeholder="Password"/>
                    </div>

                    <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Sign In</button>

                </div>

            </div>
        );
    }
}


export default SignIn;