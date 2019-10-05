import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

export default class BookCard extends Component {
  render() {
    return (
      <NavLink exact to="/books">
        <div>
          <Card style={{ width: "14rem" }}>
            <Card.Img
              variant="top"
              src="./imgs/Book.jpg"
              width="auto"
              height="260px"
            />
            <Card.Body>
              <Card.Title>Book Title</Card.Title>
              <Card.Text>Reviews</Card.Text>
              <Card.Text>Price: $19.99</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </NavLink>
    );
  }
}
