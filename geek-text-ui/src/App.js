import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import BooksGrid from "./components/BooksGrid/BooksGrid";
import BookMainContainer from "./components/BookMainContainer/BookMainContainer";

function App() {
  return (
    <div>
      <NavBar />
      <BooksGrid />
      <BookMainContainer />
    </div>
  );
}

export default App;
