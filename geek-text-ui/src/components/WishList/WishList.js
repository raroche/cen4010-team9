import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import Toread from "./Books";
import Dystopian from "./Books2";
import Navbar from "./Navbar";

function ListCard(props) {
  return (
    <div>
      <Card
        className="p-3"
        style={{ top: "40px", width: "800px", left: "500px" }}
      >
        <Card.Body>
          <img
            src={props.cover}
            height="150"
            width="100"
            padding="20px"
            alt="book cover"
          />
          <Button
            variant="primary"
            style={{ position: "absolute", right: "50px", top: "90px" }}
          >
            Move to cart
          </Button>
          <br />
          <p1 style={{ position: "absolute", right: "50px", top: "130px" }}>
            ${props.price}
          </p1>
          <Card.Text
            className="text-center"
            style={{ position: "absolute", top: "70px", left: "200px" }}
          >
            <h1 style={{ fontweight: "bold" }}>{props.bookName} </h1>
            {props.author}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

class WishList extends Component {
  constructor() {
    super();
    this.state = {
      Lists: [Toread, Dystopian],
      books: Toread
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(listName, newList) {
    if (newList === true) {
      let temp = this.state.Lists;
      const newElement = [
        {
          id: 1,
          Listid: 3,
          ListName: listName,
          bookName: "The Martian",
          author: "Andy Weir",
          price: "14.95",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/81wFMY9OAFL.jpg"
        },
        {
          id: 2,
          Listid: 3,
          bookName: "1984",
          author: "George Orwell",
          price: "9.95",
          cover:
            "https://images-na.ssl-images-amazon.com/images/I/51Mn9-I8CZL._SX322_BO1,204,203,200_.jpg"
        }
      ];
      temp.push(newElement);
      console.log(temp);
      this.setState({
        Lists: temp,
        books: newElement
      });
    } else if (listName === this.state.Lists[0][0].Listid) {
      this.setState({
        books: this.state.Lists[0]
      });
    } else if (listName === this.state.Lists[1][0].Listid) {
      this.setState({
        books: this.state.Lists[1]
      });
    } else if (listName === this.state.Lists[2][0].Listid) {
      this.setState({
        books: this.state.Lists[2]
      });
    }
  }

  render() {
    let listCard = this.state.books.map(item => (
      <ListCard
        key={item.id}
        author={item.author}
        cover={item.cover}
        price={item.price}
        bookName={item.bookName}
      />
    ));
    return (
      <div>
        <Navbar
          Lists={this.state.Lists}
          handleClick={this.handleClick}
          default={
            this.state.Lists.length > 0 ? this.state.Lists[0].ListName : null
          }
        />

        {listCard}
      </div>
    );
  }
}

export default WishList;
