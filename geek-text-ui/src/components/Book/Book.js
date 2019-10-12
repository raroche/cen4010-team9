import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import './Book.css';

export default class BookCard extends Component {
  render() {
    return (
      
        <div class = "card">
          
          <NavLink exact to="/book">
            <div  class = "Img">
              variant="top"
              src="./imgs/Book.jpg"
              height="270px"
            </div>
          </NavLink>

          <div class = "body" >
            <p> Book Title <br/>
              by <a href="/Authors/#John Doe"> Author</a>
            </p>
          
        </div>
      
    );
  }
}
