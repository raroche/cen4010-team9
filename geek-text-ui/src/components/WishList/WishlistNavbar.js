import React from "react";
import {
  ButtonToolbar,
  ToggleButton,
  ToggleButtonGroup,
  Modal,
  Button,
  InputGroup,
  FormControl
} from "react-bootstrap";

function WishlistNavbar(props) {
  const [modalShow, setModalShow] = React.useState(false);

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
                props.handleClick(item[0].Listid, false);
              }}
            >
              {item[0].ListName}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </ButtonToolbar>
    );
  } else if (props.Lists.length === 0) {
    return (
      <ButtonToolbar>
        <ToggleButtonGroup
          style={{ top: "40px", width: "900px", left: "500px" }}
          type="radio"
          name="options"
          defaultValue={"Create List"}
        >
          <ToggleButton
            variant="light"
            value={"Create List"}
            onClick={() => setModalShow(true)}
          >
            Add List
          </ToggleButton>

          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Add List
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <InputGroup
                className="mb-3"
                onClick={e => props.handleClick("tests", true)}
              >
                <FormControl
                  placeholder="List name"
                  aria-label="ListName"
                  aria-describedby="ListName"
                />
                <InputGroup.Append>
                  <InputGroup.Text id="ListName">Create List</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Cancel </Button>
            </Modal.Footer>
          </Modal>
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
                props.handleClick(item[0].Listid, false);
              }}
            >
              {item[0].ListName}
            </ToggleButton>
          ))}
          <ToggleButton
            variant="light"
            value={"Create List"}
            onClick={() => setModalShow(true)}
          >
            Add List
          </ToggleButton>

          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Add List
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="List name"
                  aria-label="ListName"
                  aria-describedby="ListName"
                />
                <InputGroup.Append>
                  <InputGroup.Text
                    onClick={e => props.handleClick("tests", true)}
                    id="ListName"
                  >
                    Create List
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Cancel </Button>
            </Modal.Footer>
          </Modal>
        </ToggleButtonGroup>
      </ButtonToolbar>
    );
  }
}

export default WishlistNavbar;
