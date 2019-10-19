import React, { Component } from 'react'
import './CreateAccount.css';

class CreateAccount extends Component {
    state = {
        fullName: null,
        email: null,
        username: null,
        password: null,
        verifyPassword: null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    submitRegister = (e) => {
        console.log(this.state);
    }

    render() {
        return (
            <div className="inner-container">

                <div className="header">
                    Create Account
                </div>

                    <form className="box" onSubmit={this.submitRegister}>
                        <div className="input-group">
                            <label htmlFor="fullName">Full Name</label>
                            <input type="text" id="fullName" onChange={this.handleChange} className="login-input" placeholder="John Smith"/>
                        </div>

                        <div className="input-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="text" id="email" onChange={this.handleChange} className="login-input" placeholder="jsmith@gmail.com"/>
                        </div>
                    
                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" onChange={this.handleChange} className="login-input" placeholder="Username"/>
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange} className="login-input" placeholder="Password"/>
                        </div>

                        <div className="input-group">
                            <label htmlFor="verifyPassword">Verify Password</label>
                            <input type="password" id="verifyPassword" onChange={this.handleChange} className="login-input" placeholder="Verify Password"/>
                        </div>


                        <button type="button" className="login-btn" onClick={this.submitRegister.bind(this)}>Sign Up</button>
                    </form>
            </div>
        );
    }

}

export default CreateAccount;