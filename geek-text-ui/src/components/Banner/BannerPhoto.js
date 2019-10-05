import React, { Component } from "react";
import "react-image-lightbox/style.css";

export default class BannerPhoto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      src: props.cover
    };
  }

  render() {
    return (
      <div>
        <a>
          <img
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            src={this.props.cover}
=======
            src={images[0]}
>>>>>>> Added Banner under navbar
=======
            src={this.props.cover}
>>>>>>> Added a header for recent releases for the homepage, wishlist using a mock database must implement delete list, change between list, move to cart and improve the ui
=======
            src={this.state.src}
>>>>>>> Added wishlist
            height="150"
            width="100"
            padding="20px"
            alt="book cover"
          />
        </a>
      </div>
    );
  }
}
