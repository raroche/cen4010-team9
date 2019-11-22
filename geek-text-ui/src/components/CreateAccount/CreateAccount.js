import React, { Component } from 'react'
import axios from 'axios'
import './CreateAccount.css';
import { faSignLanguage } from '@fortawesome/free-solid-svg-icons';

const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);      //email validation

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            username: "",
            nickname: "",
            password: "",
            verifyPassword: "",
            registerErrors: {
                firstName: "",
                lastName: "",
                email: "",
                username: "",
                nickname: "",
                password: "",
                verifyPassword: ""
            },
            registerStatus: ""
        };
    }
    
    

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })

        const {id, value} = e.target;
        let registerErrors = this.state.registerErrors;

        switch(id){
            case 'firstName':
                registerErrors.firstName = value.length < 2 
                ? 'Minimum of two characters required.' 
                : '';
                break;
            case 'lastName':
                registerErrors.lastName = value.length < 2 
                ? 'Minimum of two characters required.' 
                : '';
                break;
            case 'email':
                registerErrors.email = emailRegex.test(value) 
                ? '' 
                : 'Invalid email address.';
                break;
            case 'username':
                registerErrors.username = value.length < 2 
                ? 'Minimum of two characters required.' 
                : '';
                break;
            case 'nickname':
                registerErrors.nickname = value.length < 2
                ? 'Minimum of two characters required.' 
                : '';
                break;
            case 'password':
                registerErrors.password = value.length < 8
                ? 'Minimum of eight characters required.' 
                : '';
                break;
            case 'verifyPassword':
                registerErrors.verifyPassword = value === this.state.password       //doesn't work yet
                ? "Passwords don't match." 
                : '';
                break;
            default:
                break;
        }

        this.setState({registerErrors: registerErrors}, () => console.log(this.state));
    }
    
    

    submitRegister = (e) => {
        e.preventDefault();
        const {
            firstName,
            lastName,
            email,
            username,
            password,
            verifyPassword,
            nickname
        } = this.state;

        const url = "http://localhost:8090/api/users/";

        if(password !== verifyPassword){
            this.setState({registerStatus: "Passwords don't match! Try again."})
        }else{
            fetch(url,{
                method: 'post',
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    username: username,
                    password: password,
                    nickname: nickname
                }),headers: { "Content-Type": "application/json; charset=UTF-8" }
            }).then(res => {
                if(res.ok){
                    this.setState({registerStatus: "Account created successfully! Please log in."});
                    return res.json();
                }
            })
            .then(data => console.log(data))
            .catch(error => console.log(error))
        }
                
        console.log(this.state);

    }
    

    render() {
        const {registerErrors} = this.state;

        return (
            <div className="inner-container">

                <div className="header">
                    Create Account
                </div>

                    <form className="box" onSubmit={this.submitRegister}>
                        <div className="input-group">
                            <label htmlFor="firstName">First Name</label>
                            <input 
                                type="text" 
                                id="firstName" 
                                onChange={this.handleChange} 
                                required 
                                className="login-input" 
                                placeholder="John"
                                noValidate
                            />
                        </div>
                            {registerErrors.firstName.length > 0 && (
                                <div className="errorMessage">{registerErrors.firstName}</div>
                            )}

                        <div className="input-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input 
                                type="text" 
                                id="lastName" 
                                //value={this.state.lastName}
                                onChange={this.handleChange} 
                                required
                                className="login-input" 
                                placeholder="Smith"
                                noValidate
                            />
                        </div>
                            {registerErrors.lastName.length > 0 && (
                                <div className="errorMessage">{registerErrors.lastName}</div>
                            )}

                        <div className="input-group">
                            <label htmlFor="email">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                onChange={this.handleChange} 
                                required
                                className="login-input" 
                                placeholder="jsmith@gmail.com"
                                noValidate
                            />
                        </div>
                            {registerErrors.email.length > 0 && (
                                <div className="errorMessage">{registerErrors.email}</div>
                            )}
                    
                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text"
                                id="username"
                                onChange={this.handleChange} 
                                required
                                className="login-input" 
                                placeholder="Username"
                                noValidate
                            />
                        </div>
                            {registerErrors.username.length > 0 && (
                                <div className="errorMessage">{registerErrors.username}</div>
                            )}

                        <div className="input-group">
                            <label htmlFor="nickname">Nickname</label>
                            <input 
                                type="text"
                                id="nickname"
                                onChange={this.handleChange} 
                                required
                                className="login-input" 
                                placeholder="Nickname"
                                noValidate
                            />
                        </div>
                            {registerErrors.nickname.length > 0 && (
                                <div className="errorMessage">{registerErrors.nickname}</div>
                            )}

                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                onChange={this.handleChange} 
                                required
                                className="login-input" 
                                placeholder="Password"
                                noValidate
                            />
                        </div>
                            {registerErrors.password.length > 0 && (
                                <div className="errorMessage">{registerErrors.password}</div>
                            )}

                        <div className="input-group">
                            <label htmlFor="verifyPassword">Verify Password</label>
                            <input 
                                type="password" 
                                id="verifyPassword" 
                                onChange={this.handleChange} 
                                required
                                className="login-input" 
                                placeholder="Verify Password"
                                noValidate
                            />
                        </div>
                            {registerErrors.verifyPassword.length > 0 && (
                                <div className="errorMessage">{registerErrors.verifyPassword}</div>
                            )}

                        {this.state.registerStatus}
                        <button type="submit" className="login-btn" onClick={this.submitRegister.bind(this)}>Sign Up</button>
                    </form>
            </div>
        );
    }

}

export default CreateAccount;