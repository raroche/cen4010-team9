import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const images = [
  "https://jonathanlaing.co.uk/wp-content/uploads/2016/09/Book-Cover.jpeg"
];

export default class BannerPhoto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;

    return (
      <div>
        <a type="button" onClick={() => this.setState({ isOpen: true })}>
          <img
<<<<<<< HEAD
<<<<<<< HEAD
            src={this.props.cover}
=======
            src={images[0]}
>>>>>>> Added Banner under navbar
=======
            src={this.props.cover}
>>>>>>> Added a header for recent releases for the homepage, wishlist using a mock database must implement delete list, change between list, move to cart and improve the ui
            height="150"
            width="100"
            padding="20px"
            alt="book cover"
          />
        </a>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
    );
  }
}
