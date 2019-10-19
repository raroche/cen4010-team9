import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import PublisherInfo from "../PublisherInfo/PublisherInfo";

export default function BookDetailsPublishers(props) {
  const items = [];

  if (props.bookPublishers != undefined) {
    for (const [id, name] of props.bookPublishers.entries()) {
      items.push(<span key={id} />);
    }
  }

  return (
    <div>
      <span component="span" className="font-weight-bold mr-2">
        Publisher(s):
      </span>

      {props.bookPublishers
        ? props.bookPublishers.map(publisher => {
            return (
              <span>
                <PublisherInfo publisher={publisher} />
              </span>
            );
          })
        : undefined}
    </div>
  );
}
