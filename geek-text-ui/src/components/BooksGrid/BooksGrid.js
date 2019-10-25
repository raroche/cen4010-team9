import React, { Component } from "react";
import BookCard from "../BookCard/BookCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardDeck from "react-bootstrap/CardDeck";

export default class BooksGrid extends Component {
  render() {
    return (
      <div className="mt-5">
        <CardDeck className="justify-content-md-center">
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </CardDeck>
      </div>
    );
  }
}
