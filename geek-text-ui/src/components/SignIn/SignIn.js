import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './SignIn.css';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state = {
            username: "",
            password: "",
            loginError: "",
            users: [],
            error: null
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.submitLogin = this.submitLogin.bind(this);
    }
    
    async componentDidMount(){
        const url = "http://localhost:8090/api/users/";

        fetch(url).then(res => {
            if(res.ok){
                return res.json();
            }else{
                throw Error("Error getting your information!")
            }}).then(users => {
                this.setState({users:users, loading:false});
                }).catch(error => this.setState({error:error}))
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    submitLogin(e) {
        e.preventDefault();
        const {username, password} = this.state;
        this.state.users.map(user => {
            if(user.username === this.state.username){
                if(user.password === this.state.password){
                    this.props.handleSuccessfulAccount(user);
                }else{
                    this.setState({loginError: "Incorrect password."}) //fix bug
                }
            }else{
                this.setState({loginError: "Account does not exist."})
            }
        })
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
                            required
                            className="login-input" 
                            placeholder="Username"/>
                    </div>

                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            onChange={this.handleChange}
                            required
                            className="login-input" 
                            placeholder="Password"/>
                    </div>
                    {this.state.loginError}
                    <button type="button" className="login-btn" onClick={this.submitLogin}>Sign In</button>

                </form>

            </div>
        );
    }
}


export default SignIn;