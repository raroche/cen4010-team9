import React, { Component } from "react";

export default function ReviewsHeader(props) {
  const book = props.book;
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="mt-5 justify-content-start "></div>
            <h5>
              <strong>Book Reviews:</strong>
            </h5>

            <div>
              <span className="mr-2">Average Review: </span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
              <span className="ml-2">
                {book ? book.rating : undefined} out of 5 starts
              </span>
              <p>{props.totalReviews} Customer Reviews</p>
            </div>
          </div>
          <div className="col-4">
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-primary ml-5 ">
                Write a Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
