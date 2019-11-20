import React from 'react';
import './GenreDropDown.css';


const GenreDropDown = props => {
    let genreClasses = 'genreDropDown';

    if(props.show) {
        genreClasses = 'genreDropDown open';
    }

    return (
        <div className={genreClasses}>
            <div className="dropdown-genre">
                <a href="/books">Programming</a>
                <a href="/books">Robotics</a>
                <a href="/books">Network</a>
                <a href="/books">Artificial Intelligence</a>
            </div>
        </div>
    );
};


export default GenreDropDown;