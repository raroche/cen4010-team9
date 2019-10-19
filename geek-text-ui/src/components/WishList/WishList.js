import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import Lists from "./Lists";
import WishlistNavbar from "./WishlistNavbar";
import WishlistCards from "./WishlistCards";

class WishList extends Component {
  constructor() {
    super();
    this.state = {
      Lists: Lists,
      currentList: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleMoveToCart = this.handleMoveToCart(this);
  }

  handleClick(listName, newList) {
    if (newList === true) {
      let temp = this.state.Lists;
      const newElement = {
        id: this.state.Lists.length,
        ListName: listName,
        Books: []
      };
      temp.push(newElement);
      console.log(temp);
      this.setState({
        Lists: temp,
        currentList: temp.length - 1
      });
    } else if (listName === this.state.Lists[0].ListName) {
      this.setState({
        currentList: 0
      });
    } else if (listName === this.state.Lists[1].ListName) {
      this.setState({
        currentList: 1
      });
    } else if (listName === this.state.Lists[2].ListName) {
      this.setState({
        currentList: 2
      });
    }
  }

  handleDelete(book_id) {
    const temp = this.state.Lists[this.state.currentList].Books.filter(
      book => book.id !== book_id
    );
    let newState = this.state.Lists;
    newState[this.state.currentList].Books = temp;
    this.setState({
      Lists: newState
    });
  }

  handleMoveToCart() {
    console.log("To be implemented");
  }

  handleMove(destList, book_id) {
    let book = {};
    book = {
      id: this.state.Lists[this.state.currentList].Books.length + 1,
      bookName: this.state.Lists[this.state.currentList].Books[book_id - 1]
        .bookName,
      author: this.state.Lists[this.state.currentList].Books[book_id - 1]
        .author,
      price: this.state.Lists[this.state.currentList].Books[book_id - 1].price,
      cover: this.state.Lists[this.state.currentList].Books[book_id - 1].cover
    };
    book.id = this.state.Lists[this.state.currentList].Books.length + 1;
    let newState = this.state.Lists;
    newState[destList].Books.push(book);
    this.setState({
      Lists: newState
    });
    this.handleDelete(book_id);
  }

  render() {
    let Options = [{}];
    for (let i = 0; i < this.state.Lists.length; i++) {
      if (i !== this.state.currentList) {
        Options.push({
          listName: this.state.Lists[i].ListName,
          listid: this.state.Lists[i].id
        });
      }
    }

    return (
      <div>
        <WishlistNavbar
          Lists={this.state.Lists}
          handleClick={this.handleClick}
          default={
            this.state.Lists.length > 0 ? this.state.Lists[0].ListName : null
          }
        />
        <WishlistCards
          Books={this.state.Lists[this.state.currentList].Books}
          handleDelete={this.handleDelete}
          handleMove={this.handleMove}
          handleMoveToCart={this.handleMoveToCart}
          Options={Options}
        />
      </div>
    );
  }
}

export default WishList;
