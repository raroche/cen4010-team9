import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";

export default function ReviewStars(props) {
  let rating = Math.round(props.avgRating * 10) / 10;
  return (
    <span>
      <span>
        <Rating value={Math.floor(props.avgRating)} readOnly />
      </span>

      <Typography component="span" className="ml-2">
        <span>{rating} out of 5 starts </span>{" "}
      </Typography>
    </span>
  );
}

function displayRating() {}
