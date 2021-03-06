import React, { Component } from "react";
import BookSection from "../BookSection/BookSection";
import "../BookPage/BookPage.css";
import BookHeader from "../BookHeader/BookHeader";

class AI extends Component {
  constructor(props) {
    super();

    this.state = {
      books: [],
      loading: false,
      error: null
    };

    this.fetchBooks = this.fetchBooks.bind(this);
  }
  async fetchBooks() {
    try {
      const response = await fetch(
        "https://geek-text-team9.herokuapp.com/api/books/AI/"
      );

      if (response.ok) {
        const data = await response.json();
        this.setState({ books: data });
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
    this.fetchBooks();
    this.setState({ loading: false });
  }
  render() {
    return (
      <div>
        <BookHeader />
        <div className="bookpage">
          <div className="books-title">
            <h1> The Book Store </h1>
            <h2>Artificial Intelligence Books</h2>
          </div>
          <div class="pad">
            <BookSection data={this.state.books} />
            <br />
          </div>
        </div>
      </div>
    );
  }
}

export default AI;
