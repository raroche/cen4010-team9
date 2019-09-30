import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import createAccount from './components/createAccount';
import SidePanel from './components/SidePanel/SidePanel';
import BackDrop from './components/BackDrop/BackDrop';
import UserDropDown from './components/UserMenu/UserDropDown';
import UserButton from './components/UserMenu/UserButton';

class App extends Component {
  
  state = {
    sidePanelOpen: false
  };

  openPanel = () => {
    this.setState((prevState) => {
      return {sidePanelOpen: !prevState.sidePanelOpen}
    });
  };

  closePanel = () => {
    this.setState({sidePanelOpen: false});
  };

  // user button
  state = {
    userMenuOpen: false
  };

  userMenuToggle = () => {
    this.setState((prevState) => {
      return {userMenuOpen: !prevState.userMenuOpen}
    });
  };

  render() {
    let backdrop;

    if (this.state.sidePanelOpen) {
      backdrop = <BackDrop click={this.closePanel}/>;
    }

    let usermenu;

    if (this.state.userMenuOpen) {
      usermenu = <UserDropDown click={this.userMenuToggle}/>;
    }

    return (
      <Router>
        <div style={{height:'100%'}}>
          <Header clickPanel={this.openPanel} clickUser={this.userMenuToggle} />

          <SidePanel show={this.state.sidePanelOpen} />

          
          {backdrop}
          
        <main style={{marginTop: '50px'}}>
          
          {usermenu}
          
          <div style={{height: '50px'}}></div>

            <Route exact path="/" render={props =>(
              <React.Fragment>
                <h1> Welcome to GeekText!! </h1> <br/>
                <h2>Featured Books</h2><br/>
                <p>Most Popular</p><br/>
                <p>Geek's Px</p>
              </React.Fragment>
            )} />
            <Route path="/createaccount" component={createAccount} />

        </main>
        </div>
      </Router>
    );
  }
}

export default App;
