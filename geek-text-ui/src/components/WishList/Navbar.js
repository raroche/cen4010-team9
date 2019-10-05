import React from "react";
import {
  Card,
  ButtonToolbar,
  ToggleButton,
  ToggleButtonGroup,
  Button
} from "react-bootstrap";

function Navbar(props) {
  if (props.Lists.length === 3) {
    return (
      <ButtonToolbar>
        <ToggleButtonGroup
          style={{ top: "40px", width: "900px", left: "500px" }}
          type="radio"
          name="options"
          defaultValue={1}
        >
          {props.Lists.map(item => (
            <ToggleButton
              variant="light"
              value={props.Lists[0].ListName}
              onClick={e => {
                props.handleClick(item[0].Listid);
              }}
            >
              {item[0].ListName}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </ButtonToolbar>
    );
  } else {
    return (
      <ButtonToolbar>
        <ToggleButtonGroup
          style={{ top: "40px", width: "900px", left: "500px" }}
          type="radio"
          name="options"
          defaultValue={props.default}
        >
          {props.Lists.map(item => (
            <ToggleButton
              variant="light"
              value={props.Lists[0].ListName}
              onClick={e => {
                props.handleClick(item[0].Listid);
              }}
            >
              {item[0].ListName}
            </ToggleButton>
          ))}
          <ToggleButton
            variant="light"
            value={"Create List"}
            onClick={e => props.handleClick("Create List")}
          >
            Add List
          </ToggleButton>
        </ToggleButtonGroup>
      </ButtonToolbar>
    );
  }
}

export default Navbar;
