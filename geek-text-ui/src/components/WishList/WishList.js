import React, { Component } from "react";
import WishlistNavbar from "./WishlistNavbar";
import WishlistCards from "./WishlistCards";

class WishList extends Component {
  constructor() {
    super();
    this.state = {
      Lists: [{ books: [] }],
      currentList: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleMove = this.handleMove.bind(this);
    this.handleMoveToCart = this.handleMoveToCart(this);
    this.fetchWishlists = this.fetchWishlists.bind(this);
  }

  async fetchWishlists() {
    try {
      const response = await fetch("http://localhost:8090/api/user/wishlist/1");

      if (response.ok) {
        const data = await response.json();
        this.setState({ Lists: data });
      } else {
        throw new Error("Something went wrong while fetching the data");
      }
    } catch (error) {
      this.setState({ error, isLoading: false });
      console.log("error!");
      console.error(error);
    }
  }

  async componentDidMount() {
    this.fetchWishlists();
  }

  async handleCreate(listName) {
    try {
      const response = await fetch(
        `http://localhost:8090/api/user/addWishlist/${listName}/1`,
        { method: "PUT" }
      );
      if (response.ok) {
        let temp = await response.json();
        temp[temp.length - 1].books = [];
        this.setState({ Lists: temp, currentList: temp.length - 1 });
      } else {
        throw new Error("Something went wrong while fetching the data");
      }
    } catch (error) {
      this.setState({ error, isLoading: false });
      console.log("error!");
      console.error(error);
    }
  }

  handleClick(listName, newList) {
    if (newList === true) {
      this.handleCreate(listName);
    } else if (listName === this.state.Lists[0].name) {
      this.setState({
        currentList: 0
      });
    } else if (listName === this.state.Lists[1].name) {
      this.setState({
        currentList: 1
      });
    } else if (listName === this.state.Lists[2].name) {
      this.setState({
        currentList: 2
      });
    }
  }

  async handleDelete(book_id) {
    try {
      const response = await fetch(
        `http://localhost:8090/api/wishlist/removeBook/${this.state.Lists[this.state.currentList].id}/${book_id}`,
        { method: "PUT" }
      );

      if (response.ok) {
        let temp = this.state.Lists;
        temp[this.state.currentList] = await response.json();
        this.setState({ Lists: temp });
      } else {
        throw new Error("Something went wrong while fetching the data");
      }
    } catch (error) {
      this.setState({ error, isLoading: false });
      console.log("error!");
      console.error(error);
    }
  }

  handleMoveToCart() {
    console.log("To be implemented");
  }

  async handleMove(destList, book_id) {
    try {
      const response = await fetch(
        `http://localhost:8090/api/wishlist/moveBook/${this.state.Lists[this.state.currentList].id}/${destList}/${book_id}/1`,
        { method: "PUT" }
      );

      if (response.ok) {
        let temp = await response.json();
        this.setState({ Lists: temp });
      } else {
        throw new Error("Something went wrong while fetching the data");
      }
    } catch (error) {
      this.setState({ error, isLoading: false });
      console.log("error!");
      console.error(error);
    }
  }

  render() {
    let Options = [{}];
    console.log("Length" + this.state.Lists.length);
    for (let i = 0; i < this.state.Lists.length; i++) {
      if (i !== this.state.currentList) {
        Options.push({
          listName: this.state.Lists[i].name,
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
          Books={this.state.Lists[this.state.currentList].books}
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
