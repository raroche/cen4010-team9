import React, { Component } from "react";
import "./BookMainInfo.css";
import ReviewStars from "../ReviewStars/ReviewStars";
import BookDetailsPublishers from "../BookDetailsPublishers/BookDetailsPublishers";

export default class BookMainInfo extends Component {
  render() {
    const book = this.props.state.book;
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

        <div>
          <ReviewStars totalReviews={totalReviews} avgRating={avgRating} />
        </div>
        <h5>Price: ${loading ? spinner() : book.price}</h5>
        <button type="button" className="btn btn-primary">
          <strong>Add to Cart</strong>
        </button>
        <span className="ml-3">
          <i className="fa fa-heart-o wishList mr-1 ml-3"></i>
          Add to my WishList
        </span>
        <p className="mt-1">Get it as soon as {deliveryDate()}</p>
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
        <span>|</span>
        <span className="ml-3">
          {" "}
          <span className="font-weight-bold">Language: </span> English
        </span>
        <p className="mt-2">
          <span className="font-weight-bold">Author: </span>Deborah Shapiro
          (bio)
        </p>
        <p>
          Deborah Shapiro was born and raised outside of Boston, Massachusetts.
          She spent a number of years in New York working at magazines,
          including New York and ELLE, and her writing has appeared in The New
          York Times Book Review, Los Angeles Review of Books, Sight Unseen,
          Chicago Magazine, Literary Hub, Washington Square Review, and
          elsewhere. Her first novel, The Sun In Your Eyes, was published in
          2016. Her new novel, The Summer Demands was published by Catapult
          Books in 2019. She lives with her husband and son in Chicago.{" "}
        </p>
      </div>
    );
  }
}

function spinner() {
  return (
    <div class="spinner-border text-primary" role="status">
      <span class="sr-only">Loading...</span>
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
