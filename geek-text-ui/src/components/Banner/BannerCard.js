import React, { Component } from "react";
import BookMainPhoto from "../BookMainPhoto/BookMainPhoto";
import BannerPhoto from "./BannerPhoto";

class BannerCard extends Component {
  render() {
    return (
      <div class="col-sm">
        <div class="card text-center">
          <div class="card-body">
            <BannerPhoto />
            <h5 class="card-title">The Sun In Your Eyes</h5>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerCard;
