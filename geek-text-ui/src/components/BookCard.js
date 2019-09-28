import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class BookCard extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="./imgs/Genre-Cover-200x300.png"
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
