import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";

export default function ReviewStars(props) {
  let rating = Math.round(props.avgRating * 10) / 10;

  var style = {
    verticalAlign: "middle"
  };

  return (
    <span>
      <span style={style}>
        <Rating value={Math.floor(props.avgRating)} readOnly />
      </span>

      <Typography component="span" className="ml-2">
<<<<<<< HEAD
        <span>{rating} / 5 </span>{" "}
=======
        <span>{rating ? "(" + rating + " out of 5)" : "(0 Reviews)"}</span>
>>>>>>> 1ab0216b55fb2347a8c25547b236da0f08fdc057
      </Typography>
    </span>
  );
}

function displayRating() {}
