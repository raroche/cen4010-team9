import React, { Component } from 'react';
import BookSection from './BookSection';
import './BookPage.css';
import BookDescription from "../BookDescription/BookDescription";
import ReviewsSection from "../ReviewsSection/ReviewsSection";

class BookPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="bookpage">
                <div className="books-title">
                  <h1> The Book Store </h1> <br/>
                  <h2>Featured Books</h2><br/>
                </div>
                  <BookSection /><br/>


                
                
            </div>
        );
    }
}

export default BookPage;