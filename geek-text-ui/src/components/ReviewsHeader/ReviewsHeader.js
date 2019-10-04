import React, { Component } from "react";

export default class ReviewsHeader extends Component {
  render() {
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
                <span className="ml-2">4.5 out of 5 starts</span>
                <p>20 Customer Reviews</p>
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
}
