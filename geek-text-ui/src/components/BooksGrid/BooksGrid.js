import React, { Component } from "react";
import BookCard from "../BookCard/BookCard";
import CardDeck from "react-bootstrap/CardDeck";

export default function BooksGrid(props) {
  return (
    <div className="mt-5">
      <CardDeck className="justify-content-md-center">
        {props.data.books.map(book => (
          <BookCard book={book} />
        ))}
      </CardDeck>
    </div>
  );
}
