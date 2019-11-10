import React, { Component } from "react";
import "./BookMainInfo.css";
import ReviewStars from "../ReviewStars/ReviewStars";
import BookDetailsPublishers from "../BookDetailsPublishers/BookDetailsPublishers";
import { NavLink } from "react-router-dom";

export default class BookMainInfo extends Component {
  render() {
    const book = this.props.state.book;
    const authors = this.props.state.authors;
    const loading = this.props.state.loading;
    const error = this.props.state.error;

    let totalReviews;
    let avgRating;
    if (this.props.state.book.reviews !== undefined) {
      const reviews = this.props.state.book.reviews;
      totalReviews = reviews.length;

      avgRating = calculateAvgRating(reviews, totalReviews);
    }

    return (
      <div className="mt-5">
        {error ? <h2> {error.message}</h2> : null}
        {loading ? <h2> {spinner()} </h2> : <h2> {book.title} </h2>}

        <div className="mt-3">
          <ReviewStars totalReviews={totalReviews} avgRating={avgRating} />
        </div>
        <h5 className="mt-3">Price: ${loading ? spinner() : book.price}</h5>
        <button type="button" className="btn btn-primary btn-lg mt-3 mb-3">
          <strong>Add to Cart</strong>
        </button>
        <span className="ml-3">
          <i className="fa fa-heart-o wishList mr-1 ml-3"></i>
          Add to my WishList
        </span>
        <p className="mt-1">
          <i className="fab fa-usps fa-2x text-primary mr-2 "></i>
          Get it as soon as {deliveryDate()}
        </p>
        <p className="mt-1">
          <span className="font-weight-bold">ISBN: </span>{" "}
          {loading ? spinner() : book.isbn}
        </p>
        <p className="mt-1 ">
          <BookDetailsPublishers
            bookPublishers={book.publishers ? book.publishers : undefined}
          />
        </p>
        <span className="mr-3">
          <span className="font-weight-bold">Genre: </span> Novel
        </span>
        <p className="mt-3">
          <span className="font-weight-bold">Language: </span> English
        </p>
        <p className="mt-3">
          <span className="font-weight-bold">Author: </span>

          {authors
            ? authors.map(author => {
                return (
                  <NavLink
                    exact
                    to={"/author/" + author.id}
                    style={{ textDecoration: "none" }}
                    id={author.id}
                  >
                    <span className="mr-3">{author.name} </span>
                  </NavLink>
                );
              })
            : undefined}
        </p>
      </div>
    );
  }
}

function spinner() {
  return (
    <div className="spinner-border text-primary" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}

function addDays(date, days) {
  const copy = new Date(Number(date));
  copy.setDate(date.getDate() + days);
  return copy;
}

function deliveryDate() {
  const days = 3;
  const date = new Date();
  const newDate = addDays(date, days);
  return newDate
    .toUTCString()
    .split(" ")
    .slice(0, 4)
    .map(a => a.concat(" "));
}

function calculateAvgRating(reviews, totalReviews) {
  let sum = 0;

  for (let counter = 0; counter < totalReviews; counter++) {
    let review = reviews[counter];
    sum += review.rating;
  }
  return parseInt(sum, 10) / totalReviews;
}
