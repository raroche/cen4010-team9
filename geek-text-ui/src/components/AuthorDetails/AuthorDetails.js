import React, { Component } from "react";
import AuthorProfile from "../AuthorProfile/AuthorProfile";

export default class AuthorDetails extends Component {
  render() {
    return (
      <div className="mt-5">
        <span className="mt-5">&nbsp; </span>
        <AuthorProfile />
      </div>
    );
  }
}
