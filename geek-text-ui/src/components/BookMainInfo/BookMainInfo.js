import React, { Component } from "react";
import "./BookMainInfo.css";
import ReviewStars from "../ReviewStars/ReviewStars";

export default class BookMainInfo extends Component {
  render() {
    const book = this.props.state.book;
    const loading = this.props.state.loading;
    const error = this.props.state.error;

    return (
      <div className="col-md-8 mt-5">
        {error ? <h2> {error.message}</h2> : null}
        {loading ? <h2> {spinner()} </h2> : <h2> {book.title} </h2>}

        <div>
          <ReviewStars />
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
        <p className="mt-1">ISBN: 0062435590</p>
        <p className="mt-1">
          Publisher: William Morrow Paperbacks; Reprint edition (March 28, 2017)
        </p>
        <span className="mr-3">Genre: Novel</span>
        <span>|</span>
        <span className="ml-3"> Language: English</span>
        <p className="mt-2">
          <strong>Author: Deborah Shapiro (bio)</strong>
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
