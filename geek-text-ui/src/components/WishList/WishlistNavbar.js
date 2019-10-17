import React, { Component } from "react";
import {
  ButtonToolbar,
  ToggleButton,
  ToggleButtonGroup,
  Modal,
  Button,
  InputGroup,
  FormControl
} from "react-bootstrap";

class WishlistNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Lists: props.Lists,
      newList: "New List",
      modalShow: false,
      handleClick: props.handleClick
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ newList: event.target.value });
  }

  render() {
    if (this.state.Lists.length === 3) {
      return (
        <ButtonToolbar>
          <ToggleButtonGroup
            style={{ top: "80px", width: "800px", left: "500px" }}
            type="radio"
            name="options"
            defaultValue={1}
          >
            {this.state.Lists.map(item => (
              <ToggleButton
                variant="light"
                value={this.state.Lists[0].ListName}
                onClick={e => {
                  this.state.handleClick(item[0].Listid, false);
                }}
              >
                {item[0].ListName}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </ButtonToolbar>
      );
    } else if (this.state.Lists.length === 0) {
      return (
        <ButtonToolbar>
          <ToggleButtonGroup
            style={{ top: "80px", width: "800px", left: "500px" }}
            type="radio"
            name="options"
            defaultValue={"Create List"}
          >
            <ToggleButton
              variant="light"
              value={"Create List"}
              onClick={() => this.setState({ modalShow: true })}
            >
              Add List
            </ToggleButton>

            <Modal
              show={this.state.modalShow}
              onHide={() => this.setState({ modalShow: false })}
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
                    style={{ width: "500px" }}
                    value={this.state.newList}
                    onChange={this.handleChange}
                  />
                  <InputGroup.Append>
                    <InputGroup.Text
                      onClick={e =>
                        this.state.handleClick(this.state.newList, true)
                      }
                      id="ListName"
                    >
                      Create List
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.state.onHide}>Cancel </Button>
              </Modal.Footer>
            </Modal>
          </ToggleButtonGroup>
        </ButtonToolbar>
      );
    } else {
      return (
        <ButtonToolbar>
          <ToggleButtonGroup
            style={{ top: "80px", width: "800px", left: "500px" }}
            type="radio"
            name="options"
            defaultValue={this.state.default}
          >
            {this.state.Lists.map(item => (
              <ToggleButton
                variant="light"
                value={this.state.Lists[0].ListName}
                onClick={e => {
                  this.state.handleClick(item[0].Listid, false);
                }}
              >
                {item[0].ListName}
              </ToggleButton>
            ))}
            <ToggleButton
              variant="light"
              value={"Create List"}
              onClick={() => this.setState({ modalShow: true })}
            >
              Add List
            </ToggleButton>

            <Modal
              show={this.state.modalShow}
              onHide={() => this.setState({ modalShow: false })}
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
                    style={{ width: "500px" }}
                    value={this.state.newList}
                    onChange={this.handleChange}
                  />
                  <InputGroup.Append>
                    <InputGroup.Text
                      onClick={e =>
                        this.state.handleClick(this.state.newList, true)
                      }
                      id="ListName"
                    >
                      Create List
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.state.onHide}>Cancel </Button>
              </Modal.Footer>
            </Modal>
          </ToggleButtonGroup>
        </ButtonToolbar>
      );
    }
  }
}

export default WishlistNavbar;
