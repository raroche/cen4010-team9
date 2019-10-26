import React from 'react';
import './SortDropDown.css';


const SortDropDown = props => {
    let sortClasses = 'sortDropDown';

    if(props.show) {
        sortClasses = 'sortDropDown open';
    }

    return (
        <div className={sortClasses}>
            <div className="dropdown-sort">
                <a href="/books">Action and Adventure</a>
                <a href="/books">Coming of Age</a>
                <a href="/books">Crime</a>
                <a href="/books">Drama</a>
                <a href="/books">Fantasy</a>
                <a href="/books">Horror</a>
                <a href="/books">Mystery</a>
            </div>
        </div>
    );
};


export default SortDropDown;