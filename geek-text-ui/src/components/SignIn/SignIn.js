import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './SignIn.css';

class SignIn extends Component {

    state = {
        username: "",
        password: "",
        loginError: ""
    };
    

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    submitLogin(e) {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div className="inner-container">

                <div className="header">
                    Sign In
                </div>

                <form className="box">
                
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            onChange={this.handleChange}
                            className="login-input" 
                            placeholder="Username"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            onChange={this.handleChange}
                            className="login-input" 
                            placeholder="Password"/>
                    </div>

                    <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Sign In</button>

                </form>

            </div>
        );
    }
}


export default SignIn;