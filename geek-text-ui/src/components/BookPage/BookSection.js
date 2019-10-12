import React, { Component } from "react";
import Book from "../Book/Book";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './BookSection.css';

export default class BookPage extends Component {
    render() {
        return (
            <div class="scroll cardcolumns" >
                
                <Book/> <Book/> <Book/> <Book/> <Book/>
                </div>
            
        );
    }
}