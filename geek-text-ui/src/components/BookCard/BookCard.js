import React, { Component } from "react";
import Card from "react-bootstrap/Card";

export default class BookCard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="./book-cover.jpg"
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
    );
  }
}
