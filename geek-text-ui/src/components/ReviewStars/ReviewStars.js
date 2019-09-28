import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function ReviewStars() {
  return (
    <div>
      <Box component="span" mb={3} borderColor="transparent">
        <Rating value={4} readOnly />
        <Typography component="span" className="ml-2">
          (9 Reviews){" "}
        </Typography>
        <Typography component="span" className="ml-2">
          |
        </Typography>
        <Typography component="span" className="ml-2">
          Write a Review{" "}
        </Typography>
      </Box>
    </div>
  );
}
