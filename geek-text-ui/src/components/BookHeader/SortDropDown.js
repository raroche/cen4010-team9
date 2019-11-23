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
                <button>Book Title</button>
                <button >Author</button>
                <button >Price</button>
                <button >Book Rating</button>
                <button >Release date</button>
            </div>
        </div>
    );
};


export default SortDropDown;