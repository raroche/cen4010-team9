import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import BooksGrid from "./components/BooksGrid/BooksGrid";
import BookDetails from "./components/BookDetails/BookDetails";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />

        <Route exact path="/" component={BooksGrid} />
        <Route exact path="/book" component={BookDetails} />
      </BrowserRouter>
    </div>
  );
}

export default App;
