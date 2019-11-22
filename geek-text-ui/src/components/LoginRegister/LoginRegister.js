import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./LoginRegister.css";
import CreateAccount from "../CreateAccount/CreateAccount";
import SignIn from "../SignIn/SignIn";

class LoginRegister extends Component {
    constructor(props) {
        super(props);
        this.state = {isLoginOpen: true, isSignUpOpen: false};
        this.handleSuccessfulAccount = this.handleSuccessfulAccount.bind(this);
        this.showLoginBox = this.showLoginBox.bind(this);
        this.showSignUpBox = this.showSignUpBox.bind(this);
    }

  showLoginBox() {
    this.setState({ isLoginOpen: true, isSignUpOpen: false });
  }

  showSignUpBox() {
    this.setState({ isSignUpOpen: true, isLoginOpen: false });
  }

  handleSuccessfulAccount(data) {
    this.props.handleLoginStatus(data);
    this.props.history.push("/myaccount");
  }

  render() {
    return (
      <div className="root-container">
        <div className="box-controller">
          <div
            className={
              "controller " +
              (this.state.isLoginOpen ? "selected-controller" : "")
            }
            onClick={this.showLoginBox.bind(this)}
          >
            Sign In
          </div>
          <div
            className={
              "controller " +
              (this.state.isSignUpOpen ? "selected-controller" : "")
            }
            onClick={this.showSignUpBox.bind(this)}
          >
            Create Account
          </div>
        </div>

        <div className="box-container">
          {this.state.isLoginOpen && (
            <SignIn handleSuccessfulAccount={this.handleSuccessfulAccount} />
          )}
          {this.state.isSignUpOpen && (
            <CreateAccount
              handleSuccessfulAccount={this.handleSuccessfulAccount}
            />
          )}
        </div>
      </div>
    );
  }
}

export default LoginRegister;
