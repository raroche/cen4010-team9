import React, { Component } from "react";
import BookCard from "../BookCard/BookCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class BooksGrid extends Component {
  render() {
    return (
      <div className="mt-5">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <BookCard />
            </Col>
            <Col xs={6} md={4}>
              <BookCard />
            </Col>
            <Col xs={6} md={4}>
              <BookCard />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
