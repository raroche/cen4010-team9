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
<<<<<<< HEAD
          <div style={{height: '120px'}}></div>
          <Route exact path="/" render={props =><HomePage />} />
          <Route path="/login" component={LoginRegister} />
          <Route path="/bookgrid" component={BooksGrid} />
          <Route path="/books" component={BookPage} />
          <Route path="/book" component={BookDetails} />
          <Route path="/cart" component = {Cart}/>
=======

        <Route exact path="/" render={props => <HomePage />} />
        <Route path="/login" component={LoginRegister} />
        <Route path="/myaccount" component={MyAccount} />
        <Route path="/bookgrid" component={BooksGrid} />
        <Route path="/books" component={BookPage} />
        <Route path="/cart" component={Cart} />
        <Route path="/wishlist" component={WishList} />
        <Route path="/book/:bookId" component={BookDetails} />
        <Route path="/author" component={AuthorDetails} />
>>>>>>> f71d7543bdffb6be0e0aedf576a64729b30688ba
      </BrowserRouter>
    );
  }
}

export default App;
