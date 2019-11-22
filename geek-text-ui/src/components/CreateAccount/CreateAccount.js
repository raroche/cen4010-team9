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
                registerErrors.firstName = value.length < 2 && value.length > 0 
                ? 'Minimum of two characters required.' 
                : '';
                break;
            case 'lastName':
                registerErrors.lastName = value.length < 2 && value.length > 0 
                ? 'Minimum of two characters required.' 
                : '';
                break;
            case 'email':
                registerErrors.email = emailRegex.test(value) && value.length > 0 
                ? '' 
                : 'Invalid email address.';
                break;
            case 'username':
                registerErrors.username = value.length < 2 && value.length > 0 
                ? 'Minimum of two characters required.' 
                : '';
                break;
            case 'nickname':
                registerErrors.nickname = value.length < 2 && value.length > 0 
                ? 'Minimum of two characters required.' 
                : '';
                break;
            case 'password':
                registerErrors.password = value.length < 8 && value.length > 0 
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

        //this.props.handleSuccessfulAccount(data.value);
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
                                //value={this.state.firstName} 
                                onChange={this.handleChange} 
                                required 
                                className="login-input" 
                                placeholder="John"
                                noValidate
                            />
                        </div>

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

                        <div className="input-group">
                            <label htmlFor="email">Email Address</label>
                            <input 
                                type="email" 
                                id="email" 
                                //value={this.state.email}
                                onChange={this.handleChange} 
                                required
                                className="login-input" 
                                placeholder="jsmith@gmail.com"
                                noValidate
                            />
                        </div>
                    
                        <div className="input-group">
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text"
                                id="username"
                                //value={this.state.username}
                                onChange={this.handleChange} 
                                required
                                className="login-input" 
                                placeholder="Username"
                                noValidate
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="nickname">Nickname</label>
                            <input 
                                type="text"
                                id="nickname"
                                //value={this.state.nickname}
                                onChange={this.handleChange} 
                                required
                                className="login-input" 
                                placeholder="Nickname"
                                noValidate
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                //value={this.state.password}
                                onChange={this.handleChange} 
                                required
                                className="login-input" 
                                placeholder="Password"
                                noValidate
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="verifyPassword">Verify Password</label>
                            <input 
                                type="password" 
                                id="verifyPassword" 
                                //value={this.state.verifyPassword}
                                onChange={this.handleChange} 
                                required
                                className="login-input" 
                                placeholder="Verify Password"
                                noValidate
                            />
                        </div>

                        {this.state.registerStatus}
                        <button type="submit" className="login-btn" onClick={this.submitRegister.bind(this)}>Sign Up</button>
                    </form>
            </div>
        );
    }

}

export default CreateAccount;