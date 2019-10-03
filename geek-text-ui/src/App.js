import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import BooksGrid from "./components/BooksGrid/BooksGrid";
import BookDetails from "./components/BookDetails/BookDetails";

function App() {
  return (
    <div>
      <NavBar />
      <BooksGrid />
    </div>
  );
}

export default App;
