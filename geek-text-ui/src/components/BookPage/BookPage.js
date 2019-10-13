import React, { Component } from 'react';
import BookSection from './BookSection';
import './BookPage.css';
import BookDescription from "../BookDescription/BookDescription";
import ReviewsSection from "../ReviewsSection/ReviewsSection";

<<<<<<< HEAD
export default class BookPage extends Component {
  render() {
    return (
      <div className="mt-4">
        <Container>
          <Row>
            <Col xs={6} md={3}>
              <Book />
            </Col>
            <Col xs={6} md={3}>
              <Book />
            </Col>
            <Col xs={6} md={3}>
              <Book />
              </Col>
            <Col xs={6} md={3}>
              <Book />
              <br></br>
            </Col>
            
            <Col xs={6} md={3}>
              <Book />
            </Col>
            <Col xs={6} md={3}>
              <Book/>
            </Col>
            <Col xs={6} md={3}>
              <Book />
            </Col>
            <Col xs={6} md={3}>
              <Book />
              <br></br>
            </Col>
            <Col xs={6} md={3}>
              <Book />
            </Col>
            <Col xs={6} md={3}>
              <Book/>
            </Col>
            <Col xs={6} md={3}>
              <Book />
            </Col>
            <Col xs={6} md={3}>
              <Book />
              <br></br>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
=======
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
>>>>>>> master
}

export default BookPage;