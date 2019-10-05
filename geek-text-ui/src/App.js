import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import BooksGrid from "./components/BooksGrid/BooksGrid";
import BookDetails from "./components/BookDetails/BookDetails";
import Cart from "./components/Cart/Cart";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Route exact path="/" component={BooksGrid} />
        <Route exact path="/book" component={BookDetails} />
        <Route exact path="/cart" component = {Cart}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
