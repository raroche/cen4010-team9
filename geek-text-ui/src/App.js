import React, { Component } from "react";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";
import BooksGrid from "./components/BooksGrid/BooksGrid";
import BookDetails from "./components/BookDetails/BookDetails";
import Header from "./components/header/Header";
import Cart from "./components/Cart/Cart";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Route exact path="/" render={props => <HomePage />} />
        <Route path="/createaccount" component={CreateAccount} />
        <Route path="/login" component={LoginRegister} />
        <Route path="/bookgrid" component={BooksGrid} />
        <Route path="/book" component={BookDetails} />
        <Route path="/cart" component={Cart} />
      </BrowserRouter>
    );
  }
}

export default App;
