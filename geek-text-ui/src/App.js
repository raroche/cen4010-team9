

import CreateAccount from './components/CreateAccount/CreateAccount';
import LoginRegister from './components/LoginRegister/LoginRegister';
import HomePage from './components/HomePage/HomePage';
import BookGrid from './components/BookGrid/BookGrid';
import BookPage from './components/BookPage/BookPage';

import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import BooksGrid from "./components/BooksGrid/BooksGrid";
import BookDetails from "./components/BookDetails/BookDetails";
import Header from './components/header/Header';
import Cart from "./components/Cart/Cart";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
    
    
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

        <Route exact path="/" component={BooksGrid} />
        <Route exact path="/book" component={BookDetails} />
        <Route exact path="/cart" component = {Cart}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
