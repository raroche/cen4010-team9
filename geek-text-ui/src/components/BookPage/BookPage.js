import React, { Component } from "react";
import Book from "../Book/Book";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class BookPage extends Component {
  render() {
    return (
      <div className="mt-4">
        <Container>
          <Row>
            <Col xs={6} md={3}>
              <Book />
            </Col>
            <Col xs={6} md={3}>
              <Book />
            </Col>
            <Col xs={6} md={3}>
              <Book />
              </Col>
            <Col xs={6} md={3}>
              <Book />
              <br></br>
            </Col>
            
            <Col xs={6} md={3}>
              <Book />
            </Col>
            <Col xs={6} md={3}>
              <Book/>
            </Col>
            <Col xs={6} md={3}>
              <Book />
            </Col>
            <Col xs={6} md={3}>
              <Book />
              <br></br>
            </Col>
            <Col xs={6} md={3}>
              <Book />
            </Col>
            <Col xs={6} md={3}>
              <Book/>
            </Col>
            <Col xs={6} md={3}>
              <Book />
            </Col>
            <Col xs={6} md={3}>
              <Book />
              <br></br>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
