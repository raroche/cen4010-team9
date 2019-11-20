import React from 'react';
import './BookHeader.css';
import GenreButton from './GenreButton';
import SortButton from './SortButton';
import { Link } from 'react-router-dom';


const BookHeader = props => (
    <nav className="nav">
        <div className="content"> 
            <GenreButton/> 
            <Link to="/top">Top Sellers</Link>
            <Link to="/rating">High Rated</Link>
            <SortButton/>
        </div>
        

    </nav>

)



export default BookHeader;