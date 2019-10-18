import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import './Book.css';
import image from './Placeholder.jpg'

export default class Book extends Component {
  render() {
    return (
      
        <div class = "card">
          <div class = "link">
            <NavLink exact to="/book" > 
              <img src={image} width="100%" height="100%" />
            </NavLink>
          </div>
            <p > Book Title <br/>
              by <a href="/Authors/#John Doe"> Author</a>
            </p>
          
          
        </div>
      
    );
  }
}
