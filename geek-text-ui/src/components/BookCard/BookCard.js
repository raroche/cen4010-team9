import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

export default class BookCard extends Component {
  render() {
    return (
      <NavLink exact to="/book">
        <div className="mt-4 mb-2 ml-2 mr-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="./imgs/book-small-Cover-200x300.png"
              width="auto"
              height="250px"
            />
            <Card.Body>
              <Card.Title>This is the book Title</Card.Title>
              <Card.Text>Reviews</Card.Text>
              <Card.Text>Price: $24.99</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </NavLink>
    );
  }
}
