import React, { Component } from "react";
import BookMainContainer from "../BookMainContainer/BookMainContainer";
import BookDescription from "../BookDescription/BookDescription";
import ReviewsSection from "../ReviewsSection/ReviewsSection";
import ReviewRow from "../ReviewRow/ReviewRow";

export default class BookDetails extends Component {
  constructor() {
    super();
    this.state = {
      book: {},
      loading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    fetch("http://localhost:8090/api/books/1")
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Somethign went wrong while fetching the data");
        }
      })
      .then(data => {
        this.setState({ book: data, loading: false });
      })
      .catch(error => {
        this.setState({ error, isLoading: false });
        console.log("error!");
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <BookMainContainer state={this.state} />
        <BookDescription />
        <ReviewsSection />
        <ReviewRow />
        <ReviewRow />
      </div>
    );
  }
}

