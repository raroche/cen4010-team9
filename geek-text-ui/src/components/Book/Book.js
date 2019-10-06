import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

export default class Book extends Component {
  render() {
    return (
      
        <div>
          <Card style={{ width: "11rem" }}>
            <NavLink exact to="/book">
              <Card.Img
                variant="top"
                src="./imgs/Placeholder.jpg"
                width="auto"
                height="240px"
              />
            </NavLink>
            
            <Card.Body >
              <Card.Text>Book Title <br/>
              by <a href="/Authors/#John Doe"> Author</a></Card.Text>
              
            </Card.Body>
          </Card>
        </div>
      
    );
  }
}
