import React, { Component } from "react";
import BookMainContainer from "../BookMainContainer/BookMainContainer";
import BookDescription from "../BookDescription/BookDescription";
import ReviewsSection from "../ReviewsSection/ReviewsSection";
import ReviewRow from "../ReviewRow/ReviewRow";

export default class BookDetails extends Component {
  constructor(props) {
    super();

    this.state = {
      book: {},
      loading: false,
      error: null
    };

    // Binding methods to class
    this.fetchData = this.fetchData.bind(this);
  }

  // Fetch a book from the API
  async fetchData() {
    try {
      const response = await fetch("http://localhost:8090/api/books/1");

      if (response.ok) {
        const data = await response.json();
        this.setState({ book: data });
      } else {
        throw new Error("Something went wrong while fetching the data");
      }
    } catch (error) {
      this.setState({ error, isLoading: false });
      console.log("error!");
      console.error(error);
    }
  }

  async componentDidMount() {
    this.setState({ loading: true });
    this.fetchData();
    this.setState({ loading: false });
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
