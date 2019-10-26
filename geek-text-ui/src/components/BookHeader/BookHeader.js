import React from 'react';
import './BookHeader.css';
import GenreButton from './GenreButton';
import SortButton from './SortButton';



const BookHeader = props => (
    <nav className="nav">
    
          
       
        
        <div className="navcontent"> 
            <a href="/Top">Top Sellers</a>
            <a href="/Rating">High Rated</a>
            
        </div>
         < GenreButton/>  
        <div class = 'genrecontent'> < SortButton/>  </div>
        
        

    </nav>

)



export default BookHeader;