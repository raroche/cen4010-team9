import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import BooksGrid from "./components/BooksGrid";

function App() {
  return (
    <div>
      <NavBar />
      <BooksGrid />
    </div>
  );
}

export default App;
