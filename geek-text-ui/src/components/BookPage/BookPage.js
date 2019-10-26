import React, { Component } from 'react';
import BookSection from '../BookSection/BookSection';
import './BookPage.css';
import BookHeader from '../BookHeader/BookHeader';

class BookPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
          <div>
            <BookHeader/>
            <div className="bookpage">
                <div className="books-title">
                  <h1> The Book Store </h1> <br/>
                  <h2>All Books</h2><br/>
                </div>
                <div class = "pad">
                  <BookSection /><br/>
                </div>

                
                
            </div>
          </div>
        );
    }
}

export default BookPage;