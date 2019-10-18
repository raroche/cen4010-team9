import React, { Component } from "react";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";
import BooksGrid from "./components/BooksGrid/BooksGrid";
import BookPage from "./components/BookPage/BookPage";
import BookDetails from "./components/BookDetails/BookDetails";
import Header from "./components/header/Header";
import Cart from "./components/Cart/Cart";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import MyAccount from './components/MyAccount/MyAccount';

class App extends Component {
  render() {
    return (
      <BrowserRouter>  
        <Header />
          <div style={{height: '120px'}}></div>
          <Route exact path="/" render={props =><HomePage />} />
          <Route path="/login" component={LoginRegister} />
          <Route path="/myaccount" component={MyAccount} />
          <Route path="/bookgrid" component={BooksGrid} />
          <Route path="/books" component={BookPage} />
          <Route path="/book" component={BookDetails} />
          <Route path="/cart" component = {Cart}/>
      </BrowserRouter>
    );
  }
}

export default App;
