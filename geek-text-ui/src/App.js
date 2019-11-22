import React, { Component } from "react";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import HomePage from "./components/HomePage/HomePage";
import "./App.css";
import BooksGrid from "./components/BooksGrid/BooksGrid";
import BookPage from "./components/BookPage/BookPage";
import BookDetails from "./components/BookDetails/BookDetails";
import AuthorDetails from "./components/AuthorDetails/AuthorDetails";
import Header from "./components/header/Header";
import TopSeller from "./components/TopSeller/TopSeller";
import Cart from "./components/Cart/Cart";
import WishList from "./components/WishList/WishList";
import HighRating from "./components/HighRating/HighRating";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import MyAccount from "./components/MyAccount/MyAccount";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedInStatus: "Not logged in",
      user: {}
    };

    this.handleLoginStatus = this.handleLoginStatus.bind(this);
  }

  handleLoginStatus(data) {
    this.setState({
      loggedInStatus: data.first_name,
      user: data
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Route
          path="/"
          render={props => (
            <Header {...props} loggedInStatus={this.state.loggedInStatus} />
          )}
        />

        <Route exact path="/" render={props => <HomePage />} />
        <Route
          path="/login"
          render={props => (
            <LoginRegister
              {...props}
              handleLoginStatus={this.handleLoginStatus}
            />
          )}
        />
        <Route path="/myaccount" render={props => <MyAccount />} />
        <Route path="/bookgrid" component={BooksGrid} />
        <Route path="/books" component={BookPage} />
        <Route path="/cart" component={Cart} />
        <Route path="/top" component={TopSeller} />
        <Route path="/rating" component={HighRating} />
        <Route
          path="/wishlist"
          render={props => (
            <WishList
              {...props}
              loggedInStatus={this.state.loggedInStatus}
              user={this.state.user}
            />
          )}
        />
        <Route
          path="/book/:bookId"
          render={props => (
            <BookDetails
              {...props}
              loggedIn={this.state.loggedInStatus}
              user={this.state.user}
            />
          )}
        />
        <Route path="/author/:authorId" component={AuthorDetails} />
      </BrowserRouter>
    );
  }
}

export default App;
