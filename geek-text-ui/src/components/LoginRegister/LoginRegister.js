import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './LoginRegister.css'
import CreateAccount from '../CreateAccount/CreateAccount';
import SignIn from '../SignIn/SignIn';

class LoginRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoginOpen: true, isSignUpOpen: false};
    }

    showLoginBox() {
        this.setState({isLoginOpen: true, isSignUpOpen: false});
    }

    showSignUpBox() {
        this.setState({isSignUpOpen: true, isLoginOpen: false});
    }

    render() {

        return (
            <div className="root-container">
                <div className="box-controller">
                    <div className={"controller " + (this.state.isLoginOpen ? "selected-controller" : "")} 
                    onClick={this.showLoginBox.bind(this)}>
                        Sign In
                    </div>
                    <div className={"controller " + (this.state.isSignUpOpen ? "selected-controller" : "")} 
                    onClick={this.showSignUpBox.bind(this)}>
                        Create Account
                    </div>

                </div>

                <div className="box-container">
                    {this.state.isLoginOpen && <SignIn />}
                    {this.state.isSignUpOpen && <CreateAccount />}
                </div>
        
            </div>
            
        );

    };
}

export default LoginRegister;