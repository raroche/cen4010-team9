import React, { Component } from "react";
import BannerCard from "./BannerCard";

class Banner extends Component {
  constructor() {
    super();
    this.state = {
      Books: [],
      isLoading: false
    };
  }

  render() {
    return (
      <div class="jumbotron jumbtron-fluid-sm transparent" type="../../App.css">
        <h1>Recent Releases</h1>
        <div class="row">
          <BannerCard />
          <BannerCard />
          <BannerCard />
          <BannerCard />
        </div>
      </div>
    );
  }
}

export default Banner;
