import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './HomePage.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return(
            <div>
                <h1> Welcome to GeekText!! </h1> <br/>
                <h2>Featured Books</h2><br/>
                <p>Most Popular</p><br/>
                <p>Roland loves Bootstrap</p>
            </div>
        );
    }
}

export default HomePage;