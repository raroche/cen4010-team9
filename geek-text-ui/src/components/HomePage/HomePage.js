import React, { Component } from 'react';
import BookGrid from '../BooksGrid/BooksGrid';
import './HomePage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div className="homepage">
                <h1> Welcome to GeekText!! </h1> <br/>
                <h2>Featured Books</h2><br/>
                <p><BookGrid /></p><br/>
                <p>Roland loves Bootstrap</p>
            </div>
        );
    }
}

export default HomePage;