import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";

export default function ReviewStars(props) {
  const [open, setOpen] = React.useState(false);
  const roundedrating = Math.round(props.avgRating * 10) / 10;

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const HtmlTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.87)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: "1px solid #dadde9",
      bottom: 0,
      left: 0,
      margin: "-75px 0"
    }
  }))(Tooltip);

  return (
    <div>
      <Box component="span" mb={3} borderColor="transparent">
        {
          // Hover rating Average out of 5 starts
        }
        <HtmlTooltip
          title={
            <React.Fragment>
              <Typography color="inherit">
                {isNaN(roundedrating)
                  ? "0 out of 5"
                  : roundedrating + " out of 5"}
              </Typography>
            </React.Fragment>
          }
        >
          <span>
            <Rating value={Math.floor(props.avgRating)} readOnly />
          </span>
        </HtmlTooltip>

        <Typography component="span" className="ml-2">
          ({props.totalReviews} Reviews){" "}
        </Typography>
      </Box>
    </div>
  );
}

function displayRating() {}
