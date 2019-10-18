import React, { Component } from "react";
import Book from "../Book/Book";
import './BookSection.css';

export default class BookPage extends Component {
    render() {
        return (
            <div>
                <div class="scroll" >
                    <Book/>  <Book/> <Book/> <Book/> <Book/> 
                </div>
                <br/>
                <div class="scroll" >
                    <Book/>  <Book/> <Book/> <Book/> <Book/> 
                </div>
            </div>
        );
    }
}