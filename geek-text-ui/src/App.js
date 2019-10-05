import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import CreateAccount from './components/CreateAccount/CreateAccount';
import LoginRegister from './components/LoginRegister/LoginRegister';
import HomePage from './components/HomePage/HomePage';
import BookGrid from './components/BookGrid/BookGrid';
import BookPage from './components/BookPage/BookPage';

class App extends Component {

  render() {

    return (
      <Router>
        <div style={{height:'100%'}}>
          <Header />
          
          <main style={{marginTop: '50px'}}>  
            <div style={{height: '50px'}}></div>
            <Route exact path="/" render={props =>(<HomePage />)} />
            <Route path="/createaccount" component={CreateAccount} />
            <Route path="/login" component={LoginRegister} />
            <Route path="/bookgrid" component={BookGrid} />
            <Route exact path="/books" component={BookPage} />

          </main>
        </div>
      </Router>
    );
  }
}

export default App;
