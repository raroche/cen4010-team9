import React, { Component } from "react";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";
import BooksGrid from "./components/BooksGrid/BooksGrid";
import BookPage from "./components/BookPage/BookPage";
import BookDetails from "./components/BookDetails/BookDetails";
import AuthorDetails from "./components/AuthorDetails/AuthorDetails";
import Header from "./components/header/Header";

import Cart from "./components/Cart/Cart";
import WishList from "./components/WishList/WishList";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import MyAccount from './components/MyAccount/MyAccount';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />

        <Route exact path="/" render={props => <HomePage />} />
        <Route path="/login" component={LoginRegister} />
        <Route path="/myaccount" component={MyAccount} />
        <Route path="/bookgrid" component={BooksGrid} />
        <Route path="/books" component={BookPage} />
        <Route path="/cart" component={Cart} />
        <Route path="/wishlist" component={WishList} />
        <Route path="/book/:bookId" component={BookDetails} />
        <Route path="/author" component={AuthorDetails} />
      </BrowserRouter>
    );
  }
}

export default App;
