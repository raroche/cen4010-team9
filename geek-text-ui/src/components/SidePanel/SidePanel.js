import React from 'react';
import './SidePanel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'


const SidePanel = props => {
    let panelClasses = 'sidePanel';

    if(props.show) {
        panelClasses = 'sidePanel open';
    }

    return (
        <nav className={panelClasses}>
            <button className="closePanelButton"><FontAwesomeIcon icon={faTimes} /></button>
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Books</a>
            <a href="/">Authors</a>
            <a href="/">Summer Specials</a>
            <a href="/">Contact</a>
        </nav>
    );
};

export default SidePanel;